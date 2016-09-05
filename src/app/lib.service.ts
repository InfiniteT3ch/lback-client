import { Injectable } from '@angular/core';

@Injectable()
export class LibService {
  private config: any = {};
  private images: any = {};
  private messages: any ={};
  constructor() { 
	 this.setConfig({
		"PER_PG": 10
	 });
  }
  getPages(length) {
	let config = this.getConfig();
	if ( length > config.PER_PG ) {
		let amount =  parseInt(Math.floor(length/config.PER_PG));
		let list = [];
		for ( var i = 1; i <= amount; i ++ ) {
			list.push( i );
		 }
	  	return list;
	 }
	return [1];
  }
  getImage(imageName) {
	return this.images[imageName];
  }
  getMessage(messageName) {
	return this.messages[messageName];
  }
  getConfig() {
	return this.config;
  }
  setConfig( config ) {
	 this.config =config;
  }

}
