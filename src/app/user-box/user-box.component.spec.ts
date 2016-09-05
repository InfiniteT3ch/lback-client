/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { UserBoxComponent } from './user-box.component';

describe('Component: UserBox', () => {
  it('should create an instance', () => {
    let component = new UserBoxComponent();
    expect(component).toBeTruthy();
  });
});
