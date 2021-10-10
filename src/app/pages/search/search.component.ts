import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchInput: String;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // get query params
    this.route.queryParamMap.subscribe((params: any) => this.searchInput = params.params.keyword)
  }
}
