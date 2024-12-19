import { Component, NgModule, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { error } from 'console';
import { WeatherService } from './services/weather.service';
import { response } from 'express';
import { WeatherData } from './model/weather.model';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , NgIf , CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
 constructor(private weatherService : WeatherService){

 }
 
  weatherData?: WeatherData;
  ngOnInit(): void {
    this.weatherService.getWeatherData('Karachi')
    .subscribe({
      next: (response) =>{
        this.weatherData = response;
        console.log(response);
      }
    })
      
  }
} 
  
