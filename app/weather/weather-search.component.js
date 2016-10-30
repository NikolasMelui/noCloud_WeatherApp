System.register(["angular2/core", "./weather.service", "./weather-item", "rxjs/Subject"], function(exports_1, context_1) {
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
    var core_1, weather_service_1, weather_item_1, Subject_1;
    var WeatherSearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            },
            function (weather_item_1_1) {
                weather_item_1 = weather_item_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            WeatherSearchComponent = (function () {
                function WeatherSearchComponent(_weatherService) {
                    this._weatherService = _weatherService;
                    this.searchStream = new Subject_1.Subject();
                    this.data = {};
                }
                WeatherSearchComponent.prototype.onSubmit = function () {
                    var weatherItem = new weather_item_1.WeatherItem(this.data.name, this.data.weather[0].main, this.data.main.temp);
                    this._weatherService.addWeatherItem(weatherItem);
                };
                WeatherSearchComponent.prototype.onSearchLocation = function (cityName) {
                    this.searchStream
                        .next(cityName);
                };
                WeatherSearchComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.searchStream
                        .debounceTime(300)
                        .distinctUntilChanged()
                        .switchMap(function (input) { return _this._weatherService.searchWeatherData(input); })
                        .subscribe(function (data) { return _this.data = data; });
                };
                WeatherSearchComponent = __decorate([
                    core_1.Component({
                        selector: 'weather-search',
                        templateUrl: './app/weather/weather-search.component.html',
                    }), 
                    __metadata('design:paramtypes', [weather_service_1.WeatherService])
                ], WeatherSearchComponent);
                return WeatherSearchComponent;
            }());
            exports_1("WeatherSearchComponent", WeatherSearchComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvd2VhdGhlci1zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBS0ksZ0NBQW9CLGVBQStCO29CQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7b0JBSjNDLGlCQUFZLEdBQUcsSUFBSSxpQkFBTyxFQUFVLENBQUM7b0JBQzdDLFNBQUksR0FBUSxFQUFFLENBQUM7Z0JBS2YsQ0FBQztnQkFFRCx5Q0FBUSxHQUFSO29CQUNnQixJQUFNLFdBQVcsR0FBRyxJQUFJLDBCQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNwRyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDakUsQ0FBQztnQkFFRCxpREFBZ0IsR0FBaEIsVUFBaUIsUUFBZ0I7b0JBQzdCLElBQUksQ0FBQyxZQUFZO3lCQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDeEIsQ0FBQztnQkFFRCx5Q0FBUSxHQUFSO29CQUFBLGlCQVFDO29CQVBHLElBQUksQ0FBQyxZQUFZO3lCQUNaLFlBQVksQ0FBQyxHQUFHLENBQUM7eUJBQ2pCLG9CQUFvQixFQUFFO3lCQUN0QixTQUFTLENBQUMsVUFBQyxLQUFhLElBQUssT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxFQUE3QyxDQUE2QyxDQUFDO3lCQUMzRSxTQUFTLENBQ04sVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksRUFBaEIsQ0FBZ0IsQ0FDM0IsQ0FBQTtnQkFDVCxDQUFDO2dCQWhDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFdBQVcsRUFBRSw2Q0FBNkM7cUJBQzdELENBQUM7OzBDQUFBO2dCQThCRiw2QkFBQztZQUFELENBNUJBLEFBNEJDLElBQUE7WUE1QkQsMkRBNEJDLENBQUEiLCJmaWxlIjoid2VhdGhlci93ZWF0aGVyLXNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge0NvbnRyb2xHcm91cH0gZnJvbSBcImFuZ3VsYXIyL3NyYy9jb21tb24vZm9ybXMvbW9kZWxcIjtcclxuaW1wb3J0IHtXZWF0aGVyU2VydmljZX0gZnJvbSBcIi4vd2VhdGhlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7V2VhdGhlckl0ZW19IGZyb20gXCIuL3dlYXRoZXItaXRlbVwiO1xyXG5pbXBvcnQge1N1YmplY3R9IGZyb20gXCJyeGpzL1N1YmplY3RcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd3ZWF0aGVyLXNlYXJjaCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXBwL3dlYXRoZXIvd2VhdGhlci1zZWFyY2guY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFdlYXRoZXJTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBzZWFyY2hTdHJlYW0gPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XHJcbiAgICBkYXRhOiBhbnkgPSB7fTtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfd2VhdGhlclNlcnZpY2U6IFdlYXRoZXJTZXJ2aWNlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdlYXRoZXJJdGVtID0gbmV3IFdlYXRoZXJJdGVtKHRoaXMuZGF0YS5uYW1lLCB0aGlzLmRhdGEud2VhdGhlclswXS5tYWluLCB0aGlzLmRhdGEubWFpbi50ZW1wKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl93ZWF0aGVyU2VydmljZS5hZGRXZWF0aGVySXRlbSh3ZWF0aGVySXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWFyY2hMb2NhdGlvbihjaXR5TmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hTdHJlYW1cclxuICAgICAgICAgICAgLm5leHQoY2l0eU5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuc2VhcmNoU3RyZWFtXHJcbiAgICAgICAgICAgIC5kZWJvdW5jZVRpbWUoMzAwKVxyXG4gICAgICAgICAgICAuZGlzdGluY3RVbnRpbENoYW5nZWQoKVxyXG4gICAgICAgICAgICAuc3dpdGNoTWFwKChpbnB1dDogc3RyaW5nKSA9PiB0aGlzLl93ZWF0aGVyU2VydmljZS5zZWFyY2hXZWF0aGVyRGF0YShpbnB1dCkpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHRoaXMuZGF0YSA9IGRhdGFcclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG59Il19
