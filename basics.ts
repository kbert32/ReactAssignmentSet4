// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string;

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

let person: {
    name: string;
    age: number;
};

person = {
    name: 'Max',
    age: 32
};

let people: {           //specifies and array of this type of objects
    name: string;
    age: number;
}[];

//Type inference

let course = 'React - The Complete Guide';

// course = 12341;     //flags and error because of type inference, typescript has assumed that 'course' is of type 'string'

//Type union

let union: string | number = 'React - The Complete Guide';

union = 12341;          //does not flag an error because both strings and numbers are allowed

//Type aliases

type Person = {     //defintion is setup
    name: string;
    age: number;
};

let persons: Person;    //definition is used to create new object

let peoples: Person[];  //defnition is expanded upon to allow arrays of objects

// Functions and types

function add3(a: number, b: number) {
    return a + b;                       //the returned type is inferred as number
};

function add4(a: number, b: number): string | number {
    return a + b;                       //the returned type can also be specified
};

function printOut(value: any) {
    console.log(value);             //this function has no return, therefore has a special return type called 'void'
};                                  //'void' is basically comparable to null or undefined

// Generics

function insertAtBeginning<newType>(array: newType[], value: newType) {     //newType is a generic type,  typescript knows that both parameters should be the same type 
    const newArray = [value, ...array];     //after the value is returned from the function, the type is locked in
    return newArray;
};

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);  //[-1, 1, 2, 3]     generic types allow the use of different types of parameters, but the returned value
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');        //has a specific type

