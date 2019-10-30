import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardiansDashboardRootComponent } from './guardians-dashboard/guardians-dashboard-root/guardians-dashboard-root.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "RQBB",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
