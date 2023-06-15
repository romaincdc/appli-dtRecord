import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

  export class LoginPage implements OnInit {
    email: string = '';
    password: string = '';
  
    constructor(private authService: AuthService,  private router: Router,) {}
  
    ngOnInit(): void {}
  
    login(): void {
      const form = {
        email: this.email,
        password: this.password,
      };
      this.authService.login(form).then((res: any) => {
        if (res === true){
          this.router.navigate([`/welcome`]);
        } else {
          console.log('error', 'Error');
        }
      });
    }
  }