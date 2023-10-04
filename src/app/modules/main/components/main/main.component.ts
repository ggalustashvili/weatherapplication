import {Component} from '@angular/core';
import {OnInit} from "@angular/core";
import {WeatherService} from "../../../../core/services/weather-service.service";
import {Observable} from "rxjs";
import {WeatherData} from "../../../../shared/interfaces/weather";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public data$!: Observable<WeatherData>
  public formData = new FormGroup({
    latitude: new FormControl(''),
    longitude: new FormControl('')
  });

  constructor(private readonly weatherService: WeatherService) {
  }

  public ngOnInit() {
    this.getUserLocation();
  }

  public getUserLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
          if (position) {
            let {latitude, longitude} = position.coords
            this.data$ = this.weatherService.getWeather(latitude, longitude)
          }
        },
        (error: GeolocationPositionError) => console.log(error))
    } else {
      alert("Geolocation not supported for browser.")
    }
  }

  getUsrLocationByInput(Data: any) {
    let {longitude, latitude} = Data
    this.data$ = this.weatherService.getWeather(longitude, latitude);
  }
}
