import { Component, OnInit } from '@angular/core';
import { LbackService }  '../lback.service';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  private user = {
	 "username": "", 
	 "password": ""};
 

  constructor(lback: LbackService, router: Router) {
  }

  ngOnInit() {
	let that = this;
	this.lback.checkConnected(NoOp, function() {
		that.router.navigate("/home");
	 } );
  }
  onLogin() {
	let lback = this.lback;
  	let router = this.router;
	lback.send({
		"type": "auth",
		"args": this.user }, function( message ) {
		if ( !message.error ) {
			lback.setLogin( message );
			router.navigate("/home");
		} 
	 });
   }
	

}
