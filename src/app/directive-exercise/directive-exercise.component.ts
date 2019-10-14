import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directive-exercise',
  templateUrl: './directive-exercise.component.html',
  styleUrls: ['./directive-exercise.component.sass']
})
export class DirectiveExerciseComponent implements OnInit {
  displayDetails = true;
  secretPassword = "Secret Password is 'Onu Heino'"
  displayDetailsClicks = [];

  constructor() { }

  ngOnInit() {
  }

  onToggleDisplayDetails( $event ) {
    this.registerDisplayDetailsClick( $event )
    this.displayDetails = !this.displayDetails;
  }

  registerDisplayDetailsClick( $event ) {
    this.displayDetailsClicks.push( $event.timeStamp );
  }
}
