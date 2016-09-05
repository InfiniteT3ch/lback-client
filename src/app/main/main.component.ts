import { Component, OnInit } from '@angular/core';
import { LbackService } from '../lback.service';

@Component({
  moduleId: module.id,
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private lback: LbackService, private router: Router) { 
  }

  ngOnInit() {
	 lback.checkConnected(NoOp, function() {
		this.router.navigate("/home");
	 });
  }

}
