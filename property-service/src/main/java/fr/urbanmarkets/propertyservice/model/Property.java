package fr.urbanmarkets.propertyservice.model;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "property")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Property {

  @Id
  @Column(name = "propertyId", nullable = false)
  private String propertyId;

  @Column(name = "surface")
  private Integer surface;

  @Column(name = "bedroom_count")
  private Integer bedroomCount;

  @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "property", orphanRemoval = true)
  private Address address;

  @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "property", orphanRemoval = true)
  private Set<Price> prices = new HashSet<>();

}
