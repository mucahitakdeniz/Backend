"use strict";

//? **** OBJECT ****

// const exepleObject={
//     propertyName:"value",
//     methodName:()=>{
//         return "This is Method"
//     }
// }

// console.log(exepleObject.propertyName);

// let a =exepleObject.methodName()
// console.log(a);
/*--------------------------------------

//? "THİS" KEYWORD"

const car = {
  brand: "Ford",
  model: "Mustang",
  year: 1967,
  isAutoGear: true,
  colors: ["white", "red"],
  details: {
    color: "red",
    color2: "white",
  },
  startEngine: function () {
    return "Motor çalıiştı";
  },
  getDetails: function () {
    return this;
  },
  getDetails1: function () {
    return this.year + " Model "+ this.brand + " " + this.model +" " ;
  },
};
console.log(car.getDetails());
console.log(car.getDetails1());
/*--------------------------------------

//? Array destructuring

const testArray = ["1","2","3","4"]

// const [firts,second]=testArray
// console.log(firts); 
// console.log(second); 
const [firts,second,...others]=testArray
console.log(firts); 
console.log(others);
*/

