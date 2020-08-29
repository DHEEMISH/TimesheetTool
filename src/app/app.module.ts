//import { DashboardResultComponent } from './Dashboard/DashBoardResults/dash-board-results/dash-board-results.component';
import { DashboardInputDetailsComponent } from './Dashboard/DashboardInputDetails/input-details/input-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './Login/login-component/login-component.component';
import { HeaderComponent } from './Header/header/header.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { DashboardActvityDataComponent } from './Dashboard/ActivityData/dashboard-activity-data/dashboard-activity-data.component';
import { DropdownElementComponent } from './DropDownElement/dropdownelement/dropdownelement.component';
import { DashboardmainComponent } from './Dashboard/dashboardmain/dashboardmain.component';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  { path: 'Dashboard', component: DashboardmainComponent }
];
@NgModule({
  
  declarations: [
    AppComponent,
    DashboardActvityDataComponent,
    DashboardInputDetailsComponent,
  //  DashboardResultComponent,
    DropdownElementComponent,
    HeaderComponent,
    FooterComponent,
    DashboardmainComponent,
    

  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
