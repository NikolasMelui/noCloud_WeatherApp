System.register(['angular2/core', "./weather-item"], function(exports_1, context_1) {
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
    var core_1, weather_item_1;
    var WeatherItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_item_1_1) {
                weather_item_1 = weather_item_1_1;
            }],
        execute: function() {
            WeatherItemComponent = (function () {
                function WeatherItemComponent() {
                    this.weatherItem = new weather_item_1.WeatherItem('London', 'RAINY', 4);
                }
                WeatherItemComponent = __decorate([
                    core_1.Component({
                        selector: 'weather-item',
                        templateUrl: './app/weather/weather-item.component.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], WeatherItemComponent);
                return WeatherItemComponent;
            }());
            exports_1("WeatherItemComponent", WeatherItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvd2VhdGhlci1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQUdJO29CQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSwwQkFBVyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzdELENBQUM7Z0JBVkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsV0FBVyxFQUFFLDJDQUEyQztxQkFDM0QsQ0FBQzs7d0NBQUE7Z0JBUUYsMkJBQUM7WUFBRCxDQU5BLEFBTUMsSUFBQTtZQU5ELHVEQU1DLENBQUEiLCJmaWxlIjoid2VhdGhlci93ZWF0aGVyLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1dlYXRoZXJJdGVtfSBmcm9tIFwiLi93ZWF0aGVyLWl0ZW1cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd3ZWF0aGVyLWl0ZW0nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FwcC93ZWF0aGVyL3dlYXRoZXItaXRlbS5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgV2VhdGhlckl0ZW1Db21wb25lbnQge1xyXG4gICAgd2VhdGhlckl0ZW06IFdlYXRoZXJJdGVtO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMud2VhdGhlckl0ZW0gPSBuZXcgV2VhdGhlckl0ZW0oJ0xvbmRvbicsICdSQUlOWScsIDQpO1xyXG4gICAgfVxyXG59Il19
