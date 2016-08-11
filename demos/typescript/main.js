/**
 * Created by nicolas.boe on 09/08/2016.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let isDone = false;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Yellow"] = 2] = "Yellow";
})(Color || (Color = {}));
class User {
    constructor() {
        this.name = "";
        this.status = Color.Red;
    }
}
let users = [new User()];
// Declare a tuple type
let x;
x = ["hello", 10]; // OK
let c = Color.Green; // c = 0
function setAfk(user) {
    user.status = Color.Yellow;
    return user;
}
function setOnline(user) {
    user.status = Color.Green;
}
function addPointsToScore(player, points) {
    points = points || 0;
    player.score += points;
    console.log(player);
}
let player = {
    score: 10
};
addPointsToScore(player);
//----------------------------
class NamedPonyWithoutShortcut {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    run() {
        console.log(`pony runs at ${this.speed}m/s`);
    }
}
let privatePony = new NamedPonyWithoutShortcut('Rocket', 100);
console.log(privatePony.name);
//----------------------------
function Log(target, key, descriptor) {
    console.log(target);
    return {
        value: (...args) => {
            console.log(`Call: ${key}`, descriptor);
            var result = descriptor.value(...args);
            return result;
        }
    };
}
class RaceService {
    getRaces() {
        // call API
        console.log("do getRaces");
    }
    getRace(raceId) {
        // call API
        console.log("do getRace whit id: ", raceId);
    }
}
__decorate([
    Log
], RaceService.prototype, "getRaces", null);
__decorate([
    Log
], RaceService.prototype, "getRace", null);
let raceService = new RaceService();
raceService.getRace(123);
