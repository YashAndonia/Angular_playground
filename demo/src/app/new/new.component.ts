import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  firstName:string = 'jayesh';
  age:number = 18;
  image:string= "assets/img/chk_sau.jpeg";
  empName():string{
    return this.firstName+" " + this.age;
  }
  constructor() { }

  ngOnInit() {
  }

}
