package fr.urbanmarkets.propertyservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class PropertyNotFound extends RuntimeException {

  public PropertyNotFound(String message) {
    super(message);
  }

}