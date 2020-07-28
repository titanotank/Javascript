function topla(x,y){
    return x+y;
}

function topla2(x:number,y:number):number{
    return x +y ;
}

let topla3 = function(x:number,y:number):number{return x + y;}

console.log(topla(2,3));
console.log(topla("Mustafa",3));
console.log(topla(2,4));
console.log(topla(4,8));

// Optional ve Default Parameters
// Default olmasada kabul et ve yerine sunu koy
function topla4(x:number,y:number = 4):number{
    return x + y ;
}

console.log(topla4(3));

// y optinal ise ? konur olamasada kabul et
function topla5(x:number,y?:number):number{
    if(y){
        return x+y;
    }
    return x;
}


// REST PARAMETRELER
// ne kadar parametre vereceğimiz belli değil
function davetEt(...digerleri: string[]): string{
    return digerleri.join(" ");
}

console.log(davetEt("Engin","Derin","Tuncay","Mustafa"));