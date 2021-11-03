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
import {
  FormGroup,
  FormBuilder,
  FormControl,
  FormArray,
  Validators,
} from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

// services
import { ProductService } from '../../shared/services/product.service';
import { StoreService } from '../../shared/services/store.service';

export interface UserData {
  id: string;
  image: string;
  name: string;
}

/**
 * @title Data table with sorting, pagination, and filtering.
 */
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
  userstoreSettingForm: FormGroup;
  storeData: any;
  onScroll: boolean = false;
  submitLoading: boolean = false
  isAddProductModalOpen: boolean = false;
  isSettingModalOpen: boolean = false;
  imgFilePreview: any = '../../../assets/imgs/men.jpg';
  imgData: any = ""
  displayedColumns: string[] = [
    'id',
    'image',
    'name',
    'price',
    'stock',
    'options',
  ];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private productsService: ProductService,
    private location: Location,
    public router: Router,
    private toast: HotToastService,
    private storeService: StoreService
  ) {
    this.fetchProducts();
  }

  ngOnInit(): void {
    this.initForm()
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  initForm() {
    this.userstoreSettingForm = new FormGroup({
      store_image: new FormControl('', Validators.required),
      store_name: new FormControl('', Validators.required),
      store_address: new FormControl('', Validators.required),
    });
  }

  onSubmitUserSettingForm() {
   if(this.userstoreSettingForm.status == "VALID") {
      this.submitLoading = true

      console.log(this.userstoreSettingForm)
   } 
   else {
    this.toast.info('Please fill out the fields and choose an image', { position: 'top-right' });
   }
  }

  loadInputImgToPreview(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.toast.info('Please select an image', { position: 'top-right' });
      return;
    }

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
    this.imgFilePreview = '../../../assets/imgs/men.jpg';

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

  fetchProducts() {
    this.storeService.getStoreProduct().subscribe(
      (response: any) => {
        console.log(response);
        // store data to a variable for some usage
        this.storeData = response;

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
