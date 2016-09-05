import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular2-material/dialog';

@Component({
  moduleId: module.id,
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.css']
})
export class DialogComponent implements OnInit {
  private lastCloseResult = null;
  private dialogRef : MdDialogRef<any>;
  constructor(public dialog: MdDialog, public viewContainerRef: ViewContainerRef) {
  }
  open() {
	let config = new MdDialogConfig();
	config.viewContainerRef = this.viewContainerRef;
	this.dialog.open(any, config);
	this.dialog.afterClosed().subscribe( function( result ) {
		this.lastCloseResult=result;
		this.dialogRef = null;
	 } );
  }
  
}
