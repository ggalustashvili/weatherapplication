import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import { WeatherData} from "../../shared/interfaces/weather";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private readonly http: HttpClient) { }

  public getWeather(latitude: number , longitude: number): Observable<any>{
    return this.http.get<any>(`${environment.baseUrl}/weather?lat=${latitude}.617361&lon=${longitude}.598827&appid=${environment.api_key}`)
  }
}

