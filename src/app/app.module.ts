import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TagCloudModule } from 'angular-tag-cloud-module';

import { AppComponent } from './app.component';
import { GridListDynamicComponent } from './Grid-List-Dynamic/grid-list-dynamic.component';
import { ChipsInputComponent } from './chips-input/chips-input.component';

import { DonutChartComponent } from './charts/donut-chart/donut-chart.component';
import { WordCloudComponent } from './charts/word-cloud/word-cloud.component';
import { CommentsComponent } from './comments/comments.component';
import { TopPostsComponent } from './top-posts/top-posts.component';

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
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
    TagCloudModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
