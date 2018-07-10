import { Component, Input, OnInit } from '@angular/core';
import {PostService} from '../services/post.service'

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  @Input() post: any[];
  @Input() index: number;
  
  
  constructor(private postService: PostService) { }

  ngOnInit() {
  }
  
  onLoveIts(index: number){
      this.postService.loveItsUp(index);
  }
  
  onDontLoveIts(index: number){
      this.postService.loveItsDown(index);
  }
  
    onRemove(index: number){
      this.postService.removePost(index);
  }  
}
