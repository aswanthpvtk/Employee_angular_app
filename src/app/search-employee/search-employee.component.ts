import { Component } from '@angular/core';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent {
  id=""

  readValues=()=>
  {
    let data:any={"id":this.id}
    console.log(data)
  }
}
