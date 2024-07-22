import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LineChartComponent } from './line-chart/line-chart.component';
import { HttpClientModule } from '@angular/common/http';
// import { BaseChartDirective } from 'ng2-charts';
// import { NgChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart/chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts'; 



@NgModule({
  declarations: [
    AppComponent,
    
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,NgxChartsModule
    ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
