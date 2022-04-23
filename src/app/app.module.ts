import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TagCloudModule } from 'angular-tag-cloud-module';

import { AppComponent } from './app.component';
import { GridListDynamicComponent } from './grid-list-dynamic/grid-list-dynamic.component';
import { ChipsInputComponent } from './chips-input/chips-input.component';

//dynamic grid list components
import { DonutChartComponent } from './charts/donut-chart/donut-chart.component';
import { WordCloudComponent } from './charts/word-cloud/word-cloud.component';
import { CommentsComponent } from './comments/comments.component';
import { TopPostsComponent } from './top-posts/top-posts.component';
import { HttpClientModule } from '@angular/common/http';
// import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    GridListDynamicComponent,
    ChipsInputComponent,
    DonutChartComponent,
    WordCloudComponent,
    CommentsComponent,
    TopPostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
    TagCloudModule,
    // HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
