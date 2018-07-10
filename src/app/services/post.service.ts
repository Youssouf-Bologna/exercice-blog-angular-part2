import {Subject} from 'rxjs/Subject';

export class PostService {
  
    postsSubject = new Subject<any[]>();
    
    private posts = [
        {
            id:1,
            title: 'Mon premier post',
            content: 'Proprium proprium simulatione utilitates a coniungendam quidem nihil minus propter amicitiae et meritis quisque etiam.',
            loveIts: 1,
            created_at: Date()
        },
        {
            id:2,
            title: 'Mon deuxième post',
            content: 'Proprium proprium simulatione utilitates a coniungendam quidem nihil minus propter amicitiae et meritis quisque etiam.',
            loveIts: -1,
            created_at: Date()
        },
        {
            id:3,
            title: 'Encore un post',
            content: 'Proprium proprium simulatione utilitates a coniungendam quidem nihil minus propter amicitiae et meritis quisque etiam.',
            loveIts: 0,
            created_at: Date()
        }
    ];
  
  emitAppareilSubject() {

      this.postsSubject.next(this.posts.slice());

  }
  
  loveItsUp(i: number) {
      this.posts[i].loveIts ++;
      this.emitAppareilSubject();
  }
  
  loveItsDown(i: number) {
      this.posts[i].loveIts --;
      this.emitAppareilSubject();
  }
}
