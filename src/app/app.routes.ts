import { createSignal } from '@angular/core/primitives/signals';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { NgModule } from '@angular/core';
import { ListStudentComponent } from './list-student/list-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: ListStudentComponent },

    { path: 'create-Student', component: CreateStudentComponent },
    { path: 'list-Student', component: ListStudentComponent },
    { path: 'update-Student/:id', component: UpdateStudentComponent },
  
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}