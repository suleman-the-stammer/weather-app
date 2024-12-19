import { Component, NgModule, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { error } from 'console';
import { WeatherService } from './services/weather.service';
import { response } from 'express';
import { WeatherData } from './model/weather.model';
import { FormsModule, NgForm } from '@angular/forms';


// @NgModule({
//   declarations: [
//     // Your components
//   ],
//   imports: [
//      NgForm
//   ]
 
// })


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , NgIf ,   CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent implements OnInit{
 constructor(private weatherService : WeatherService){

 }
 cityName: string = 'Lahore';
 
  weatherData?: WeatherData;
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
      
  }
  onSubmit(){
   this.getWeatherData(this.cityName);
   this.cityName=' ';
  }

  private getWeatherData(cityName: string){
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response) =>{
        this.weatherData = response;
        console.log(response);
      }
    })
  }
} 
  
