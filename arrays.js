//1. Given an array of strings, use a function to reverse all the elements
//  in the string in
//  ascending order and the specific elements in descending order

function reverseStrings(array) {
    
    array.reverse();
    array.sort();

    const specificElements = [0, 2, 4]; 
    for (i of specificElements) {
      if (array[i]) {
        array[i] = array[i].split("").reverse().join("");
      }
    }
  
    return array;
  }
  
  
  
  const array= ["Cynthia", "Regina", "Winfrida", "Angeth", "Arrays"];
 
  console.log(reverseStrings(array)); 

//1.Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero

function negativePositive(numb) {
    let result = 0;
    for (let i = 0; i < numb.length; i++) {
      if (numb[i] > 0) {
        result = 1;
        break;
      } else if (numb[i] < 0) {
        result = -1;
        break;
      }
    }
    return result;
  }
  const numb = [2, -5, 8, 1, -4, 43];
console.log(negativePositive(numb));

// Given an array of objects, each object representing a person 
// with a name and age property, write a function that 
// returns the sum of all people who are less than 18 years.
// const people = [
//   { name: 'Alice', age: 17 },
//   { name: 'Eunice', age: 22 },
//   { name: 'Charlie', age: 14 },
//   { name: 'Max', age: 19 },
// ];

function SumPeople(people) {
    let sum = 0;
  
    for (let i = 0; i < people.length; i++) {
      if (people[i].age < 18) {
        sum += people[i].age;
      }
    }
  
    return sum;
  }
  const people = [
    { name: 'Alice', age: 17 },
    { name: 'Eunice', age: 22 },
    { name: 'Charlie', age: 14 },
    { name: 'Max', age: 19 },
  ];
  
  ;
  console.log(SumPeople(people));
  
  
  
  
  
