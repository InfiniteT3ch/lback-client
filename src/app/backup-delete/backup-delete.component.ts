import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdDialogRef } from '@angular2-material/dialog';
import { LbackService } from '../lback.service';
import { LibService } from '../lib.service';
import { BaseDeleteComponent } from '../base/base.delete';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  moduleId: module.id,
  selector: 'app-backup-delete',
  templateUrl: 'backup-delete.component.html',
  styleUrls: ['backup-delete.component.css']
})
export class BackupDeleteComponent extends BaseDeleteComponent implements OnInit {

  constructor(private client: LbackService, private router: Router, private route: ActivatedRoute, dialogRef: MdDialogRef<BackupDeleteComponent>) {
	 super( client, router, {
		"type": "delbackup",
		"args": {
			"id":route.params['backupId']
		}
	 }, function( response ) {
		if ( !response.error ) {
		  	router.navigate(['/backups']);
		} else {
		 	dialogRef.open( response.message );
		}
	 });
  }
}
