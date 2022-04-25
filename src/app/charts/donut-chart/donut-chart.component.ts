import { Component, OnInit } from '@angular/core';
declare var google:any;
import { DonutChartService } from './donut-chart.service';
import { IAllPostsSentiment } from './donut-chart'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit {
  errorMessage: string = ' ';
  sub!: Subscription;
  sentiment: IAllPostsSentiment[] = [];

  constructor(private donutChartService: DonutChartService) { }

  ngOnInit(): void {
    this.sub = this.donutChartService.getSentiment().subscribe({
      next: (sentiment: IAllPostsSentiment[]) => {
        this.sentiment = sentiment;
        console.log("Sentiment: ", sentiment);
        google.charts.load('current', {'packages':['corechart']});
        this.buildChart(this.sentiment);
        console.log("sentiment: ", this.sentiment);
      },
      error: (err: string) => this.errorMessage = err
    });
  }

  buildChart(sentiment: IAllPostsSentiment[]) {
    var renderChart=(chart:any)=>{
      var donutChartItems = [];
      donutChartItems.push(['Sentiment', 'Ratio']);
      console.log("sentiment: ", sentiment);
      sentiment.forEach(sentiment => {
        console.log("sentiment type:", sentiment.Sentiment);
        donutChartItems.push([sentiment.Sentiment, sentiment.Ratio]);
      });
      var data = google.visualization.arrayToDataTable(donutChartItems);
      var options = {
        pieHole: 0.4,
        legend: 'bottom',
        pieSliceText: 'none',
        backgroundColor: 'lightgreen',
        slices: {
          0: {color: 'green'},
          1: {color: 'red'},
          2: {color: 'grey'}
        }
      }
      console.log(data);
      chart().draw(data, options);
    }
    var donutChart = () => new google.visualization.PieChart(document.getElementById('donutchart'));
    var callback = () => renderChart(donutChart);
    google.charts.setOnLoadCallback(callback);
  }
}
