import { Component, OnInit, Input } from '@angular/core';
import { LbackService } from '../lback.service';
import { LibService } from '../lib.service';

@Component({
  moduleId: module.id,
  selector: 'app-backup-box',
  templateUrl: 'backup-box.component.html',
  styleUrls: ['backup-box.component.css']
})
export class BackupBoxComponent implements OnInit {
  // an object
  @Input() backup: any;
  private progress;
  constructor(private client: LbackService, private lib: LibService) {
  }

  ngOnInit() {
	//start polling
	let that = this;
	that.client.send({
		"type": "streambackup",
		"args": {
			"backupId": this.backup.id
		}
	 }, function(response) {
		this.progress =response.data;
	 });
  }

}
