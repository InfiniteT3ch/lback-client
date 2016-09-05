import { Component, OnInit } from '@angular/core';
import { BaseDeleteComponent } from '../base/base.delete';
import {LbackService } from '../lback.service';
import {LibService} from '../lib.service';
import {Router, ActivatedRoute} from '@angular/router';
import {MdDialogRef} from '@angular2-material/dialog';

@Component({
  moduleId: module.id,
  selector: 'app-user-delete',
  templateUrl: 'user-delete.component.html',
  styleUrls: ['user-delete.component.css']
})
export class UserDeleteComponent extends BaseDeleteComponent implements OnInit {

  constructor(private client: LbackService, private lib: LibService, private router: Router, private route: ActivatedRoute, private dialogRef: MdDialogRef<UserDeleteComponent>) {
	 super( client, router, {
		"type": "deluser",
		"args": {
			"id": route.params['userId']
		}
	 }, function(response) {
		if ( !response.error ) {
		 	router.navigate(['/users']);
		} else {
			dialogRef.open( response.message );
		}
	 });
  }
}
