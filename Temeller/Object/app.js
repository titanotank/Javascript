const programmer = {
    name : "Mustafa Murat Coskun",
    age : 25,
    email : "coskun@gmail.com",
    langs : ["Python","Java","Javascript"],
    // Ic ice obje yerlestirebiliyoruz.
    address : {
        city : "Ankara",
        stree : "BahceliEvler"
    },

    // Objemizde fonksiyonda oluşturabiliriyoruz
    work : function(){
        console.log("Programcı Calısıyor...");
    }

}

// Objeyi elemanlarına ulasma
value = programmer;

value = programmer.email; // Genel kullanım
value = programmer["email"];

value = programmer.langs;
value = programmer.address.city;

programmer.work();

const programmers  = [
    {name : "Mustafa Murat" ,age:25},
    {name : "Oguz" ,age : 25}
];

value = programmers;
console.log(value);

