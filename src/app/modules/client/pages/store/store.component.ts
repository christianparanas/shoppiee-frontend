import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// services
import { StoreService } from '../../shared/services/store.service';
import { ProfileService } from '../../shared/services/profile.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  storeId: any;
  storeData: any;
  currentUserData: any
  @Input() follow: string = 'follow';

  constructor(
    private storeService: StoreService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.storeId = await  this.route.snapshot.paramMap.get('storeId');

    this.fetchStoreData(this.storeId);
  }

  isFollowed() {
    this.follow = this.follow == 'followed' ? 'follow' : 'followed';
  }

  fetchStoreData(storeId: any) {
    this.storeService.getStoreData(storeId).subscribe(
      (response) => {
        this.storeData = response;
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
