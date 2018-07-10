import { Component, OnDestroy, OnInit } from '@angular/core';
import {Post} from '../models/Post.model';
import {PostService} from '../services/post.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

    posts: Post[];
    postSubscription: Subscription;
    
    constructor(private postService: PostService) {}
    
    ngOnInit() {
      this.postSubscription = this.postService.postSubject.subscribe(
        (posts: Post[]) => {
          this.posts = posts;
        }
      );
      this.postService.emitPostsSubject();
    }
    
    ngOnDestroy() {
        this.postSubscription.unsubscribe();
    }

}
