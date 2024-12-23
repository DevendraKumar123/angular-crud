import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { state } from '@angular/animations';
import { StudentModel } from '../../model/student';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  StudentForm: FormGroup = new FormGroup({});

  studentObj: StudentModel = new StudentModel();

  constructor() {
    this.createForm();
  }
  createForm() {
    this.StudentForm = new FormGroup({
      stdid: new FormControl(this.studentObj.stdid),
      name: new FormControl(this.studentObj.name),
      email: new FormControl(this.studentObj.email),
      contact: new FormControl(this.studentObj.contact),
      city: new FormControl(this.studentObj.city),
      state: new FormControl(this.studentObj.state),
      address: new FormControl(this.studentObj.address),
      pincode: new FormControl(this.studentObj.pincode),

    });
  }
  onSave() {
    // console.log(this.StudentForm.value);
    
  } 
}

