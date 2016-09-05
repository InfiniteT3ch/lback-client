import { Component, OnInit } from '@angular/core';
import { BaseValueComponent } from '../base/base.value';
import { LbackService } from '../lback.service';
import { LibService } from '../lib.service';
import {Router,ActivatedRoute } from '@angular/router';
import {MdDialogRef} from '@angular2-material/dialog';

@Component({
  moduleId: module.id,
  selector: 'app-user-create',
  templateUrl: 'user-create.component.html',
  styleUrls: ['user-create.component.css']
})
export class UserCreateComponent extends BaseValueComponent implements onInit {

  constructor(private client: LbackService, private lib: LibService, private router: Router, private route: ActivatedRoute, private dialogRef: MdDialogRef<UserCreateComponent>) {
	 super(client, router,{
		"type": "adduser",
		"args": {} }, function( response ) {
		if ( !response.error ) {
		   dialogRef.open( response.message );
		   router.navigate(['/users']);
		} else {
		   dialogRef.open( response.message );
		}
	 });
   }
}
