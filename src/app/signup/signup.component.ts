import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    errorMessage: string;
    user = {};
    mode = 'Observable';
    model = {};

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  signIn(username : string, password : string){
    this.userService.getUser(username, password).
      subscribe(user => this.user = user,
        error => this.errorMessage = <any>error);

    console.log(this.user);
  }

  signUp(){
    this.userService.createUser(this.model).
      subscribe(user => this.user = user,
        error => this.errorMessage = <any>error);

    console.log(this.user);
  }


}
