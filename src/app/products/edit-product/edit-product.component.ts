import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from 'src/app/Service/products.service';
import { product } from 'src/app/product-interface';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {


  @Input() visible: boolean = false
  @Output() outVisible: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Input() product: product


  constructor(private productServ: ProductsService) { }

  ngOnInit() {
  }


  updateTheProduct() {
    this.productServ.updateProduct(this.product).subscribe(res => {
      console.log(res);
      this.visible = false
      this.outVisible.emit(false)
    })
  }

  setVisible() {
    this.outVisible.emit(false)
  }

}
