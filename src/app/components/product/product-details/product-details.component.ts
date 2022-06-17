import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { HeaderservicesService } from 'src/app/services/view/headerData/headerservices.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productToAdd: Product = {
    name: '',
    price: 0,
    supplier: "",

  }
  
  constructor(private router: Router, private location: Location, private productServices: ProductsService, private headerServices: HeaderservicesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productServices.readById(id).subscribe(product => {
      this.productToAdd = product;}
    )
  }
  returnToPreviousPage(): void {
    this.location.back();
  }
}
