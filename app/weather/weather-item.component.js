System.register(['angular2/core', "./weather-item", "angular2/src/core/metadata"], function(exports_1, context_1) {
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
    var core_1, weather_item_1, metadata_1;
    var WeatherItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_item_1_1) {
                weather_item_1 = weather_item_1_1;
            },
            function (metadata_1_1) {
                metadata_1 = metadata_1_1;
            }],
        execute: function() {
            WeatherItemComponent = (function () {
                function WeatherItemComponent() {
                }
                __decorate([
                    metadata_1.Input('item'), 
                    __metadata('design:type', weather_item_1.WeatherItem)
                ], WeatherItemComponent.prototype, "weatherItem", void 0);
                WeatherItemComponent = __decorate([
                    core_1.Component({
                        selector: 'weather-item',
                        templateUrl: './app/weather/weather-item.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], WeatherItemComponent);
                return WeatherItemComponent;
            }());
            exports_1("WeatherItemComponent", WeatherItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvd2VhdGhlci1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQUFBO2dCQUVBLENBQUM7Z0JBREc7b0JBQUMsZ0JBQUssQ0FBQyxNQUFNLENBQUM7O3lFQUFBO2dCQU5sQjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixXQUFXLEVBQUUsMkNBQTJDO3FCQUMzRCxDQUFDOzt3Q0FBQTtnQkFJRiwyQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdURBRUMsQ0FBQSIsImZpbGUiOiJ3ZWF0aGVyL3dlYXRoZXItaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7V2VhdGhlckl0ZW19IGZyb20gXCIuL3dlYXRoZXItaXRlbVwiO1xyXG5pbXBvcnQge0lucHV0fSBmcm9tIFwiYW5ndWxhcjIvc3JjL2NvcmUvbWV0YWRhdGFcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd3ZWF0aGVyLWl0ZW0nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FwcC93ZWF0aGVyL3dlYXRoZXItaXRlbS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBXZWF0aGVySXRlbUNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoJ2l0ZW0nKSB3ZWF0aGVySXRlbTogV2VhdGhlckl0ZW07IC8vdXNpbmcgYWxpYXMgaGVyZSB0byBhdm9pZCBjb25mdXNpb25cclxufSJdfQ==
