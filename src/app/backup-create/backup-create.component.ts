import { Component, OnInit } from '@angular/core';
import { BaseValueComponent } from '../base/base.value';
import { LbackService } from '../lback.service';
import { LibService } from '../lib.service';
import { DialogComponent } from '../dialog/dialog.component';
import { MdDialogRef } from '@angular2-material/dialog';

@Component({
  moduleId: module.id,
  selector: 'app-backup-create',
  templateUrl: 'backup-create.component.html',
  styleUrls: ['backup-create.component.css']
})
export class BackupCreateComponent extends BaseValueComponent implements OnInit {
  
  constructor(private client: LbackService, private lib: LibService, private router: Router, dialogRef: MdDialogRef<BackupCreateComponent>) {
	 super(client, router, { "type": "dobackup",
		"args": this.values },function() {
	 client.send({
		"type": "dobackup",
		"args": {}
	 }, function( response ) {
		if (!response.error) {
		  dialogRef.open(lib.getMessage('BACKUP_CREATED'));
		  router.navigate(['/backups']);
	  	} else {
		  dialogRef.open(response.message);
	  	}
	 });
	 
     });
  }
			
}
