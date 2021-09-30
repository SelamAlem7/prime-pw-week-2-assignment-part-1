console.log('js');


let testVar = 9;

console.log(testVar);

console.log('the value of testVar is', testVar);

testVar = 7197495;

console.log('the value of testVar is', testVar);

testVar = 'some other text';


let MyAge = 29;

console.log('this is how old i am', MyAge);

let BirthPlace = 'Ethiopia';

console.log('this is where i was born:', BirthPlace);

let breakTime = '2:30pm' ;

console.log('the time i took break was:', breakTime);


let sibilings = 3;
let pets = 2;
console.log('family members', sibilings + pets);

let motorcycles = 9;

console.log('bikes', motorcycles );
console.log('had to put the soft tail in the garage');

//decrement motorcycles
motorcycles--; //this will subtract 1 from the value of mororcycles
console.log('bikes', motorcycles );


let s = 50
let c = 100

console.log('The total of my bank account is', s + c);

s = 20;
c = 50;
console.log('I went shopping', s + c);

s= 200;
c = 200;
console.log('I got my paycheck from my job', s + c);


let olderSister = 'rekike';
let middleSister = 'lidiya';
console.log('These are my sibilings:', olderSister + ' and', middleSister );


let seatsInCar = 7;
let passangers = 5;
let infants = 1;
let infantSeats = 1;
let fullTank = true;


if ( seatsInCar >= passangers && infantSeats >= infants ){
  console.log( 'ready for road trip' );
  if ( fullTank === true ){
    console.log( 'ready to hit the highway' );
  } //end fullTank
  else {
    console.log( 'must gas up before on interstate ');
  }
} //end with enough seats

else{
  console.log( 'not ready, check car, passangers, and equipment');
} //end eith not enough seats
