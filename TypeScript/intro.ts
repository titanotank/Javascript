// Neden Type Script

// İsim yerine 25 yada fonksiyonda yollayabirim
function greeter(isim:string){
    return "Merhaba" + isim;
}

let mesaj = greeter("Derin");

console.log(mesaj);

let sayi:number
sayi = 10
sayi = 10.4


let sehir : string
sehir = "İstanbul"
// sehir = 10  -----> Hata verdi 10 atayamadi

let dogruMu : boolean

dogruMu = false
dogruMu = true;

let sayilar : number[] = [1,2,3]
// İlerde customer nesnemi buraya koyarım
let sayilar2 : Array<number> = [1,2,3]

let dizi : [number,string] = [2,"Ankara"]

// Enum belli değerler atanabiliyor
enum Renk{Kirmizi=1,Siyah=2,Mavi=3}

let renk : Renk = Renk.Kirmizi

// any tipi belli değil
let belliDegil : any = "Ankara"
belliDegil = 3

let deger2 : void = undefined

// void birsey return etmiyor
function selamVer2():void{
    console.log("Merhaba")
}

let yas : number;


console.log(sehir);








