import { TestBed } from '@angular/core/testing';

import { LoaderStatusService } from './loader-status.service';

describe('LoaderStatusService', () => {
  let service: LoaderStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
