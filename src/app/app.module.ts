import { DeleteDialogComponent } from './components/dialogs/delete-dialog/delete-dialog.component';
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
import { MatCardModule } from "@angular/material/card";

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { HttpClientModule } from "@angular/common/http";

import { ProductsCreateComponent } from './components/product/products-create/products-create.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ProductTableComponent } from './components/product/product-table/product-table.component';
import { PopMenuComponent } from './components/pop-menu/pop-menu.component';
import { ProductEditComponent } from './components/product/product-edit/product-edit.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    ProductComponent,
    DashboardHomeComponent,
    ProductsCreateComponent,
    DashboardComponent,
    ProductTableComponent,
    PopMenuComponent,
    DeleteDialogComponent,
    ProductEditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule
    , MatCardModule
    , FormsModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatSnackBarModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,

  ],
  providers: [ {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}],
  bootstrap: [AppComponent]
})
export class AppModule { }
