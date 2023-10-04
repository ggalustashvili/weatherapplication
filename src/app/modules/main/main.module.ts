import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {WeatherService} from "../../core/services/weather-service.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainRoutingModule,
  ],
  providers: [
    WeatherService
  ]
})
export class MainModule {
}
