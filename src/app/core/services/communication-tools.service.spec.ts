import { TestBed } from '@angular/core/testing';

import { CommunicationToolsService } from './communication-tools.service';

describe('CommunicationToolsService', () => {
  let service: CommunicationToolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunicationToolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
