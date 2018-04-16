import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Property} from "./property";

@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }

  me(): Observable<Response> {
    return this.http.get("/me", this.makeOptions())
  }

  logout(): Observable<Response> {
    return this.http.post("/logout", '', this.makeOptions())
  }

  getProperties(): Observable<Response> {
    return this.http.get("/propertyservice/v1/property/all", this.makeOptions())
  }

  getProperty(property: Property): Observable<Response> {
    return this.http.get("/propertyservice/v1/property/" + property.propertyId, this.makeOptions())
  }

  createProperty(newProperty: Property): Observable<Response> {
    return this.http.post("/propertyservice/v1/property/", newProperty, this.makeOptions())
  }

  updateProperty(newProperty: Property): Observable<Response> {
    return this.http.put("/propertyservice/v1/property/" + newProperty.propertyId, newProperty, this.makeOptions())
  }

  deleteProperty(property: Property): Observable<Response> {
    return this.http.delete("/propertyservice/v1/property/" + property.propertyId, this.makeOptions())
  }

  private makeOptions(): RequestOptions {
    let headers = new Headers({'Content-Type': 'application/json'});
    return new RequestOptions({headers: headers});
  }
}
