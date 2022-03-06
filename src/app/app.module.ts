import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/shared/shared.module';

import { AppComponent } from './app.component';
import { GridListDynamicComponent } from './Grid-List-Dynamic/grid-list-dynamic.component';

@NgModule({
  declarations: [
    AppComponent,
    GridListDynamicComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
