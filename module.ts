import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login } from '../login.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'CanActivate';

const routes: Routes = [
  {
    path: '',
    component: UpdateCollectionComponent,
    canActivate : [AuthGuardService]
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
