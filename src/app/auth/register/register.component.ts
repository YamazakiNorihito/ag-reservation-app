import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../shared/auth.service'
import { HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  errors: any = []

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  register(form: NgForm): void {
    this.authService.register(form.value).subscribe(
      (data) => {
        console.log(data);
        this.router.navigateByUrl('/login');
      },
      (err: HttpErrorResponse) => {
        this.errors = err.error.errors;
        //console.log(err.error.errors)
        //console.error(err);
      }
    )
  }

}
