/* tslint:disable:no-unused-variable */

import { async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TestBed } from '@angular/core/testing/test_bed';
import {ComponentFixture} from '@angular/core/testing/component_fixture';


describe('App: AngularWebpack', () => {

    let fixture: ComponentFixture<AppComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent]
        });

        fixture = TestBed.createComponent(AppComponent);
    });

    it ('should work', () => {
        expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
    });
});
