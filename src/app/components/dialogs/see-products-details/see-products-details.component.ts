import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-see-products-details',
  templateUrl: './see-products-details.component.html',
  styleUrls: ['./see-products-details.component.css']
})
export class SeeProductsDetailsComponent implements OnInit {

  public ownerForm: FormGroup;

  productToAdd: Product = {
    name: '',
    supplier:"",
    
  }
  constructor(@Inject(MAT_DIALOG_DATA) public data: Product) {

    this.ownerForm = new FormGroup({
      name: new FormControl('', [Validators.required, ]),
      category:new FormControl('',[Validators.required])

    });
    this.  productToAdd=this.data;

   }
   public hasError = (controlName: string, errorName: string) =>{
    return this.ownerForm.controls[controlName].hasError(errorName);
  }
  ngOnInit(): void {

    this.  productToAdd=this.data;
  }

}
