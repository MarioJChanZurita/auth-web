import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { HomeComponent } from './screens/home/home.component';
import { UsersComponent } from './screens/users/users.component';
import { ApplicationsComponent } from './screens/applications/applications.component';
import { ProfileComponent } from './screens/profile/profile.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UsersComponent },
      { path: 'applications', component: ApplicationsComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
