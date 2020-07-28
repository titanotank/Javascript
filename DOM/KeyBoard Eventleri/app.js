// Klavye Evenleri


// Keypress --> Sadece harfler ve sayılar
// document.addEventListener("keypress",run);

// function run(e){
//     console.log(e.which); // e.which basılan karakterin asci tablosundaki değerini verdi
//     console.log("Naber");
//     console.log(e.key);
// }

// Keydown --> Her tusta calısır basildiği anda

// document.addEventListener("keydown",run);

// function run(e){
//     console.log(e.key);
// }



// Keyup  ---> Tusa basmayi biraktiğimiz anda calısır

// document.addEventListener("keyup",run);

// function run(e){
//     console.log(e.key);
// }


// Forma her yazı yazdığımızda card headeri degistirmek istiyoruz

const header = document.querySelector(".card-header");
const input = document.getElementById("todo");


input.addEventListener("keyup",run);

// Yazıyı alıp degistireceğiz e.target ile elementi alıyoruz e.target.value
function run(e){
    // header.textContent += e.key;

    // console.log(e.target.value);

    header.textContent = e.target.value;
}