import {LbackService} from '../lback.service';
import {Router} from '@angular/router';

export class BaseValueComponent extends BaseComponent {
  private values: any= {};
  constructor(private client: LbackService, private router: Router, private args, private callback) {
	super( client, router );
  }
  post() {
	this.client.send( this.args, this.callback );
  }
}
