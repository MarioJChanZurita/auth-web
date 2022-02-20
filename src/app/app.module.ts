import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

//Material
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { TableComponent } from './components/table/table.component';
import { UsersComponent } from './screens/users/users.component';
import { ApplicationsComponent } from './screens/applications/applications.component';
import { ProfileComponent } from './screens/profile/profile.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';

//Modules
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { MenuOptionsComponent } from './components/menu-options/menu-options.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CardComponent,
    TableComponent,
    UsersComponent,
    ApplicationsComponent,
    ProfileComponent,
    DashboardComponent,
    MenuOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
