import { TestBed } from '@angular/core/testing';

import { TopPostsService } from './top-posts.service';

describe('TopPostsService', () => {
  let service: TopPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
