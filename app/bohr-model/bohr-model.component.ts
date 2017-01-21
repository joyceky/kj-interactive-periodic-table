import { Component } from '@angular/core';
import modelService from '../service/bohr-model.service';

interface model{
  containerId: string,
  numElectrons: number,
  nucleusRadius: number, 
  nucleusColor: string
  electronRadius: number
  electronColor: string, 
  orbitalSpacing: number,
  orbitalWidth: number, 
  orbitalColor: number, 
  idNumber: number, 
  animationTime: number, 
  rotateConfig: {speed: number, clockwise: boolean}, 
  orbitalRotationConfig: { 
      pattern: {
      alternating: boolean,
      clockwise: boolean, 
      preset: string, 
      }
  },
  symbolOffset: number, 
  drawSymbol: boolean 
        }    

@Component({
  selector: 'bohr-model',
  styleUrls: ['../bohr-model/bohr-model.component.scss'],
  template:
  `
        <div class="bohr-model-container88">
        </div>
   
  `,
    providers: [modelService]
})
export class BohrModel {
  
  models: model;
  constructor(public modelService: modelService) {}
  ngOnInit() {
    // for(let i = 0; i < 15; i++) {
    this.models = this.modelService.getModels(88);
    console.log(this.models, "MyModel");
    // }
  }

  trackByFn(num) {
  return num++;
}

}
