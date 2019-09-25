package hergon.data;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import hergon.Article;

@CrossOrigin(origins = "http://localhost:4200")
public interface ArticleRepository extends PagingAndSortingRepository<Article, String> {

}