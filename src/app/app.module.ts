import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ViewComponent } from './view/view.component';
import { EmployeeComponent } from './employee/employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateComponent } from './update/update.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DetailComponent,
    ListComponent,
    ViewComponent,
    EmployeeComponent,
    DashboardComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    BsDatepickerModule.forRoot(),
    NgxSpinnerModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot({     
      timeOut: 3000,
      positionClass: 'toast-center-center',
      preventDuplicates: true,      
    }),
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:"",pathMatch:'full',redirectTo:'home'},
      {path:'home',component:HomeComponent}, 
      {path:'dashboard',component:DashboardComponent},         
      {path:'employee',component:EmployeeComponent,
      children: [
        
        {path:'detail',component:DetailComponent},
        {path:'list',component:ListComponent},
        {path:'view/:id',component: ViewComponent},
        {path:'update/:id',component:UpdateComponent},
      ]}
    ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
