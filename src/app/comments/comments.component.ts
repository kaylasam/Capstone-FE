import { Component, OnInit } from '@angular/core';
import { IComment } from './comments'
import { Subscription } from 'rxjs';
import { ITopPost } from '../top-posts/top-posts';

import { TopPostsService } from '../top-posts/top-posts.service';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})

export class CommentsComponent implements OnInit {
  errorMessage: string = ' ';
  sub!: Subscription;
  topPosts: ITopPost[] = [];
  constructor(private topPostsService: TopPostsService) { }

  ngOnInit(): void {
    this.sub = this.topPostsService.getTopPosts().subscribe({
      next: (topPosts: ITopPost[]) => this.topPosts = topPosts,
      error: (err: string) => this.errorMessage = err
    });
    console.log(this.topPosts[0].PostText);
    console.log("test");
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
