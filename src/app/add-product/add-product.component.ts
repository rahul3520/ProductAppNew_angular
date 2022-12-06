import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  code=""
  name=""
  mfgDate=""
  expDate=""
  brand=""
  price=""
  sellarName=""
  distributorName=""

  constructor(private api:ApiService){}

  readProduct=()=>
  {
    let data:any={"code":this.code,"name":this.name,"mfgDate":this.mfgDate,"expDate":this.expDate,"brand":this.brand,"price":this.price,"sellarName":this.sellarName,"distributorName":this.distributorName}
    
    console.log(data)

    this.api.addProduct(data).subscribe(

      (response:any)=>
      {
        console.log(response)

        if(response.status == "success")
        {
          alert("product added successfully")
          this.code=""
          this.name=""
          this.mfgDate=""
          this.expDate=""
          this.brand=""
          this.price=""
          this.sellarName=""
          this.distributorName=""

        }
        else
        {
            alert("something went wrong")
        }
      }
    )
  
  }

}
