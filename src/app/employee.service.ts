import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import{map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  mydata:any;
  baseURl='https://5cf805cf7f67dd0014a6300b.mockapi.io/api/v1/'
  constructor(public http:Http) { }
  senddata(value){ 
    return this.http.post(this.baseURl+'employee',value)
    .pipe(map(data=>this.mydata=data.json()))
  }
  getdata(){ 
    return this.http.get(this.baseURl+'employee')
    .pipe(map(data=>this.mydata=data.json()))
  }
  delete(value){ 
    return this.http.delete(this.baseURl+'employee/'+value)
    .pipe(map(data=>this.mydata=data.json()))
  }
  update(id, value){ 
    return this.http.put(this.baseURl+'employee/' +id, value)
    .pipe(map(data=> {
      console.log('data ------------', data)
      return this.mydata=data.json();
    })
  )
    
  }
  getLogin(){ 
    return this.http.get(this.baseURl+'/login')
    .pipe(map(data=>this.mydata=data.json()))
  }
}
