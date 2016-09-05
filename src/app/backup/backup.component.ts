import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LbackService } from '../lback.service';
import { LibService } from '../lib.service';
import { BaseModelComponent } from '../base/base.model';

@Component({
  moduleId: module.id,
  selector: 'app-backup',
  templateUrl: 'backup.component.html',
  styleUrls: ['backup.component.css']
})
export class BackupComponent extends BaseModelComponent implements OnInit {
  constructor(private client: LbackService, private lib: LibService, private router: Router, private route: ActivatedRoute) {
	 super(client,
		router,
	       {
		"type": "getbackup",
		"args": {
			"id":route.params['backupId']
		 } });
  }
}
