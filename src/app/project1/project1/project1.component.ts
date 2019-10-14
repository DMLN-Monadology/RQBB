import { Component, OnInit } from '@angular/core';
import { HeaderModel } from '../utilities/header-model';

@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.sass']
})
export class Project1Component implements OnInit {

  constructor() {
    this.headerModel = null;
  }

  ngOnInit() {
    var classes = "recipe-and-shopping-headers";
    var headers = [
      {
        classes: "shopping-list-header",
        label: "Shopping List",
        onClick: (()=>{
          console.log("label clicked 1");
        })
      },
      {
        classes: "recipe-book-header",
        label: "Recipe Book",
        onClick: (()=>{
          console.log("label clicked 2");
        })
      }
    ];

    this.headerModel = new HeaderModel( classes, headers )
  }

}
