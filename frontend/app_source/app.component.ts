import {Component} from 'angular2/core';
import {WeatherListComponent} from "./weather/weather-list.component";

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives: [WeatherListComponent]
})
export class AppComponent {
    title: string;

    constructor() {
        this.title = 'noCloud';
    }

}