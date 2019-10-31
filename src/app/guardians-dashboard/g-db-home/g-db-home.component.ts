import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../../store/counter/counter.action';

@Component({
  selector: 'app-g-db-home',
  templateUrl: './g-db-home.component.html',
  styleUrls: ['./g-db-home.component.scss']
})
export class GDbHomeComponent implements OnInit {
  guardians = [0,1,2,3,4,5];
  count$: Observable<number>
  count: number;
  
  constructor(private store: Store<{count: number}>) {
    this.count$ = store.pipe( select('count'));
  }
  
  ngOnInit() {
    this.count$.subscribe( (count: number) => {
      this.count = count;
    })
  }
  
  incrementHandler() {
    this.store.dispatch(increment());
  }
  
  decrementHandler() {
    this.store.dispatch(decrement());
  }
  
  resetHandler() {
    this.store.dispatch(reset());
  }

}
