import { HomeComponent } from './home/home.component';
import { ChartComponent } from './chart/chart.component';
import { ChartJSComponent } from './chart-js/chart-js.component'
import { ChartNG2Component } from './chart-ng2/chart-ng2.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonitoringConfigurationComponent } from './monitoring-configuration/monitoring-configuration.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { AlarmManagementComponent } from './alarm-management/alarm-management.component';
import { UserControlComponent } from './user-control/user-control.component';
import { RevisionHistoryComponent } from './revision-history/revision-history.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'chart', component: ChartComponent},
  {path:'chartNG2', component: ChartNG2Component},
  {path:'chartJS', component: ChartJSComponent},
  {path:'MonitoringConfiguration', component: MonitoringConfigurationComponent},
  {path:'Evaluation', component: EvaluationComponent},
  {path:'AlarmManagement', component: AlarmManagementComponent},
  {path:'UserControl', component: UserControlComponent},
  {path:'RevisionHistory', component: RevisionHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
