import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { RegisterComponent } from './register/register.component'
import { ValidateOtpComponent } from './validate-otp/validate-otp.component';
import { RestorePasswordComponent } from './restore-password/restore-password.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    ValidateOtpComponent,
    RestorePasswordComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
