import { Component, OnInit } from '@angular/core';
import { BaseDeleteComponent } from '../base/base.delete';
import { LbackService } from '../lback.service';
import { LibService } from '../lib.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MdDialogRef } from '@angular2-material/dialog';

@Component({
  moduleId: module.id,
  selector: 'app-restore-delete',
  templateUrl: 'restore-delete.component.html',
  styleUrls: ['restore-delete.component.css']
})
export class RestoreDeleteComponent extends BaseDeleteComponent implements OnInit {

  constructor(private client: LbackService, private lib: LibService, private router: Router, private route: ActivatedRoute, public dialogRef: MdDialogRef<RestoreDeleteComponent>) {
	 super(client, router,{
		"type": "delrestore",
		"args": {
			"id": route.params['restoreId']
		}
	 }, function(response) {
		if ( !response.error ) {
			router.navigate(['/restores']);
		} else {
			dialogRef.open( response.message );
	 	} 
	 });
  }
}
