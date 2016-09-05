/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { UserCreateComponent } from './user-create.component';

describe('Component: UserCreate', () => {
  it('should create an instance', () => {
    let component = new UserCreateComponent();
    expect(component).toBeTruthy();
  });
});
