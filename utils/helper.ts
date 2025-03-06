

let fname : string; //typerannotation
let age: number;

fname = "deepika"; //type inference in compile time
age = 30;
let number = 50; // type inference in runtime

function getNumber(): number {
  return 10;
}


function getAny(): any {
    return 10;
  }

function add(a,b): number {
    return a+b;
}
add(10,20); // calling the function
function addnumber(a: number,b: number): number {
    return a+b;
}
//declare array


let employee : Array<string> = ["deepika","sowmya","sai"];// generic array

//multiple array
let values : (string | number)[] = ["deepika","sowmya","sai",10,20,30];
let values1 : Array<string | number> = ["deepika","sowmya","sai",10,20,30];

//print all the elements in the array
let names : string[] = ["deepika","sowmya","sai"];
    function printNames(names: string[]): void {
        for(let i=0;i<names.length;i++){
         console.log(names[i]);
        }
}
// size is fixed
let person : [string,number] = ["deepika",30];
console.log(person[0]);
console.log(person[1]);

//enum
enum environment {
    DEV = "DEV",
    QA = "QA",
    STG = "STG",

} console.log(environment.DEV);

function getBrowser(browsers: string): number {
    if (browsers === "chrome"){
        return 115;
    }
    return 0
}
//Union
let userid : string | number;


function costumerid(id: string | number){
    if (typeof id === "string" ){
        return id+"deepika";
    } else if  (typeof id === "number"){
        return "deepika";
    }
}

//Arrow function        
let info = ()=>{
    return "deepika";
}

let multiple = (a: number,b = 50) => {
    {
        return a*b;
    }
}
let divide = (a: number,b: number) => a/b;


class Person {
    fname: string;
    age: number;
    lname: string;

    constructor(fname: string, age: number, lname: string){
        this.fname = fname;
        this.age = age;
        this.lname = lname;
    }   

    display = () => console.log(this.fname + " " + this.age + " " + this.lname);

}

let p = new Person("deepika",30,"reddy");
p.display();
//////////// String manupulation
function stringReverse(): string {
    let str = "deepika";
    return str.split("").reverse().join("");
}

function stringConcat(): string {
    let str1 = "deepika";
    let str2 = "reddy";
    return str1.concat(str2);
}

function removeWhiteSpaces(): string {
    let str = "   I Love Automation";
    return str.replace(/\s/g, '');
}