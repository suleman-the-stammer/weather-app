import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { WeatherData } from '../model/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http : HttpClient) { }

  getWeatherData (cityName : string) : Observable<WeatherData>{
   return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
   headers : new HttpHeaders()
   .set(environment.XRapidApiHostHeaderName, environment.XRapidApiHostHeaderValue)
   .set(environment.XRapidApiKeyHeaderName , environment.XRapidApiKeyHeaderValue),
   params :  new HttpParams()
   .set('city' , cityName)
   .set('units' , 'metric')
   .set('mode' , 'json')
    } )
  }
}
