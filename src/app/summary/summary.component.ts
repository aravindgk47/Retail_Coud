import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AppService } from '../AppService';
import { ModalComponent } from '../modal/modal.component';
import { UserinfoserviceService } from '../userinfoservice.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {


  
  @Input()summary:any=[];
  


  recovery:number;
  districtName:any=[];
  VALUE:any=[];
  final:any=[];
  userdata:any=[];

  @Output() open: EventEmitter<any> = new EventEmitter();
  @ViewChild(ModalComponent) modalChild: ModalComponent;

  constructor(private appService:AppService,public userService: UserinfoserviceService) {  }

  ngOnInit() {

    this.userService.getApiData().subscribe(data=>{


      this.userdata.push(data);//DATA


console.log(data);


  this.userdata.forEach(element => {

    this.summary.push(element.summary)   ;//summary

    this.show();
  });



});


  }

  


show(){
  this.summary.forEach(item => {

    this.districtName=Object.keys(item);
    this.VALUE=Object.values(item);
  
  
  
  });
}
modal(no:number){
  
  this.modalChild.onOpen(no);


}

 

  download(){
    this.summary.forEach(item => {
      console.log(this.summary);
      this.districtName=Object.keys(item);
      this.VALUE=Object.values(item);  
      

      console.log(this.VALUE);

    });

    let dname;
    let data;

 

      this.districtName.forEach(item => {
        dname=item;  
        this.summary.forEach(value => { 
    
          console.log(dname);
          this.final.push({
            districtname:dname,
            active:value[dname].active,
            confirmed:value[dname].confirmed,
            deceased:value[dname].deceased,
            home_obs:value[dname].home_obs,
            hospital_obs:value[dname].hospital_obs,
            hospital_today:value[dname].hospital_today,
            recovered:value[dname].recovered,
            total_obs:value[dname].total_obs,
          });

         }); 

     
    });
   
  



    this.appService.downloadFile(this.final, 'Summary_Report');
    this.final=[];

  }


  

}
