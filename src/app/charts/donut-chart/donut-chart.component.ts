import { Component, OnInit } from '@angular/core';
declare var google:any;

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(this.drawChart);
  }
  drawChart(){
    var data = google.visualization.arrayToDataTable([
      ['Sentiment', 'Ratio'],
      ['Positive',     11],
      ['Negative',      2],
      ['Neutral',  2]
    ]);

    var options = {
      //title: 'My Daily Activities',
      pieHole: 0.4,
      legend: 'bottom',
      pieSliceText: 'none',
      backgroundColor: 'lightgreen',
      slices: {
        0: {color: 'green'},
        1: {color: 'red'},
        2: {color: 'grey'}
      }
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
  }
}
