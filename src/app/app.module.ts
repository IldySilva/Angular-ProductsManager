import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { FooterComponent } from './components/footer/footer.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { ProductComponent } from './views/product/product.component';
import { MatButtonModule } from "@angular/material/button";
import { DashboardHomeComponent } from './views/dashboard-home/dashboard-home.component';
import { MatCardModule} from "@angular/material/card";
import {  } from "./components/product/products-read/products-read.component";
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ProductsReadComponent } from './components/product/products-read/products-read.component';
import { ProductsCreateComponent } from './components/product/products-create/products-create.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ProductTableComponent } from './components/product/product-table/product-table.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    ProductComponent,
    DashboardHomeComponent,
    ProductsReadComponent,
    ProductsReadComponent,
    ProductsCreateComponent,
    DashboardComponent,
    ProductTableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule
    ,MatCardModule
    ,FormsModule,
    MatInputModule,
    MatFormFieldModule,HttpClientModule,MatSnackBarModule, MatGridListModule, MatMenuModule, MatIconModule, LayoutModule, MatTableModule, MatPaginatorModule, MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
