import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',

  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded = false;
  filterText="";
  /*productResponseModel:ProductResponseModel={
  data:this.products,
  message:"",
  success:true
 }*/
  //getin icerisnde tanımlamamız yetti

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private toastrService:ToastrService,
    private cartService:CartService
  
    ) {} //direk class değişkeni şeklinde tanımlanır

  ngOnInit(): void {
    //observablelara subscribe olmam lazım
    this.activatedRoute.params.subscribe((params) => {
      if (params['categoryId']) {
        this.getProductsByCategory(params['categoryId']);
      } else {
        this.getProducts();
      }
    });
  }
  getProducts() {
    //subscribe bizim için senkron calsıtırıyor
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }

  getProductsByCategory(categoryId: number) {
  //  console.log(categoryId);
    
    this.productService
      .getProductsByCategory(categoryId)
      .subscribe((response) => {
        this.products = response.data;
        this.dataLoaded = true;
     //  console.log(this.products);
        
      });
  }
addToCart(product:Product){
 
  this.toastrService.success("Sepete eklendi",product.productName)
  this.cartService.addtoCart(product);

}

} //product componenent end
