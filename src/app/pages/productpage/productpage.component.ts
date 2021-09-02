import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.scss']
})
export class ProductpageComponent implements OnInit {
  fakeArray = new Array(5);
  quantity:number = 0;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }
<<<<<<< HEAD

  itemQuantity(event: number){
    if (this.quantity+event==-1) this.quantity = 0
    else this.quantity += event
  }

=======
>>>>>>> 80a3bc846ead1208b9a5ffb9061ad0fe8f441f1a
}
