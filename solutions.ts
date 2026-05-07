//Problem 1 

function filterEvenNumbers (arr : number[]):number[] {

   let evenNumber: number[] = arr.filter((num) => num % 2 == 0);
   return evenNumber;
  
}

filterEvenNumbers([1, 2, 3, 4, 5, 6])

//Problem 2 

function reverseString (word : string){
    const lastIndex : number = word.length - 1;
    let revString : string = '';
    for (let i = lastIndex; i >=0 ; i--){
        revString+= word[i];
    }
    return revString;
}

reverseString('typescript');

//Problem 3 

type StringOrNumber = string | number

function checkType (element : StringOrNumber) {
    return (typeof element === "string") ? "String" : "Number"  ;
}

checkType("Hello");
checkType(42);

//Problem 4

const getProperty = <T>(obj : T, key: keyof T) => {
   return obj[key];
}

const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "age");

//Problem 5

interface Book {
    title : string,
    author : string,
    publishedYear: number
}


function toggleReadStatus (book:Book){
    let isRead : boolean = true
    return {
        ...book,
        isRead
    };
} 

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
toggleReadStatus(myBook);

//Problem 6

class Person {
    name : string;
    age : number;

    constructor(name:string, age:number){
        this.name = name,
        this.age = age
    }
}

class Student extends Person{
    grade : string

    constructor(name:string, age:number, grade : string){
        super(name, age),
        this.grade = grade
    }
    getDetails():string{
        return `Name : ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }

}
const student = new Student("Alice", 20, "A");
student.getDetails();

//Problem 7

function getIntersection (arr1 : number[], arr2: number[]) : number[]{
   
   const intersection = arr1.filter(item => arr2.includes(item));
   const res = [...new Set(intersection)];
   return res;

}
console.log(getIntersection([1, 2,2,2,2 ,3, 4, 5, 5], [2,2,3, 4, 4,5, 5, 6, 7]))