package fr.urbanmarkets.propertyservice.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "address")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Address {

  @Id
  @Column(name = "addressId", nullable = false)
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long addressId;

  @Column(name = "addressLine1", nullable = false)
  @Size(max = 100)
  private String addressLine1;

  @Column(name = "addressLine2")
  @Size(max = 100)
  private String addressLine2;

  @Column(name = "postCode", nullable = false)
  @Size(max = 10)
  private String postCode;

  @Column(name = "city", nullable = false)
  @Size(max = 50)
  private String city;

  @Column(name = "state")
  @Size(max = 50)
  private String state;

  @Column(name = "country", nullable = false)
  @Size(max = 100)
  private String country;

  @OneToOne(fetch = FetchType.LAZY)
  private Property property;

  @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "address", orphanRemoval = true)
  private Location location;

}