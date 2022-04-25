import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpdataService } from '../empdata.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  employeeForm: FormGroup;
  employeeId: number;

  constructor(
    private fb: FormBuilder,
    private empdataservice: EmpdataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.createEmployeeForm();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.employeeId = params.id;
      this.empdataservice.updateEmployeeData
        (+this.employeeId)
        .subscribe((data) => {
          this.employeeForm.controls['id'].patchValue(data.id);
          this.employeeForm.controls['username'].patchValue(data.username);
          this.employeeForm.controls['name'].patchValue(data.name);
          this.employeeForm.controls['email'].patchValue(data.email);
          this.employeeForm.controls['phone_number'].patchValue(data.phone_number);
          this.employeeForm.controls['designation'].patchValue(data.designation);
          this.employeeForm.controls['complete_address'].patchValue(data.complete_address);
          
        });
    });
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
    this.employeeForm.get('username').valueChanges.subscribe(()=>{});
  }

  handleSubmit(event: MouseEvent) {
    event.preventDefault();
    if (this.employeeForm.invalid) {
      return;
    }
    this.empdataservice
      . updateEmployeeData( { ...this.employeeForm.value })
      .subscribe((data) => {
        this.employeeForm.reset();
        this.router.navigateByUrl('/add');
      });
  }

}
