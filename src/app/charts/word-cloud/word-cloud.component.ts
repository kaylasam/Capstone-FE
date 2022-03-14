import { Component, OnInit } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
import * as cloudData from '../../../assets/data/cloud-data.json';

@Component({
  selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html'
})
export class WordCloudComponent {

    options: CloudOptions = {
      // if width is between 0 and 1 it will be set to the width of the upper element multiplied by the value
      width: 500,
      // if height is between 0 and 1 it will be set to the height of the upper element multiplied by the value
      height: 200,
      overflow: false,
    };

    data: CloudData[] = cloudData;

    // data: CloudData[] = [
    //   { text: 'weight-5-rotate(+10)', weight: 5, rotate: 10 },
    //   { text: 'weight-7-rotate(-20)', weight: 7, rotate: -20 },
    //   { text: 'weight-9-rotate(+35)', weight: 9, rotate: 35 }
    // // ...
    // ];
}
