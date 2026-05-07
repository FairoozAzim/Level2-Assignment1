# TypeScript Generics: How Generics Make Code Reusable While Keeping Type Safety

## Introduction

In modern software development, developers often need to write code that works with different types of data. Writing separate functions for strings, numbers, or objects can lead to repetitive code that becomes difficult to maintain. Generics solve this problem by allowing us to create a reusable type while still preserving strict type safety.

In languages like TypeScript, Generics help developers write flexible and scalable code without sacrificing reliability.

---

## What Are Generics?
Generics are a flexible yet strict tool provided by TypeScript. It is a utility, that lets you define arrays, objects, functions or classes that can be of multiple types. One might think, that this can create confusion in the codebase. But... fortunately that is not the case! Lets dig a bit deeper by going through an example!

Here is a simple example:

```ts
function readArray<T>(arr: T): T {
  return arr;
}
```

In this example:

- `T` is a generic type parameter
- The function accepts any type of array and returns the array
- The return type always matches the input type

Example usage:

```ts
readArray([2,3,4,5,6]); // number
readArray(["apple","banana","mango"]); // string
```

### How is this useful?

One can say, well, you could have easily used `any`. What is the need of Generics? 

The type `any` comes with a catch. Here is the same example with `any`.

```ts
function readArray(arr: any[]): any[] {
  return arr;
}
```

Although this works, it removes type safety. The compiler can no longer detect type-related mistakes. For example: 


```ts
const numbers = readArray([1, 2, 3]);
numbers.push("hello"); // Error
```
 
 This code should generate an error if we are strictly using with array of numbers, but TypeScript wouldn't throw an error as it doesn't know the type. But generics remembers the type. It will enforce that the type is preserved as declared throughout the code. This helps reduce bugs and improves code quality. This also makes the function readArray reusable, which can be used to read any type or array while keeping it type-safe.

## Examples

Let's go through some quick examples of generics

---
## Generics with Interface

Generics can be used with interface types. Here is an example:

```ts
interface <T>{
    name: string;
    role : string;
    salary : T
}

const dev1 : Developer = {
    name : "Adam";
    role: "Software Developer";
    salary: 10000;
}
const dev2 : Developer = {
    name : "Adam";
    role: "AI Engineer";
    salary: "10000 usd";
}
```


---


## Generics with Constraints

Sometimes we want Generics to work only with specific types.

Example:

```ts
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}
```

This function only accepts values that contain a `length` property, such as arrays or strings.

---

## Conclusion

Generics are one of the most powerful tools in TypeScript because they allow developers to write reusable and scalable code without losing type safety.

By using Generics, developers can:

- Reduce duplicate code
- Improve maintainability
- Build flexible components
- Catch type errors during development

As applications grow larger and more complex, Generics become essential for writing clean and reliable software.