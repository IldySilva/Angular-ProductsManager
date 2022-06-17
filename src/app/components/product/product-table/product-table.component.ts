import { HeaderservicesService } from 'src/app/services/view/headerData/headerservices.service';
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
  displayedColumns = ['id', 'name', "price", "supplier", "createdDate", "options"];
  products: Product[] = [];

  constructor(private productServices: ProductsService, header: HeaderservicesService) {


    setTimeout(() => {
      header.isLoading = true;
      this.productServices.readAll().subscribe(prods => {

        this.products = prods
        header.isLoading = false;

      })

    },);
  }
  ngOnInit(): void {

  }

  someMethod() {
    this.trigger.openMenu();
  }
}
