
import { Component, OnInit } from '@angular/core';

import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OptionType } from 'src/app/DashBoardModel/ActivityModel/Overridetype';
interface Animal {
  name: string;
  sound: string;
}
@Component({
  selector: 'app-dashboard-result',
  templateUrl: './dash-board-results.component.html',
  styleUrls: ['./dash-board-results.component.css']
})
export class DashboardResultComponent implements OnInit {
  //options: FormGroup;
  floatLabelControl = new FormControl('auto');
  optionMonthy: OptionType;
  optionQuarterly: OptionType;
  optionSemiAnnual: OptionType;
  optionYear: OptionType;
  // animalControl = new FormControl('', Validators.required);
  // selectFormControl = new FormControl('', Validators.required);
  // animals: Animal[] = [
  //   {name: 'Dog', sound: 'Woof!'},
  //   {name: 'Cat', sound: 'Meow!'},
  //   {name: 'Cow', sound: 'Moo!'},
  //   {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  // ];
  constructor(fb: FormBuilder) 
  
  {
    // this.options = fb.group({
    
    //   floatLabel: this.floatLabelControl,
    // });
  }
  ngOnInit(): void 
  {
    this.optionMonthy ={
      fieldName: 'Monthly',
      optionArray: ['January','February','March','April','May']
    };
    this.optionQuarterly = {
      fieldName:'Quarterly',
      optionArray: ['Q1: Jan-Mar','Q2: Apr-Jun','Q3: Jul-Sep','Q4: Oct-Dec']
    };
    this.optionSemiAnnual ={
      fieldName:'Semi-Annual',
      optionArray:['1st Half: Jan to Jun','2nd Half: Jul to Dec']
    };

    this.optionYear ={
      fieldName:'Select Year',
      optionArray:['2018','2019','2020','2021']
    };
  }

}
