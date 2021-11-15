import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  FormControl,
  FormArray,
  Validators,
} from '@angular/forms';

import { HotToastService } from '@ngneat/hot-toast';

// services
import { ImgUploadService } from '../../services/img-upload.service';
import { ProductService } from 'src/app/modules/client/shared/services/product.service';

@Component({
  selector: 'app-create-product-modal',
  templateUrl: './create-product-modal.component.html',
  styleUrls: ['./create-product-modal.component.scss'],
})
export class CreateProductModalComponent implements OnInit {
  submitLoading: boolean = false;
  categoriesArr: any = []
  @Output() btnClickCloseModal = new EventEmitter();
  @Output() btnClickSubmitModal = new EventEmitter();

  imgFilePreview: any = '../../../../assets/imgs/uploadSvg.svg';
  imgData: any = '';
  createProductForm: FormGroup;

  constructor(
    private toast: HotToastService,
    private imgUpload: ImgUploadService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getCategories();
  }

  initForm() {
    this.createProductForm = new FormGroup({
      product_image: new FormControl('', Validators.required),
      product_name: new FormControl('', Validators.required),
      product_description: new FormControl('', Validators.required),
      product_price: new FormControl('', Validators.required),
      product_quantity: new FormControl('', Validators.required),
      CategoryId: new FormControl('', Validators.required),
    });
  }

  getCategories() {
    this.productService.getProductCategories().subscribe(
      (response) => {
        console.log(response);
        this.categoriesArr = response
      },
      (error) => {
        console.log(error);
      }
    );
  }

  closeModal() {
    this.btnClickCloseModal.emit();
  }

  onSubmitCreateProduct() {
    // check if form is valid, if not then the submission will not proceed
    if (this.createProductForm.status == 'VALID') {
      this.submitLoading = true;

      // upload image to cloudinary and wait for its response for the image url that we need to reference the uploaded image
      this.imgUpload.imgUpload(this.imgData).subscribe(
        (response) => {
          // if success call the sendToServer function to save the product details to our database with the response image url of cloudinary
          this.sendDataToServer(response);
          this.submitLoading = false;
        },
        (error) => {
          // catch error if the image uploading process got an error
          this.toast.error(
            'Error occured when uploading the image, please try again!',
            { position: 'top-right' }
          );
          console.error(error);
          this.submitLoading = false;
        }
      );
    } else {
      this.toast.info('Please fill out the fields and choose an image', {
        position: 'top-right',
      });
    }
  }

  // this method is the responsible for saving the product details to the database after the image got uploaded to the cloudinary
  sendDataToServer(product_img_res: any) {
    // store imgURL from cloundinary
    const imgUrl = product_img_res.imgURL;

    // destructure the array, except for the product image on the form because we dont need to store in the db
    const { product_image, ...noProductImg } = this.createProductForm.value;

    // call the product service and use its addproduct method to store product details
    this.productService
      .addproduct({
        product_image: imgUrl,
        ...noProductImg,
      })
      .subscribe(
        (response: any) => {
          this.submitLoading = false;
          this.toast.success(response.message, { position: 'top-right' });

          // close the modal after product save
          this.btnClickSubmitModal.emit();
          this.btnClickCloseModal.emit();
        },
        (error) => {
          this.submitLoading = false;
          this.toast.error(error.message, { position: 'top-right' });
          console.error(error);
        }
      );
  }

  // this function will load the image preview in the template when user click upload image
  loadImg(event: any) {
    // checks if the user selected an image for the image preview, if not then return
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
}
