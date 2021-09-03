import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accountsetting',
  templateUrl: './accountsetting.component.html',
  styleUrls: ['./accountsetting.component.scss']
})
export class AccountsettingComponent implements OnInit {
  isAboutUsOverlayOpen: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  openCloseAboutUsOverlay(): void {
    this.isAboutUsOverlayOpen =! this.isAboutUsOverlayOpen
  }

}
