import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";
import * as moment from 'moment'
import { Router } from '@angular/router';


const jwt = new JwtHelperService();

class DecodeToken {
  userid: string = ''
  username: string = ''
  exp: number = 0
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private decodeToken: DecodeToken;

  constructor(private http: HttpClient,
    private router: Router) {
    this.decodeToken = JSON.parse(localStorage.getItem('app-meta')!) || new DecodeToken()
  }

  getToken(): string | null {
    return localStorage.getItem('app-auth');
  }


  isAuthenticated() {
    return moment().isBefore(moment.unix(this.decodeToken.exp));
  }

  register(userdata: any): Observable<any> {
    return this.http.post('/api/v1/users/register', userdata)
  }

  login(userdata: any): Observable<any> {
    return this.http.post('/api/v1/users/login', userdata).pipe(
      map((token) => {
        this.decodeToken = jwt.decodeToken(token as string);
        localStorage.setItem('app-auth', token as string);
        localStorage.setItem('app-meta', JSON.stringify(this.decodeToken));
        return token;
      }
      ))
  }

  logout(): void {
    localStorage.removeItem('app-auth');
    localStorage.removeItem('app-meta');
    this.decodeToken = new DecodeToken();

    this.router.navigateByUrl('/');
  }
}
