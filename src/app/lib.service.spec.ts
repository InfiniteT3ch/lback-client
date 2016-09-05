/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { LibService } from './lib.service';

describe('Service: Lib', () => {
  beforeEach(() => {
    addProviders([LibService]);
  });

  it('should ...',
    inject([LibService],
      (service: LibService) => {
        expect(service).toBeTruthy();
      }));
});
