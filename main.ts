// step01_strong_typing
let myName:string = "Rabia";
let num:number = 4567;
let enroll:boolean = true
let fruits:string[] = []

class Student{
    name:string
    last:string

    constructor(name:string,last:string){
        this.name = name
        this.last = last
    }

}

let student:Student = {
    name:"Rabia",
    last:"Sohail"
}

interface Color{
    first:string,
    second:string,
    third:string,
}

let color:Color = {
    first:"Red",
    second:"Green",
    third:"Yellow"
}

type F1 = ()=>number

type Teacher = {
    name:string,
    age:number,
    exper:number
}

// Implicitly typed

let vegetable;
vegetable = "Tomato"
vegetable = 45
vegetable = true
vegetable = []
vegetable = {}
vegetable = function name(params:string) {
}

//type inference

let num1 = 5
num1 += num1++
console.log(num1);

let child = "Yashal"
child = "Kiswah"

//compile or run time error


