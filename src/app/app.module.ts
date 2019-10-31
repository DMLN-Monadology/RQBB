import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// store
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter/counter.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuardiansDashboardModule } from './guardians-dashboard/guardians-dashboard.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    GuardiansDashboardModule,
    SharedModule,
    StoreModule.forRoot({count: counterReducer}),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
