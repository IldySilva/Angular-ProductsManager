import { DialogsService } from './view/dialogs.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  baseUrl = "http://localhost:3001/products";
  dialogs:any;
  constructor(private http: HttpClient,viewServices:DialogsService) { 
this.dialogs=viewServices;

  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }
  readAll(): Observable<Product[]> {

    return this.http.get<Product[]>(this.baseUrl);
  }
  readById(id: number): Observable<Product> {

    let url = this.baseUrl + "/" + id;
    return this.http.get<Product>(url);
  }


}
