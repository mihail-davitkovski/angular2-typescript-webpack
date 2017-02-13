import { Component, Input } from "@angular/core";

import { Article } from "./model/article.model";

@Component({
  selector: 'reddit-article',
  host: {
    class: 'row'
  },
  inputs: ['article'],
  templateUrl: '../templates/article.component.html'
})
export class ArticleComponent {
  @Input() article: Article;
  
  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }
}