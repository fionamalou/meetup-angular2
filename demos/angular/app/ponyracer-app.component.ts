/**
 * Created by nicolas.boe on 12/08/2016.
 */

import {Component, Inject } from '@angular/core';
import {RacesComponent} from './races/races.cmp';
import {Ponies} from './ponies/ponies.cmp';
import {RaceService} from './services/race.service';

@Component({
    selector: 'ponyracer-app',
    template: `<h1>Pony Racer {{version | number}} </h1>
               <p [hidden]="show">{{1+2}} {{users?.name}} {{tata}}</p>
               <button (click)="list()">http</button>
               <val-races (newRaceAvailble)="onNewRace()"></val-races>
                <val-ponies></val-ponies>`,
    directives: [RacesComponent, Ponies],
    providers: [RaceService]
})

export class PonyRacerAppComponent {

    version:number = 1.0;
    show:boolean = false;
    user:any = {name: "Stark", fistname: "Tony", actions: ['toto', 'tata']};

    constructor(private raceService:RaceService) {

    }

    onNewRace():void {
        console.log('Nouvelle courses');
    }

    list(){
        console.log('http');
        return this.raceService.list();
    }


}
