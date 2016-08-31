/**
 * Created by nicolas.boe on 16/08/2016.
 */

import {platformBrowserDynamic } from '@angular/platform-browser-dynamic'
// import {HTTP_PROVIDERS} from '@angular/http';
import  {AppModule} from './app.module'
// import  {RaceService} from './services/race.service'
// import {FakeRaceService} from "./services/Fakerace.service";

platformBrowserDynamic().bootstrapModule(AppModule).catch(e => console.log(e));
