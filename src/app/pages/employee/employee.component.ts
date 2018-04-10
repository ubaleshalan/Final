import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
	
	users : any = [{_id : 1 ,emp_id : "23456789" , name : "Shalan" , department : "Computer" , country : "India" , state : "Maharastra" , city:"Pune" , cont : "9658643589"},{_id : 2 ,emp_id : "23566789" , name : "Amruta" , department : "Electronics" , country : "India" , state : "Maharastra" , city:"Pune" , cont : "9658786579"},{_id : 3 ,emp_id : "56856789" , name : "Apeksha" , department : "Computer" , country : "India" , state : "Maharastra" , city:"Pune" , cont : "9658453589"},{_id : 4 ,emp_id : "28966789" , name : "Mayuri" , department : "Electronics" , country : "India" , state : "Maharastra" , city:"Pune" , cont : "9658643219"}]

  constructor() { }

  ngOnInit() {
  }

}
