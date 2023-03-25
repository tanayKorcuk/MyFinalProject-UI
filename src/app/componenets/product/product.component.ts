import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded = false;
  /*productResponseModel:ProductResponseModel={
  data:this.products,
  message:"",
  success:true
 }*/
  //getin icerisnde tanımlamamız yetti

  constructor(private productService: ProductService) {} //direk class değişkeni şeklinde tanımlanır

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    //subscribe bizim için senkron calsıtırıyor
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }
} //product componenent end
