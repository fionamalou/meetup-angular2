
//Add methode on console for right on page
console.out = function (message) {
    document.getElementById('console').innerHTML += '\r\n' + message;
    console.log(message);
};


//###################
//       Let
//###################

let useVar = function (user) {
    console.clear();
    if (user.isConnect) {
        var message = "Hello " + user.name;
        //return message;
    }
    console.out(message);
    return "Are you " + user.name + "?";
};

let useLet = function (user) {
    console.clear();
    if (user.isConnect) {
        let message = "Hello " + user.name;
        //return message;
    }
    console.out(message);
    return "Are you " + user.name + "?";
};


//###################
//       Const
//###################

let setConst = function () {
    const userId = 123;

    //Error
    userId = 456;
};

let objetConst = function () {
    console.clear();
    const user = {name: "Nicolas", isConnect: false};
    console.out(user.name + " connect status: " + user.isConnect);
    user.isConnect = true;
    console.out(user.name + " connect status: " + user.isConnect);

    //Error
    user = {name: "Mathilde", isConnect: true};
    console.out(user.name + " connect status: " + user.isConnect);
};

let arrayConst = function () {
    console.clear();
    const users = [{name: "Nicolas", isConnect: false}];
    users.push({name: "Mathilde", isConnect: true});
    for (let user of users) {
        console.out(user.name + " connect status: " + user.isConnect);
    }

    //Error
    users = [{name: "Toto", isConnect: false}];
    for (let user of users) {
        console.out(user.name + " connect status: " + user.isConnect);
    }
};


//###################
//       Affectations déstructurées
//###################

let affectationSimple = function (name, isConnect) {
    let user = {name, isConnect};
    console.out(user);
    return user;
};


let affectationSimple2 = function (user) {
    const {isConnect, name} = user;
    console.out('isConnect: ' + isConnect);
    console.out('name:' + name);
};


let affectationComplex = function () {
    let httpOptions = {timeout: 2000, cache: {age: 2}};
    let {cache} = httpOptions;
    console.out(cache);

    let {cache:{age}} = httpOptions;
    console.out("age:" + age);

};

//###################
//       Paramètres optionnels
//###################

let defaultSize = function () {
    return 3;
};

let optionalParameter = function (size = defaultSize(), page = size - 1) {
    console.out('size: ' + size + ' page: ' + page);
};

let withObject = function () {

    let httpOptions = {timeout: 300, other: "other"};
    let {timeout = 1000} = httpOptions;
    console.out(timeout);

    delete httpOptions.timeout;
    let {timeout: param = 1000} = httpOptions;
    console.out(param);

};

//###################
//       Extended Parameter
//###################
let extendedParameter = function (x, y, ...a) {
    return (x + y) * a.length
};

let tryExtendedParameter = function (x, y, ...a) {
    console.out(extendedParameter(1, 2, "hello", true, 7) === 9);
};