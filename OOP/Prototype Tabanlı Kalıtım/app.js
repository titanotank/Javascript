// Prototype Tabanlı Kalıtım

// Kalıtım --> Bir objenin diğer objeden özellik ve metodları miras almasıdır

function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.showInfos = function(){
    console.log("İsim : " + this.name + " Yas: " + this.age);
}

// const person = new Person("Mustafa",25);
// console.log(person);

function Employee(name,age,salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
}
// Prototeypen parentia person prototypeini(class) koyduk
Employee.prototype = Object.create(Person.prototype);

// Override ettik
Employee.prototype.toString = function(){
    console.log("Employe");
}

// Show infos salary vermiyor onuda override ediyoruz
Employee.prototype.showInfos = function(){
    console.log("İsim: " + this.name + " Yas : " + this.age +
    " salary : " + this.salary);
}
const emp = new Employee("Mustafa",25,4000);
console.log(emp);
emp.showInfos(); // Metodu miras aldık gerçekleştirdik bunu
emp.toString();


// Simdi son durum Employee icersinden Person metodunu cağirmak istiyoruz

function Employe(name,age,salary){
    // Person constructurini Employe icinde kullandık
    // this.name = name;
    // this.age = age;
    // Üsttekini tek tek yazmak yerine böyle tek satırda halledebildik
    Person.call(this,name,age);
    this.salary = salary;
}

