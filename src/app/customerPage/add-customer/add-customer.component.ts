import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Comment } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule,],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {

  public customerOb={

    customerName:"",
    city:"",
    phoneNumber:"",
  }

  constructor(private http: HttpClient){}

  addCustomer(){

    this.http.post("http://localhost:8080/cus-controller/add-customer",this.customerOb).subscribe(
      (data) =>{
        console.log("add");
        
      }
    )
  }
} 
