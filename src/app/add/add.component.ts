import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { EmpdataService } from '../empdata.service';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  employeeForm: FormGroup;
  
  

  constructor(private fb: FormBuilder, private EmpData: EmpdataService) {
    this.createEmployeeForm();
  }

  ngOnInit(): void {
    
  }
    
  createEmployeeForm()
  {
    this.employeeForm = this.fb.group({
      id: ['', Validators.required],
      username: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      phone_number: ['', Validators.required],
      designation: ['', Validators.required],
      complete_address: ['', Validators.required],
    });
   console.log(this.employeeForm);
  //  this.employeeForm.get('username').valueChanges.subscribe((value)=>{});
  }

  handleSubmit(event:MouseEvent) {

    event.preventDefault();
    if (this.employeeForm.invalid) {
      console.log('Invalid id value');
      return;
    }

    this.EmpData
    .addEmployeeData({ ...this.employeeForm.value, })
     .subscribe((data) => {
      this.employeeForm.reset();
      // console.log(data);
      // console.log("itemadd");
    });
    
  }

}
