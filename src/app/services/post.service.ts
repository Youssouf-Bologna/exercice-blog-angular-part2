import {Post} from '../models/Post.model';
import {Subject} from 'rxjs/Subject';

export class PostService {
  
    private posts: Post[] = [
        new Post(1,'Mon premier post','Proprium proprium simulatione utilitates a coniungendam quidem nihil minus propter amicitiae et meritis quisque etiam.', 1, new Date()),
        new Post(2,'Mon deuxième post','Proprium proprium simulatione utilitates a coniungendam quidem nihil minus propter amicitiae et meritis quisque etiam.', -1, new Date()),
        new Post(3,'Encore un post','Proprium proprium simulatione utilitates a coniungendam quidem nihil minus propter amicitiae et meritis quisque etiam.', 0, new Date())
    ];
    postSubject = new Subject<Post[]>();
    private taile = this.posts.length;
  
  emitPostsSubject() {
      this.postSubject.next(this.posts.slice())
  }
  
  loveItsUp(i: number) {
      this.posts[i].loveIts ++;
      this.emitPostsSubject();
  }
  
  loveItsDown(i: number) {
      this.posts[i].loveIts --;
      this.emitPostsSubject();
  }
  
  addpost(post: Post) {
    this.posts.push(post);
    this.emitPostsSubject();
  }
  
  removePost(i: number) {
      this.posts.splice(i, 1);
    this.emitPostsSubject();
  }
  
  getPostLength() {
      return this.taile;
  }
}
