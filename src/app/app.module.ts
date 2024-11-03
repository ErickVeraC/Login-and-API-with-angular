import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  {
    path: 'detailPage/:id',
    component: DetailPageComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    LoginComponent,
    DetailPageComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
