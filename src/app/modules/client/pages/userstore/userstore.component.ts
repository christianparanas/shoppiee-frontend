import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import {
  AfterViewInit,
  Component,
  ViewChild,
  OnInit,
  ElementRef,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

// services
import { StoreService } from '../../shared/services/store.service';
import { ImgUploadService } from '../../../../core/services/img-upload.service';

export interface UserData {
  id: string;
  image: string;
  name: string;
}


@Component({
  selector: 'app-userstore',
  templateUrl: './userstore.component.html',
  styleUrls: ['./userstore.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ bottom: '-1000px', opacity: 1 }),
        animate('.3s ease', style({ bottom: 0, opacity: 1 })),
      ]),
      transition(':leave', [
        style({ bottom: 0, opacity: 1 }),
        animate('.3s ease', style({ bottom: '-1000px', opacity: 1 })),
      ]),
    ]),
  ],
})

export class UserstoreComponent implements AfterViewInit, OnInit {
  isBlackBgOpen: boolean = false;
  storeData: any;
  onScroll: boolean = false;
  submitLoading: boolean = false;
  isAddProductModalOpen: boolean = false;
  isSettingModalOpen: boolean = false;
  imgFilePreview: any = '../../../../../assets/imgs/defaultUserImage.png';
  imgData: any = '';

  displayedColumns: string[] = [
    'image',
    'name',
    'price',
    'stock',
    'options',
  ];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  userSettingForm: any = {
    store_img: '',
    store_name: '',
    store_address: '',
  };

  constructor(
    private location: Location,
    public router: Router,
    private toast: HotToastService,
    private storeService: StoreService,
    private imgUploadService: ImgUploadService
  ) {
    this.fetchUserstoreDataAndProducts();
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  onSubmitUserSettingForm() {
    // start the submit button loader
    this.submitLoading = true;

    // check if the user inputted or selected new image, it will be
    // identified by comparing the file input model img link and the fetch img link
    if (this.userSettingForm.store_img != this.storeData.store_image) {
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
    this.storeService

      .userStoreUpdateDetails({
        store_image: imgURL,
        store_name: this.userSettingForm.store_name,
        store_address: this.userSettingForm.store_address,
      })
      .subscribe(
        (response: any) => {
          this.submitLoading = false;
          this.toast.success(response, { position: 'top-right' });

          // call the refetch data function
          this.fetchUserstoreDataAndProducts()
          this.openCloseSettingModal()
        },
        (error) => {
          this.submitLoading = false;
          this.toast.error(error.message, { position: 'top-right' });
        }
      );
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

  listenScrollEvent = () => {
    window.scrollY > 12 ? (this.onScroll = true) : (this.onScroll = false);
  };

  goBack() {
    this.location.back();
  }

  ngAfterViewInit() {}

  openCloseNewProductModal() {
    this.isBlackBgOpen = !this.isBlackBgOpen;
    this.isAddProductModalOpen = !this.isAddProductModalOpen;
  }

  openCloseSettingModal() {
    this.isBlackBgOpen = !this.isBlackBgOpen;
    this.isSettingModalOpen = !this.isSettingModalOpen;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  fetchUserstoreDataAndProducts() {
    this.storeService.getUserStoreData().subscribe(
      (response: any) => {
        console.log(response);
        // store data to a variable for some usage
        this.storeData = response;
        this.userSettingForm = {
          store_img: response.store_image,
          store_name: response.store_name,
          store_address: response.store_address,
        };

        // store response data to dataSource for the table
        this.dataSource = new MatTableDataSource(response.Products);

        // init the paginator ang sorter after the dataSource is set
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
