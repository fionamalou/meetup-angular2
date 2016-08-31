/**
 * Created by nicolas.boe on 29/08/2016.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {PonyRacerAppComponent} from './ponyracer-app.component';
import {RacesComponent} from "./races/races.cmp";

@NgModule({
    imports: [BrowserModule],
    declarations:[PonyRacerAppComponent, RacesComponent],
    bootstrap:[PonyRacerAppComponent],
})
export class AppModule {

}