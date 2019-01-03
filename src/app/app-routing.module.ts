import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './project/events.component';
import { SpecialEventsComponent } from './project/special-events.component';
import { LoginComponent } from './project/login.component';
import { RegisterComponent } from './project/register.component';
import { AuthGuard } from './project/auth.guard';

const routes: Routes = [
  { path:'', redirectTo:'/events', pathMatch:"full"},
  { path:'events', component:EventsComponent},
  { path:'special', component:SpecialEventsComponent, canActivate: [AuthGuard]},
  { path:'login', component: LoginComponent},
  { path:'register', component: RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
