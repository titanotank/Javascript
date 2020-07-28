class Ev{

    // Erisim Belirtecleri
    public _odaSayisi:number;
    private _pencereSayisi:number;
    protected _kat:number;

    // Alınacak parametrelere typeladik
    constructor(odaSayisi:number,pencereSayisi:number,kat:number){
        this._odaSayisi = odaSayisi;
        this._pencereSayisi = pencereSayisi;
        this._kat = kat;
    }
    // Getter ve Setter

    get kat():number{
        return this._kat;
    }

    set kat(kat:number){
        this._kat=kat;
    }

    yemekYe(){
        console.log("Katlı evde yemek yenildi");
    }
}


let ev = new Ev(3,4,5);

ev.yemekYe();


// Abstract Classlar

abstract class KrediBase {
    constructor() {
        
    }
    kaydet():void{
        console.log("Kaydedildi");
    }

    abstract hesapla():void;
}


// Tüm alanları doldurmak zorundaysak interface yaratiriz
interface Product{
    id:number;
    name:string;
    unitPrice:number;
}

// Bir kac alanı kullanmak istiyorsak class yaratip parametre veririrz
class Product2 {
    name:string;
}


function save(product:Product){
    console.log(product.name + " kaydedildi.");
}

function save2(product:Product2){
    console.log(product.name + " kaydedildi");
}

save({id:1,name:"Laptop",unitPrice:10})

let mouse = new Product2()
mouse.name = "Atect"
save2(mouse);


///   Interface ile metodları implemente etmek zorunda kaliriz
interface PersonService{
    save();
}

class CustomerService implements PersonService {
    save(){

    }
}

