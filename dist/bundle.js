webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="./node_modules/angular2/typings/browser.d.ts" />
	"use strict";
	var browser_1 = __webpack_require__(2);
	var reddit_1 = __webpack_require__(236);
	browser_1.bootstrap(reddit_1.Reddit);


/***/ },

/***/ 236:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(26);
	var article_1 = __webpack_require__(237);
	var Reddit = (function () {
	    function Reddit() {
	    }
	    Reddit.prototype.addArticle = function (title, link) {
	    };
	    Reddit = __decorate([
	        core_1.Component({
	            selector: 'reddit',
	            directives: [article_1.ArticleComponent],
	            template: "\n           <form class=\"ui large form segment\">\n                <h3 class=\"ui header\">Add a Link</h3>\n                <div class=\"field\">\n                    <label for=\"title\">Title:</label>\n                    <input name=\"title\" #newtitle/>\n                </div>\n                <div class=\"field\">\n                    <label for=\"link\">Link:</label>\n                    <input name=\"link\" #newlink/>\n                </div>\n                <button (click)=\"addArticle(newtitle, newlink)\" class=\"ui positive right floated button\">\n                        Submit link\n                </button>\n            </form>\n            \n            <div class=\"ui grid posts\">\n                <reddit-article>\n                </reddit-article>\n            </div>\n        "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Reddit);
	    return Reddit;
	}());
	exports.Reddit = Reddit;


/***/ },

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(26);
	var Article = (function () {
	    function Article(title, link, votes) {
	        this.title = title;
	        this.link = link;
	        this.votes = votes || 0;
	    }
	    Article.prototype.voteUp = function () {
	        this.votes += 1;
	    };
	    Article.prototype.voteDown = function () {
	        this.votes -= 1;
	    };
	    return Article;
	}());
	var ArticleComponent = (function () {
	    function ArticleComponent() {
	        this.article = new Article('Angular 2', 'http://angular.io', 10);
	    }
	    ArticleComponent.prototype.voteUp = function () {
	        this.article.voteUp();
	        return false;
	    };
	    ArticleComponent.prototype.voteDown = function () {
	        this.article.voteDown();
	        return false;
	    };
	    ArticleComponent = __decorate([
	        core_1.Component({
	            selector: 'reddit-article',
	            host: {
	                class: 'row'
	            },
	            template: "\n    <div class=\"four wide column center aligned votes\">\n      <div class=\"ui statistic\">\n        <div class=\"value\">\n          {{ article.votes }}\n        </div>\n        <div class=\"label\">\n          Points\n        </div>\n      </div>\n    </div>\n    <div class=\"twelve wide column\">\n      <a class=\"ui large header\" href=\"{{ article.link }}\">\n        {{ article.title }}\n      </a>\n      <ul class=\"ui big horizontal list voters\">\n        <li class=\"item\">\n          <a href (click)=\"voteUp()\">\n            <i class=\"arrow up icon\"></i>\n              upvote \n            </a>\n        </li>\n        <li class=\"item\"> \n          <a href (click)=\"voteDown()\">\n            <i class=\"arrow down icon\"></i>\n            downvote\n          </a>\n        </li>\n      </ul>\n    </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ArticleComponent);
	    return ArticleComponent;
	}());
	exports.ArticleComponent = ArticleComponent;


/***/ }

});