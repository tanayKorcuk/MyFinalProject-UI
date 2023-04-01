import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './componenets/product/product.component';
import { CategoryComponent } from './componenets/category/category.component';
import { NaviComponent } from './componenets/navi/navi.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import{BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './componenets/cart-summary/cart-summary.component';
import { ProductAddComponent } from './componenets/product-add/product-add.component';
@NgModule({
  declarations: [
    //kendi yazıklarımız
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    ProductAddComponent,
  ],
  imports: [
    //Dışardan kullnadıklarımız
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right"
    })
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
