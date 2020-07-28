// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.showInfos = function(){
//     console.log("İsim: " + this.name + " Yas: " + this.age);
// }

// function Employee(name,age,salary){
//     Person.call(this,name,age);
//     this.salary = salary;
// }

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.toString = function(){
//     console.log("Employee");
// }

// Employee.prototype.showInfos = function(){
//     console.log("İsim: " + this.name + " Yas: " + this.age + " Maas: " + this.salary);
// }

// const emp = new Employee("Mustafa",25,4000);


// Kalitim 1 - extends 2- constructorda superi cağirma


class Person {
    constructor(name,age,salary){
        this.name = name;
        this.age = age;
    }
    showInfos(){
        console.log("İsim: " + this.name + " Yas: " + this.age);
    }
}

class Employee extends Person {  // SubClass derived class
    constructor(name,age,salary){
        // this.name = name;
        // this.age = age;
        super(name,age); // --> Ust sinifin consturctiri istedik -> Call gibi oldu
        this.salary = salary;
    }
    // Override ettik
    showInfos(){
        super.showInfos(); // --> parentin metodunu call ettik
        console.log(" Maas: " + this.salary);
    }
    toString(){
        console.log("Employee");
    }

    raiseSalary(amount){
        this.salary += amount;
    }
}

const emp = new Employee("Mustafa",25,4000);

console.log(emp);
emp.showInfos();
emp.raiseSalary(500);
emp.toString();
emp.showInfos();

