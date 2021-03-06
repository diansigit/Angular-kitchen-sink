System.register(['@angular/core', '@angular/platform-browser'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, platform_browser_1;
    var Sliderpanel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            }],
        execute: function() {
            Sliderpanel = (function () {
                function Sliderpanel(viewContainer, doc) {
                    this.doc = doc;
                    this.dom = doc.body;
                    this.viewContainer = viewContainer;
                    this.el = viewContainer.element.nativeElement;
                }
                Sliderpanel.prototype.getElementByClass = function (element) {
                    return jQuery(this.dom).find('.' + element, this.el)[0];
                };
                Sliderpanel.prototype.removeAllClassesFrom = function (elementClass, selected) {
                    var element = this.getElementByClass(elementClass);
                    if (selected) {
                        jQuery(element).removeClass('selected');
                        return;
                    }
                    jQuery(element).removeClass('left');
                    jQuery(element).removeClass('right');
                    jQuery(element).removeClass('center');
                    jQuery(element).removeClass('transition');
                };
                Sliderpanel.prototype.addClassesTo = function (elementClass, classesToAdd) {
                    var element = this.getElementByClass(elementClass);
                    for (var i = 0; i < classesToAdd.length; i++) {
                        jQuery(element).addClass(classesToAdd[i]);
                    }
                };
                Sliderpanel.prototype.slideToPage = function (toClassName, i_direction) {
                    if (toClassName == 'selected')
                        return;
                    this.removeAllClassesFrom(toClassName);
                    this.addClassesTo(toClassName, ["page", i_direction]);
                    var parent = jQuery(this.getElementByClass(toClassName)).parent();
                    var grandparent = jQuery(parent).parent();
                    var offsetWidth = jQuery(grandparent).prop('offsetWidth');
                    this.removeAllClassesFrom(toClassName);
                    this.addClassesTo(toClassName, ['page', 'transition', 'center']);
                    this.removeAllClassesFrom('selected');
                    this.addClassesTo('selected', ['page', 'transition', i_direction === 'left' ? 'right' : 'left']);
                    this.removeAllClassesFrom('selected', true);
                    this.addClassesTo(toClassName, ['selected']);
                };
                Sliderpanel = __decorate([
                    core_1.Component({
                        selector: 'Sliderpanel',
                        template: "<ng-content></ng-content>"
                    }),
                    __param(1, core_1.Inject(platform_browser_1.DOCUMENT)), 
                    __metadata('design:paramtypes', [core_1.ViewContainerRef, Object])
                ], Sliderpanel);
                return Sliderpanel;
            }());
            exports_1("Sliderpanel", Sliderpanel);
        }
    }
});
