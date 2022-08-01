import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeltaComponent } from './delta/delta.component';
import { ModalComponent } from './modal/modal.component';
import { SummaryComponent } from './summary/summary.component';


;
const routes: Routes = [
  {
    path: 'delta',component: DeltaComponent,
    loadChildren: () => import('./delta/delta.module').then(m => m.DeltaModule)
  },
  {
    path: 'summary',component: SummaryComponent,
    loadChildren: () => import('./summary/summary.module').then(m => m.SummaryModule)
  },
  {
    path: 'dashboard',component: DashboardComponent,
    //loadChildren: () => import('./summary/summary.module').then(m => m.SummaryModule)
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
