import { Component, OnInit } from '@angular/core';
import{ EmployeeService } from '../employee.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  base64textString = [];
  see:any;
  show:any;
  constructor(public data:EmployeeService,private toastr: ToastrService) {
  
   }

  ngOnInit() {
  }

  file(evt){ 
    const file = evt.target.files[0];
    if (file) {
      const reader = new FileReader();
  
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(e) {
    this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
    console.log(this.base64textString)
  }

  sendData(value){
    let data = {
      // userPic:this.base64textString,
      altnum:value.altnum,
      ccity:value.ccity,
      collage:value.collage,
      country:value.country,
      ugcourse:value.ugcourse,
      cpercentage:value.cpercentage,
      cstate:value.cstate,
      cstreet:value.cstreet,
      czip:value.czip,
      dateofbirth:value.dateofbirth,
      dcourse:value.dcourse,
      diploma:value.diploma,
      doj:value.doj,
      dol:value.dol,
      dpercentage:value.dpercentage,
      dpict:value.dpict,
      element_8:value.element_8,
      email:value.email,
      fathername:value.fathername,
      firstname:value.firstname,
      lastname:value.lastname,
      mothername:value.mothername,
      pcity:value.pcity,
      pcountry:value.pcountry,
      percentage:value.percentage,
      phonenum:value.phonenum,
      pic:value.pic,
      pict:value.pict,
      picture1:value.picture1,
      picture2:value.picture2,
      picture3:value.picture3,
      pstate:value.pstate,
      pstreet:value.pstreet,
      pzip:value.pzip,
      school:value.school,
      spercentage:value.spercentage,
      sschool:value.sschool,
      ug:value.ug,
      pg:value.pg,
      pcollage:value.pcollage,
      pgcourse:value.pgcourse,
      pgpercentage:value.pgpercentage,
      pgfile:value.pgfile

    }
    this.data.senddata(data).subscribe(res=>{
      console.log(data)

      this.toastr.success(' successfully added!');
      location.reload();
    }) 
  };
  change(value){
    this.see = value;
    console.log(this.see);
   } 
   chang(value){
    this.show=value;
    console.log(this.show);

   }
  

   
}
