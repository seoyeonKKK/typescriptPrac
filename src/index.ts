class Human{
    public name : string;
    public age : number;
    public gender : string;
    constructor(name : string, age : number, gender : string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

// interface Human{
//     name : string;
//     age : number;
//     gender : string;
// }

const lynn = new Human("Lynn", 18, "female");
const person ={
    name : "nicolas",
    gender: "male",
    age:22
};


const sayHi = (person : Human): string =>{
    return `Hello my name is ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(lynn));
export {};