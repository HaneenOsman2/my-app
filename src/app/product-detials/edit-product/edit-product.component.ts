import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productID: any
  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.productID = this.router.snapshot.paramMap.get('id')

    console.log(this.productID);
    
  }
}
