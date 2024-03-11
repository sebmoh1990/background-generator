/*var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGredient() {

	body.style.background ="linear-gradient(to right, "
	                       +color1.value
	                       +","
	                       +color2.value
	                       +")";
	  css.textContent = body.style.background + ";";                     
}


color1.addEventListener("input", setGredient);


color2.addEventListener("input", setGredient);*/
/*
const first = () => {

	const greet ='HI';
	const second = () => {

		alert(greet);

	}

	return second;
}

const newFunc = first();
newFunc();


const multiply = (a,b) => a*b;

const curriedMultiply = (a) => (b) =>a*b;
curriedMultiply(3);
const multiplyby5 = curriedMultiply(5);

const compose = (f,g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose (sum, sum)(5);*/

/*var array = [1,2,3,16];

const double = [];

const newArry = array.forEach((num) => {
	double.push(num * 2);
})

console.log(double);


const mapArray = array.map (num => num *2);

const filterArray = array.filter(num => num > 5);

const reduceArray = array.reduce((acc, num) => {

	return acc + num;
}, 0);*/

/*const array = [
     
     {
     	username : "john",
     	team : "red",
     	score : 5,
     	items : ["ball","book","pen"]
     },

     {
     	username : "becky",
     	team : "blue",
     	score : 10,
     	items : ["tape","backpack","pen"]
     },
     {
     	username : "susy",
     	team : "red",
     	score : 55,
     	items : ["ball","eraser","pen"]
     },
     {
     	username : "tyson",
     	team : "green",
     	score : 1,
     	items : ["book","pen"]
     }
   

	];


const arrayUser = [];

const newArry = array.forEach((item) => {
     

	let {username} = item;
	username = username + "!";
	arrayUser.push(username);
})



const mapArray = array.map (item => item.username+"!");

const filterArray = array.filter(item => item.team==="red");

const reduceArray = array.reduce((acc, item) => {

	return acc + item.score;
}, 0);


const mpArray = array.map (item => {
	item.username+"!";
    item.team + "!";
    item.score + "!";
    item.items =item.items.map(it => {
           return it +"!";

    });
 
     });  

  const object4 = {
  	a: function () {
       console.log(this);

  	}
  }

  // instantation
class Player {
  
   constructor(name,type){
   	console.log('player',this);
   	this.name = name;
   	this.type = type;
   }

   instroduce(){
          
        console.log(`Hi I am ${this.name}, i'am a ${this.type}`);
   }

   


}

class Wizard extends Player {

	constructor(name,type){

		super(name,type);
		console.log('wizard',this);
	}

	play(){

		console.log(`WEEEEE i'm a ${this.type}`);

	}
}

const wizard1 = new Wizard('shelly', 'Healer');
const wizard2 = new Wizard('shawn', 'dark magic');*/

/*let obj = {

    a: 'a',
    b:'b',
    c: {

    	deep:'try and copy me'
    }

};

let clone = Object.assign({}, obj);
let clone2 = {...obj};
let superClone = JSON.parse(JSON.stringify(obj));

obj.c.deep = 'hahaha';
console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superClone);*/

let obj = {

	username0 : 'santa',
	username1 : 'rudolf',
	username2 : 'Mr.Grinch'
};


Object.keys(obj).forEach((key,index) => {

	console.log(key, obj[key]);
});


Object.values(obj).forEach(value => {

	console.log(value);
});


Object.entries(obj).forEach(value => {

	console.log(value);
});


Object.entries(obj).map(value => {

	return value[1] + value[0] .replace ('username', '');
});





// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
/*const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

let space = startLine.split('- ')[0];
let spaceLen = space.length;

turtle = turtle.padStart(spaceLen);
rabbit = rabbit.padStart(spaceLen);


// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'


var str='' ;

Object.entries(obj).forEach(value => {

	str = str+value[0]+' '+value[1]+' ';
});

console.log(str);*/

const array = [1,2,[3,4,[5]]]
array.flat(2)

const entries = ['bob','sally',,,,,,,,'cindy']
entries.flat()

flatMap()

const userEmail1 = '       eddytheEagle@gmail.com'
const userEmail2 = 'jonnydangerous@gmail         '

console.log(userEmail1.trimStart());
console.log(userEmail2.trimEnd());

userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel', 18]];

const obj = Object.fromEntries(userProfiles);

Object.entries(obj);

try {

    bob+'hi'

} catch (e) {

 console.log(e);
}

