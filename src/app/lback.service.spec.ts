/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { LbackService } from './lback.service';

describe('Service: Lback', () => {
  beforeEach(() => {
    addProviders([LbackService]);
  });

  it('should ...',
    inject([LbackService],
      (service: LbackService) => {
        expect(service).toBeTruthy();
      }));
});
