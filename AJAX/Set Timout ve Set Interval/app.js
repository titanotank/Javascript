
// Set Timout ve Set Interval 

// SetTimout belli bir fonksiyonu belli bir süre sonra çağirabiliyoruz

setTimeout(function(){
    console.log("naber");
},5000);

// Set Interval -- Verilen aralıklarla fonksiyonu calıstıtyorı
let i = 0;
let value = setInterval(function(){
    i++;
    console.log("Sayı:",i);
},1000); // ---> 1 sn aralıklarla fonksiyonumuz calısıyor

// Clear Interval ile durduruyoruz
// interval metodunu değişkene atarız

document.getElementById("btn").addEventListener("click",function(){
    clearInterval(value);  // Butona basilinca intervali durdurduk
});



