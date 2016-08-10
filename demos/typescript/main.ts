/**
 * Created by nicolas.boe on 09/08/2016.
 */

let isDone:boolean = false;

enum Color {Red, Green, Yellow}
class User {
    name = "";
    status:Color = Color.Red;
}

let users:Array<User> = [new User()];
// Declare a tuple type
let x:[string, number];
x = ["hello", 10]; // OK


let c:Color = Color.Green; // c = 0


function setAfk(user:User):User {
    user.status = Color.Yellow;
    return user;
}

function setOnline(user:User):void {
    user.status = Color.Green;
}


//----------------------------


interface HasScore {
    score:number
}

function addPointsToScore(player:HasScore, points?:number):void {
    points = points || 0;
    player.score += points;
    console.log(player);
}

let player:HasScore = {
    score: 10
};
addPointsToScore(player);


//----------------------------

class NamedPonyWithoutShortcut {
    public name:string;
    private speed:number;

    constructor(name:string, speed:number) {
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

function Log(target:Function, key:string, descriptor:any) {
    return {
        value: (...args:any[]) => {
            console.log(`Call: ${key}`, descriptor);
            var result = descriptor.value(...args);
            return result;
        }
    };
}

class RaceService {

    @Log
    getRaces() {
        // call API
        console.log("do getRaces");
    }

    @Log
    getRace(raceId) {
        // call API
        console.log("do getRace whit id: ", raceId);
    }
}

let raceService = new RaceService();

raceService.getRace(123);