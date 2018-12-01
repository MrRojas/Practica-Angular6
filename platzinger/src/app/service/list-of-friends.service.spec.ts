import { TestBed, inject } from '@angular/core/testing';

import { ListOfFriendsService } from '../service/list-of-friends.service';

describe('ListOfFriendsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListOfFriendsService]
    });
  });

  it('should be created', inject([ListOfFriendsService], (service: ListOfFriendsService) => {
    expect(service).toBeTruthy();
  }));
});
