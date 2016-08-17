/**
 * Created by nicolas.boe on 17/08/2016.
 */
/**
 * Created by nicolas.boe on 17/08/2016.
 */
import {Component} from '@angular/core';
import {Pony} from '../pony/pony.cmp';


@Component({
    selector: 'val-ponies',
    template: `<ul>
                    <li *ngFor="let pony of ponies; let isEven = even" [class.pair]="isEven" >{{pony.name}}</li>
                </ul>`

})
export class Ponies {
    ponies:Array<Pony> = [new Pony("Rocket"), new Pony("Radis rose")];
    // ponies:Array<Pony> = [{name: 'Rocket'}, {name: 'Radis'}]
}