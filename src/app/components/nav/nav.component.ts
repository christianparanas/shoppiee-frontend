import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isSearchBarOpen: boolean = false
  onScroll: boolean = false
  @Input() currentRoute : String;

  constructor() {
    this.currentRoute = ''
  }

  ngOnInit(): void {
    window.addEventListener("scroll", this.listenScrollEvent)
  }

  openCloseSearchBar() {
    this.isSearchBarOpen === false ? this.isSearchBarOpen = true : this.isSearchBarOpen = false
  }


  listenScrollEvent = () => {
    window.scrollY > 15
      ? this.onScroll = true
      : this.onScroll = false
  }

}
