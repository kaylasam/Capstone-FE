import { Component, OnInit } from '@angular/core';
import { CommentsService } from './comments.service';
import { IComment } from './comments'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})

export class CommentsComponent implements OnInit {
  errorMessage: string = ' ';
  sub!: Subscription;
  comments: IComment[] = [];

  constructor(private commentsService: CommentsService) { }

  ngOnInit(): void {
    this.sub = this.commentsService.getComments().subscribe({
      next: (comments: IComment[]) => this.comments = comments,
      error: (err: string) => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
