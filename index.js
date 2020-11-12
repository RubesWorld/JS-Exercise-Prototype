/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`: !eat method!
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`: !poop method! 
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

//step 1 - create a constructor function. Takes name and age as arguments. should have an empty stomach array.

function Person(name,age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
}

Person.prototype.eat = function(edible){
    if(this.stomach.length < 10){
      this.stomach.push(edible);
    }
}

Person.prototype.poop = function(pooping){
  this.stomach = [];
}

Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`;
}

const personOne = new Person('Ruben',20);
const personTwo = new Person('Leah',29);
const personThree = new Person('Carla',24);

console.log(personOne.toString());
console.log(personTwo.toString());
console.log(personThree.toString());



/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model,milesPerGallon){
  this.model = model;
  this.milesPerGallon = milesPerGallon;  
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function(gallons){
  this.tank = this.tank + gallons;
}

Car.prototype.drive = function(distance){
  let maxTravel = this.tank * this.milesPerGallon;
  let used = Math.floor((maxTravel - distance) / this.milesPerGallon); 
  if(maxTravel > distance){
    this.odometer += distance;
    this.tank -= used;
  } else if(maxTravel === distance){
     this.odometer += distance;
     this.tank = 0;
  } else {
    this.odometer = maxTravel;
    this.tank = 0;
    return `I ran out of fuel at ${this.odometer}.`
  }
}


  // this.odometer = this.odometer + distance; //stretch 1
  // this.drivableMiles = this.tank / this.milesPerGallon
  // this.tank = this.tank - this.drivableMiles;
  // this.tank = this.tank  - (this.milesPerGallon - this.distance);

// Car.prototype.drive = function(distance){
//   if(this.tank == 0){
//     return `This car ran out of fuel at ${this.odometer} miles`
//   };
// }


/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name,age,favoriteToy) {
  Person.call(this,name,age,favoriteToy);
  this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function(favoriteToy){
  return `Playing with ${this.favoriteToy}`
}

let baby = new Baby('john',25,[],'lego')
console.log(baby.eat('Tacos'));
console.log(`baby:`,baby);

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. Principle 1 - Window Binding: If you use this without pointing to an object, it will give you the windows or console object. 
  2. Principle 2 - Implicit Binding: If you use a dot to call a function, the object before the dot is this function.
  3. Principle 3 - New Binding: When constructing a new object, use this to point to the object in which you are declaring the key. 
  4. Principle 4 - Explicit binding: When you use the call or apply method, this is defined to that particular object that is pushed. 
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
