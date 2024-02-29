import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Student } from './student';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  private baseURL = "http://localhost:8080/user";
  private baseURL1 = "http://localhost:8080/adduser";
  private baseURL2 = "http://localhost:8080/userbyid";
  private baseURL3 = "http://localhost:8080/updateuser";
  private baseURL4 = "http://localhost:8080/deleteuser";
  constructor(private fb: FormBuilder,private httpClient:HttpClient) {
    
  }



  createStudent(dataform:any): Observable<any>{
    console.log(dataform);
    return this.httpClient.post(`${this.baseURL1}`, dataform);
  }
  updateStudent(id: number,dataform:any ): Observable<any>{
    console.log(dataform)
    return this.httpClient.put(`${this.baseURL3}/${id}`, dataform);
  }
  
  getStudentList(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${this.baseURL}`);
}

getStudentById(id: number): Observable<Student>{
//     let data = { id:1,firstName: 'John Doe', lastName: "jadhav",emailId:"sona@gmail" }
// return of(data);
  return this.httpClient.get<Student>(`${this.baseURL2}/${id}`);
}



deleteStudent(id: number): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL4}/${id}`);
}
}

