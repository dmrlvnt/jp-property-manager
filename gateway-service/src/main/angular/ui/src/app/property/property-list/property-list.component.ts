import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {Principal} from "../../principal";
import {Property} from "../../property";
import {Response} from "@angular/http";
import {HttpService} from "../../http.service";

import {Location} from "../../location";
import {Address} from "../../address";
import {Price} from "../../price";

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  @Input() principal: Principal = null;
  @Output() onPropertySelected: EventEmitter<Property> = new EventEmitter<Property>();

  properties: Property[] = [];
  newProperties: Property[] = [];
  price: Price = new Price(0, null, 0);
  prices = [
    this.price
  ];
  address: Address = new Address(0,"","","","","","", new Location(0,0,0));
  newProperty: Property = new Property("", 0, 0, this.address, this.prices);
  propertiesToEdit: number[] = [];
  isAddNewProperty: boolean = false;
  selectedProperty: Property = null;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.loadProperties();
  }

  loadProperties() {
    this.httpService.getProperties()
      .subscribe((response: Response) => {
        let propertiesJson: any[] = response.json()
        propertiesJson.forEach(property => {
          this.properties.push(new Property(property.propertyId, property.surface,
            property.bedroomCount, property.address, property.prices));
          this.newProperties.push(new Property(property.propertyId, property.surface,
            property.bedroomCount, property.address, property.prices));
        })
      }, (error) => {
        console.log(error);
      });
  }

  cancelEditProperty(propertyIndex: number) {
    if (this.propertiesToEdit.indexOf(propertyIndex) !== -1) {
      this.propertiesToEdit.splice(this.propertiesToEdit.indexOf(propertyIndex), 1); //remove the index of the property to edit
      //get the original property
      let propertyCopy: Property = new Property(this.properties[propertyIndex].propertyId,
        this.properties[propertyIndex].surface, this.properties[propertyIndex].bedroomCount,
        this.properties[propertyIndex].address, this.properties[propertyIndex].prices);
      this.newProperties.splice(propertyIndex,1,propertyCopy); //replace the edited property with the old property
    }
  }

  editProperty(propertyIndex: number) {
    this.propertiesToEdit.push(propertyIndex);
  }

  saveProperty(propertyIndex: number, newProperty: Property) {
    console.log(newProperty);
    //save the property to the database
    this.httpService.updateProperty(newProperty)
      .subscribe((response: Response) => {
        let propertyJson = response.json();
        let property: Property = new Property(propertyJson.propertyId, propertyJson.surface,
          propertyJson.bedroomCount, propertyJson.address, propertyJson.prices);
        //update the current array of properties
        let propertyArr: Property = this.properties.find(b => b.propertyId === property.propertyId);
        propertyArr.bedroomCount = property.bedroomCount;
        propertyArr.surface = property.surface;
        propertyArr.address = property.address;
        propertyArr.prices = property.prices;
        this.propertiesToEdit.splice(this.propertiesToEdit.indexOf(propertyIndex), 1); //remove the index of the property to edit
      }, (error) => {
        console.log(error);
      });


  }

  delete(propertyIndex: number) {
    let property: Property = this.properties[propertyIndex];
    this.httpService.deleteProperty(property)
      .subscribe(() => {
        if (this.selectedProperty !== null && this.properties[propertyIndex].propertyId === this.selectedProperty.propertyId) {
          this.selectedProperty = null;
          this.onPropertySelected.emit(this.selectedProperty);
        }

        this.properties.splice(propertyIndex, 1); //remove the property at this index;
        this.newProperties.splice(propertyIndex, 1); //remove the editing property at this index
      }, (error) => {
        console.log(error);
      });
  }

  activateAddNewProperty() {
    this.isAddNewProperty = true;
    this.newProperty = new Property("", 0, 0, this.address, this.prices);
  }

  addNewProperty(newProperty: Property, element: any) {
    //write new property to db
    console.log(newProperty);
    this.httpService.createProperty(newProperty)
      .subscribe((response: Response) => {
        let propertyJson = response.json();
        let property: Property = new Property(propertyJson.propertyId, propertyJson.surface,
          propertyJson.bedroomCount, propertyJson.address, propertyJson.prices);
        console.log(property);
        this.properties.push(property);
        this.newProperties.push(property);
        this.selectProperty(property);
        this.newProperty = new Property("", 0, 0, this.address, this.prices);
        element.focus();
        this.cancelAddProperty();
      }, (error) => {
        console.log(error);
      });
  }

  cancelAddProperty() {
    this.isAddNewProperty = false;
  }


  selectProperty(property: Property) {
    this.selectedProperty = property;
    this.onPropertySelected.emit(property);
  }

}
