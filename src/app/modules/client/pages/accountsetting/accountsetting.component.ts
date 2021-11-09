import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

// services
import { ProfileService } from '../../shared/services/profile.service';
import { ImgUploadService } from '../../../../core/services/img-upload.service';

@Component({
  selector: 'app-accountsetting',
  templateUrl: './accountsetting.component.html',
  styleUrls: ['./accountsetting.component.scss'],
})
export class AccountsettingComponent implements OnInit {
  imgData: any = '';
  userData: any;
  submitLoading: boolean = false;
  imgFilePreview: any = '../../../../../assets/imgs/defaultUserImage.png';

  userSettingForm: any = {
    user_img: '',
    user_name: '',
    user_email: '',
    user_address: '',
  };

  constructor(
    private location: Location,
    private profileService: ProfileService,
    private imgUploadService: ImgUploadService,
    private toast: HotToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProfileData();
  }

  getProfileData() {
    this.profileService.getProfileData().subscribe(
      (response: any) => {
        console.log(response);
        this.userData = response;
        this.userSettingForm = {
          user_img: response.image,
          user_name: response.name,
          user_email: response.email,
          user_address: response.address,
        };
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmitUserSettingForm() {
    this.submitLoading = true;

    if (this.userSettingForm.user_img != this.userData.image) {
      this.imgUploadService.imgUpload(this.imgData).subscribe(
        (response) => {
          this.sendUserInfoToServer(response.imgURL);
        },
        (error) => {
          this.toast.error(error, { position: 'top-right' });
        }
      );
    }
    else {
      this.sendUserInfoToServer(this.userSettingForm.store_img);
    }
  }
  
  sendUserInfoToServer(imgURL: any) {
    this.profileService.userUpdateDetails({
      image: imgURL,
      name: this.userSettingForm.user_name,
      email: this.userSettingForm.user_email,
      address: this.userSettingForm.user_address,
    }).subscribe(
      (response: any) => {
        this.submitLoading = false;
        console.log(response)

        this.getProfileData()
        this.toast.success('User data updated', { position: 'top-right' });
        this.router.navigate(['/account'])
      },
      (error) => {
        this.submitLoading = false;
        this.toast.error(error.message, { position: 'top-right' });
      }
    )
  }

  loadInputImgToPreview(event: any) {
    // checkh if the preview uploaded file is an image
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.toast.info('Please select an image', { position: 'top-right' });
      return;
    }

    this.imgData = event.target.files[0];

    // read as data url
    var reader = new FileReader();
    reader.readAsDataURL(this.imgData);

    reader.onload = (_event) => {
      this.imgFilePreview = reader.result;
    };
  }

  onSubmit() {}

  goBack() {
    this.location.back();
  }
}
