import { TestBed } from '@angular/core/testing';

import { BdappsService } from './bdapps.service';

describe('BdappsService', () => {
  let service: BdappsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdappsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
