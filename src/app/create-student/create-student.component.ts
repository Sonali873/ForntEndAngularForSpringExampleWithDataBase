import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css'],
  standalone:true,
  imports:[ReactiveFormsModule]
})
export class CreateStudentComponent implements OnInit {
  //router: any;

  constructor( private Service: ServiceService,private fb: FormBuilder,private router: Router) {}


  dataform = this.fb.group({
    id: ['', Validators.required],
    fname: ['', Validators.required],
    lname: ['', Validators.required],
    email: ['', Validators.email],
    // Add other form controls here
  });

  ngOnInit() {
   
  }

  submitData(){
    // Handle form submission logic
    console.log(this.dataform.value);
    console.log("hi..")
    this.Service.createStudent(this.dataform.value).subscribe(data =>{
      console.log(data);
      this.goToEStudentList();
    }),
     console.log("");

  }

   goToEStudentList(){
     this.router.navigate(['/list-Student']);
   }
}
