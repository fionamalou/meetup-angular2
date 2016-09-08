/* tslint:disable:no-unused-variable */
"use strict";
var app_component_1 = require('./app.component');
var test_bed_1 = require('@angular/core/testing/test_bed');
describe('App: AngularWebpack', function () {
    var fixture;
    beforeEach(function () {
        test_bed_1.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent]
        });
        fixture = test_bed_1.TestBed.createComponent(app_component_1.AppComponent);
    });
    it('should work', function () {
        expect(fixture.componentInstance instanceof app_component_1.AppComponent).toBe(true, 'should create AppComponent');
    });
});
//# sourceMappingURL=app.component.spec.js.map