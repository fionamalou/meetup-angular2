/**
 * Created by nicolas.boe on 09/08/2016.
 */

let isDone: boolean = false;

enum Color {Red, Green, Yellow}
class User {
    name = "";
    status: Color = Color.Red;
}

let users:Array<User> = [new User()];
// Declare a tuple type
let x:[string, number];
x = ["hello", 10]; // OK


let c: Color = Color.Green; // c = 0


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

class PlayerWithoutShortcut {
    public name: string;
    private money: number;

    constructor(name: string, money: number) {
        this.name = name;
        this.money = money;
    }

    getMoney() {
        console.log(`player has ${this.money} €`);
    }
}

let privatePlayer = new PlayerWithoutShortcut('John', 100);
console.log(privatePlayer.name);

class NamedPlayer {
    constructor(public name: string, private money: number) {

    }

    getMoney() {
        console.log(`player has ${this.money} €`);
    }
}


//----------------------------
function Log(target: any, methodName: string, descriptor: any) {
    return {
        value: (...args: any[]) => {

            const argsStr: string = args.join(',')
            console.log(`Call: ${methodName}(${argsStr})`);
            const result = descriptor.value(...args);

            if(result){
                console.log(`Return (${methodName}): `, result);
            }

            return result;
        }
    };
}

interface IPlayer{
    name: string;
}

class GameService {
    private players: IPlayer[] = [];

    @Log
    getPlayers() {
        // call API
        console.log("do getPlayers");
        return this.players;
    }
}

let gameService = new GameService();
gameService.getPlayers();