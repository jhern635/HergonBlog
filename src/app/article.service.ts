import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BlogArticle } from './model/BlogArticle';
import { HATEOASMock } from './model/MockBlogArticleHATEOAS';
import { BlogArticleHATEOAS, BlogArticleArrayHATEOAS } from './model/BlogArticleHATEOAS';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient : HttpClient) {
  }

  // getArticles(): BlogArticle[] {
       
  //   var b : BlogArticle[];  
  //   var barr : BlogArticleArrayHATEOAS = HATEOASMock._embedded as BlogArticleArrayHATEOAS;

  //   return barr.articles;
  // }

  getArticles(){
    return this.httpClient.get("http://localhost:9090/hergon-article/articles?sort=posteddate,desc");
  }

}