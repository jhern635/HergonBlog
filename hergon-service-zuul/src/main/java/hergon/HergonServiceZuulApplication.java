package hergon;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;

@SpringBootApplication
@EnableZuulProxy
public class HergonServiceZuulApplication {

	public static void main(String[] args) {
		SpringApplication.run(HergonServiceZuulApplication.class, args);
	}

}
