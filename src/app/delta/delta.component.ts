import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../AppService';
import { ModalComponent } from '../modal/modal.component';
import { UserinfoserviceService } from '../userinfoservice.service';

@Component({
  selector: 'app-delta',
  templateUrl: './delta.component.html',
  styleUrls: ['./delta.component.css']
})
export class DeltaComponent implements OnInit {

  recovery:number;
  @Input()delta:any=[];
  districtName:any=[];
  VALUE:any=[];
  userdata:any=[];
  final:any=[];

    @ViewChild(ModalComponent) modalChild: ModalComponent;

  constructor(public userService: UserinfoserviceService,private appService:AppService) { }

  ngOnInit() {
    this.userService.getApiData().subscribe(data=>{


      this.userdata.push(data);//DATA



    this.userdata.forEach(element => {

    this.delta.push(element.delta)   ;//delta
    this.show();     
    
    console.log(this.delta)

});

 



}); 

  }

 
  show(){
    this.delta.forEach(item => {
  
      this.districtName=Object.keys(item);
      this.VALUE=Object.values(item);
    
  
    
    
    });
        
}
modal(no:number){
  this.modalChild.onOpen(no);


}



download(){

   

  this.delta.forEach(item => {

    this.districtName=Object.keys(item);
    this.VALUE=Object.values(item);
  });

  let dname;
  let data;



    this.districtName.forEach(item => {
      dname=item;  
      this.delta.forEach(value => { 
  
        console.log(dname);
        this.final.push({
          districtname:dname,
          active:value[dname].active,
          confirmed:value[dname].confirmed,
          deceased:value[dname].deceased,
          home_obs:value[dname].home_obs,
          hospital_obs:value[dname].hospital_obs,
          hospital_today:value[dname].active,
          recovered:value[dname].recovered,
          total_obs:value[dname].total_obs,
        });

       }); 

   
  });


console.log(this.final)
  this.appService.downloadFile(this.final, 'Delta_Report');

}

}
