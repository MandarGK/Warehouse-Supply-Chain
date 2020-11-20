import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { data} from '../datasource'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products$ = new BehaviorSubject<Product[]>([]);
  category$ = new BehaviorSubject<string>('');
  donutData :Object[];

  constructor() {
   this.products$.next(data);
  }
 
 addProduct(product: Product) {
   let products=[];
   //step1 :fetch all the products from subject
   products=this.products$.value;
  //step2 :add new value to products[] array
   products.push(product);
   //step3 : give next value to subject
   this.products$.next(products);
 }
 
 fetchProducts() :Observable<Product[]> {
   return this.products$;
 }

 setCategory(s:string){
   this.category$.next(s);
 }

 getCategory(){
  return this.category$;
}


 setDonutData(donutData:any) :any{
   this.donutData=donutData;
 }
 getDonutData(){
   return this.donutData;
 }
}
