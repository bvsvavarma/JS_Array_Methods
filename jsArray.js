console.log("Java Script Array Methods");
let myCars1 = []; //empty Array
let myCars = ["BMW", "Audi", "Ferrari", "Volvo"];
console.log("myCars1", myCars1); // []
console.log("myCars", myCars); // ['BMW', 'Audi', 'Ferrari', 'Volvo']
console.log("typeof myCars", typeof myCars); //Object

//Accessing Array elements Array[index]
console.log(myCars[0]); //BMW

//to check how many entries in an array - length method
console.log(myCars.length); // 4
console.log(myCars1.length); // 0

//Add elements in an array
/* 
push -> Add element in array at the end
unshift -> Add element in array at begin
spread operator (...)-> you can add element start, end and middle as well 
*/
//push method
myCars.push("Nissan");
console.log(myCars); //["BMW", "Audi", "Ferrari", "Volvo", ""]
//unshift method
myCars.unshift("TATA");
console.log(myCars); //["TATA", BMW", "Audi", "Ferrari", "Volvo", "Nissan"]
//spread operator

myCars = [...myCars, "Mazda"];
console.log(myCars); //["TATA", BMW", "Audi", "Ferrari", "Volvo", "Nissan", "Mazda"]

//remove elements from array
/* 
pop -> remove the element from array from end. return the removed element
shift -> remove the element from array from the start. return the removed element
*/
myCars.pop();
console.log(myCars); //["TATA", BMW", "Audi", "Ferrari", "Volvo", "Nissan"]
myCars.shift();
console.log(myCars); //[BMW", "Audi", "Ferrari", "Volvo", "Nissan"]

//modify the element from array -> Use array index

//replace Ferrari with index Honda
myCars[2] = "Honda";
console.log(myCars); //[BMW", "Audi", "Honda", "Volvo", "Nissan"]

//search element
/* 
indexOf -> returns index
includes -> returns boolean
*/
console.log(myCars.indexOf("Audi")); // index position of Audi 1
console.log(myCars.indexOf("TATA")); // index position of TATA, not present returns -1
console.log(myCars.includes("Volvo")); // true
console.log(myCars.includes("TATA")); // false

//How to convert Array into String
/* 
toString() -> All the array entries will be  separated by the , 
join() -> Here you can specify the seperator
*/
console.log(myCars.toString()); //BMW,Audi,Honda,Volvo,Nissan
console.log(myCars.join("##")); //BMW##Audi##Honda##Volvo##Nissan

/*splice -> Used to add the elements in array, and used to remove element from an array
splice(param1 , param2)         
    param1 -> element where new element will be added
    param2 -> How many elements needs to be removed
    rest --> new elements you have to add
    It will return array of deleted elements
    splice will modify the original array
slice
    -> Extract any portion from an array go for slice.
    -> It will return new array, it will  not modify the original array
    -> param1 -> index of starting argument 
    -> param2 -> index of end argument +1
*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// Need to add 2 more fruits
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits); //['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango']
//Need to remove 2 fruits
let removedFruits = fruits.splice(0, 2);
console.log(removedFruits); //['Banana', 'Orange']
console.log(fruits); //['Lemon', 'Kiwi', 'Apple', 'Mango']

//extract Kiwi from Fruit array
let slicedArray = fruits.slice(1, 2);
console.log(slicedArray); //['Kiwi']
console.log(fruits); //['Lemon', 'Kiwi', 'Apple', 'Mango']

//iteration of Array
/* 
forEach((currItem, index, originalArray) => {})
map((currItem, index, originalArray) => {})
filter -> Always return for Array
*/
let bankingTransaction = [5000, -7000, 9000, -4000, 2000];
console.log(bankingTransaction);
bankingTransaction.forEach((currItem, index, array) => {
  console.log("currItem", currItem);
  console.log("index", index);
  console.log("array", array);
});

let updatedArray = bankingTransaction.map((currItem) => {
  return currItem / 10;
});
console.log(updatedArray);

//get all the deposits
let depositArray = bankingTransaction.filter((currItem) => currItem > 0);
console.log(depositArray);

//get all the withdraws
let withdrawArray = bankingTransaction.filter((currItem) => currItem < 0);
console.log(withdrawArray);

let myFruits = ["fig", "Apple", "Guava", "Cherry"];
//give the fruits for which the fruit name is greater than 3 characters
let filteredFruits = myFruits.filter((currItem) => currItem.length > 3);
console.log("filteredFruits", filteredFruits);

//find -> always return 1 entry/item
//In Transaction Array have 9000 entry

let entryFor9000 = bankingTransaction.find((currItem) => currItem === 9000);
console.log(entryFor9000);

let entryFor10000 = bankingTransaction.find((currItem) => currItem === 10000);
console.log(entryFor10000); //undefined
