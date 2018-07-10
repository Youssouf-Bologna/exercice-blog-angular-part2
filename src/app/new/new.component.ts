import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { Post } from '../models/Post.model';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  
  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private postService: PostService,
              private router: Router) { }

  ngOnInit() {
      this.initForm();
  }
  
  initForm() {
    this.postForm = this.formBuilder.group({
      title: '',
      content: ''
    });
  }
  
  onSubmitForm() {
    const formValue = this.postForm.value;
    const newPost = new Post(
      this.postService.getPostLength() -1,
      formValue['title'],
      formValue['content'],
      0,
      new Date()
    );
    this.postService.addpost(newPost);
    this.router.navigate(['/posts']);
  }

}
