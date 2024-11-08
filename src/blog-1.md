<!--this blog is not that much refined or professional but you might think that this so called "well-structured" blog i have written is copied from chatGPT or somewhere else, but i swear in this total assignment i never copied, before writing this blog i carefully read two article on this topic, one is from online anther one is created by the chatGPT, after reading carefully i started writing this blog. But the idea of the outline or point or structure  i took it from the chapGpt to make it look more professional as trying to practice the best, which will enhance my learning. I wrote it on my own voice/word after reading/understanding each block from the chatGPT, honestly speaking. -->

<!-- and i choose this topic to write a blog because i have a old frustration on async/await and still have a strong weakness, thought reading and writing a blog on it will help me to get out of this freaking weakness as well -->

<!-- please read my comments above -->

# Handling Asynchronous Operations Using Async/Await Over Callbacks and Promises in TypeScript

### Introduction: The Need for Asynchronous Programming

In modern JavaScript development, handling **asynchronous** task is almost unavoidable. From retrieving the data from the API and showing to the UI and reading files to handle user interactions, asynchronous operation allow you to run the asynchronous function or task in the background while allowing other blocks of code to make the user interface more smooth and functional. Asynchronous operation is needed when it takes some times to load the data from an API.

But how we handle this operation has evolved over times. The journey started from the **callback**, then moved to the **promise**, and has now reached to **async/await**. This makes the asynchronous operation more powerful than ever and easy to read and maintain the code.

Lets explore how the each approach works and how the **async/await** makes the differences, why **async/await** is preferred and finally how **TypeScript** enhanced the experience.

### 1. Callback: The Oldest Approach

**Callback** is a function which is passed as an argument to another function to be executed later after the main function executed. This is the first tool that developer used to handle the asynchronous tasks in past in JavaScript to handle tasks like retrieving data from an API or reading files etc.

### Example of callbacks in TypeScript:

Here is an example in TypeScript of how **callback** functions works:

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

### Challenges with Callbacks:

When **callback** works this can make a real problem called **"callback hell"**. This means when the nested layers of callbacks is implemented this makes code more hard coded and difficult to read, maintain and debug the code. Error handling also is trickier and tough job as you have to make sure the error is distributed correctly withing each callbacks.

---

### 2. Promise: The Modern Alternative of Callbacks

#### What Are Promises?

Promise function provide a cleaner way to handle asynchronous operations. Promise function replaces the complex structure of Callback functions with a more readable structure which is more easy to maintain and easy and clean error handling. Promises represents a task which might be executed later. Promises also provides two parameter called **resolve** and **reject**. Here that **resolve** returns the output which Completed Successfully. And the **reject** returns the the fail massage with an **error**.

#### Examples of Promises in Typescript:

Here is the same example above using **Promises**:

```typescript
function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 1000);
  });
}

fetchData()
  .then((data) => {
    console.log(data); // Output: Data fetched!
  })
  .catch((error) => {
    console.error("Error:", error); //output is an error!
  });
```

#### Why Promises are better than Callbacks:

**Promises** straighten the nested structure of **async** calls, making it more easier to read, maintain and error handling. Still chaining the multiple **Promises** become very difficult to read, maintain and handling error when working on the large scale project. This is where **async/await** plays the crucial role to make it more simplified.

---

### 3.Async/Await: A Synchronous-Looking Solution to Asynchronous Code

#### What is async/await?

**Async/await** is built on the top of **Promises**. **Async/await** is different with **Promises** in the appearance but same in the background or underlying code. **Async/await** makes more readable and maintainable code which makes the key differences between **Promises** and the **async/await**. Using **async** function makes typescript to expect the return type will be a **Promise** and allow you to use **await** inside the **async** function. `Await` pauses the operation or execution until the **Promises** resolves.

#### Examples of Async/Await in Typescript:

Lets rewrite the same example using async/await:

```typescript
async function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 1000);
  });
}

async function getData() {
  try {
    const data = await fetchData();
    console.log(data); // Output: Data fetched!
  } catch (error) {
    console.error("Error:", error);
  }
}

getData();
```

#### Advantages of Async/Await:

**1. Readability:** The code will be more readable as it more looks like synchronous code so it is easier to understand.
**2. Error Handling:** As the code is more readable and looks more like synchronous code it gives you to handle error with try/catch.
**3. Debugging:** Async/Await code is easier to step throw in a debugger, as the call stack is simpler.

---

### 4. Comparing Callbacks, Promises, and Async/Await: A Unified Example

To see the real differences, lets look at some examples where multiple asynchronous tasks need to run one after one. Heres how the same task flow would look with each approach.

#### Using CallBacks

```typescript
function fetchData(callback: (data: string) => void) {
  setTimeout(() => callback("Step 1"), 1000);
}
function processData(data: string, callback: (result: string) => void) {
  setTimeout(() => callback(data + " processed"), 1000);
}
function displayResult(result: string) {
  console.log(result);
}

fetchData((data) => {
  processData(data, (processedData) => {
    displayResult(processedData); // Result after 2 seconds: Step 1 processed
  });
});
```

#### Using Promises

```typescript
function fetchData(): Promise<string> {
  return new Promise((resolve) => setTimeout(() => resolve("Step 1"), 1000));
}
function processData(data: string): Promise<string> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(data + " processed"), 1000)
  );
}

fetchData()
  .then((data) => processData(data))
  .then((result) => console.log(result))
  .catch(console.error);
```

#### Using Async/Await

```typescript
async function fetchData(): Promise<string> {
  return new Promise((resolve) => setTimeout(() => resolve("Step 1"), 1000));
}
async function processData(data: string): Promise<string> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(data + " processed"), 1000)
  );
}

async function execute() {
  try {
    const data = await fetchData();
    const result = await processData(data);
    console.log(result); // Output: Step 1 processed
  } catch (error) {
    console.error(error);
  }
}

execute();
```

### 5. TypeScript-Specific Features with Async/Await

Typescripts type is making asynchronous programming more safer than others
**1. Return Types:** Typescript always makes the async function to return a Promise, which makes TypeScript catch error if you mistakenly handle then as synchronous way.

**2. Typed Promise:** If you define the data type being passed which will give more clarity and reducing the run time error.

For example if `fetchData` is expected to return a `string`, TypeScript will apply that type which will help to prevent errors.

---

### 6. Common Async/Await risk/danger/difficulties and Best Practices
* **Avoid unnecessary `await` inside loops:** Instead of running `await` repeatedly use `Promise.all` for tasks which is not dependent on each other.

* **Handle error at multiple levels:** You can use `try/catch` both at individual async function calls and globally which enhance error controlling.

---

### Conclusion

The shift from `Callbacks` to `Promises` and finally to the `Async/Await` is completely a natural progress toward code's  readability, easy maintainability and easy error handling. Writing asynchronous code like synchronous code with extra features of `TypeScript` such as `type-annotation` or type-safety makes it more powerful, simpler, robust, which is why all the modern developer in the current world prefer the `async/await` rather than others way. Being a master of `async/await` will improve your skills and ability to write cleaner, more readable and maintainable code in TypeScript.
