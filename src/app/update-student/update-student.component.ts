import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-student',
  standalone: true,
  imports: [ReactiveFormsModule,],
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.css'
})
export class UpdateStudentComponent implements OnInit{
  studentId!: number;
  
  
  constructor(private Service: ServiceService,
    private route: ActivatedRoute,private formBuilder: FormBuilder,
    private router: Router) { }
    updateForm = this.formBuilder.group({
      id:['',Validators.required],
    fname: ['', Validators.required],
    lname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  ngOnInit(): void {
    
   //this.id = this.route.snapshot.params['id'];
   this.route.params.subscribe(params => {
    this.studentId = +params['id'];})
    
    this.Service.getStudentById(this.studentId).subscribe((data :any)=> {
      this.updateForm.controls.email.setValue(data.email);
      this.updateForm.controls.fname.setValue(data.fname);
      this.updateForm.controls.lname.setValue(data.lname);
      this.updateForm.controls.id.setValue(data.id);
    }), 
     console.log(this.updateForm);
  }
  


  onSubmit(){
    const data=this.updateForm.value;
    //debugger 
    //console.log("======="+this.updateForm.controls.firstName.get);
    //console.log(this.studentId);
    this.Service.updateStudent(this.studentId, this.updateForm.value).subscribe( (data: any) =>{
      this.goToEmployeeList();
    }),
      console.log();
  }

  goToEmployeeList(){
    this.router.navigate(['/list-Student']);
  }

}
