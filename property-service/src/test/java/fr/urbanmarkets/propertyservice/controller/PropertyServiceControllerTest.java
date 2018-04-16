package fr.urbanmarkets.propertyservice.controller;

import static org.junit.Assert.assertEquals;

import fr.urbanmarkets.propertyservice.model.Address;
import fr.urbanmarkets.propertyservice.model.Location;
import fr.urbanmarkets.propertyservice.model.Price;
import fr.urbanmarkets.propertyservice.model.Property;
import fr.urbanmarkets.propertyservice.service.PropertyService;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.atomic.AtomicLong;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

@RunWith(SpringRunner.class)
@WebMvcTest(value = PropertyServiceController.class, secure = false)
public class PropertyServiceControllerTest {

  private final String sampleProperty = "{\"propertyId\":\"1234-abcd\",\"surface\":100," +
      "\"bedroomCount\":2,\"address\":{\"addressId\":1,\"addressLine1\":\"36 Avenue Dr Ménard\"," +
      "\"addressLine2\":null,\"postCode\":\"06000\",\"city\":\"Nice\",\"state\":null,\"country\":" +
      "\"France\",\"location\":{\"locationId\":1,\"latitude\":43.709137," +
      "\"longitude\":7.269403}},\"prices\":[{\"priceId\":2,\"date\":" +
      "\"13.04.2018\",\"amount\":1000000},{\"priceId\":1,\"date\":" +
      "\"10.12.1984\",\"amount\":100000}]}\n";
  private final String expected = "{\"propertyId\":\"1234-abcd\",\"surface\":100," +
      "\"bedroomCount\":2,\"address\":{\"addressId\":1,\"addressLine1\":\"36 Avenue Dr Ménard\"," +
      "\"addressLine2\":null,\"postCode\":\"06000\",\"city\":\"Nice\",\"state\":null,\"country\":" +
      "\"France\",\"location\":{\"locationId\":1,\"latitude\":43.709137," +
      "\"longitude\":7.269403}},\"prices\":[{\"priceId\":2,\"date\":" +
      "\"13.04.2018\",\"amount\":1000000},{\"priceId\":1,\"date\":" +
      "\"10.12.1984\",\"amount\":100000}]}\n";
  @Autowired
  private MockMvc mockMvc;
  @MockBean
  private PropertyService propertyService;

  @Before
  public void setUp() {
    MockitoAnnotations.initMocks(this);
  }

  @Test
  public void findProperty_withValidParameters_returnValidResponse() throws Exception {
    Mockito.when(
        propertyService.findProperty(Mockito.anyString())).thenReturn(createdProperty());

    RequestBuilder requestBuilder = MockMvcRequestBuilders.get(
        "/v1/property/1234-abcd").accept(
        MediaType.APPLICATION_JSON);

    MvcResult result = mockMvc.perform(requestBuilder).andReturn();

    assertEquals(HttpStatus.OK.value(), result.getResponse().getStatus());

    JSONAssert.assertEquals(expected, result.getResponse()
        .getContentAsString(), false);
  }

  @Test
  public void createProperty_withValidParameters_returnValidResponse() throws Exception {
    Mockito.when(
        propertyService.createProperty(Mockito.any(Property.class))).thenReturn(createdProperty());

    RequestBuilder requestBuilder = MockMvcRequestBuilders.post(
        "/v1/property/").accept(MediaType.APPLICATION_JSON).content(sampleProperty)
        .contentType(MediaType.APPLICATION_JSON);

    MvcResult result = mockMvc.perform(requestBuilder).andReturn();
    MockHttpServletResponse response = result.getResponse();

    assertEquals(HttpStatus.CREATED.value(), response.getStatus());

    JSONAssert.assertEquals(expected, result.getResponse()
        .getContentAsString(), false);
  }

  @Test
  public void updateProperty_withValidParameters_returnValidResponse() throws Exception {
    Mockito.when(
        propertyService.updateProperty(Mockito.any(Property.class)))
        .thenReturn(updatePropertyPostCode());

    String sampleProperty = "{\"propertyId\":\"1234-abcd\",\"surface\":100,\"bedroomCount\":2," +
        "\"address\":{\"addressId\":1,\"addressLine1\":\"36 Avenue Dr Ménard\",\"addressLine2\":" +
        "null,\"postCode\":\"06001\",\"city\":\"Nice\",\"state\":null,\"country\":\"France\"," +
        "\"location\":{\"locationId\":1,\"latitude\":43.709137,\"longitude\"" +
        ":7.269403}},\"prices\":[{\"priceId\":1,\"date\":\"13.04.2018\"," +
        "\"amount\":1000000},{\"priceId\":2,\"date\":\"10.12.1984\",\"amount\"" +
        ":100000}]}\n";

    RequestBuilder requestBuilder = MockMvcRequestBuilders.put(
        "/v1/property/1234-abcd").accept(MediaType.APPLICATION_JSON).content(sampleProperty)
        .contentType(MediaType.APPLICATION_JSON);

    MvcResult result = mockMvc.perform(requestBuilder).andReturn();
    MockHttpServletResponse response = result.getResponse();

    assertEquals(HttpStatus.OK.value(), response.getStatus());

    String expected = "{\"propertyId\":\"1234-abcd\",\"surface\":100,\"bedroomCount\":2," +
        "\"address\":{\"addressId\":1,\"addressLine1\":\"36 Avenue Dr Ménard\",\"addressLine2\"" +
        ":null,\"postCode\":\"06001\",\"city\":\"Nice\",\"state\":null,\"country\":\"France\"," +
        "\"location\":{\"locationId\":1,\"latitude\":43.709137,\"longitude\"" +
        ":7.269403}},\"prices\":[{\"priceId\":2,\"date\":\"13.04.2018\"," +
        "\"amount\":1000000},{\"priceId\":1,\"date\":\"10.12.1984\",\"amount\"" +
        ":100000}]}\n";

    JSONAssert.assertEquals(expected, result.getResponse()
        .getContentAsString(), false);
  }

  @Test
  public void deleteProperty_withValidParameters_returnValidResponse() throws Exception {
    Mockito.doNothing().when(propertyService).deleteProperty(Mockito.anyString());

    RequestBuilder requestBuilder = MockMvcRequestBuilders.delete(
        "/v1/property/1234-abcd").accept(MediaType.APPLICATION_JSON).content(sampleProperty)
        .contentType(MediaType.APPLICATION_JSON);

    MvcResult result = mockMvc.perform(requestBuilder).andReturn();
    MockHttpServletResponse response = result.getResponse();

    assertEquals(HttpStatus.NO_CONTENT.value(), response.getStatus());
  }

  private Property sampleProperty() {
    Location location = Location.builder().latitude(43.709137).longitude(7.269403).build();
    Address address = Address.builder().addressLine1("36 Avenue Dr Ménard").postCode("06000")
        .city("Nice").country("France").location(location).build();

    Price price10121984 = Price.builder().amount(100000L).date(LocalDate.of(1984, 12, 10)).build();
    Price price13042018 = Price.builder().amount(1000000L).date(LocalDate.of(2018, 04, 13)).build();
    Set<Price> prices = new HashSet<>();
    prices.addAll(Arrays.asList(price10121984, price13042018));

    return Property.builder().propertyId("1234-abcd").address(address).prices(prices)
        .bedroomCount(2).surface(100).build();
  }

  private Property createdProperty() {
    Property createdProperty = sampleProperty();
    createdProperty.getAddress().setAddressId(1L);
    createdProperty.getAddress().getLocation().setLocationId(1L);
    AtomicLong priceId = new AtomicLong(0);
    createdProperty.getPrices().stream()
        .forEach(price -> price.setPriceId(priceId.incrementAndGet()));
    createdProperty.getPrices().iterator().next().setPriceId(1L);

    return createdProperty;
  }

  private Property updatePropertyPostCode() {
    Property updatedProperty = createdProperty();
    updatedProperty.getAddress().setPostCode("06001");

    return updatedProperty;
  }

}
