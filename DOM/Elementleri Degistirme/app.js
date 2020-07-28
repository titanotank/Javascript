const element = document.querySelector("#clear-todos");

// Elementin Özellikleri

// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[1]);
// console.log(element.textContent); // --> Sadece yazı bölümünü aldı
// console.log(element.innerHTML); // -- icerideki html etiketleri dahil hepsini alabiliriz

// console.log(element.href);

// console.log(element.style); // --> Tüm css özellikleri tek nesne ile geldi

// Style ve element özelliklerini değiştirme
// element.className = "btn btn-primary";
// element.style.color = "#000";
// element.style.marginLeft = "20px";
// element.href = "https://www.google.com.tr"; // gidilcek link
// element.target = "_blank"; // hrefi yeni sayfada aciyor
// element.textContent = "silin";
// element.textContent = "<span>Silin</span>"; // --> normal yaazı gibi göründü

// İnnerHTML ile dinamik olarak etiket ekledim
// element.innerHTML = "<span style = 'color:green' >Silin</span>";



// Lilerin hepsini değiştirmek istersek

// const elements = document.querySelectorAll(".list-group-item");

// elements.forEach(function(e1) {
//     e1.style.color = "red";
//     e1.style.background = "#eee";
// });

// console.log(elements);


// 2 ve 3 cocugu secme --- Complex secmeler

let element2 = document.querySelector("li:last-child");

element2 = document.querySelector("li:nth-child(2)"); // --> kacıncı cocuk
element2 = document.querySelectorAll("li:nth-child(odd)");
element2 = document.querySelectorAll("li:nth-child(even)");


element2.forEach(function(e){
    e.style.background = "red";
    e.style.color = "blue";
});

console.log(element2);
// console.log(element);