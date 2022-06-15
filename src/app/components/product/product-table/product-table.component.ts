import { ProductsService } from 'src/app/services/products.service';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';

import { Product } from 'src/app/models/product';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {


  @ViewChild(MatMenuTrigger)
  trigger!: MatMenuTrigger;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', "price", "supplier","options"];
  products: Product[] = [];

  constructor(private productServices: ProductsService) {


    this.productServices.readAll().subscribe(prods => {

      this.products = prods
    })
  }
  ngOnInit(): void {

  }

  someMethod() {
    this.trigger.openMenu();
  }
}
