import { BlogArticle } from './BlogArticle';
import { HATEOASLinkItem } from './HATEOAS/HATEOASLinkItem';

export class BlogArticleHATEOASLink {
    self : HATEOASLinkItem;
    article: HATEOASLinkItem;
  }

export class BlogArticleHATEOAS extends BlogArticle {
  _links : BlogArticleHATEOASLink;
}
export class BlogArticleArrayHATEOAS {
  articles : BlogArticleHATEOAS[];
}