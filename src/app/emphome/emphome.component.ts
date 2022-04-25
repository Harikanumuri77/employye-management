import { Component, OnInit } from '@angular/core';
import { EmpdataService } from '../empdata.service';
import { Employee } from '../../models/empinterface';

@Component({
  selector: 'app-emphome',
  templateUrl: './emphome.component.html',
  styleUrls: ['./emphome.component.css']
})
export class EmphomeComponent implements OnInit {

  constructor(private _http: EmpdataService) { }

  ngOnInit(): void { }

  empData: Employee[] = [];

  getEmpData() {
    this._http.getEmployeeData().subscribe((data: any) => {
      // console.log(data);
      this.empData = data.data;
      console.log(this.empData);
    });
  }

  addEmployee(id:any) {
    this._http.addEmployeeData(id).subscribe((data: any) => {
      console.log(data);
    })
    
  }

  updateEmployee(id:any) {
    this._http.updateEmployeeData(id).subscribe((data: any) => {
      console.log(data);
    });
  }

  handledelete(id:number) {
    this._http.deleteEmployeeData(id).subscribe((data:any) => {
      this.empData = this.empData.filter((emp) => emp.id !== data.id);
    });
  }
    // this._http.deleteEmployeeData().subscribe((data:any) => {
    // console.log(data)
    // })
  }


