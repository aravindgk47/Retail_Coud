import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeltaComponent } from './delta.component';


const routes: Routes = [
  {
    path: '',component: DeltaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeltaRoutingModule { }