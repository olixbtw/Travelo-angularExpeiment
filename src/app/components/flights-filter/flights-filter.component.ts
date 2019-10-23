import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flights-filter',
  templateUrl: './flights-filter.component.html',
  styleUrls: ['./flights-filter.component.scss']
})
export class FlightsFilterComponent implements OnInit {

  // public
  public minRange: number = 0;
  public maxRange: number = 200;

  public minPoint: number = 0;
  public maxPoint: number = 200;

  constructor() { }

  ngOnInit() {

    const sliderSections = document.getElementsByClassName('range-slider');
    for (let x = 0; x < sliderSections.length; x++) {
      const sliders = sliderSections[x].getElementsByTagName('input');
      for (let y = 0; y < sliders.length; y++) {
        if ( sliders[y].type === 'range') {
          sliders[y].oninput = this.getVals;
          // Manually trigger event first time to display values
          sliders[y].oninput();
        }
      }
    }

  }

  getVals() {
    // Get slider values
    // const parent = this.parentNode;
    // const slides = parent.getElementsByTagName('input');
    // let slide1 = slides[0].value;
    // let slide2 = slides[1].value;
    let slide1 = 0;
    let slide2 = 230;
    // console.log(slide1, slide2, 'What?', this.maxPoint);

    // Neither slider will clip the other, so make sure we determine which is larger
    if (slide1 > slide2) {
    	console.log(typeof slide1, typeof slide2);
      const tmp = slide2; slide2 = slide1; slide1 = tmp;
    }

    const valueFrom = document.getElementsByClassName('valueFrom')[0];
    const valueTo = document.getElementsByClassName('valueTo')[0];
    valueFrom.innerHTML = slide1;
    valueTo.innerHTML = slide2;
  }

}




/*
function getVals() {
  // Get slider values
  const parent = this.parentNode;
  const slides = parent.getElementsByTagName('input');
  let slide1 = slides[0].value;
  let slide2 = slides[1].value;

  // Neither slider will clip the other, so make sure we determine which is larger
  if (slide1 > slide2) {
    const tmp = slide2; slide2 = slide1; slide1 = tmp;
  }

  const valueFrom = document.getElementsByClassName('valueFrom')[0];
  const valueTo = document.getElementsByClassName('valueTo')[0];
  valueFrom.innerHTML = slide1;
  valueTo.innerHTML = slide2;
}

window.onload = () => {
  // Initialize Sliders
  const sliderSections = document.getElementsByClassName('range-slider');
  for (let x = 0; x < sliderSections.length; x++) {
    const sliders = sliderSections[x].getElementsByTagName('input');
    for (let y = 0; y < sliders.length; y++) {
      if ( sliders[y].type === 'range') {
        sliders[y].oninput = getVals;
        // Manually trigger event first time to display values
        sliders[y].oninput();
      }
    }
  }
};*/
