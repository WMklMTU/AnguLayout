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
import { MonitoringParameterComponent } from './monitoring-configuration/monitoring-parameter/monitoring-parameter.component';
import { ToolbarComponent } from './monitoring-configuration/toolbar/toolbar.component';


@NgModule({
  declarations: [AppComponent, NavigationComponent, HomeComponent, ChartComponent, ChartNG2Component, ChartJSComponent, MonitoringConfigurationComponent, MonitoringParameterComponent, ToolbarComponent],
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
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
