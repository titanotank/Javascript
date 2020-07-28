const person  = {
    age:25,

    tellAge: function(){ // --> Fonksiyonun icindeki this kendi objem
        // This -> Person
        console.log(this);
        console.log(this.age);
    }.bind(this),           // Bu olursa window objem bu metod icinde calisir

    // this --> Window objesi ---> Fonksiyonun disindayiz

    
    // Arrow Function kullanalim  --> Array Function otomatik bind yapıyor

    tellName: () => {
        console.log(this); // Window objesi cıktı
    }


}


// person.tellAge();
person.tellName();