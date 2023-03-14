import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddpatientComponent } from './dashboard/addpatient/addpatient.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientdetailsComponent } from './dashboard/patientdetails/patientdetails.component';
import { NgxEditorModule } from 'ngx-editor';
import { SanitizeHtmlPipePipe } from './SanitizeHtmlPipe.pipe';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    DashboardComponent,
    AddpatientComponent,
    PatientdetailsComponent,
    SanitizeHtmlPipePipe,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule ,
    NgxEditorModule.forRoot({
       
    }),
 
    BrowserAnimationsModule,
    MatDatepickerModule
    ,MatNativeDateModule,
    MatInputModule,
    MatCardModule

  ],
  providers: [httpInterceptorProviders,ConfirmationDialogService],
  entryComponents: [ ConfirmationDialogComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
