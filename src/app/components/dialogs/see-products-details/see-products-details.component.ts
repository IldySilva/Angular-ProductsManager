import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-see-products-details',
  templateUrl: './see-products-details.component.html',
  styleUrls: ['./see-products-details.component.css']
})
export class SeeProductsDetailsComponent implements OnInit {

product:Product;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Product) {
    this.product=this.data;

   }

  ngOnInit(): void {

    this.product=this.data;
  }

}
