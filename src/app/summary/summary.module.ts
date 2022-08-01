import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';
import { SummaryRoutingModule } from './summary-routing.module';
import { ModalComponent } from '../modal/modal.component';
import { ModalModule } from '../modalModule';

@NgModule({
  imports: [
    CommonModule,
    SummaryRoutingModule,
    ModalModule
  ],
  declarations: [
    SummaryComponent,

]
})
export class SummaryModule { }