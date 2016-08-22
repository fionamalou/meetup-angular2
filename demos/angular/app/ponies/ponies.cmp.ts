/**
 * Created by nicolas.boe on 17/08/2016.
 */
/**
 * Created by nicolas.boe on 17/08/2016.
 */
import {Component} from '@angular/core';
import {ValPony} from '../pony/pony.cmp';
import {Pony} from '../pony/pony.class';


@Component({
    selector: 'val-ponies',
    template: `{{ponies | json}}
<val-pony valName="ponies[0]"></val-pony>
                <ul>
                    <val-pony *ngFor="let pony of ponies; let isEven = even" [class.pair]="isEven" [valName]="pony"></val-pony>
                </ul>`,
    directives: [ValPony]

})
export class Ponies {
    ponies:Array<Pony> = [new Pony(1, 'Rocket'), new Pony(2, 'Radis')];
}