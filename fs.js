const fs=require('fs').promises;
const  func=async()=>{
    try{
await fs.appendFile('abc.txt','hello sivani');
const data=await fs.readFile('abc.txt');
console.log(data.toString());
await fs.unlink('abc.txt');
console.log("delted");
    }
    catch(err){
        console.log(err);
    }
}
func();



// Using try and catch blocks with async/await is a common and recommended approach to handle errors in asynchronous code. However, it's not strictly required. Whether you use try/catch depends on how you want to manage potential errors in your code.

// When to Use try/catch with async/await:
// Error Handling: If you want to handle errors that may occur during the execution of your asynchronous code, you should wrap your await calls in a try/catch block. This way, if an error occurs, you can catch it and take appropriate action (e.g., logging the error, retrying the operation, or providing a fallback behavior).

// Sequential Operations: When you have multiple asynchronous operations that depend on each other, using try/catch helps ensure that if one operation fails, you can manage the flow of subsequent operations.

// Example with try/catch:
// javascript
// Copy code
// const fs = require('fs').promises;

// const func = async () => {
//   try {
//     await fs.appendFile('abc.txt', 'hello sivani');
//     console.log("written");

//     const data = await fs.readFile('abc.txt');
//     console.log(data.toString());

//     await fs.unlink('abc.txt');
//     console.log("deleted");
//   } catch (err) {
//     console.error("An error occurred:", err);
//   }
// };

// func();
// // Example Without try/catch:
// // If you don't use try/catch, unhandled errors will be rejected and can be caught at a higher level (e.g., with .catch() on the Promise returned by the async function):

// // javascript
// // Copy code
// // const fs = require('fs').promises;

// // const func = async () => {
// //   await fs.appendFile('abc.txt', 'hello sivani');
// //   console.log("written");

// //   const data = await fs.readFile('abc.txt');
// //   console.log(data.toString());

// //   await fs.unlink('abc.txt');
// //   console.log("deleted");
// // };

// // func().catch(err => {
// //   console.error("An error occurred:", err);
// // });