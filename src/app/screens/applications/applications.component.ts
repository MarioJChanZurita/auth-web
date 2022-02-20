import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { App } from '../../models/App';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  public apps : App[]

  constructor(
    private appService: AppService
  ) { 
    this.apps = []
  }

  ngOnInit(): void {
    this.getApplications()
  }

  getApplications() {
    this.appService.getApplications().subscribe({
      next: (res) => this.apps = res,
      error: (res) => console.log(res)
    })
  }

}
