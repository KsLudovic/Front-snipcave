import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  template: `
    <p>
      posts works!
    </p>
  `,
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
