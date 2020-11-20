import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public donutData:Object[];

  constructor(private productService :ProductService) { }

  ngOnInit(): void {
    this.donutData=this.productService.getDonutData();
  }

}
