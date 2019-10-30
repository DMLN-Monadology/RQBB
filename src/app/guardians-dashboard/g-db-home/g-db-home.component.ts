import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-g-db-home',
  templateUrl: './g-db-home.component.html',
  styleUrls: ['./g-db-home.component.scss']
})
export class GDbHomeComponent implements OnInit {
  guardians = [0,1,2,3,4,5];
  constructor() { }

  ngOnInit() {
    
  }

}
