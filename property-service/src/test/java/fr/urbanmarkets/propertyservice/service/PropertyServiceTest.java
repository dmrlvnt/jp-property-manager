package fr.urbanmarkets.propertyservice.service;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import fr.urbanmarkets.propertyservice.model.Address;
import fr.urbanmarkets.propertyservice.model.Location;
import fr.urbanmarkets.propertyservice.model.Price;
import fr.urbanmarkets.propertyservice.model.Property;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@SpringBootTest
@RunWith(SpringRunner.class)
public class PropertyServiceTest {

  @Autowired
  private PropertyService propertyService;

  @Test
  public void createProperty_inDB_withValidParameters_returnValidResponse() {
    Property property = propertyService.createProperty(sampleProperty());

    assertNotNull(property);
    assertEquals("06000", property.getAddress().getPostCode());
    assertEquals("Nice", property.getAddress().getCity());
    assertEquals("France", property.getAddress().getCountry());

    assertTrue(property.getBedroomCount() == 2);
    assertTrue(property.getSurface() == 100);

    assertEquals(2, property.getPrices().size());
  }

  @Test
  public void findProperty_inDB_withValidParameters_returnValidResponse() {
    Property property = propertyService.createProperty(sampleProperty());

    assertNotNull(property);
    String propertyId = property.getPropertyId();
    Property retrievedProperty = propertyService.findProperty(propertyId);
    assertNotNull(retrievedProperty);
    assertEquals(propertyId, retrievedProperty.getPropertyId());
  }

  @Test
  public void updateProperty_inDB_withValidParameters_returnValidResponse() {
    Property property = propertyService.createProperty(sampleProperty());

    assertNotNull(property);

    assertEquals("06001",
        propertyService.updateProperty(updatePropertyPostCode(property)).getAddress()
            .getPostCode());
  }

  @Test
  public void deleteProperty_inDB_withValidParameters_returnValidResponse() {
    Property property = propertyService.createProperty(sampleProperty());

    assertNotNull(property);

    propertyService.deleteProperty(property);
  }

  private Property sampleProperty() {
    Location location = Location.builder().latitude(43.709137).longitude(7.269403).build();
    Address address = Address.builder().addressLine1("36 Avenue Dr Ménard").postCode("06000")
        .city("Nice").country("France").location(location).build();

    Price price10121984 = Price.builder().amount(100000L).date(LocalDate.of(1984, 12, 10)).build();
    Price price13042018 = Price.builder().amount(1000000L).date(LocalDate.of(2018, 04, 13)).build();
    Set<Price> prices = new HashSet<>();
    prices.addAll(Arrays.asList(price10121984, price13042018));

    return Property.builder().address(address).prices(prices)
        .bedroomCount(2).surface(100).build();
  }

  private Property updatePropertyPostCode(Property property) {
    property.getAddress().setPostCode("06001");
    return property;
  }

}
