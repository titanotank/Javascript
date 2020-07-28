// Prototype ----> Objeleri baska objelerden türetebilme 

// Java class tabanlı ama js prototype tabanlı bir dil ve prototiplerden türetiyoruz

// EscaScripte 6 class var ama arkada prototype donusuyor

const object = new Object();
const object2 = new Object();
object.name = "Mustafa"; // Böyle . nokta ile değer vereibliyoruZ< -Object literal ozellği
// console.log(object);
// console.log(object2);

/// İki farklı objece aynı object prototipini kullanıyor, 
// ortak metodlar parentta toplandı, iki kere yazmak zorunda dilim

// const object = new Object();
// const object2 = new Object();

function Employee(name,age){
    this.name = name;
    this.age = age;
    this.showInfos = function(){
        console.log("Bilgiler Gösteriliyor...");
    }
    this.toString = function(){
        console.log("Bu bir Employee objesi");
    }
}

// Her constructorla obje olusturunca 2 prototipimiz var, 
// biri kendisi biri icinde parenti

const emp1 = new Employee("Mustafa",25); // 1 Employe prototype var ve icinde Object prototitpi var
// console.log(emp1.toString()); // Parenta giderek fonk arar ve calistirir yoksa hata verir
