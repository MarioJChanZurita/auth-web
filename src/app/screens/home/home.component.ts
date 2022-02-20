import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { App } from '../../models/App';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public applications: App[]

  constructor(
    private appService: AppService
  ) { 
    this.applications = []
  }

  ngOnInit(): void {
    this.getApplications()
  }

  private getApplications() {
    this.appService.getApplications().subscribe({
      next: (res) => this.applications = res
    })
  }

}
