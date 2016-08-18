/**
 * Created by nicolas.boe on 17/08/2016.
 */

import {Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class RaceService {

    constructor(private http:Http) {

    }

    list() {
        console.log('vrai');
        let temp =  this.http.get('http://localhost:9000/races').map((res)=> res.json());
        console.log(temp);
        return temp;
    }
}