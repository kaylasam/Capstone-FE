import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITopPost } from './top-posts';
import { TopPostsService } from './top-posts.service';

@Component({
  selector: 'app-top-posts',
  templateUrl: './top-posts.component.html',
  styleUrls: ['./top-posts.component.css']
})
export class TopPostsComponent implements OnInit {
  errorMessage: string = ' ';
  sub!: Subscription;
  topPosts: ITopPost[] = [];

  constructor(private topPostsService: TopPostsService) { }
  showPopup: boolean = false;
  topPost: any;
  postComments: any;
  postAnalyses: any;
  data: any;
  chartOptions: any;
  ngOnInit(): void {
    this.sub = this.topPostsService.getTopPosts().subscribe({
      next: (topPosts: ITopPost[]) => this.topPosts = topPosts,
      error: (err: string) => this.errorMessage = err
    });
  }
  OpenPopup(post: any): void {
    this.showPopup = !this.showPopup;
    this.topPost = post;
    this.postComments = post.TopComments;
    this.postAnalyses = post.TopPostAnalyses;
    this.data = {
      labels: ['Neutral','Good','Bad'],
      datasets: [
          {
              data: [post.TopPostAnalyses[0].neutral,post.TopPostAnalyses[0].good,post.TopPostAnalyses[0].bad],
              backgroundColor: [
                  "#a9a9a9",
                  "#00FF00",
                  "#FF0000"
              ],
              hoverBackgroundColor: [
                "#808080",
                "#013220",
                "#8b0000",
              ]
          }
      ]
  };
  }
  
}
