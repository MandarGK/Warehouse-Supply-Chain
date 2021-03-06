import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


constructor( private productService: ProductService){
  
}


onProductAdd(product){
  this.productService.addProduct(product);
}

ngOnInit(){  {
  this.productService.getCategory().subscribe(
    s => console.log(s)
  );
}
}
}