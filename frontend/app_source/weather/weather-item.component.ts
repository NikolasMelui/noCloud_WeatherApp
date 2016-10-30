import {Component} from 'angular2/core';
import {WeatherItem} from "./weather-item";

@Component({
    selector: 'weather-item',
    templateUrl: './app/weather/weather-item.component.html',
})

export class WeatherItemComponent {
    weatherItem: WeatherItem;
}