import { TestBed } from '@angular/core/testing';

import { WatcherLoginGuard } from './watcher-login.guard';

describe('WatcherLoginGuard', () => {
  let guard: WatcherLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WatcherLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
