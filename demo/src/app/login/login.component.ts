import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  firstName:string = 'jayesh';
  empName():string{
    return this.firstName;
  }
  constructor() { }

  ngOnInit() {
  }

}
