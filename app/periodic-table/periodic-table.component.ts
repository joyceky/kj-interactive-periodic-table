import { Component, OnInit } from '@angular/core';
import { BohrModel } from '../bohr-model/bohr-model.component';
import elementService from '../service/elements.service';


@Component({
  selector: 'periodic-table',
  styleUrls: ['../periodic-table/periodic-table.component.scss'],
  templateUrl: '../periodic-table/periodic-table.component.html',
      providers: [elementService]

})

export class PeriodicTable implements OnInit {
  name: string = 'hello'
  public elements: array;
  constructor(public elementService: elementService) {}
  ngOnInit() {
    this.elements = this.elementService.getelements();
    console.log(this.elements, "we're here");
  }
  handleClick(event: any) {
    console.log(event);
  }
  handleChange(value: string) {
  console.log(value);
  this.name = value;
  }
}