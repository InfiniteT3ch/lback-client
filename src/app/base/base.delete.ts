
import { LbackService } from '../lback.service';
import { BaseComponent } from '../base/base';
import { Router } from '@angular/router';
export class BaseDeleteComponent extends BaseComponent {
  constructor(private client: LbackService, private router: Router, private args, private callback) {
	 super( client, router );
	 this.client.send( this.args, this.callback );
  }
}


