import { TestBed } from '@angular/core/testing';

import { ApiCommunicateService } from './api-communicate.service';

describe('ApiCommunicateService', () => {
  let service: ApiCommunicateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCommunicateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
