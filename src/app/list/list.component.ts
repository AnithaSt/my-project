import { Component, OnInit } from '@angular/core';
import{ EmployeeService } from '../employee.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  bindData:any;

  constructor(public service:EmployeeService) { }

  ngOnInit() {

    
    this.service.getdata().subscribe(res=>{
      this.bindData = res;
      console.log(res)
    })
    
  }
  del(value){    
      Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this Data!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
    this.service.delete(value).subscribe(res=>{
      this.ngOnInit();
          Swal.fire(
            'Deleted!',
            'Your Data has been deleted.',
            'success'
          )
         
    })

        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            'Your Data is safe :)',
            'error'
          )
        }
      })
      
      
  }

}
