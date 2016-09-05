import { Injectable } from '@angular/core';
//import { Rx } from 'rx';
import { uuid } from 'node-uuid';


let WebSocket = (<any>window).WebSocket;
let localStorage = (<any>window).localStorage;
let CLIENT_ERROR = {};
let ON_OPEN = function(args) {
   console.log("Connection was openened",args[0]);
}
let ON_CLOSE = function(args) {
   console.log("Connection was closed", args[0]);
}
let ON_MESSAGE = function(args) {
   var parsed = JSON.parse( args[1] );
   var callback = this.callbacks[parsed.request_id];
   if ( callback ) {
	 callback( parsed );
	 delete this.callbacks[parsed.request_id];
   } 
}
let ON_ERROR = function(args) {
  console.log("Lback service error", args[0]);
}

@Injectable()
export class LbackService {
  private socket: any;
  private config;
  private callbacks;
  private onError;
  private onMessage;
  private onOpen;
  private onClose;
  constructor() {
	 this.setConfig({
		"ws": "ws://104.237.140.121:1100"
	 })
	 this.setOnOpen(ON_OPEN);
	 this.setOnError(ON_ERROR);
	 this.setOnMessage(ON_MESSAGE);
	 this.setOnClose(ON_CLOSE);

	 this.socket = new WebSocket;
	 this.socket.onopen = function() {
		this.getOnOpen()(this.arguments);
	 };
	 this.socket.onmessage = function() {
		LbackService.prototype.onMessage.apply(this, this.arguments);
	 };
	 this.socket.onclose = function() {
		this.getOnClose()(this.arguments);
	 };
  }
  checkConnected(onDisconnected, onConnected) { 
	let that = this;
  	this.setOnOpen( function() {	
		let info = that.getLoginInfo();
		if (info) {
			that.send({
				"type": "authcheck",
				"token": info.token }, function( response ) {
					if ( !response.error ) {
						onConnected();
					} else {
						onDisconnected();
					}
			  	});
		 } else {
			onDisconnected();
		 }
	 });
   }
		
  getConfig() {
	return this.config;
  }
  getOnError() { 
	 return this.onError;
  }
  getOnOpen() {
	 return this.onOpen;
  }
  getOnMessage() {
	 return this.onMessage;
  }
  getOnClose() {
	 return this.onClose;
  }
  getLogin() {
	 let item = {};
	 try {
		item = JSON.parse(localStorage.getItem("LBACK_AUTH"));
	 } catch ( e ) {
		return false;
	 }
	 return false;
   }
  getRequestId() {
	 return uuid.v4();
  }
  send(message, callback) {
	 // CLOSING or CLOSED
	 if ( this.socket.readyState === 3 || this.readyState === 4 ) {
		return this.getOnError()(CLIENT_ERROR);
	 }
	 
	 var requestId =  this.getRequestId();
	 this.setCallback(requestId, callback);
	 this.socket.send(JSON.stringify(message));
  };
  setCallback(requestId, callback) {
	 this.callbacks[requestId]=callback;
  }
  setConfig(obj) {
	 this.config = obj;
  }
  setLogin(login) {
	 localStorage.setItem(JSON.stringify(login));
  }
  setOnOpen(fn) {
	 this.onOpen = fn;
  }
  setOnError(fn) {
	 this.onError = fn;
  }
  setOnMessage(fn) {
	 this.onMessage = fn;
  }
  setOnClose(fn) {
	 this.onClose = fn;
  };
  
}
