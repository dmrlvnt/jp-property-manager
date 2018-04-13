package fr.urbanmarkets.propertyservice.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "location")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Location {

  @Id
  @Column(name = "locationId", nullable = false)
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long locationId;

  @Column(name = "latitude", nullable = false)
  private Double latitude;

  @Column(name = "longitude", nullable = false)
  private Double longitude;

  @OneToOne(fetch = FetchType.LAZY)
  private Address address;

}