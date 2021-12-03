import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { ChartComponent } from './chart/chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartNG2Component } from './chart-ng2/chart-ng2.component';
import { ChartJSComponent } from './chart-js/chart-js.component';
import { MonitoringConfigurationComponent } from './monitoring-configuration/monitoring-configuration.component'
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MonitoringParameterComponent } from './monitoring-configuration/monitoring-parameter/monitoring-parameter.component';
import { ToolbarComponent } from './monitoring-configuration/toolbar/toolbar.component';
import { ListOfCalculationComponent } from './monitoring-configuration/monitoring-parameter/list-of-calculation/list-of-calculation.component';
import { AssignedMonitoringComponent } from './monitoring-configuration/monitoring-parameter/assigned-monitoring/assigned-monitoring.component';
import { DetailsSelectedComponent } from './monitoring-configuration/monitoring-parameter/details-selected/details-selected.component';
import { ExampleCalculationComponent } from './monitoring-configuration/monitoring-parameter/example-calculation/example-calculation.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { ScanSelectionFilterComponent } from './monitoring-configuration/scan-selection-filter/scan-selection-filter.component';
import { RatingCorrectionComponent } from './monitoring-configuration/rating-correction/rating-correction.component';
import { ReferenceDatasetComponent } from './monitoring-configuration/reference-dataset/reference-dataset.component';
import { StatisticalMethodsComponent } from './monitoring-configuration/statistical-methods/statistical-methods.component';
import { AlertSelectionComponent } from './monitoring-configuration/alert-selection/alert-selection.component';
import { PublishComponent } from './monitoring-configuration/publish/publish.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { AlarmManagementComponent } from './alarm-management/alarm-management.component';
import { UserControlComponent } from './user-control/user-control.component';
import { RevisionHistoryComponent } from './revision-history/revision-history.component';
import { SmartFilterComponent } from './monitoring-configuration/scan-selection-filter/smart-filter/smart-filter.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TableComponent } from './monitoring-configuration/reference-dataset/table/table.component';
import { ParametersComponent } from './monitoring-configuration/reference-dataset/parameters/parameters.component';
import { RdChartComponent } from './monitoring-configuration/reference-dataset/rd-chart/rd-chart.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent, HomeComponent, ChartComponent, ChartNG2Component, ChartJSComponent, MonitoringConfigurationComponent, MonitoringParameterComponent, ToolbarComponent, ListOfCalculationComponent, AssignedMonitoringComponent, DetailsSelectedComponent, ExampleCalculationComponent, ScanSelectionFilterComponent, RatingCorrectionComponent, ReferenceDatasetComponent, StatisticalMethodsComponent, AlertSelectionComponent, PublishComponent, EvaluationComponent, AlarmManagementComponent, UserControlComponent, RevisionHistoryComponent, SmartFilterComponent, TableComponent, ParametersComponent, RdChartComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    NgxChartsModule,
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule,
    MatGridListModule,
    MatPaginatorModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
