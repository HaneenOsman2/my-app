import { Component, EventEmitter, Output } from '@angular/core';
import { ProductsService } from '../Service/products.service';
import { product } from '../product-interface'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  allProduct!: any;
  categories!: any;
  loader: boolean = false
  searchText: string = '';
  data:product[]=[]
  filterdData:any;
  title='appnew'
  isEditing:boolean=false;
  product:product;
  categoriesEdit:string[];

  constructor(private productService: ProductsService) {
   }

  ngOnInit(): void {
    localStorage.setItem("currentPage", '/home');

    this.productService.getAllProducts().subscribe({

      next: (res) => {
        // console.log(res);
        this.allProduct = res

      },
      error: (err) => {
        console.log(err);

      }
    })

    this.productService.getAllCategories().subscribe({

      next: (res) => {
        // console.log(res);
        this.categories = res

      },
      error: (err) => {
        console.log(err);

      }
    })

    this.productService.getAllProducts().subscribe(res=>{
      this.data=res as product[]
      this.filterdData=this.data
    })

  }

  selectedCategories($event: any) {
    let value = $event.target.innerHTML.toLowerCase();
    let id = value
    // value == 'all' ? this.productService.getAllProducts() :this.productService.getSpecificCategory(id)
    this.productService.getSpecificCategory(id).subscribe({
      next: (res) => {
        // console.log(res);
        this.allProduct = res

      },
      error: (err) => {
        console.log(err);

      }
    })

  }

  onSearchTextChanged(event: any) {
    this.filterdData = this.data.filter(el=>el.title.toLowerCase().includes(event.toLowerCase()));    
  }

  toggleEdit(){
    this.isEditing=!this.isEditing
  }

}
