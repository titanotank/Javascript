// const process = "1";

// if(process === "1"){
//     console.log("İslem 1");
// }else if (process === "2"){
//     console.log("İslem 2");
// }else if (process === "3"){
//     console.log("İslem 3");
// }else{
//     console.log("Gecersiz İslem");
// }

const process = 2;

switch(process){
    case 1:
        console.log("Islem 1");
        break; // casea girdikten sonra break görene kadar alttaki tüm caselere giriyor
    case 2:
        console.log("Islem 2");
        break;
    case 3:
        console.log("Islem 3");
        break;
    default:
        console.log("Gecersiz Islem");
}

