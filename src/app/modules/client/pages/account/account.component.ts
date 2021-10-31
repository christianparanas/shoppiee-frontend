import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// services
import { ProfileService } from '../../shared/services/profile.service';
import { ImgUploadService } from '../../../../core/services/img-upload.service';

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
    private imgUpload: ImgUploadService
  ) {}

  ngOnInit(): void {
    this.loadAccountData();
  }

  imgUp = (event: any) => {
    const file: File = event.target.files[0];

    console.log(file)

    const formData = new FormData()

    formData.append('file', file)
    formData.append('upload_preset', 'yulajclu')

    this.imgUpload.imgUpload(formData).subscribe(
      (response) => {
        console.log(response)
      },
      (error) => {
        console.error(error)
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
}
