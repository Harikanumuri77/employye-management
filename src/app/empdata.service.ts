import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Employee } from 'src/models/empinterface';
import { Observable, observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EmpdataService {
  
  constructor(private http: HttpClient) { }
  baseUrl="https://api.onlinewebtutorblog.com/employees";

  // public fetchAll(): Observable<Employee[]> {
  //   const observable = this.http.get<Employee[]>(`${this.baseUrl}/empData`);
  //   return observable;
  //   }

  
  getEmployeeData() {
    return this.http.get("https://api.onlinewebtutorblog.com/employees")
  }
  // addEmployeeData(){
  //   return this.http.post("https://api.onlinewebtutorblog.com/employees",{})
  // }
  public addEmployeeData(empt: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.baseUrl}`, empt);
    console.log('Added a employee')
  }
  
  // updateEmployeeData() {
  //   return this.http.patch("https://api.onlinewebtutorblog.com/employees", {})
  // }
  public updateEmployeeData(id: number): Observable<Employee> {
    return this.http.put<Employee>(`${this.baseUrl}/${id}`, id);
  }
  // deleteEmployeeData(id:number) {

  //   return this.http.delete("https://api.onlinewebtutorblog.com/employees",) 
  // }
  public deleteEmployeeData(id: number): Observable<Employee> {
    return this.http.delete<Employee>(`${this.baseUrl}/${id}`);
  }

}
