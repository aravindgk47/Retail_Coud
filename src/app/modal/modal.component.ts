import {Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

@Input()recoveryChild='';
recovery:number;
constructor(private el: ElementRef) {}
modalIsOpen: boolean = false;



ngOnInit() {
  
}



ngOnChanges(changes: SimpleChanges) {
}
onClose(){
   this.modalIsOpen = false;
  // this.isOpenChange.emit(this.isOpen);
}
onOpen(e){
  this.modalIsOpen = true;
  this.recovery=e;
  //alert(this.recovery);

}

}
