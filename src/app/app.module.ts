import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './componenets/product/product.component';
import { CategoryComponent } from './componenets/category/category.component';
import { NaviComponent } from './componenets/navi/navi.component';

@NgModule({
  declarations: [
    //kendi yazıklarımız
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
  ],
  imports: [
    //Dışardan kullnadıklarımız
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
