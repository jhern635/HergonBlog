import { Component, OnInit } from '@angular/core';
import { BlogArticle } from '../model/BlogArticle';
//import { ARTICLES } from '../model/MockBlogArticle';
import { ArticleService } from '../article.service';
import { BlogArticleArrayHATEOAS } from '../model/BlogArticleHATEOAS';
import { HATEOASResponse } from '../model/HATEOAS/HATEOASResponse';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.css']
})

export class BlogArticleComponent implements OnInit {
  
  // blogArticles = ARTICLES;
  
  blogArticles: BlogArticle[];

  constructor(private articleService : ArticleService) { }

  ngOnInit() {
    this.getArticles();
  } 

  getArticles(): void {
    //this.blogArticles = this.articleService.getArticles();
    this.articleService.getArticles()
    .subscribe((data:HATEOASResponse) => {
      var barr : BlogArticleArrayHATEOAS = data._embedded as BlogArticleArrayHATEOAS;
      this.blogArticles = barr.articles;
    });
  }

}
