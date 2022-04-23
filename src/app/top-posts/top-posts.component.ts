import { Component, OnInit } from '@angular/core';
import { ITopPost } from './top-posts';
import { TopPostsService } from './top-posts.service';

@Component({
  selector: 'app-top-posts',
  templateUrl: './top-posts.component.html',
  styleUrls: ['./top-posts.component.css']
})
export class TopPostsComponent implements OnInit {
  topPosts: ITopPost[] = [];

  constructor(private topPostsService: TopPostsService) { }

  ngOnInit(): void {
    this.topPosts = this.topPostsService.getTopPosts();
  }

}
