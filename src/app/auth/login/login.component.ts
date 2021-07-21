import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../shared/auth.service'
import { HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errors: any = []

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login(form: NgForm): void {
    this.authService.login(form.value).subscribe(
      (token) => {
        console.log(token);
        this.router.navigateByUrl('/');
      },
      (err: HttpErrorResponse) => {
        this.errors = err.error.errors;
        //console.log(err.error.errors)
        //console.error(err);
      }
    )
  }

}
