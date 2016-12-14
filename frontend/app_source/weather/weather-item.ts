import {Component} from 'angular2/core';

@Component({
    selector: 'weather-item',
    templateUrl: './app/weather/weather-item.component.html',
})

export class WeatherItem {

    constructor(public cityName: string, public description: string, public temperature: number) {

    }

}