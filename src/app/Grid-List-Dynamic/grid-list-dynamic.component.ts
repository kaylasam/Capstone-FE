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
    {text: 'Overall Sentiment', cols: 2, rows: 2, color: 'lightgreen'},
    {text: 'All Comments', cols: 2, rows: 2, color: 'lightpink'},
    {text: 'Mentions', cols: 2, rows: 2, color: '#DDBDF1'},
    {text: 'Top Posts', cols: 6, rows: 2, color: 'lightblue'},
    // {text: 'Top Post Sentiment', cols: 6, rows: 2, color: 'lightblue'},
  ];
}
