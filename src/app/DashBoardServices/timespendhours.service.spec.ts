import { TestBed, inject } from '@angular/core/testing';

import { TimespendhoursService } from './timespendhours.service';

describe('TimespendhoursService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimespendhoursService]
    });
  });

  it('should be created', inject([TimespendhoursService], (service: TimespendhoursService) => {
    expect(service).toBeTruthy();
  }));
});
