import { ProductsService } from 'src/app/services/products.service';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';

import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', "price", "supplier"];
  products: Product[] = [];

  constructor(private productServices: ProductsService) {


    this.productServices.readAll().subscribe(prods => {

      this.products = prods
    })
  }
  ngOnInit(): void {

  }


}
