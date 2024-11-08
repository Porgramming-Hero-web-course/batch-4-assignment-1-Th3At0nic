# Handling Asynchronous Operations Using Async/Await Over Callbacks and Promises in TypeScript

### Introduction: The Need for Asynchronous Programming

In modern JavaScript development, handling asynchronous task is almost unavoidable. From retrieving the data from the API and showing to the UI and reading files to handle user interactions, asynchronous operation allow you to run the asynchronous function or task in the background while allowing other blocks of code to make the user interface more smooth and functional. Asynchronous operation is needed when it takes some times to load the data from an API.

But how we handle this operation has evolved over times. The journey started from the callback, then moved to the promise, and has now reached to async/await. This makes the asynchronous operation more powerful than ever and easy to read and maintain the code.

Lets explore how the each approach works and how the async/await makes the differences, why async/await is preferred and finally how TypeScript enhanced the experience.

### 1. Callback: The Oldest Approach

Callback is a function which is passed as an argument to another function to be executed later after the main function executed. This is the first tool that developer used to handle the asynchronous tasks in past in JavaScript to handle tasks like retrieving data from an API or reading files etc.

### Example of callbacks in TypeScript:

Here is an example in TypeScript of how callback functions works:

```typescript
function fetchData(callback: (data: string) => void) {
  setTimeout(() => {
    callback("Data fetched!");
  }, 1000);
}

fetchData((data) => {
  console.log(data); // Output after 1 second: Data fetched!
});
```
