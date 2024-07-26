import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../../common/nav/nav.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-customer',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule,NavComponent,],
  templateUrl: './all-customer.component.html',
  styleUrl: './all-customer.component.css'
})
export class AllCustomerComponent {

    public customerList:any;
    public selectEmployee={
      id:"",
      name:"",
      contact:"",
      department:"",
      rollId:""
    }

    constructor(private http:HttpClient){
      this.lordCustomerTable()
    }

    lordCustomerTable(){
      this.http.get("http://localhost:8080/cus-controller/get-all").subscribe(res=>{
        this.customerList=res;
        console.log(res);
      })
    }

    deleteCustomer(customer:any){

      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.http.delete(`http://localhost:8080/cus-controller/delete-customer/${customer.customerId}`).subscribe(res=>{
            this.lordCustomerTable();
            swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            }); 
            console.log(res);
              
          })  
          console.log(customer);
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error"
          });
        }
      });
      
    }

    updateCustomer(customer:any){

    

    }
    
}

