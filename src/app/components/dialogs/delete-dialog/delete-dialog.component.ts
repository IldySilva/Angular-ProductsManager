import { ProductsService } from './../../../services/products.service';
import { Product } from './../../../models/product';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {
  @Input() product:Product={
    name:""
    
    }
  constructor(private dialog:MatDialog,private route: ActivatedRoute, private productService: ProductsService, @Inject(MAT_DIALOG_DATA) public data: Product) { }

  ngOnInit(): void {
    this.productService.readById(this.data.id!).subscribe(product => {
      this.product = product;
    })
  }
 deleteProduct(){
  this.productService.delete(this.product.id!).subscribe(()=>{
    window.location.reload()
    this.productService.dialogs.showMessage("Sucess Product Removed",false)});
  
  }
}
