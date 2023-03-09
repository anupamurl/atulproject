import { TestBed } from '@angular/core/testing';

import { SharedseriveService } from './sharedserive.service';

describe('SharedseriveService', () => {
  let service: SharedseriveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedseriveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
