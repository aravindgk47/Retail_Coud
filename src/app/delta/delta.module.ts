import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeltaComponent } from './delta.component';
import { DeltaRoutingModule } from './delta-routing.module';
import { ModalComponent } from '../modal/modal.component';
import { ModalModule } from '../modalModule';

@NgModule({
  imports: [
    CommonModule,
    DeltaRoutingModule,
    ModalModule
  ],
  declarations: [
    DeltaComponent,
    //ModalComponent
]
})
export class DeltaModule { }