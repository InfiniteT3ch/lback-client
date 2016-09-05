
import {LbackService} from '../lback.service';
import { Router } from '@angular/router';
class BaseModelComponent {
   private model;
   constructor(private client: LbackService, private router: Router, private args: any) {
   	 super( client, router );	
	 let that = this;
	 this.client.send(args, function(response) {
		that.model=response.data;
	 } );
   }
}


