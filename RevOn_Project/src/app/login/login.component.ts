
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { signupModel } from '../usersignup/usersignup.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterOutlet, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent{
  loginObj: loginModel = new loginModel()
  constructor(private router: Router){}
  onLogin(){
    debugger;
    const localusers = localStorage.getItem('users');
    if(localusers != null){
      const users = JSON.parse(localusers);
      const isUserExist = users.find((user:signupModel)=> user.email == this.loginObj.email && user.password == this.loginObj.password);
      if(isUserExist != undefined){
        alert("User Found");
        localStorage.setItem('loggedUser', JSON.stringify(isUserExist));
        this.router.navigateByUrl('/search');
      }
      else{
        alert("No user found");
      }
    }

  }
}
export class loginModel{ 
  email: string;
  password: string;
  constructor(){
    this.email = "";
    this.password = "";
  }

}

