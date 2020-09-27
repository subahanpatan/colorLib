import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HelpComponent } from './help/help.component';
import { TermsAndConditionsComponent } from './help/terms-and-conditions/terms-and-conditions.component';
import { DropdownService } from './shared/dropdown.service';
import { HelpService } from './shared/help.service';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { SingInComponent } from './sing-in/sing-in.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { DataSharingService } from './shared/data-sharing.service';
import { AdminService } from './shared/admin.service';
import { AlertService } from './shared/alert.service';
import { AuthenticationService } from './shared/authentication.service';
import { UserService } from './shared/user.service';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    NavigationBarComponent,
    HelpComponent,
    TermsAndConditionsComponent,
    FooterComponent,
    SingUpComponent,
    SingInComponent,
    AdminComponent,
    RegisterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ DropdownService, HelpService, AdminService, DataSharingService, AlertService, AuthenticationService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
