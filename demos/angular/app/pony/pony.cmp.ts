/**
 * Created by nicolas.boe on 17/08/2016.
 */
import {Component} from '@angular/core';
// import {Pony} from './pony.class';

@Component({
    selector: 'val-pony',
    template: `<li>{{valName.id}} Nom: {{valName.name}}</li>`,
    inputs:['valName']
})
export class ValPony {

}