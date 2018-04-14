package fr.urbanmarkets.propertyservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class PropertyServiceApplication {

  public static void main(String[] args) {
    SpringApplication.run(PropertyServiceApplication.class, args);
  }

}
