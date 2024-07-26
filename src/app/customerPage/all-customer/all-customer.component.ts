import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../../common/nav/nav.component';

@Component({
  selector: 'app-all-customer',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule,NavComponent],
  templateUrl: './all-customer.component.html',
  styleUrl: './all-customer.component.css'
})
export class AllCustomerComponent {

    public customerList:any;

    constructor(private http:HttpClient){
      this.lordCustomerTable()
    }

    lordCustomerTable(){
      this.http.get("http://localhost:8080/cus-controller/get-all").subscribe(res=>{
        this.customerList=res;
        console.log(res);
      })
    }
}
