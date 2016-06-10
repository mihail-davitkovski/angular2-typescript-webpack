
import { enableProdMode, Component } from "angular2/core";

//enableProdMode();

import {Article, ArticleComponent} from "./article";

@Component({
        selector: 'content',
        directives: [ArticleComponent],
        template: `
           <form class="ui large form segment">
                <h3 class="ui header">Add a Link</h3>
                <div class="field">
                    <label for="title">Title:</label>
                    <input name="title" #newtitle/>
                </div>
                <div class="field">
                    <label for="link">Link:</label>
                    <input name="link" #newlink/>
                </div>
                <button (click)="addArticle(newtitle, newlink)" class="ui positive right floated button">
                        Submit link
                </button>
            </form>
            
            <div class="ui grid posts">
                <reddit-article
                    *ngFor="let article of sortedArticles()"
                    [article]="article">
                </reddit-article>
            </div>
        `
 })
 export class RedditApp {
    articles: Article[];
    
    sortedArticles(): Article[] {
        return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
    }
     
    constructor() {
         this.articles = [
            new Article('Angular 2', 'http://angular.io', 3),
            new Article('Fullstack', 'http://fullstack.io', 2),
            new Article('Angular Homepage', 'http://angular.io', 1),
        ];
    }
    
    addArticle(title: HTMLInputElement, link: HTMLInputElement):void
    {
        this.articles.push(new Article(title.value, link.value, 0));
        title.value = "";
        link.value = "";
    }
 }