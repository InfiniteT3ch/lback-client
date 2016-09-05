import { Component, OnInit } from '@angular/core';
import { BaseModelsComponent } from '../base/base.models';
import { Routes, RouterModule, Router } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { UserDeleteComponent } from '../user/user-delete.component';
import { UserCreateComponent } from '../user/user-create.component';


const childRoutes: Routes = [
	 {
	 "path": "/users/:userId", "component": UserComponent 
	 },
	 {
	 "path": "/users/user", "component": UserCreateComponent
	 },
	 {
	 "path": "/users/:userId/delete", "component": UserDeleteComponent
	 }
];


@Component({
  moduleId: module.id,
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css']
})
@NgModule({
  "imports": [RouterModule.forChild(childRoutes)]
})
export class UsersComponent extends BaseModelsComponent implements OnInit {
  private settings = {
	 "page": 0,
	 "amount": 1000
	};
  
  constructor(private client: LbackService, private lib: LibService, private router: Router) {
	 super(client,router);
	}

  ngOnInit() {
	super.ngOnInit();
	this.load();
  }
  load() {
	 let that = this;
	 that.send({
		"type": "listusers",
		"args": this.settings }, function(response) {
		that.models = models;
	 });
  }
}
