import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { App } from './models/App';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient
  ) { }

  getApplications() : Observable<App[]> {
    return this.http.get<App[]>('http://localhost:8080/api/app/getAllApps')
  }

  getUsers() : Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/api/user/getAllUsers')
  }

}
