import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  FormControl,
  FormArray,
  Validators,
} from '@angular/forms';

import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-create-product-modal',
  templateUrl: './create-product-modal.component.html',
  styleUrls: ['./create-product-modal.component.scss']
})
export class CreateProductModalComponent implements OnInit {
  @Output() btnClickCloseModal = new EventEmitter();
  imgFile: any = "../../../../assets/imgs/men.jpg"
  createProductForm: FormGroup;

  constructor(private toast: HotToastService) { }

  ngOnInit(): void {

    this.initForm()
  }

  initForm() {
    this.createProductForm = new FormGroup({
      product_image: new FormControl(''),
      product_name: new FormControl('', Validators.required),
      product_description: new FormControl('', Validators.required),
      product_price: new FormControl('', Validators.required),
      product_quantity: new FormControl('', Validators.required),
      product_category: new FormControl('', Validators.required)
    });
  }

  closeModal() {
    this.btnClickCloseModal.emit()
  }

  onSubmitCreateProduct() {
    console.log(this.createProductForm.value)
  }

  loadImg(event: any) {
    if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.toast.info("Please select an image", { position: 'top-right' });
			return;
		}

    var mimeType = event.target.files[0].type;
		
		if (mimeType.match(/image\/*/) == null) {
			this.toast.info("Please select an image", { position: 'top-right' });
			return;
		}

    const imgData: File = event.target.files[0]

    var reader = new FileReader();
		reader.readAsDataURL(imgData);
		
		reader.onload = (_event) => {
			this.imgFile = reader.result; 
		}
  }
 
}
