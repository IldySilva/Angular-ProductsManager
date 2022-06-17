import { SeeProductsDetailsComponent } from './../dialogs/see-products-details/see-products-details.component';
import { Router } from '@angular/router';
import { DeleteDialogComponent } from './../dialogs/delete-dialog/delete-dialog.component';
import { Product } from './../../models/product';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-menu',
  templateUrl: './pop-menu.component.html',
  styleUrls: ['./pop-menu.component.css']
})
export class PopMenuComponent implements OnInit{

 @Input() product:Product={
name:""

}
  
  constructor(public dialog: MatDialog,private router:Router) 
  
  { }
  ngOnInit(): void {

  
  }

confirmDelete(){

  const dialogRef = this.dialog.open(DeleteDialogComponent, {
    width: '250px',
    data: this.product,
    panelClass:"dialogClass"
  });
}
editProduct(){
this.router.navigate(["products/edit/"+this.product.id])
}

seeDetails(){
  const dialogRef = this.dialog.open(SeeProductsDetailsComponent, {
    width: '40%',
    data: this.product,
    panelClass:"dialogClass"
  });
  
}
}
