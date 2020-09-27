import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { TermsAndConditionsComponent } from './help/terms-and-conditions/terms-and-conditions.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { PageNotFoundComponent } from './page-not-found.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  // {path: 'singUp/:id', component: SingUpComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'singIn', component: SingInComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'help', component: HelpComponent, children: [
    {path: 'terms-and-conditions', component: TermsAndConditionsComponent}
  ]},
  {path: '**', component: PageNotFoundComponent}
  
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
