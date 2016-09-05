import { Component, OnInit, Input } from '@angular/core';
import {LbackService} from '../lback.service';

@Component({
  moduleId: module.id,
  selector: 'app-restore-box',
  templateUrl: 'restore-box.component.html',
  styleUrls: ['restore-box.component.css']
})
export class RestoreBoxComponent implements OnInit {
  @Input() restore: any = {};
  private progress: any = {};
  constructor(private client: LbackService) {
  }

  ngOnInit() {
	 let that = this;
	 that.client.send({
		"type": "streamrestore",
		"args": {
			"restoreId": this.restore.id
		 }
	 }, function( response ) {
		that.progress=response.data;
	 });
  }
}
