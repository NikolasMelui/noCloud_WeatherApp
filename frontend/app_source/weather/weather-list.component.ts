import {Component} from "angular2/core";
import {WeatherItemComponent} from "./weather-item.component";
import {WeatherItem} from "./weather-item";
import {OnInit} from "angular2/src/core/linker/interfaces";
import {WEATHER_ITEMS} from "./weather.data";

@Component({
    selector: 'weather-list',
    templateUrl: './app/weather/weather-list.component.html',
    directives: [WeatherItemComponent]
})

export class WeatherListComponent implements OnInit {
    weatherItems: WeatherItem[];

    ngOnInit(): any {
        this.weatherItems = WEATHER_ITEMS;
    }

}