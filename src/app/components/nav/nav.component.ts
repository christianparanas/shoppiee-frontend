import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  isSearchBarOpen: boolean = false;
  isSideBarOpen: boolean = false;
  onScroll: boolean = false;
  searchinput: any;

  @Input() currentRoute: String;
  @Input() AddedToCart: number = 23;

  constructor(public router: Router) {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  openCloseSearchBar() {
    this.isSearchBarOpen = !this.isSearchBarOpen;
  }

  openCloseSideBar() {
    this.isSideBarOpen = !this.isSideBarOpen;
  }

  listenScrollEvent = () => {
    window.scrollY > 15 ? (this.onScroll = true) : (this.onScroll = false);
  };

  searchStoreOrProduct() {
    if(this.searchinput) this.router.navigate(['/search'], { queryParams: { keyword: this.searchinput } });
  }
}
