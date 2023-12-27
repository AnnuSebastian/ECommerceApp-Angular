import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  id: any;
  products?: IProduct[];

  constructor(private dataService: DataService,
    private router : Router,
    private activatedRoute : ActivatedRoute)
    
    {
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
      this.dataService.getProductByCatId(this.id).subscribe((response: IProduct[])=>{
        this.products=response;
      }) 
    }

  onButtonClicked(product : IProduct){
    this.router.navigate(['products-detail',product.productId])
  }
}
