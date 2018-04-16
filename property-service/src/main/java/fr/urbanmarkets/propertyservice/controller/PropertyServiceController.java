package fr.urbanmarkets.propertyservice.controller;

import fr.urbanmarkets.propertyservice.model.Property;
import fr.urbanmarkets.propertyservice.service.PropertyService;
import java.util.List;
import javafx.beans.property.ListProperty;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "v1/property")
@Slf4j
public class PropertyServiceController {

  @Autowired
  private PropertyService propertyService;

  @RequestMapping(value = "/{propertyId}", method = RequestMethod.GET)
  public Property findProperty(@PathVariable("propertyId") String propertyId) {
    log.info("A property will be retrieved with id: {}", propertyId);
    return propertyService.findProperty(propertyId);
  }

  @RequestMapping(value = "/all", method = RequestMethod.GET)
  public List<Property> findAllProperties() {
    log.info("All properties will be retrieved");
    return propertyService.findAllProperties();
  }

  @RequestMapping(value = "/", method = RequestMethod.POST)
  @ResponseStatus(HttpStatus.CREATED)
  public Property createProperty(@RequestBody Property property) {
    log.info("A new property will be created");
    return propertyService.createProperty(property);
  }

  @RequestMapping(value = "/{propertyId}", method = RequestMethod.PUT)
  public Property updateProperty(@PathVariable("propertyId") String propertyId,
      @RequestBody Property property) {
    log.info("The property with id: {} will be updated", propertyId);
    return propertyService.updateProperty(property);
  }

  @RequestMapping(value = "/{propertyId}", method = RequestMethod.DELETE)
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public void deleteProperty(@PathVariable("propertyId") String propertyId) {
    log.info("The property with id: {} will be deleted.", propertyId);
    propertyService.deleteProperty(propertyId);
  }

}
