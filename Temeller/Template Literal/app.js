const name = "Mustafa Murat Coskun";
const departman = "Biisim";
const salary = 4000;

// const a = "Isim: " + name + "\n" + "Departman: " + departman + "\n" + "Maas: " + salary;

const a = `İsim:${name}\nDepartman:${departman}\nMaas:${salary}`;
//Bir liste icerisinde data oluştururken yaratabiliriz.

const html = "<ul>" +
            "<li>" + name + "</li>"+
            "<li>" + departman + "</li>"+
            "<li>" + salary + "</li>"+
            "</ul>";


const htmll = `<ul>
                <li>${name}</li>
                <li>${departman}</li>
                <li>${salary}</li>
                <li>${10 / 4}</li>
                </ul>`;

// İcinde js kodunuda yazabiliriz.

document.body.innerHTML = htmll;
console.log(a);