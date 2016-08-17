/**
 * Created by nicolas.boe on 16/08/2016.
 */

import {Component} from '@angular/core';


interface Race {
    name:string
}


@Component({
    selector: 'val-races',
    template: `<h2>Races</h2>
<button (click)="refreshRaces()">Afficher les courses</button>
<p *ngIf="races.length > 0">Il y a {{races.length}} courses!</p>
<ul>
<li *ngFor="let race of races; let i = index">{{i}} - {{race.name}}</li>
</ul>
`
})
export class RacesComponent {


    races:Array<Race> = [];

    refreshRaces():void {
        this.races = [{name: 'Londre'}, {name: 'Paris'}]
    }

    constructor() {
        // console.log(newRaceAvailble);


    }

}
