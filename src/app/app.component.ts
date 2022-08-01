import { Component, OnInit, ViewChild } from '@angular/core';
import { DeltaComponent } from './delta/delta.component';
import { SummaryComponent } from './summary/summary.component';
import { UserinfoserviceService } from './userinfoservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

currentDate = new Date();

  constructor(public userService: UserinfoserviceService) { 


  }
  ngOnInit() {



  }



}


