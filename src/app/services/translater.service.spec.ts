import { TestBed } from '@angular/core/testing';

import { TranslaterService } from './translater.service';

describe('TranslaterService', () => {
  let service: TranslaterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslaterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
