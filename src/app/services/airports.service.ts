import { Injectable } from '@angular/core';
import airports from '@data/mock/airports.mock.js';
import cities from '@data/mock/cities.mock.js';
import countries from '@data/mock/countries.mock.js';

interface Airport {
  country_code: string;
  city_code: string;
  code: string;
  name: string;
}

interface City {
  country_code: string;
  code: string;
  name: string;
}

interface Country {
  code: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class AirportsService {
  _airports: Airport[];
  _cities: City[];
  _countries: Country[];

  constructor() {
    this._airports = airports;
    this._cities = cities;
    this._countries = countries;
  }

  get airports(): Airport[] {
    return this._airports;
  }

  get cities(): City[] {
    return this._cities;
  }

  get countries(): Country[] {
    return this._countries;
  }

  getCityNameByIATACode(cityIATACode: string): string {
    const IATACodeLength = 3;

    if (cityIATACode.length === IATACodeLength) {
      const foundCity = this._cities.find((city: City) => city.code.toLowerCase() === cityIATACode.toLowerCase());
      if (foundCity) {
        return foundCity.name;
      }
      return '';
    }
  }

  getAirportsByCity(city: string): Airport[] {
    const IATACodeLength = 3;

    if (city.length === IATACodeLength) {
      const foundCity = this._cities.find((cityEl: City) => cityEl.code.toLowerCase() === city.toLowerCase());
      if (foundCity) {
        return this.filterAirportsByCityCode(city);
      }
    }

    const foundCity = this._cities.find((cityEl: City) => cityEl.name.toLowerCase().includes(city.toLowerCase()));
    const cityIATACode = foundCity ? foundCity.code : null;

    if (cityIATACode) {
      return this.filterAirportsByCityCode(cityIATACode);
    }
    return [];
  }

  private filterAirportsByCityCode(cityIATACode: string): Airport[] {
    const airports = this._airports
      .slice()
      .filter((airport: Airport) => airport.city_code.toLowerCase().includes(cityIATACode.toLowerCase()));
    return airports;
  }
}
