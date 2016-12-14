import {Component} from 'angular2/core';
import {WeatherItem} from "./weather-item";
import {Input} from "angular2/src/core/metadata";

@Component({
    selector: 'weather-item',
    templateUrl: './app/weather/weather-item.component.html'
})

export class WeatherItemComponent {
    @Input('item') weatherItem: WeatherItem; //using alias here to avoid confusion
}