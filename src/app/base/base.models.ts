import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BaseComponent} from '../base/base';
import {LbackService} from '../lback.service';
export class BaseModelsComponent extends BaseComponent {
  private models;
  constructor(private client: LbackService, private router: Router) { 
	 super(client,router);
  }
	 
  gotoPage(page) {
	 this.settings['page']=page;
	 this.load();
  }
}
