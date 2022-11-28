import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {
  id=""

  readValues=()=>
  {
    let data:any={"id":this.id}
    console.log(data)
  }
}
