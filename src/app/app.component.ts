import { Component } from '@angular/core';


export interface keywords{
  keyword: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title: string = 'Sentiment Analysis Dashboard';
  opened: boolean = false;
  showReportsMenu: boolean = false;
  showMentionsMenu: boolean = false;
  
  keywords: string[] = ["apple", "banana", "k"];
}
