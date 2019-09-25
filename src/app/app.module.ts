import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { BlogArticleComponent } from './blog-article/blog-article.component';
import { ArticleService } from './article.service';

@NgModule({
  declarations: [
    AppComponent,
    BlogArticleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
