import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'binding-exercise',
  templateUrl: './binding-exercise.component.html',
  styleUrls: ['./binding-exercise.component.sass']
})
export class BindingExerciseComponent implements OnInit {
  username = "";
  constructor() { }

  ngOnInit() {
  }

  clearUsername() {
    this.username = "";
  }

}
