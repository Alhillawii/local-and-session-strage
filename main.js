//task1//

localStorage.setItem('String', 'Hello, World!');

let retrievedString = localStorage.getItem('String');

console.log(retrievedString);

//task2//

localStorage.setItem('Number', 123);

let retrievedNumber = localStorage.getItem('Number');

console.log(retrievedNumber);



//task3//

localStorage.setItem('myBoolean', true);

let Boolean = localStorage.getItem('myBoolean');
console.log(Boolean);

//task4//

localStorage.setItem('Name', 'ayah');

var savedItem = localStorage.getItem('Name');
console.log('Saved item:', savedItem);
localStorage.removeItem('Name');
console.log('Item removed from local storage.');

//task5//

// localStorage.clear();

//task6//

let itemExists = localStorage.getItem('Name');

    console.log('The item exists in local storage.');


//task7//
localStorage.setItem('Numbers', [1,2,3]);

let num = localStorage.getItem('Numbers');
console.log(num);
//////
let numbersArray = [1, 2, 3];

localStorage.setItem('numbers', JSON.stringify(numbersArray));

let retrievedArray = (localStorage.getItem('numbers'));

console.log('Retrieved array:', retrievedArray);

//task8//

let myObject = { name: "ayah", age: 22 };

localStorage.setItem('myObject', JSON.stringify(myObject));
let retrievedObject = (localStorage.getItem('myObject'));

console.log('Retrieved object:', retrievedObject);

//task9//

let items = {
    item1: "ayah",
    item2: { key: "ahmad" },
    item3: ["sara", "ayda"]
};

for (let key in items) {
    localStorage.setItem(key, JSON.stringify(items[key]));

    let retrievedItem = (localStorage.getItem(key));

    console.log('Retrieved', key, ':', retrievedItem);
}

//task10//

localStorage.setItem('Numbers', [1,2,3]);

let nums = localStorage.getItem('Numbers');
console.log(nums);

let updatedValue = localStorage.getItem('Numbers');
console.log('Numbers', [5,8,9]);

//session storge//
//task1//

sessionStorage.setItem('String', 'Hello, World!');

let Str = sessionStorage.getItem('String');
console.log('Str');

//task2//

sessionStorage.setItem('Number', 123);

let Numbers = sessionStorage.getItem('Number');

console.log(Numbers);

//task3//

sessionStorage.setItem('Bool', false);

let Boo = localStorage.getItem('Bool');
console.log(Boo);

//task4//

sessionStorage.setItem('String', 'Hello, World!');

let Strs = sessionStorage.getItem('String');
console.log('Strs');
localStorage.removeItem('strs');
console.log('Item removed from session storage.');


//task5//

// sessionStorage.clear();

//task6//

let Exists = sessionStorage.getItem('Name');

    console.log('The item exists in session storage.');

//task7//

let Arr = [1, 2, 3];

sessionStorage.setItem('numbers', JSON.stringify(Arr));

let Arra = (sessionStorage.getItem('numbers'));

console.log('Retrieved array:', Arra);



//task8//

let Obj = { name: "ayah", age: 22 };

sessionStorage.setItem('Obj', JSON.stringify(Obj));
let Object = (localStorage.getItem('Obj'));

console.log( Object);

//task9//

var keys = {
    item1: "basketball",
    item2: { key: "football" },
    item3: ["swiming", "run"]
};

for (var key in keys) {
    sessionStorage.setItem(key, JSON.stringify(keys[key]));
    var retrievedItem = (sessionStorage.getItem(key));
}

//task10//

sessionStorage.setItem('fruit', 'apple');

let Value = sessionStorage.getItem('fruit');
console.log(Value);

let newValue = 'updatedValue';
console.log('fruit', orange);

let dValue = sessionStorage.getItem('fruit');
console.log(dValue);






