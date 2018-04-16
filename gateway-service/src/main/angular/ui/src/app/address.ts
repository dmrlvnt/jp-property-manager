import {Location} from "./location";

export class Address {
  addressId: Number;
  addressLine1: String;
  addressLine2: String;
  postCode: String;
  city: String;
  state: String;
  country: String;
  location: Location;
  constructor(addressId: Number, addressLine1: String, addressLine2: String, postCode: String,
              city: String, state: String, country : String, location : Location){
    this.addressId = addressId;
    this.addressLine1 = addressLine1;
    this.addressLine2 = addressLine2;
    this.postCode = postCode;
    this.city = city;
    this.state = state;
    this.country = country;
    this.location = location;
  }
}
