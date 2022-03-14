import {Component} from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

/**
 * @title Dynamic grid-list
 */
@Component({
  selector: 'grid-list-dynamic',
  templateUrl: './grid-list-dynamic.component.html',
  // styleUrls: ['./grid-list.component.css'],
})
export class GridListDynamicComponent {
  tiles: Tile[] = [
    {text: 'Sentiment', cols: 2, rows: 2, color: 'lightgreen'},
    {text: 'Mentions', cols: 2, rows: 2, color: '#DDBDF1'},
    {text: 'What Are People Saying?', cols: 2, rows: 2, color: 'lightpink'},
    {text: 'Top Posts', cols: 6, rows: 2, color: 'lightblue'},
  ];
}
