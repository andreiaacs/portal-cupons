import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CuponsComponent } from './cupons/cupons.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'cupons', component: CuponsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
