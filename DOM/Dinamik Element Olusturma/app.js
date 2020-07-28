// <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>               

const cardbody = document.querySelectorAll(".card-body")[1];

// Element olusturma tagini verdik
const newLink = document.createElement("a");
newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com.tr";
newLink.target = "_blank";

// Text Content
// -- Bu hic güvenli degil-icindeki html etikenleri yerine sadece bu yazi gecer yok olur
// newLink.textContent = "Farklı Sayfaya Git";

// cardbody.textContent = "as"; Bütün todolar gitti

// TextNode olarak eklemeliyim -- > cocuk gibi eklenir

// const text = document.createTextNode("Naber");
// cardbody.appendChild(text); // --> enson cocuga ekler

newLink.appendChild(document.createTextNode("Farklı Sayfaya Git"));

cardbody.appendChild(newLink);


console.log(newLink);