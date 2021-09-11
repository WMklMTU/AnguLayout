import { HomeComponent } from './home/home.component';
import { ChartComponent } from './chart/chart.component';
import { ChartJSComponent } from './chart-js/chart-js.component'
import { ChartNG2Component } from './chart-ng2/chart-ng2.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonitoringConfigurationComponent } from './monitoring-configuration/monitoring-configuration.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'chart', component: ChartComponent},
  {path:'chartNG2', component: ChartNG2Component},
  {path:'chartJS', component: ChartJSComponent},
  {path:'MonitoringConfiguration', component: MonitoringConfigurationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
