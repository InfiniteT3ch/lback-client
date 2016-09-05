import { Component, OnInit } from '@angular/core';
import { BaseValueComponent } from '../base/base.value';
import { LbackService } from '../lback.service';
import { LibService } from '../lib.service';
import { Router } from '@angular/router';
import { MdDialogRef } from '@angular2-material/dialog';
function NoOp() {}
@Component({
  moduleId: module.id,
  selector: 'app-restore-create',
  templateUrl: 'restore-create.component.html',
  styleUrls: ['restore-create.component.css']
})
export class RestoreCreateComponent extends BaseValueComponent implements OnInit {
  private backups: any = [];
  private selectedBackup: any = {};
  constructor(private client: LbackService, private lib: LibService, private router: Router, public dialogRef: MdDialogRef<RestoreCreateComponent>) {
	 super(client,router,{
		"type": "dorestore",
		"args": {} }, NoOp);
  }

  ngOnInit() {
	super.ngOnInit();
	let client = this.client;
	let that = this;
	client.send({
		"type": "listbackups",
		"args": {
			"page": 0,
			"amount": "all"
		 }}, function( response ) {
			that.backups=response.data;
			that.selectedBackup=response.data[0];
		 });
	
  }

  post() {
	let client =this.client;
	let router = this.router;
	this.values['backupId']=this.selectedBackup.id;
	client.send({
		"type": "dorestore",
		"args": this.values }, function(response) {
		if (!response.error) {
			dialogRef.open( response.message );
			router.navigate(['/restores']);
		 } else {
			dialogRef.open( response.message );
		 }
	 });
  }

}
