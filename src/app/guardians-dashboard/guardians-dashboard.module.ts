import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { GuardiansDashboardRoutingModule } from './guardians-dashboard-routing.module';
import { GuardiansDashboardRootComponent } from './guardians-dashboard-root/guardians-dashboard-root.component';
import { GDbHomeComponent } from './g-db-home/g-db-home.component';
import { GDbWidgetComponent } from './g-db-widget/g-db-widget.component';


@NgModule({
  declarations: [GuardiansDashboardRootComponent, GDbHomeComponent, GDbWidgetComponent],
  imports: [
    CommonModule,
    GuardiansDashboardRoutingModule,
    SharedModule
  ]
})
export class GuardiansDashboardModule { }
