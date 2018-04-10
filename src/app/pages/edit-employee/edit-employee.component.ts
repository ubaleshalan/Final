import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
	
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