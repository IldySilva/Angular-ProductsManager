import { HeaderservicesService } from './../../services/view/headerData/headerservices.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private router:Router,private headerServices:HeaderservicesService) {

    headerServices.headerData.title="Products"
   }

  ngOnInit(): void {
  }
  NavigateToAddNewProduct():void{

this.router.navigate(["products/create"])
  }

}
