import { TestBed } from '@angular/core/testing';

import { UserinfoserviceService } from './userinfoservice.service';

describe('UserinfoserviceService', () => {
  let service: UserinfoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserinfoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
