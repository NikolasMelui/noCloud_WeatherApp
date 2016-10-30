import {Component} from 'angular2/core';
import {WeatherItemComponent} from "./weather-item.component";

@Component({
    selector: 'weather-list',
    templateUrl: './app/weather/weather-list.component.html',
    directives: [WeatherItemComponent]
})

export class WeatherListComponent {

    constructor() {
    }

}