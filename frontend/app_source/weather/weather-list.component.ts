import {Component, OnInit} from "angular2/core";
import {WeatherItemComponent} from "./weather-item.component";
import {WeatherItem} from "./weather-item";
import {WeatherService} from "./weather.service";

@Component({
    selector: 'weather-list',
    templateUrl: './app/weather/weather-list.component.html',
    directives: [WeatherItemComponent]
})

export class WeatherListComponent implements OnInit {
    weatherItems: WeatherItem[];

    constructor(private _weatherService: WeatherService) {
    }

    ngOnInit(): any {
        this.weatherItems = this._weatherService.getWeatherItems();
    }

}