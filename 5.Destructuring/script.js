/* 
    1. Destructuring.
  
    L'affectation par décomposition consiste à créer des variables à partir des propriétés d'un objet ou des éléments d'un tableau.

*/

/* A. Affecter les propriétés d'un objet. */

const userObj = {
  userName: "Karl",
  age: 44,
  country: "Germany"
}

/* const {userName, age, country} = userObj
console.log(userName, age, country); */

// Donner un nom différent aux constantes

/* const {userName: mainName, age: exactAge, country: origin} = userObj
console.log(mainName, exactAge, origin); */

// Créer des constantes par défaut, au cas où les props n'existent pas.

/* const {country, sport="Football", beverage="Beer"} = userObj
console.log(sport, beverage, country); */

// Combiner un nom différent et des valeurs par défaut.

/* const {userName: mainName = "Abraham"} = userObj
console.log(mainName); */

// Affecter les props d'un objet attendu en paramètre

const numbers = {
  num1: 50,
  num2: 100,
}
function foo({num1, num2}) {
  console.log(numbers);
  return num1 + num2
}
console.log(foo(numbers));


/* B. Affecter les valeurs d'un tableau. */

const animals = ["cat","dog","mouse","lion"];

const [cat, dog] = animals
console.log(cat, dog);

let animal1, animal2
[animal1, animal2] = animals
console.log(animal1, animal2);

// valeur par défaut et ignorer des valeurs

const fruits = ["trawberry","grapes", "banana","apple"]
const [trawberry, grapes,, apple] = fruits
console.log(trawberry, grapes, apple);

// affecter le reste d'un tableau

const [student, ...marks] = ["Adrian", 12,17,11,9,2,16]
console.log(student, marks);

// Fonctionne aussi avec les strings

const str = "ABC"
const [a, b, c] = str
console.log(a, b, c);