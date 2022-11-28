import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent {
id=""

readValues=()=>
{
  let data:any={"id":this.id}
  console.log(data)
}

}
