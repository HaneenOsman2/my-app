import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../Service/products.service';
import { product } from '../product-interface'

@Component({
  selector: 'app-product-detials',
  templateUrl: './product-detials.component.html',
  styleUrls: ['./product-detials.component.css']
})
export class ProductDetialsComponent {
  id!: string
  productInfo!: product
  constructor(private activated: ActivatedRoute, private pService: ProductsService) { }

  ngOnInit(): void {
    this.id = this.activated.snapshot.params['id']
    this.pService.getSingleProducts(this.id).subscribe({
      next: (res) => {
        this.productInfo = res
        console.log(this.productInfo);

      },

      error: (err) => {
        console.log(err);

      }
    })

  }

}
