import { Component, OnInit } from '@angular/core';
import { BaseModelsComponent } from '../base/base.models';
import { RestoreComponent } from '../restore/restore.component';
import { RestoreDeleteComponent } from '../restore/restore-delete.component';
import { RestoreCreateComponent } from '../restore/restore-create.component';
import { RestoreComponent } from '../restore/restore.component';
import { Routes, RouterModule, Router } from '@angular/router';


const childRoutes: Routes = [
	{
	 "path": "/restores/:restoreId", "component": RestoreComponent 
	},
	{
	 "path": "/restores/restore", "component": RestoreCreateComponent ,
	},
	{
	 "path": "/restores/:restoreId/delete", "component": RestoreDeleteComponent
  	}
];
 	
@Component({
  moduleId: module.id,
  selector: 'app-restores',
  templateUrl: 'restores.component.html',
  styleUrls: ['restores.component.css']
})
@NgModule({
	 "imports": [RouterModule.forChild(childRoutes)]
})
export class RestoresComponent extends BaseModelsComponent implements OnInit {
  private settings = { 
	 "page": 0,
	 "amount": 1000
  };
  constructor(private client: LbackService, private lib: LibService, router: Router) {
	 super(client,router);
  }

  ngOnInit() {
   	super.ngOnInit();
  	this.load();
  }
  load() {
	let that = this;
	that.client.send({
		"type": "listrestores",
		"args": this.settings}, function( response ) {
		that.models=response.data;
	 } );
	
  }

}
