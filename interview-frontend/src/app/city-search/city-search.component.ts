import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss']
})

export class CitySearchComponent {
  cities: any;

  constructor(private http: HttpClient) { }

  onSubmit(cityName: string): void {
    this.http.get(`api/cities?name=${cityName}`).subscribe(data => {
      this.cities = data;
      console.log(this.cities)
    });
  }
}