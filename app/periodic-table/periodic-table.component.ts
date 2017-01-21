import { Component, OnInit } from '@angular/core';
import { BohrModel } from '../bohr-model/bohr-model.component';
import elementService from '../service/elements.service';



@Component({
  selector: 'periodic-table',
  styleUrls: ['../periodic-table/periodic-table.component.scss'],
  template:
  `
  <div class="periodic-table">
    <div class="row clearfix">
      <div id="element_1" class="element">
        <bohr-model></bohr-model>
      </div>
      <div class="element blank"></div>
      <div class="element blank"></div>
      <div class="element blank"></div>
      <div class="element blank"></div>
      <div class="element blank"></div>
      <div class="element blank"></div>
      <div class="element blank"></div>
      <div class="element blank"></div>
      <div class="element blank"></div>
      <div class="element blank"></div>
      <div class="element blank"></div>
      <div class="element blank"></div>
      <div class="element blank"></div>
      <div class="element blank"></div>
      <div class="element blank"></div>
      <div class="element blank"></div>
      <div class="element">2
        <bohr-model></bohr-model>
      </div>
    </div>
    <div class="row clearfix">
      <div id="element_1" class="element">3</div>
      <div class="element">4</div>
      <div class="element blank"></div>
      <div class="element blank"></div>
      <div class="element blank"></div>
      <div class="element blank"></div>
      <div class="element blank"></div>
      <div class="element blank"></div>
      <div class="element blank"></div>
      <div class="element blank"></div>
      <div class="element blank"></div>
      <div class="element blank"></div>
      <div class="element">5</div>
      <div class="element">6</div>
      <div class="element">7</div>
      <div class="element">8</div>
      <div class="element">9</div>
      <div class="element">10</div>
    </div>
    <div class="row clearfix">
      <div id="element_1" class="element">11

        <bohr-model></bohr-model>
    </div>
      <div class="element">

      </div>
      <div class="element blank"></div>
      <div class="element blank"></div>
      <div class="element blank"></div>
      <div class="element blank"></div>
      <div class="element blank"></div>
      <div class="element blank"></div>
      <div class="element blank"></div>
      <div class="element blank"></div>
      <div class="element blank"></div>
      <div class="element blank"></div>
      <div class="element">13</div>
      <div class="element">14</div>
      <div class="element">15</div>
      <div class="element">16</div>
      <div class="element">17</div>
      <div class="element">18</div>
    </div>
    <div class="row clearfix">
      <div id="element_1" class="element">19</div>
      <div class="element">20</div>
      <div class="element">21</div>
      <div class="element">22</div>
      <div class="element">23</div>
      <div class="element">24</div>
      <div class="element">25</div>
      <div class="element">26</div>
      <div class="element">27</div>
      <div class="element">28</div>
      <div class="element">29</div>
      <div class="element">30</div>
      <div class="element">31</div>
      <div class="element">32</div>
      <div class="element">33</div>
      <div class="element">34</div>
      <div class="element">35</div>
      <div class="element">36</div>
    </div>
  </div>

  <bohr-model></bohr-model>

  <bohr-model></bohr-model>

  <bohr-model></bohr-model>

    `,
      providers: [elementService]

})
export class PeriodicTable implements OnInit {
  public elements: array;
  constructor(public elementService: elementService) {}
  ngOnInit() {
    this.elements = this.elementService.getelements();
    console.log(this.elements, "we're here");
  }
}