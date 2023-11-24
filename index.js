// Write a function that converts an array of strings to uppercase.

const array = ['hope'];
const newArray = [];
for (let i = 0; i < array.length; i++) {
  let capitalizeArray = array[i].toUpperCase();
  newArray.push(capitalizeArray); 
  };
console.log(newArray);