let value; 

const now = new Date(); // Suan ki zamanı almamızı sağlar...

const date1 = new Date("9-21-1993 06:15:02");

const date2 = new Date("September 21 1993");

const date3 = new Date("9/21/1993");

value = date1;
// 0 dan baslayarak sayar eylüle 8 olarak görür
value = date1.getMonth();

// 1 den baslar
value = date1.getDate();

// 0 dan baslar pazar
value = date1.getDay();

value = date1.getHours();
value = date1.getMinutes();
value = date1.getSeconds();
value = date1.getMilliseconds();

// Tarihleri Değiştirme

date1.setMonth(7);
date1.setDate(19);
date1.setFullYear(1994);
date1.setHours(0);
date1.setMinutes(15);
date1.setSeconds(30);

value = date1;

console.log(value);