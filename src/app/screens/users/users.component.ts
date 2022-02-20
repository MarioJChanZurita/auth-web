import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: any[] 

  constructor(
    private appService: AppService
  ) { 
    this.users = []
  }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.appService.getUsers().subscribe({
      next: (res) => this.users = res,
      error: (res) => console.log(res)
    })
  }

}
