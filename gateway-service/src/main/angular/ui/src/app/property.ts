import {Address} from "./address";
import {Price} from "./price";

export class Property {
  propertyId: String;
  surface: Number;
  bedroomCount: Number;
  address: Address;
  prices: Array<Price>;
  constructor(propertyId: String, surface: Number, bedroomCount: Number, address: Address,
              prices: Array<Price>){
    this.propertyId = propertyId;
    this.surface = surface;
    this.bedroomCount = bedroomCount;
    this.address = address;
    this.prices = prices;
  }
}
