import { Component, OnInit } from '@angular/core';
import{ EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  edit:any;
  id:any;
  base64textString:any=[];
  bindData:any;
  display:any={
    firstname:'',
    lastname:'',
    dateofbirth:'',
    element_8:'',
    fathername:'',
    mothername:'',
    cstreet:'',
    ccity:'',
    cstate:'',
    czip:'',
    country:'',
    pstreet:'',
    pcity:'',
    pstate:'',
    pzip:'',
    pcountry:'',
    email:'',
    phonenum:'',
    altnum:'',
    school:'',
    percentage:'',
    sschool:'',
    spercentage:'',
    collage:'',
    ug:'',
    ugcourse:'',
    cpercentage:'',
    pcollage:'',
    pg:'',
    pgcourse:'',
    pgpercentage:'',
    pgfile:'',
    doj:'',
    dol:'',
    diploma:'',
    dcourse:'',
    dpercentage:'',
    pic:'',
    pict:'',
    dpict:'',
    picture:'',
    picture1:'',
    ugpicture:'',
    picture3:''
  }


  constructor(public service:EmployeeService,private route:ActivatedRoute,private spinner:NgxSpinnerService,public routing:ActivatedRoute,private toastr: ToastrService) { }

  see:any;
  show:any;
  ngOnInit() {
    this.id=this.routing.snapshot.params['id'];
    console.log(this.id);
    this.service.getdata().subscribe(res=>{
      this.bindData=res;
      for(let i=0;i<this.bindData.length;i++){
        if(this.id===this.bindData[i].id){
          this.display.id=this.bindData[i].id;
          this.display.firstname = this.bindData[i].firstname;
          this.display.lastname = this.bindData[i].lastname;
          this.display.dateofbirth = this.bindData[i].dateofbirth;
          this.display.element_8 = this.bindData[i].element_8;
          this.display.fathername = this.bindData[i].fathername;
          this.display.mothername = this.bindData[i].mothername;
          this.display.cstreet = this.bindData[i].cstreet;
          this.display.cstate = this.bindData[i].cstate;
          this.display.ccity = this.bindData[i].ccity;
          this.display.czip = this.bindData[i].czip;
          this.display.country = this.bindData[i].country;
          this.display.pstreet = this.bindData[i].pstreet;
          this.display.pstate = this.bindData[i].pstate;
          this.display.pcity = this.bindData[i].pcity;
          this.display.pzip = this.bindData[i].pzip;
          this.display.pcountry = this.bindData[i].pcountry;
          this.display.email = this.bindData[i].email;
          this.display.phonenum = this.bindData[i].phonenum;
          this.display.altnum = this.bindData[i].altnum;
          this.display.school = this.bindData[i].school;
          this.display.percentage = this.bindData[i].percentage;
          this.display.sschool = this.bindData[i].sschool;
          this.display.spercentage = this.bindData[i].spercentage;
          this.display.phonenum = this.bindData[i].phonenum;
          this.display.collage = this.bindData[i].collage;
          this.display.ug = this.bindData[i].ug;
          this.display.ugcourse = this.bindData[i].ugcourse;
          this.display.cpercentage = this.bindData[i].cpercentage;
          this.display.doj = this.bindData[i].doj;
          this.display.dol = this.bindData[i].dol;
          this.display.diploma = this.bindData[i].diploma;
          this.display.dcourse = this.bindData[i].dcourse;
          this.display.dpercentage = this.bindData[i].dpercentage;
          this.display.pcollage = this.bindData[i].pcollage;
          this.display.pg= this.bindData[i].pg;
          this.display.pgcourse= this.bindData[i].pgcourse;
          this.display.pgpercentage = this.bindData[i].pgpercentage;
          // this.display.pic = this.bindData[i].userPic
          // this.display.pic = this.bindData[i].pic;
          // this.display.pict = this.bindData[i].pict;
          // this.display.dpict = this.bindData[i].dpict;
          // this.display.picture= this.bindData[i].picture;
          // this.display.picture1 = this.bindData[i].picture1;
          // this.display.picture2 = this.bindData[i].picture2;
          // this.display.picture3 = this.bindData[i].picture3;
          console.log(this.bindData[i])
          console.log(this.display)
          
        }
      }
    })

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
  updates(value){
    let data  = {
      userPic:this.base64textString,
      altnum:value.altnum,
      ccity:value.ccity,
      collage:value.collage,
      country:value.country,
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
      ugpicture:value.ugpicture,
      ugcourse:value.ugcourse,
      picture3:value.picture3,
      pstate:value.pstate,
      pstreet:value.pstreet,
      pzip:value.pzip,
      school:value.school,
      spercentage:value.spercentage,
      sschool:value.sschool,
      ug:value.ug,
      pcollage:value.pcollage,
      pgcourse:value.pgcourse,
      pgpercentage:value.pgpercentage,
      pgfile:value.pgfile

    }
    this.id=this.routing.snapshot.params['id'];
    console.log('the id am passing --------' ,this.id);  
    console.log('value am passing ----------', value)
    this.service.update(this.id,data).subscribe(res=>{
    this.bindData=res;
    this.toastr.success(' successfully added!');
    })
 
  } 
  change(value){
    this.see = value;
    
    console.log(this.see);
   } 
   chang(value){
    this.show=value;
    console.log(this.show);

   }

}
