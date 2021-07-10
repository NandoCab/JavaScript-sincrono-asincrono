/*const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    let myDate;
    for(let i = 0; i < 10000; i++) {
        let date = new Date();
        console.log("Fecha: ", date);
        myDtae = date
    }

    console.log(myDate);

    let pElem = document.createElement("p");
    pElem.textContent = "This is a newly added paragraph";
    document.body.appendChild(pElem);
});*/

/*const canvas = document.createElement("canvas");
canvas.width = 640;
canvas.height = 480;
document.body.appendChild(canvas);
let ctx = canvas.getContext("2d");

let alertBtn = document.querySelector(".alert");
let fillBtn = document.querySelector(".fill");

function degToRad(degrees) {
    return degrees * Math.PI / 100;
}

function random(min, max) {
    var num = Math.floor(Math.random()*(max-min) + min);
    return num;
}

function expensiveOperation() {
    for (let i = 0; i < 1000000; i++) {
        ctx.fillStyle = "rgba(0, 0, 255, 0.2)";
        ctx.beginPath();
        ctx.arc(random(0, canvas.width),
        random(0, canvas.height), 10, degToRad(0), degToRad(360), false);
        ctx.fill();
    }
}

fillBtn.addEventListener("click", expensiveOperation);

alertBtn. addEventListener("click", () =>
alert("you click me")
);*/

/*function loadAsset(url, type, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = type;

xhr.onload = function() {
    callback(xhr, response);
};

xhr.send();
}

function displaymage(blob) {
    let objectURL = URL.createObjectURL(blob)

    let image = document.createElement("img");
    image.src = objectURL;
    document.body.appendChild(image);
}

loadAsset("./shrek.jpg", "blob", displaymage);*/

/*fetch("product.json").then(function(response) {
    return response.json();
}).then(function(json) {
    products = json;
    initialize();
}).catch(function(err){
    console.log("fetch problem: " + err.message);
});*/

/*console.log("Starting");
let image;

fetch("coffe.jpg").then((response) => {
    console.log("It worked :)")
    return response.blob();
}).then((myBlob) => {
    let objectURL = URL.createObjectURL(myBlob);
    image = document.createElement("img");
    image.scr = objectURL;
    document.body.appendChild(image);
}).catch((error) => {
    console.log("There has been a problem with your fetch operation: " + error.message);
});

console.log("All done");*/

/*let myGreating = setTimeout(function() {
    alert("Hello MR. Jhonson");
}, 2000)

function sayHi(who) {
    alert(`Hello Mr. Universe ${who}!`);
}

let myGreatingt = setTimeout(sayHi, 2000, "Sr. Misterio");

clearTimeout(myGreating);*/

/*function displayTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.querySelector(".clock").textContent = time;
}

displayTime();
const createClock = setInterval(displayTime, 1000);

clearInterval(createClock);*/

/*let i = 1;*/

/*setTimeout(function run() {
    console.log(i);
    i++;
    setTimeout(run, 100);
}, 100);*/

/*setInterval(function run (){
    console.log(i);
    i++
}, 100);*/

/*setTimeout(function() {
    alert("world");
}, 0);

alert("Hello");*/

/*choiseTopings()
.then(function(topings){
    return placeOrder(topings);
})
.then(function(order){
    return collectOrder(order);
})
.then(function(pizza){
    eatPizza(pizza);
})
.catch(falureCallback);*/

/*choiseTopings()
.then(toppings =>
    placeOrder(toppings)
)
.then(order =>
    collectOrder(order)
)
.then(pizza =>
    eatpizza(pizza)
)
.catch(failureCallback);*/

/*choiseTopings()
.then(toppings => placeOrder(toppings))
.then(order => collectOrder(order))
.then(pizza => eatpizza(pizza))
.catch(failureCallback);*/

/*choiceToppings().then(placeOrder).then(collectorder).then(eatPIzza).catch(failureCallback);*/

/*let promise = fetch("coffee.jpg");

let promise2 = promise.then(response => response.blob());

let promise3 = promise2.then(myBlob => {
    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement("img");
    image.src = objectURL;
    document.body.appendChild(image);
})

let errorCase = promise3.catch(e => {
    console.log("There has been a problem with your fetch operation: " + e.message);
});*/

/*fetch("coffee.jpg")

.then(response => response.blob())

.then(myBlob => {
    let objectURL = URL.createObjectURL(myBlob);

    let image = document.createElement("img");

    image.src = objectURL;

    document.body.appendChild(image);
}).catch(e => {
    console.log("There has been a problem with your fetch operation: " + e.mesage);
});*/


/*const imageS = 'shrek.jpg'
async function myFech() {
    let response = await fetch('https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG');
    let myBlob = await response.blob();

    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement("img");
    image.scr = objectURL;
    document.body.appendChild(image);
}

myFech()
.catch(e => {
    console.log("There has been a problem with your fetch operation: " + e);
});*/

async function myFech() {
    try {
        let response = await fetch("coffee.jpg");
        let myBlob = await response.blob();

        let objectURL = URL.createObjectURL(myBlob);
        let image = document.createElement("img");
        image.scr = objectURL;
        document.body.appendChild(image);
    } catch(e) {
        console.log(e);
    }
}

myFech();