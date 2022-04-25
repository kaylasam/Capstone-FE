import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
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
import { ChartModule } from 'primeng/chart';
import { PostPopUpComponent } from './post-pop-up/post-pop-up.component';
import {DialogModule} from 'primeng/dialog';
@NgModule({
  declarations: [
    AppComponent,
    GridListDynamicComponent,
    ChipsInputComponent,
    DonutChartComponent,
    WordCloudComponent,
    CommentsComponent,
    TopPostsComponent,
    PostPopUpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
    TagCloudModule,
    // HighchartsChartModule
    DialogModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  //schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
