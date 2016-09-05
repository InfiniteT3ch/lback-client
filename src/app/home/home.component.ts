import { Component, OnInit } from '@angular/core';
import { LbackService } from '../lback.service';



@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  private settings: any = {
	 "backups": {
		"amount": 0,
		"size": 1000
	 },
	 "restores": {
		"amount": 0,
		"size": 1000
	 },
	 "users": {
		"amount": 0,
		"size": 1000
	 }
  };
  private data : any = {
	 "backups": [],
	 "restores": [],
	 "users": []
  };
  constructor(private lback: LbackService, private lib: LibService, private router: Router) { 
  }

  ngOnInit() {
	 let that = this;
	this.lback.checkConnected(function() {
		that.router.navigate("/login");
	 }, function() {
		this.load(); 
	 });
  }
  load() {
	let that = this;
 	this.lback.send({
		"type":"listbackups",
		"args": this.settings['backups']
	 }, function( response ) {
		that.data.backups=response.data;
	 });
	this.lback.send({ 
		"type": "listrestores",
		"args": this.settings['restores']
	}, function( response ) {
		that.data.restores=response.data;
	
	 });
	this.lback.send({
	 	 "type": "listusers",
	 	"args": this.settings['users']
	 }, function( response ) {
		that.data.users=response.data;
	 });
  }
 gotoPage( settings, page ) {
	 settings['page']=page;
  	 this.load();
  }
	 

}
