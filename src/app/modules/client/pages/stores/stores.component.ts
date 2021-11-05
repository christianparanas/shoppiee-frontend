import { Component, OnInit } from '@angular/core';

// services
import { StoreService } from '../../shared/services/store.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss'],
})
export class StoresComponent implements OnInit {
  storesArr: any = []

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.getStores()
  }

  getStores() {
    this.storeService.getStores().subscribe(
      (response) => {
        this.storesArr = response
        console.log(response)
      },
      (error) => {
        console.error(error)
      }
    )
  }
}
