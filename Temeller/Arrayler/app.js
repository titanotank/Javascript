let value;

const numbers = [43,56,33,23,44,35,5];
// alttaki fazla kullanılmaz
const numbers2 = new Array(1,2,3,4,5,6,7);

const langs = ["Python","Java","C++","Javascript"];

const a = ["Merhaba", null, 22, undefined,3.14];

// Uzunluk
value = numbers.length;

// Indexleme
value = numbers[0];
value = numbers[2];
value = numbers[numbers.length-1];

// Indexteki değeri değiştirme
numbers[2] = 1000;
value = numbers;

// Index of

value = numbers.indexOf(1000);

// Arrayin sonuna değer ekleme

numbers.push(2000);

// Basına eleman ekleme
numbers.unshift(3000);

// Sondan eleman atma

numbers.pop();

// Basindan bir eleman atalim

numbers.shift();

// SubIndex yapmak istersem ne yapıcam
// 0 dan itibaren 3 e kadar aticak 3 dahil değil
numbers.splice(0,3);

// Reverse
numbers.reverse();

// Sort metodu
// ilk rakamına,charakterine bakarak siralar, yanlıs siralar
value = numbers.sort();

// İstediğimiz şekilde siralamak için funtion vermeliyiz
value = numbers.sort(function(x,y){ // x-y kücükten büyüğe
    return y-x; 
});

value = numbers;
console.log(value);