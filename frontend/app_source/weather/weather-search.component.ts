import {Component, OnInit} from "angular2/core";
import {ControlGroup} from "angular2/src/common/forms/model";
import {WeatherService} from "./weather.service";
import {WeatherItem} from "./weather-item";

@Component({
    selector: 'weather-search',
    templateUrl: './app/weather/weather-search.component.html',
})

export class WeatherSearchComponent {

    constructor(private _weatherService: WeatherService) {

    }
    onSubmit(form: ControlGroup){
        this._weatherService.searchWeatherData(form.value.location)
            .subscribe(
                data => {
                    const weatherItem = new WeatherItem(data.name, data.weather[0].main, data.main.temp);
                    this._weatherService.addWeatherItem(weatherItem);
                }
            );
    }

}