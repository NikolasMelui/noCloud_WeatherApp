System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var WeatherItem;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            WeatherItem = (function () {
                function WeatherItem(cityName, description, temperature) {
                    this.cityName = cityName;
                    this.description = description;
                    this.temperature = temperature;
                }
                WeatherItem = __decorate([
                    core_1.Component({
                        selector: 'weather-item',
                        templateUrl: './app/weather/weather-item.component.html',
                    }), 
                    __metadata('design:paramtypes', [String, String, Number])
                ], WeatherItem);
                return WeatherItem;
            }());
            exports_1("WeatherItem", WeatherItem);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvd2VhdGhlci1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBRUkscUJBQW1CLFFBQWdCLEVBQVMsV0FBbUIsRUFBUyxXQUFtQjtvQkFBeEUsYUFBUSxHQUFSLFFBQVEsQ0FBUTtvQkFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBUTtvQkFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBUTtnQkFFM0YsQ0FBQztnQkFUTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixXQUFXLEVBQUUsMkNBQTJDO3FCQUMzRCxDQUFDOzsrQkFBQTtnQkFRRixrQkFBQztZQUFELENBTkEsQUFNQyxJQUFBO1lBTkQscUNBTUMsQ0FBQSIsImZpbGUiOiJ3ZWF0aGVyL3dlYXRoZXItaXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd3ZWF0aGVyLWl0ZW0nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FwcC93ZWF0aGVyL3dlYXRoZXItaXRlbS5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgV2VhdGhlckl0ZW0ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjaXR5TmFtZTogc3RyaW5nLCBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZywgcHVibGljIHRlbXBlcmF0dXJlOiBudW1iZXIpIHtcclxuXHJcbiAgICB9XHJcblxyXG59Il19
