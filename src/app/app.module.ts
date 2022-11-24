import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';

const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"add",
    component:AddEmployeeComponent
  },
  {
    path:"search",
    component:SearchEmployeeComponent
  },
  {
    path:"view",
    component:ViewEmployeeComponent
  },
  {
    path:"delete",
    component:DeleteEmployeeComponent
  },
  {
    path:"edit",
    component:EditEmployeeComponent
  },



]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    SearchEmployeeComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    DeleteEmployeeComponent,
    ViewEmployeeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
