import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isSearchBarOpen: boolean = false
  @Input() currentRoute : String;

  constructor() {
    this.currentRoute = ''
  }

  ngOnInit(): void {
  }

  openCloseSearchBar() {
    this.isSearchBarOpen === false ? this.isSearchBarOpen = true : this.isSearchBarOpen = false
  }

}
