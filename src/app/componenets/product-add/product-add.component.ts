import { Component } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators, RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {

constructor(private formbuilder:FormBuilder){}

productAddForm:FormGroup;


ngOnInit():void{

}
createProductAddForm(){
this.productAddForm=this.formbuilder.group({
  productName:["",Validators.required],
  unitPrice:["",Validators.required],
  unitsInStock:["",Validators.required],
  categoryId:["",Validators.required]
  
})
}




}
