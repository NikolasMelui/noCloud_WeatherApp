System.register(["angular2/core", "./weather-item.component", "./weather.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, weather_item_component_1, weather_service_1;
    var WeatherListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_item_component_1_1) {
                weather_item_component_1 = weather_item_component_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            }],
        execute: function() {
            WeatherListComponent = (function () {
                function WeatherListComponent(_weatherService) {
                    this._weatherService = _weatherService;
                }
                WeatherListComponent.prototype.ngOnInit = function () {
                    this.weatherItems = this._weatherService.getWeatherItems();
                };
                WeatherListComponent = __decorate([
                    core_1.Component({
                        selector: 'weather-list',
                        templateUrl: './app/weather/weather-list.component.html',
                        directives: [weather_item_component_1.WeatherItemComponent],
                        providers: [weather_service_1.WeatherService]
                    }), 
                    __metadata('design:paramtypes', [weather_service_1.WeatherService])
                ], WeatherListComponent);
                return WeatherListComponent;
            }());
            exports_1("WeatherListComponent", WeatherListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvd2VhdGhlci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWFBO2dCQUdJLDhCQUFvQixlQUErQjtvQkFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO2dCQUVuRCxDQUFDO2dCQUVELHVDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUMvRCxDQUFDO2dCQWhCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixXQUFXLEVBQUUsMkNBQTJDO3dCQUN4RCxVQUFVLEVBQUUsQ0FBQyw2Q0FBb0IsQ0FBQzt3QkFDbEMsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztxQkFDOUIsQ0FBQzs7d0NBQUE7Z0JBYUYsMkJBQUM7WUFBRCxDQVhBLEFBV0MsSUFBQTtZQVhELHVEQVdDLENBQUEiLCJmaWxlIjoid2VhdGhlci93ZWF0aGVyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7V2VhdGhlckl0ZW1Db21wb25lbnR9IGZyb20gXCIuL3dlYXRoZXItaXRlbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtXZWF0aGVySXRlbX0gZnJvbSBcIi4vd2VhdGhlci1pdGVtXCI7XHJcbmltcG9ydCB7T25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0IHtXZWF0aGVyU2VydmljZX0gZnJvbSBcIi4vd2VhdGhlci5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnd2VhdGhlci1saXN0JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9hcHAvd2VhdGhlci93ZWF0aGVyLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW1dlYXRoZXJJdGVtQ29tcG9uZW50XSxcclxuICAgIHByb3ZpZGVyczogW1dlYXRoZXJTZXJ2aWNlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFdlYXRoZXJMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHdlYXRoZXJJdGVtczogV2VhdGhlckl0ZW1bXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF93ZWF0aGVyU2VydmljZTogV2VhdGhlclNlcnZpY2Upe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiBhbnkge1xyXG4gICAgICAgIHRoaXMud2VhdGhlckl0ZW1zID0gdGhpcy5fd2VhdGhlclNlcnZpY2UuZ2V0V2VhdGhlckl0ZW1zKCk7XHJcbiAgICB9XHJcblxyXG59Il19
