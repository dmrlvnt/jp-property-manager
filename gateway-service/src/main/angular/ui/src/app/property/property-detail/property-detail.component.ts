import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {Property} from "../../property";
import {Principal} from "../../principal";

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  @Input() selectedProperty: Property = null;
  @Input() principal: Principal = null;
  @Output() closeProperty: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
  }

  closePropertyDetail() {
    this.closeProperty.emit(null);
  }

}
