import { Component, OnInit, Input } from '@angular/core';
import { OptionType } from 'src/app/DashBoardModel/ActivityModel/Overridetype';


@Component({
  selector: 'app-dropdown-element',
  templateUrl: './dropdownelement.component.html',
  styleUrls: ['./dropdownelement.component.css']
})
export class DropdownElementComponent implements OnInit {
  @Input() options:OptionType;
  constructor() { }

  ngOnInit(): void {  
  }

}