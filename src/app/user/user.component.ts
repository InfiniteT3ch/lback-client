import { Component, OnInit } from '@angular/core';
import { BaseModelComponent } from '../base/base.model';
import { LbackService } from '../lback.service';
import { LibService } from '../lib.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css']
})
export class UserComponent extends BaseModelComponent implements OnInit {

  constructor(private client: LbackService, private lib: LibService, private route: ActivatedRoute) {
	 super( client, router, {
		"type": "getuser",
		"args": {
			"id": route.params['userId']
		}
	 } );
  }

}
