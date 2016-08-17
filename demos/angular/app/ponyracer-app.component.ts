/**
 * Created by nicolas.boe on 12/08/2016.
 */

import {Component} from '@angular/core';
import {RacesComponent} from './races/races.cmp';
import {Ponies} from './ponies/ponies.cmp';

@Component({
    selector: 'ponyracer-app',
    template: `<h1>Pony Racer {{version | number}} </h1>
               <p [hidden]="show">{{1+2}} {{users?.name}} {{tata}}</p>
               <val-races (newRaceAvailble)="onNewRace()"></val-races>
                <val-ponies></val-ponies>`,
    directives: [RacesComponent,Ponies ]
})

export class PonyRacerAppComponent {

    version:number = 1.0;
    show:boolean = false;
    user:any = {name: "Stark", fistname: "Tony", actions: ['toto', 'tata']};

    onNewRace():void {
        console.log('Nouvelle courses');
    }
}
