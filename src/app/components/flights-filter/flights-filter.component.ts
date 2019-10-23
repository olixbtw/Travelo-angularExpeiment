import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flights-filter',
  templateUrl: './flights-filter.component.html',
  styleUrls: ['./flights-filter.component.scss']
})
export class FlightsFilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

function getVals() {
  // Get slider values
  let parent = this.parentNode;
  let slides = parent.getElementsByTagName('input');
    let slide1 = parseFloat( slides[0].value );
    let slide2 = parseFloat( slides[1].value );
  // Neither slider will clip the other, so make sure we determine which is larger
  if (slide1 > slide2) {
    let tmp = slide2; slide2 = slide1; slide1 = tmp;
  }

  // let displayElement = parent.getElementsByClassName('rangeValues')[0];
  let valueFrom = document.getElementsByClassName('valueFrom')[0];
  let valueTo = document.getElementsByClassName('valueTo')[0];
  	  valueFrom.innerHTML = slide1;
  	  valueTo.innerHTML = slide2;
      // displayElement.innerHTML = slide1 + ' - ' + slide2;
}

window.onload = function() {
  // Initialize Sliders
  let sliderSections = document.getElementsByClassName('range-slider');
      for (let x = 0; x < sliderSections.length; x++) {
        let sliders = sliderSections[x].getElementsByTagName('input');
        for (let y = 0; y < sliders.length; y++) {
        if ( sliders[y].type === 'range') {
            sliders[y].oninput = getVals;
            // Manually trigger event first time to display values
            sliders[y].oninput();
          }
        }
      }
}
