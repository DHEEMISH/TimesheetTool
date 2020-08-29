import { ActivityService } from './../../../DashBoardServices/activity.service';

import { Component, OnInit } from '@angular/core';
import { OptionType } from 'src/app/DashBoardModel/ActivityModel/Overridetype';

@Component({
  selector: 'app-dashboard-input-details',
  templateUrl: './input-details.component.html',
  styleUrls: ['./input-details.component.css']
})
export class DashboardInputDetailsComponent implements OnInit {
overrideuser : OptionType;
  constructor(private activityService: ActivityService) 
  {


  }

  ngOnInit() 
  {

    this.overrideuser ={
      fieldName: 'Users',
      optionArray: ['Roger Marquez','Craig Hines','Stanley Batey']
    };

    this.activityService.getOverrideUsers().subscribe((data)=>{
      console.log(data);
     
    });
   
  }

}
