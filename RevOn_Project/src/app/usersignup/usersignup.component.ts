
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet, Router, RouterModule } from '@angular/router';



@Component({
  selector: 'app-usersignup',
  standalone: true,
  imports: [FormsModule, RouterOutlet, RouterLink],
  templateUrl: './usersignup.component.html',
  styleUrl: './usersignup.component.css'
})

export class UsersignupComponent {
  signupObj: signupModel = new signupModel();
  constructor(private router: Router){}

  onSignUp() {
    // debugger;
    const localusers = localStorage.getItem('users');
    if (localusers != null) {
      const users = JSON.parse(localusers);
      users.push(this.signupObj);
      localStorage.setItem('users', JSON.stringify(users));
    }
    else {
      const users = [];
      users.push(this.signupObj);
      localStorage.setItem('users', JSON.stringify(users));
      
    }
alert('SignUp sucess');
      this.router.navigateByUrl('/login');
  }

}
export class signupModel {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  contactnumber: string;
  address: string;

  constructor() {
    this.firstname = "";
    this.lastname = "";
    this.email = "";
    this.password = "";
    this.contactnumber = "";
    this.address = "";
  }

}
