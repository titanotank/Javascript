// Alert

// alert("Merhaba"); // --> Bu metod nerden geldi. Pencere üzerinde yapmak isteğimiz işlemleri yapmamızı sağlayan bir obje

// This üzerinde bulunduğumuz obje
// console.log(this);

// console.log(window.alert("Merhaba")); // Üssteki il aynı oldu window yazmadık zaten üzerindeyiz.

// const cevap = confirm(" Emin misiniz ? ");

// if(cevap){
//     console.log("Silin Gitsin");
// }
// else{
//     console.log("Silmeyin");
// }

// const cevap = prompt("2 + 2 = ?");

// if( cevap == "4"){
//     console.log("Doğru");
// }else{
//     console.log("Yanliş");
// }

let value;

value = window;
value = window.location;
value = window.location.host; // --> hostname- localhost + port
value = window.location.hostname;
value = window.location.port;
value = window.location.href;

// if(confirm("Sayfa yENİLENSİn mi")){
//     window.location.reload();
// }else{
//     console.log("Sayfa Yenilenmedi.");
// }

value = window.outerHeight; // -> Yukardan ağaşı pencere pixeli
value = window.outerWidth; // --> sağdan sola diş penceren pixel ölcer
value = window.innerHeight;
value = window.innerWidth;

value = window.scrollX; //--> Scrool kaydırma cubuğu ne kadar kaymıs
value = window.scrollY;

console.log(value);