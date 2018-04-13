package fr.urbanmarkets.propertyservice.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "price")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Price {

  @Id
  @Column(name = "priceId", nullable = false)
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long priceId;

  @Column(name = "date", nullable = false)
  @JsonFormat(pattern = "dd.MM.yyyy")
  private LocalDate date;

  @Column(name = "amount", nullable = false)
  private Long amount;

  @ManyToOne(fetch = FetchType.LAZY)
  private Property property;

}
