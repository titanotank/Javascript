// Statik Metodlar -> Durağan metodlar- Objesiz call edilir

// Static methodlar class ismi üstünde erişilir
// obje üstünden erisilmez- prototypeda değil
class Matematik{

    // static keywordu ile tanımladık objeye gerek kalmadı
    static cube(x){
        console.log(x*x*x);
    }

}
// Mutlaka obje oluşturmam gerekiyor kullanmak icim
// const math = new Matematik();
// console.log(math.cube(3));

Matematik.cube(3);

const math = new Matematik();
console.log(math); // static methodlar protoypeta yok- obje üstünde erisilmez

