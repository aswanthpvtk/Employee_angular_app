import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  name=""
  desig=""
  phone=""
  salary=""
  empcode=""
  email=""
  cow=""
  yoe=""






  readValues=()=>
  {
    let data:any={"name":this.name,"desig":this.desig,"phone":this.phone,"salary":this.salary,
                    "empcode":this.empcode,"email":this.email,"cow":this.cow,"yoe":this.yoe}
    console.log(data)
  }
}
