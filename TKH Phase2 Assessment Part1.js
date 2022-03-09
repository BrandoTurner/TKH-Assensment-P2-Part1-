//Part 1: 30%, you must create a repo for part 1, separate from part 2
 
// 1. Why does React utilize the virtual-dom?

//* - React uses the virtual-DOM to store memory for the actual DOM in a lightweight manner to sync changes made.
 
 
//2a How is data flowed in React? 2b. Why is React architected this way?

//* Data flows downwards; unidirectionally. This is done because react works with a 
//branching hierarchy of parent to child compoenents. 
 
//3. What is the purpose for lifting state up in React? Give an example of this

//* The purpose of lifting state up would be to control the state of two (or more) components 
// simultaneously, instead of seprately. you would do this by lifting said compoments state
// to the parent of both children.
 
//4. Why would a startup be interested in applying React-Router to a project? Explain in detail.

//* A startup would be intrested in using React-Router bcause without it there would be no way to showcase 
//different views or your project on a single page app. It maintains the structure and behavior of the app 
// but allows pages in the app the be routed to and diplayed on the web page.
 
//5. Can browsers read JSX? Why?

//* No browsers can't read JSX because there is no inherent implentation for browsers to understand it, it has to be put
// through a compiler like Babel.
 
//6. What is the significance of keys in React? 

//* keys are given to mapped elements in React to keep track of data that can cganhe between them.
 
//7. What is the difference between Props and State?

//* The main difference between state and props is that Props are immutable and cant be changed 
//once assigned. 
 
//8. Examine the code below: In relation to React, explain what is occurring, and why it’s significant. 
 
//Babel Input: ES2015 arrow function
[1, 2, 3].map( n => n + 1 )
 
//Babel Output: ES5 equivalent
[1,2,3].map(function(n) {
Return n + 1;
})

//* Whats happening here is that the arrow function cant be read by the browser 
// babel is changing the code to something readable.
 
9. Given the array of strings: names, return a new array with each name properly capitalized. Must use .map() 
const names = [ “James”, “Joseph”, “Diamond”, “Gillian”]
function properNames(names) {
 
}
 
10. Create an array of strings, return a new array that only includes those that are 6 characters or fewer in length. Must use .filter()
Function smallWordsOnly(arr) {} 
 
