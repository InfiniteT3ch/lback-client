import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LbackService } from '../lback.service';
function NoOp() {}
export class BaseComponent {
  constructor(private client: LbackService, private router: Router) { }
  gotoLogin() {
	let that = this;
	this.router.navigate(['/login']);
  }
  gotoPage(page) {
	 this.settings['page']=page;
	 this.load();
  }
  ngOnInit() {
	let that = this; 
	that.client.checkConnected(function() {
		that.gotoLogin();
	 }, NoOp);
  }

}
