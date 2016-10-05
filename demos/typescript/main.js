/**
 * Created by nicolas.boe on 09/08/2016.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var isDone = false;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Yellow"] = 2] = "Yellow";
})(Color || (Color = {}));
var User = (function () {
    function User() {
        this.name = "";
        this.status = Color.Red;
    }
    return User;
}());
var users = [new User()];
// Declare a tuple type
var x;
x = ["hello", 10]; // OK
var c = Color.Green; // c = 0
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
var player = {
    score: 10
};
addPointsToScore(player);
//----------------------------
var PlayerWithoutShortcut = (function () {
    function PlayerWithoutShortcut(name, money) {
        this.name = name;
        this.money = money;
    }
    PlayerWithoutShortcut.prototype.getMoney = function () {
        console.log("player has " + this.money + " \u20AC");
    };
    return PlayerWithoutShortcut;
}());
var privatePlayer = new PlayerWithoutShortcut('John', 100);
console.log(privatePlayer.name);
var NamedPlayer = (function () {
    function NamedPlayer(name, money) {
        this.name = name;
        this.money = money;
    }
    NamedPlayer.prototype.getMoney = function () {
        console.log("player has " + this.money + " \u20AC");
    };
    return NamedPlayer;
}());
//----------------------------
function Log(target, methodName, descriptor) {
    return {
        value: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            var argsStr = args.join(',');
            console.log("Call: " + methodName + "(" + argsStr + ")");
            var result = descriptor.value.apply(descriptor, args);
            if (result) {
                console.log("Return (" + methodName + "): ", result);
            }
            return result;
        }
    };
}
var GameService = (function () {
    function GameService() {
        this.players = [];
    }
    GameService.prototype.getPlayers = function () {
        // call API
        console.log("do getPlayers");
        return this.players;
    };
    __decorate([
        Log, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], GameService.prototype, "getPlayers", null);
    return GameService;
}());
var gameService = new GameService();
gameService.getPlayers();
