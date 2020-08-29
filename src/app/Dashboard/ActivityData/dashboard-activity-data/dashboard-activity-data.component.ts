
import { Component, OnInit } from '@angular/core';
import { OptionType } from 'src/app/DashBoardModel/ActivityModel/Overridetype';
@Component({
  selector: 'app-dashboard-activity-data',
  templateUrl: './dashboard-activity-data.component.html',
  styleUrls: ['./dashboard-activity-data.component.css']
})
export class DashboardActvityDataComponent implements OnInit {
  value: string;

  ActivityId: OptionType;
  constructor() 
  {


   }

  ngOnInit() 
  {
    this.ActivityId ={
      fieldName: 'Activity Id',
      optionArray: ['101','102','103'],
      editable: true
    };
    this.value = 'Hours';
   
  }

}
