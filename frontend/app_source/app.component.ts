import {Component} from 'angular2/core';
import {WeatherListComponent} from "./weather/weather-list.component";
import {WeatherSearchComponent} from "./weather/weather-search.component";

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives: [WeatherListComponent, WeatherSearchComponent]
})
export class AppComponent {
    title: string;

    constructor() {
        this.title = 'noCloud';
    }

}