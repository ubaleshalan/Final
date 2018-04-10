import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
	
	user : any = {}

  constructor() { }

  ngOnInit() {
  }


getModel(yname){
			console.log(yname);
		}
		onSubmit(userModel, userForm){
			console.log(userModel, userForm);
		}
}