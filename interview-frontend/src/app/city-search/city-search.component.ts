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
    this.http.get(`http://localhost:3000/cities?name=${cityName}`).subscribe(
      (data: any) => {
        this.cities = data; 
        console.log(this.cities);
      },
      (error: any) => {
        console.error('Error fetching cities:', error);
      }
    );
  }
}