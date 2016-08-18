/**
 * Created by nicolas.boe on 17/08/2016.
 */

import {Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx'


@Injectable()
export class FakeRaceService {

    list() {
        console.log('fake');
        return Observable.of([{ name: 'London' }]);
    }
}