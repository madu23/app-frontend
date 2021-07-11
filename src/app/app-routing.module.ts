import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AuthGuard } from './helpers/auth-guard';
import { LayoutComponent } from './shared/layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
const routes: Routes = [
  {
    path: 'app',
    component: LayoutComponent,
    children: [
      {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard], pathMatch: 'full'}
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent, pathMatch: 'full'},
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    NgxDropzoneModule
  ],
  exports: [RouterModule, NgxDropzoneModule]
})
export class AppRoutingModule { }
