package fr.urbanmarkets.propertyservice.service;

import com.google.common.base.Preconditions;
import fr.urbanmarkets.propertyservice.exception.PropertyNotFound;
import fr.urbanmarkets.propertyservice.model.Property;
import fr.urbanmarkets.propertyservice.repository.PropertyRepository;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import javafx.beans.property.ListProperty;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class PropertyService {

  @Autowired
  private PropertyRepository propertyRepository;

  public Property findProperty(String propertyId) {
    return Optional.ofNullable(propertyRepository.findOne(propertyId)).orElseThrow(
        () -> new PropertyNotFound("Property with id: " + propertyId + " not found."));
  }

  public List<Property> findAllProperties() {
    return Optional.ofNullable(propertyRepository.findAll()).orElseThrow(
        () -> new PropertyNotFound("No properties found."));
  }

  public Property createProperty(Property property) {
    property.setPropertyId(UUID.randomUUID().toString());
    return propertyRepository.save(property);
  }

  public Property updateProperty(Property property) {
    Preconditions.checkNotNull(propertyRepository.findOne(property.getPropertyId()));
    return propertyRepository.save(property);
  }

  public void deleteProperty(String propertyId) {
    propertyRepository.delete(propertyId);
  }

}
