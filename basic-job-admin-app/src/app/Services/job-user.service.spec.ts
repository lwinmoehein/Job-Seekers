import { TestBed } from '@angular/core/testing';

import { JobUserService } from './job-user.service';

describe('JobUserService', () => {
  let service: JobUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
