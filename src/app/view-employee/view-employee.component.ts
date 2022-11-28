import { Component } from '@angular/core';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {

  data:any=[
    {
      "name":"Aswanth",
      "desig":"Software engineer",
      "phone":"9876543210",
      "salary":"5678"
    },
    {
      "name":"sanu",
      "desig":"tester",
      "phone":"9876545667",
      "salary":"34567"
    },
    {
      "name":"eli",
      "desig":"tester",
      "phone":"9845675423",
      "salary":"9876"
    }
  ]

}
