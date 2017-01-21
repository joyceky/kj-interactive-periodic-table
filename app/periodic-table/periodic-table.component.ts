import { Component, OnInit } from '@angular/core';
import { BohrModel } from '../bohr-model/bohr-model.component';
import { ElementService } from '../service/elements.service';

interface elements{
  atomicNumber: number,
  symbol: string,
  name: string,
  atomicMass: string,
  cpkHexColor: string,
  electronicConfiguration: string,
  electronegativity: number,
  atomicRadius: number,
  ionRadius: number,
  vanDelWaalsRadius: number,
  ionizationEnergy: number,
  electronAffinity: number,
  oxidationStates: string,
  standardState: string,
  bondingType: string,
  meltingPoint: number,
  boilingPoint: number,
  density: number,
  groupBlock: string,
  yearDiscovered: number
}        
  

@Component({
  selector: 'periodic-table',
  styleUrls: ['../periodic-table/periodic-table.component.scss'],
  templateUrl: '../periodic-table/periodic-table.component.html',
  providers: [ElementService]
  })

export class PeriodicTable implements OnInit {
  name: string = 'hello'

  elements: Element[];
  constructor(private elementService: ElementService) {}
  ngOnInit() {
    this.elements = this.elementService.getElements();
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