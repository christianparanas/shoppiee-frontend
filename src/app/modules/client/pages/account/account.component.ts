import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

// services
import { ProfileService } from '../../shared/services/profile.service';
import { ImgUploadService } from '../../../../core/services/img-upload.service';
import { AuthService } from '../../shared/services/auth.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  userIsAuth: boolean = true;
  userData: any = [];

  constructor(
    private router: Router,
    private profileService: ProfileService,
    private imgUpload: ImgUploadService,
    private authService: AuthService,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {
    this.loadAccountData();
  }

  imgUp = (event: any) => {
    const file: File = event.target.files[0];
    console.log(file);

    this.imgUpload.imgUpload(file).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  };

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
