import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { BaseModelsComponent } from '../base/base.models';
import { BackupComponent } from '../backup/backup.component';
import { BackupDeleteComponent } from '../backup/backup-delete.component';
import { BackupCreateComponent } from '../.backup/backup-create.component';
import { LibService } from '../lib.service.ts';
import { LbackService } from '../lback.service.ts';

const childRoutes: Routes = [
  	{
 	"path": "/backups/:backupId", "component": BackupComponent,
	},
	{
	"path": "/backups/:backupId/delete", "component": BackupDeleteComponent,
	},
	{
	"path": "/backups/:backupId/edit", "component": BackupCreateComponent,
	},
	{
	"path": "/backups/backup", "component": BackupCreateComponent }];

@Component({
  moduleId: module.id,
  selector: 'app-backups',
  templateUrl: 'backups.component.html',
  styleUrls: ['backups.component.css']
})
@NgModule({
  "imports": [RouterModule.forChild(childRoutes)]
})
export class BackupsComponent extends BaseModelsComponent implements OnInit {
  private settings = {
	 "amount": 1000,
	 "page": 0
  };
  constructor(private client: LbackService, private lib: LibService, private router: Router) {
	 super(client, router );
  }

  ngOnInit() {
	 super.ngOnInit();
	 this.load();
  }
  load() { 
	let lback =this.client;
	let that = this;
	this.client.send({
		"type": "listbackups",
		"args": this.settings }, function( data ) {
		 //clock all progress
		 that.models=data;
	 });
   }

}
