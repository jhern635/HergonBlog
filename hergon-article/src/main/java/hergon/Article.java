package hergon;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document
public class Article {

	@Id
	private String id;
	
	private String title;
	private Date posteddate;
	private String content;	
	private List<String> tags = new ArrayList<String>(); 	
	private boolean publish;
}
