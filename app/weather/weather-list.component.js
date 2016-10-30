System.register(["angular2/core", "./weather-item.component", "./weather.data"], function(exports_1, context_1) {
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
    var core_1, weather_item_component_1, weather_data_1;
    var WeatherListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_item_component_1_1) {
                weather_item_component_1 = weather_item_component_1_1;
            },
            function (weather_data_1_1) {
                weather_data_1 = weather_data_1_1;
            }],
        execute: function() {
            WeatherListComponent = (function () {
                function WeatherListComponent() {
                }
                WeatherListComponent.prototype.ngOnInit = function () {
                    this.weatherItems = weather_data_1.WEATHER_ITEMS;
                };
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvd2VhdGhlci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUFBO2dCQU9BLENBQUM7Z0JBSkcsdUNBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLDRCQUFhLENBQUM7Z0JBQ3RDLENBQUM7Z0JBWEw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsV0FBVyxFQUFFLDJDQUEyQzt3QkFDeEQsVUFBVSxFQUFFLENBQUMsNkNBQW9CLENBQUM7cUJBQ3JDLENBQUM7O3dDQUFBO2dCQVNGLDJCQUFDO1lBQUQsQ0FQQSxBQU9DLElBQUE7WUFQRCx1REFPQyxDQUFBIiwiZmlsZSI6IndlYXRoZXIvd2VhdGhlci1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge1dlYXRoZXJJdGVtQ29tcG9uZW50fSBmcm9tIFwiLi93ZWF0aGVyLWl0ZW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7V2VhdGhlckl0ZW19IGZyb20gXCIuL3dlYXRoZXItaXRlbVwiO1xyXG5pbXBvcnQge09uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7V0VBVEhFUl9JVEVNU30gZnJvbSBcIi4vd2VhdGhlci5kYXRhXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnd2VhdGhlci1saXN0JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9hcHAvd2VhdGhlci93ZWF0aGVyLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW1dlYXRoZXJJdGVtQ29tcG9uZW50XVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFdlYXRoZXJMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHdlYXRoZXJJdGVtczogV2VhdGhlckl0ZW1bXTtcclxuXHJcbiAgICBuZ09uSW5pdCgpOiBhbnkge1xyXG4gICAgICAgIHRoaXMud2VhdGhlckl0ZW1zID0gV0VBVEhFUl9JVEVNUztcclxuICAgIH1cclxuXHJcbn0iXX0=
