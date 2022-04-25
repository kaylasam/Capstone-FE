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
  commentsOnPost: any;

  result = this.data.TopPosts;

  ngOnInit(): void {
    this.sub = this.topPostsService.getTopPosts().subscribe({
      next: (topPosts: ITopPost[]) => this.topPosts = topPosts,
      error: (err: string) => this.errorMessage = err
    });
  }
  OpenPopup(post: any): void {
    this.showPopup = !this.showPopup;
    this.topPost = post;
    this.commentsOnPost = post.TopComments;
    console.log(this.commentsOnPost);
  }
  
}
