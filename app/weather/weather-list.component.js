System.register(['angular2/core', "./weather-item.component"], function(exports_1, context_1) {
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
    var core_1, weather_item_component_1;
    var WeatherListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_item_component_1_1) {
                weather_item_component_1 = weather_item_component_1_1;
            }],
        execute: function() {
            WeatherListComponent = (function () {
                function WeatherListComponent() {
                }
                WeatherListComponent = __decorate([
                    core_1.Component({
                        selector: 'weather-list',
                        templateUrl: './app/weather/weather-list.component.html',
                        directives: [weather_item_component_1.WeatherItemComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WeatherListComponent);
                return WeatherListComponent;
            }());
            exports_1("WeatherListComponent", WeatherListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvd2VhdGhlci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQUVJO2dCQUNBLENBQUM7Z0JBVEw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsV0FBVyxFQUFFLDJDQUEyQzt3QkFDeEQsVUFBVSxFQUFFLENBQUMsNkNBQW9CLENBQUM7cUJBQ3JDLENBQUM7O3dDQUFBO2dCQU9GLDJCQUFDO1lBQUQsQ0FMQSxBQUtDLElBQUE7WUFMRCx1REFLQyxDQUFBIiwiZmlsZSI6IndlYXRoZXIvd2VhdGhlci1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtXZWF0aGVySXRlbUNvbXBvbmVudH0gZnJvbSBcIi4vd2VhdGhlci1pdGVtLmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3dlYXRoZXItbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXBwL3dlYXRoZXIvd2VhdGhlci1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtXZWF0aGVySXRlbUNvbXBvbmVudF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBXZWF0aGVyTGlzdENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG59Il19
