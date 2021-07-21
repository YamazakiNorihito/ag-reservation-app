import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(userdata: any): Observable<any> {
    return this.http.post('/api/v1/users/register', userdata)
  }

  login(userdata: any): Observable<any> {
    return this.http.post('/api/v1/users/login', userdata)
  }
}
