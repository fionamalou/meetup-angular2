class: center, bottom
background-image: url(images/angular2.jpg)

##Plus qu'une simple évolution
---

# Programme
- Introduction
- ECMAScript 6
- TypeScript
- Web Components
- Angular2


---
# Angular 2 

est conçu pour:
- ECMAScript 6
- Web Components
- Mobile First

---
background-image: url(images/es6.jpg)


---

# ECMAScript 6

Nommée aussi ES2015 publié en Juin 2015

- Class
- Constantes
- arrow functions
- générateurs
- paramètres par défaut
- ...

.center[http://es6-features.org/]

???
Implémentation progressive des navigateurs

---
## Let
- est une variable
- evite le hoisting ("remontée"), proté du bloc

``` javascript
function getPonyFullName(pony) {
  if (pony.isChampion) {
    var name = 'Champion ' + pony.name;
    return name;
  }
  return pony.name;
}
```
--

``` javascript
function getPonyFullName(pony) {
  var name;
  if (pony.isChampion) {
    name = 'Champion ' + pony.name;
    return name;
  }
  // name is still accessible here
  return pony.name;
}
```

---
## Let

- remplacer définitivement **var** à long terme

``` javascript
function getPonyFullName(pony) {
  if (pony.isChampion) {
    let name = 'Champion ' + pony.name;
    return name;
  }
  // name is not accessible here
  return pony.name;
}
```
???
sinon il y a un default dans le code

---
## Const

- est une constante 
- proté du bloc comme let
- uniquement en get

``` javascript
const PONIES_IN_RACE = 6;
PONIES_IN_RACE = 7; // SyntaxError
```
- Update attribut de l'objet ou tableau

``` javascript
//Objet
const PONY = {};
PONY.color = 'blue'; // works
PONY = {color: 'blue'}; // SyntaxError
//Array
const PONIES = [];
PONIES.push({ color: 'blue' }); // works
PONIES = []; // SyntaxError
```

---
## Affectations déstructurées
- nouveau raccourci pour créer des objets
- propriété de l’objet = nom que la variable

#### ES5
``` javascript
function createPony() {
  let name = 'Rainbow Dash';
  let color = 'blue';
  return { name: name, color: color };//ES5
}
```
--
#### ES6
``` javascript
function createPony() {
  let name = 'Rainbow Dash';
  let color = 'blue';
  return { name, color };//ES6
}
```

---
## Affectations déstructurées

raccourci pour affecter des variables à partir d’objets ou de tableaux
#### ES5
``` javascript
var httpOptions = { timeout: 2000, isCache: true };
// later
var httpTimeout = httpOptions.timeout;
var httpCache = httpOptions.isCache;
```
--
#### ES6
``` javascript
let httpOptions = { timeout: 2000, isCache: true };
// later
let { timeout: httpTimeout, isCache: httpCache } = httpOptions;
//OR
let { timeout, isCache } = httpOptions;
// you now have a variable named 'timeout'
// and one named 'isCache' with correct values
//Whit an Array
let timeouts = [1000, 2000, 3000];
// later
let [shortTimeout, mediumTimeout] = timeouts;
```

---
## Affectations déstructurées
#### Dans la vrai vie
``` javascript
function randomPonyInRace() {
  let pony = { name: 'Rainbow Dash' };
  let position = 2;
  // ...
  return { pony, position };
}

let { position, pony } = randomPonyInRace();

let { pony } = randomPonyInRace();
```
???
Cette fonctionnalité est pratique pour déclarer plusieurs variables à partir d’un objet retourné par une fonction.

---
## Paramètres optionnels

#### ES5
``` javascript
function getPonies(size, page) {
  size = size || 10; 
  //si l’opérande de gauche est falsy, 
  //c’est-à-dire undefined, 0, false, "",
  page = page || 1;
  // ...
  server.get(size, page);
}
```
--
#### ES6
``` javascript
function getPonies(size = 10, page = 1) {
  // ...
  server.get(size, page);
}
function getPonies(size = defaultSize(), page = 1) {
  //Can call a function
}
function getPonies(size = defaultSize(), page = size - 1) {
  //Can use previous parameters
}
```
???
maintenant 0 ou "" sont des valeurs valides, et ne seront pas remplacées par les valeurs par défaut, comme size = size || 10 l’aurait fait. C’est donc plutôt équivalent à size = size === undefined ? 10: size;

---
## Paramètres optionnels
Fonctionne aussi pour les objets
``` javascript
let { timeout = 1000 } = httpOptions;
// you now have a variable named 'timeout',
// with the value of 'httpOptions.timeout' if it exists
// or 1000 if not
```

---
##Rest operator

Permet d'utiliser la liste des arguements **proprement**
#### ES5
``` javascript
function addPonies(ponies) {
  for (var i = 0; i < arguments.length; i++) {
    poniesInRace.push(arguments[i]);
  }
}

addPonies('Rainbow Dash', 'Pinkie Pie');
```
--
#### ES6
``` javascript
function addPonies(...ponies) {
  for (let pony of ponies) {
    poniesInRace.push(pony);
  }
}
```

*Ne pas confonfondre avec spread operator ("opérateur d’étalement")*

`let minPrice = Math.min(...[12,3,5]);`
???
ES5: 
 le paramètre ponies n’est jamais utilisé, et rien n’indique que l’on peut fournir plusieurs poneys.

ES6:
for …​ of utilisée pour l’itération est aussi une nouveauté d’ES6. Elle permet d’être sûr de n’itérer que sur les valeurs de la collection, et non pas sur ses propriétés comme for …​ in

---

## Classes

- Constructeur 
- toString() 


``` javascript
class Pony {
  constructor(color) {
    this.color = color;
  }

  toString() {
    return `${this.color} pony`;
    // see that? It is another cool feature of ES6,
    // called template literals
    // we'll talk about these quickly!
  }
}

let bluePony = new Pony('blue');
console.log(bluePony.toString()); // blue pony
```
???
Les littéraux de gabarits de caractères sont délimités par des accents graves seuls (backticks) (\` \`)  et non avec des doubles ou simples quotes. Les templates de gabarits peuvent contenir des éléments de substitution (placeholders). Ceux-ci sont indiqués par le signe dollar ($) et des accolades : ${expression}. 

---
## Classes

- propriété statique
- getter et setter

``` javascript
class Pony {
  static defaultSpeed() {
    return 10;
  }

  get color() {
    console.log('get color');
    return this._color;
  }

  set color(newColor) {
    console.log(`set color ${newColor}`);
    this._color = newColor;
  }
}
//...
let speed = Pony.defaultSpeed();//Use static

let pony = new Pony();
pony.color = 'red';// 'set color red'
console.log(pony.color);
```


---
## Classes

- héritage ~~prototypal~~
- héritage de classes 

``` javascript
class Animal {
  constructor(speed) {
    this.speed = speed;
  }

  doSomethink(){
  	//move, stop...
  }
}
class Pony extends Animal {
  constructor(speed, color) {
    super(speed);
    this.color = color;
  }
  doSomethink(){
  	//Override function
  }
}
let pony = new Pony(20, 'blue');
console.log(pony.speed); // 20
```

---
## Promise

.center[Similaire à Angular 1]

- Permet de gérer l'asynchone
- Plus lisible que les callbacks

Avec les callback
``` javascript
getUser(login, function (user) {
  getRights(user, function (rights) {
    updateMenu(rights);
  });
});
```
Avec les promises
``` javascript

getUser(login)
  .then(function (user) {
    return getRights(user);
  })
  .then(function (rights) {
    updateMenu(rights);
  })
```

---

## Promise

expose une méthode `then` et `catch` 

``` javascript
asynchoneFunction().then(siSucces, siRejetée);
asynchoneFunction().catch(siRejetée); //= .then(undefined, siRejetée)
```

3 états:
Pending (en cours), fulfilled (réalisée), rejected (rejetée)
### Construstion d'une promise

Nouvelle class Promise

``` javascript
let getUser = function (login) {
  return new Promise(function (resolve, reject) {
    // async stuff, like fetching users from server, 
    //returning a response
    if (response.status === 200) {
      resolve(response.data);
    } else {
      reject('No user');
    }
  });
};
```

???
catch permet de gérer un reject sur une chaine de promise

nouvelle façon d’écrire des APIs, et toutes les bibliothèques vont bientôt les utiliser

---

## Arrow functions

- arrow function `=>`
- utile pour les callbacks et les fonctions anonymes
- return est implicite s’il n’y a pas de bloc
- le this **reste attaché** lexicalement

``` javascript
getUser(login)
	.then(user => {
		console.log(user);
		return getRights(user);
	})
	.then(rights => updateMenu(rights))
```

???
le this reste le this de la function parent

---

## Modules
Avant:
- CommonJS (NodeJS) avec une **syntaxe simple**
- RequiereJS (AMD) pour le **chargement Asynchrone**

--

Dans races_service.js
``` javascript
export function bet(race, pony) {
  // ...
}
export function start(race) {
  // ...
}
```
Dans otherFile.js
``` javascript
import { bet, start } from './races_service';
// later
bet(race, pony1);
start(race);
```

 .center[**Fondamentale dans Angular 2**]

???
API AMD (Asynchronous Module Definition)

---

## Modules
- Utilisation d'un alias
- Joker `*`

``` javascript
import * as racesService from './races_service';
//later
racesService.bet(race, pony1);
racesService.start(race);
```

- Exporter un seul élément (function, valeurn classe) : `default`

``` javascript
// pony.js
export default class Pony {
}
// races_service.js
import Pony from './pony';
```

???

---


# Et les vieux navigateurs?

.center[[Tester la comptibilité ES6: http://kangax.github.io/compat-table/es6/](http://kangax.github.io/compat-table/es6/)]

## Transpileur
.center[Ecrire ES6, convertir en ES5]

- [Traceur](https://github.com/google/traceur-compiler) by Google
- [BabelJs](https://babeljs.io/) by Sebastian McKenzie

???

Sebastian McKenzie avait 17 ans
 
Babeljs produit un code source plus lisible que Traceur

Angular 2 était d’ailleurs transpilé avec Traceur, avant de basculer en  TypeScript

---
class: center
# Conclusion

Faite du ES6 et un coup de transpileur dans votre processus de build.

---
background-image: url(images/typescript.jpg)

---

# Typescript

Typescript:
- permet le typage de javascript
- est un projet de Microsoft (2012)
- communauté active

Côté Google
- DartJS
- AtScript pour ajouter des annotations

.center[![Right-aligned image](images/AtScript_TypeScript.png)]

???
Avec la mise a disposistion de TypeScript (open source), la version 1.5 (en 2015) contient les fonctionnalité d'AtScript, qui a été abandonné.

---
# Typescript

Après la fusion d'AtScript et TypeScript

.center[![Right-aligned image](images/es5-es6-typescript-circle-diagram.png)]

---
# Typescript

- Extension `.ts` (par convention)
- Compiler en javascript standard
- Code générer est très lisible

## Install

```Bash
npm install -g typescript
```
## Compile
```Bash
tsc test.ts
#sous windows 7:
tsc.cmd test.ts 
```

---

## Typage
`let variable: type;`

- Basics: boolean, number, string, array
- Autres: any, Class, Enum ,Tuple, Void
- Mix: number|boolean
- Les basics peuvent être définit à l'initialisation

``` typescript
let isDone: boolean = false;
let name = "Toto" //name:string
let users: Array<User> = [new User()];
// Declare a tuple type
let x: [string, number];
x = ["hello", 10]; // OK

enum Color {Red, Green, Yellow};
let c: Color = Color.Green; // c = 0

function setAfk(user: User): User {
  user.status = Color.Yellow;
  return user;
}

function setOnline(user: User): void {
  user.status = Color.Green;
}

```

---

## Interfaces

Continuer d'utiliser la nature dynamique de javascript.

Exemple:
``` javascript
function addPointsToScore(player, points) {
  player.score += points;
}
```

Avec typeScript
``` typescript
function addPointsToScore(player: { score: number; }, points: number): void {
  player.score += points;
}
```
Ou en la nommant
``` typescript
interface HasScore {
  score: number;
}
function addPointsToScore(player: HasScore, points: number): void {
  player.score += points;
}
```
???
L'objet player doit posséder la propriété scrore.
---
## Parametre optionnel

- Ajouter un `?` après le parametre optionnel


``` typescript
function addPointsToScore(player: HasScore, points?: number): void {
  points = points || 0;
  player.score += points;
}

addPointsToScore(player);
```

--
- Ne peut pas avoir de valeur par défaut

``` typescript
function buildName(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}
let result4 = buildName("Bob", "Adams");  
// works correctly now, returns "Bob Adams"
let result1 = buildName("Bob");                  
// works correctly now, returns "Bob Smith"
let result2 = buildName("Bob", undefined);       
// still works, also returns "Bob Smith"
let result3 = buildName("Bob", "Adams", "Sr.");  
// error, too many parameters
```

---
## Et une fonction en paramètre ?

``` javascript
function startRunning(pony) {
  pony.run(10);
}
```
--

 TP: Avez tous ce que l'on vient de voir, convertissez cette fonction pour typescript et lancez la.

???

Utilsation de :
- interface,
- arrow functions,
- let

Run(distance) écrit juste la distance parcourue dans la console.

--
#### Solution
``` typescript
interface CanRun {
  run(meters: number): void;
}
function startRunning(pony: CanRun): void {
  pony.run(10);
}

let pony = {
  run: (meters) => logger.log(`pony runs ${meters}m`)
};
startRunning(pony);

```

---
## Classes

- Une **classe** peut implémenter une ou plusieurs interfaces
- Une **interface** peut etendre une ou plusieurs interfaces

``` typescript
interface Animal extends CanRun, CanEat {}

class Pony implements Animal {
  run(meters) {
    logger.log(`pony runs ${meters}m`);
  }
  eat(){
  	logger.log(`pony eats`);
  }
}
```
---
## Attribut Private/Public

- L'attibut `private` ne sera pas accessible depuis l'exterieur de la classe
- Vérification à la compilation
- Peut être définie dans le constructeur

``` typescript
class NamedPonyWithoutShortcut {
  public name: string;
  private speed: number;

  constructor(name: string, speed: number) {
    this.name = name;
    this.speed = speed;
  }

  run() {
    logger.log(`pony runs at ${this.speed}m/s`);
  }
}
```

``` typescript
class NamedPony {
  constructor(public name: string, private speed: number) {
  }

  run() {
    logger.log(`pony runs at ${this.speed}m/s`);
  }
}
```

???
Ces raccourcis sont très pratiques et nous allons beaucoup les utiliser en Angular 2 !

---
count: false
## Attribut Private/Public
###Les variables privées en Javascript
![Les variables privées en Javascript](images/privateJavascript.jpg)

???

Vérification à la compilation uniquement

---
## Utiliser d’autres bibliothèques

- avec des bibliothèques externes écrites en JS
- Interface ecrite par la [communauté](http://www.nuget.org/packages?q=DefinitelyTyped)  (`.d.ts`) 
- [http://definitelytyped.org/](http://definitelytyped.org/)
- Autonome si elles sont packagées avec npm (depuis TS 1.6)


``` bash
npm install --global typings
typings install --save --ambient angular
```

``` typescript
/// <reference path="angular.d.ts" />
angular.module(10, []); // the module name should be a string
// so when I compile, I get:
// Argument of type 'number' is not 
//assignable to parameter of type 'string'.
```

???

Pour angular 1 

---