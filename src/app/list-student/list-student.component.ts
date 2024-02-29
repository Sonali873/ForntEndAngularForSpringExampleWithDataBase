import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-student.component.html',
  styleUrl: './list-student.component.css'
})
export class ListStudentComponent implements OnInit{
  data:any;
  constructor( private Service: ServiceService,private fb: FormBuilder,private router: Router) {}

  // dataform = this.fb.group({
  //   firstName: ['', Validators.required],
  //   lastName: ['', Validators.required],
  //   emailId: ['', Validators.email],
    // Add other form controls here
  //});
  ngOnInit(): void {
    
    this.getStudentList();
  }

  private getStudentList(){
     this.Service.getStudentList().subscribe((data1: any) => {
      console.log(data1);
      this.data = data1;
    });
  }

  studentDetails(id: number){
    this.router.navigate(['student-details', id]);
  }
  updateStudent(id: number){
    console.log(id);
    this.router.navigate(['/update-Student', id]);
  }

  deleteStudent(id: number){
    this.Service.deleteStudent(id).subscribe( (data: any) => {
      console.log(data);
      this.getStudentList();
    })
  }
  createStudent (){
    this.router.navigate(['/create-Student']);
  }
}
