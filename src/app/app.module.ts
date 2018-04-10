import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule,Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { EditEmployeeComponent } from './pages/edit-employee/edit-employee.component';
import { EmployeeComponent } from './pages/employee/employee.component';


const appRoutes: Routes = [
	{ path: 'Add-Employee',component : AddEmployeeComponent },
	{ path: 'Edit-Employee',component : EditEmployeeComponent },
	{ path: 'Employee',component : EmployeeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
	RouterModule.forRoot(appRoutes),
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
