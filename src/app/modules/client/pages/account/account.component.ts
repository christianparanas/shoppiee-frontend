import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

// services
import { ProfileService } from '../../shared/services/profile.service';
import { ImgUploadService } from '../../../../core/services/img-upload.service';
import { AuthService } from '../../shared/services/auth.service'
import { OrdersService } from '../../shared/services/orders.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  userIsAuth: boolean = true;
  userData: any = [];
  userOrders: any = []
  unpaidOrders: any = []
  paidOrders: any = []


  constructor(
    private router: Router,
    private profileService: ProfileService,
    private imgUpload: ImgUploadService,
    private authService: AuthService,
    private toast: HotToastService,
    private ordersService: OrdersService
  ) {}

  ngOnInit(): void {
    this.loadAccountData();
    this.loadUserOrders()
  }

  loadUserOrders() {
    this.ordersService.getOrders().subscribe(
      (response: any) => {
        console.log(response)
        this.userOrders = response

        response.map((order: any) => {
          if(order.order_status == "Paid") {
            this.paidOrders.push(order)
          }
          else {
            this.unpaidOrders.push(order)
          }
        })
      },
      (error) => {
        console.log(error)
      }
    )
  }

  loadAccountData = () => {
    this.profileService.getProfileData().subscribe(
      async (response) => {
        this.userData = await response;
        console.log(this.userData);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  logout() {
    this.authService.logout()
    this.router.navigate(['/account/login']);
    this.toast.info("Logged out!", { position: 'top-right' });
  }
}
