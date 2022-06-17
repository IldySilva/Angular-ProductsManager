import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ImagePickerConf } from 'ngp-image-picker';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { HeaderservicesService } from 'src/app/services/view/headerData/headerservices.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productToAdd: Product = {
    name: '',
    price: 0,
    supplier: "",

  }
  constructor(private router: Router, private location: Location, private productServices: ProductsService, private headerServices: HeaderservicesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productServices.readById(id).subscribe(product => {
      this.productToAdd = product;
    })
    this.headerServices.headerData.title = "Edit Product"

  }
  onImageChange(event: any) {

    this.productToAdd.base64Image = event;
  }


  imagePickerConf: ImagePickerConf = {



    borderRadius: '4px',
    language: 'en',
    width: '150px',
    height: '150px',
    hideDownloadBtn: true,
    hideEditBtn: true,
    hideAddBtn: true,
    objectFit: "fill"

  };

  updateProduct(): void {
    setTimeout(() => {
      this.headerServices.isLoading=true;

      this.productServices.editProduct(this.productToAdd).subscribe(() => {
        this.productServices.dialogs.showMessage("Product Updated", false);
        this.returnToPreviousPage();
        this.headerServices.isLoading=false;
      })
    },);

    this.headerServices.isLoading=false;


  }



  returnToPreviousPage(): void {
    this.location.back();
  }
}
