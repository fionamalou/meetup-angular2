/**
 * Created by nicolas.boe on 16/08/2016.
 */

import {bootstrap} from '@angular/platform-browser-dynamic'
import {HTTP_PROVIDERS} from '@angular/http';
import  {PonyRacerAppComponent} from './ponyracer-app.component'
// import  {RaceService} from './services/race.service'
// import {FakeRaceService} from "./services/Fakerace.service";

bootstrap(PonyRacerAppComponent, [HTTP_PROVIDERS]).catch(err => console.log(err));
