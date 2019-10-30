import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardiansDashboardRootComponent } from './guardians-dashboard-root/guardians-dashboard-root.component';
import { GDbHomeComponent } from './g-db-home/g-db-home.component';


const routes: Routes = [
  {
    path: 'RQBB',
    component: GuardiansDashboardRootComponent,
    children: [
      {
        path: 'home',
        component: GDbHomeComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuardiansDashboardRoutingModule { }
