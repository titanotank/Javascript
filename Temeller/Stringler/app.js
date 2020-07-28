let value;

const firstName = "Louis";
const lastName = "Armstrong";

const langs = "Java, Python, C++";

value = firstName + lastName;

value = "Mustafa Murat";
// Alternatif
value = value + " Coskun";
value += " Coskun";

value = firstName.length;

value = firstName.concat(" ",lastName," ", "Caz");
value = firstName.toLowerCase();
value = firstName.toUpperCase();

value = firstName[0];
value = firstName[2];
value = firstName[4];
value = firstName[firstName.length-1];

// Index Of

value = firstName.indexOf("L");
value = firstName.indexOf("o");
value = firstName.indexOf("l");

// Char at

value = firstName.charAt(0);
value = firstName.charAt(firstName.length-1);

//Split -> parcalayıp arraye atıyor

value = langs.split(",");

// Replace

value = langs.replace("Python","Css");

// Includes ---> iceriyorsa true doner 

value = langs.includes("Java");
value = langs.includes("C#");

console.log(value);