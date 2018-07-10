import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

    posts: any[];
    postsSubscription: Subscription;
    
    constructor(private postService: PostService) {}
    
    ngOnInit() {
      this.postsSubscription = this.postService.postsSubject.subscribe(
        (posts: any[]) => {
          this.posts = posts;
        }
      );
      this.postService.emitAppareilSubject();
    }
    
    ngOnDestroy() {
        this.postsSubscription.unsubscribe();
    }

}
