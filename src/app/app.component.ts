import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div><h1>{{title}}</h1>
  <grid-list-dynamic></grid-list-dynamic>
  </div>
  `
})
export class AppComponent {
  title: string = 'Sentiment Analysis Dashboard';
}
