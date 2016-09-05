import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseModelComponent } from '../base/base.model';
import { LbackService } from '../lback.service';
import { LibService } from '../lib.service';

@Component({
  moduleId: module.id,
  selector: 'app-restore',
  templateUrl: 'restore.component.html',
  styleUrls: ['restore.component.css']
})
export class RestoreComponent extends BaseValueComponent implements OnInit {

  constructor(private client: LbackService, private lib: LibService, private router: Router, private route: ActivatedRoute) {
	 super(client, router, {
		"type":"getrestore",
		"args": {
			"id": route.params['restoreId']
		}
	 });
  }

}
