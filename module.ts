import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login } from '../login.component'; // Login Component
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'AuthGuardService';

const routes: Routes = [
  {
    path: '',
    component: Login,
    canActivate : [AuthGuardService] // Returns true if user matches else returns false.
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [Login]
})
export class module { }
