import { TestBed } from '@angular/core/testing';

import { LogHistoryService } from './log-history.service';

describe('LogHistoryService', () => {
  let service: LogHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
