function getData(data){   // Promise Objesi döndüren fonksiyon

    return new Promise(function(resolve,reject){

        setTimeout(function(){
            
            if(typeof data === "string"){
                // Olumlu
                resolve(data);
            }
            else {
                reject(new Error("Lütfen string bir değer girin"));
            }
        },5000);
    });

}


// console.log(getData("Merhaba")); // Biz

// getData(123)
//     .then(function(response){
//         console.log(response);
//     })
//     .catch(function(err){
//         console.log(err);
//     });

// getData("Merhaba")
// .then(response => console.log("Gelen Değer " + response))
// .catch(err => console.log(err));

// Then icinden return ile değer döndürebiliriz.bunuda promise olur ve ikinci then ile alırım

function addTwo(number){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(typeof number === "number"){
                resolve(number+2);
            }   
            else{
                reject(new Error("Lütfen bir sayı girin"));
            }
        },3000);
    });
}

// Callback cehennemi yerine .then .then yapısı daha iyi

addTwo(10)
.then(response => {
    console.log(response);
    return response + 2;      /// Return bir promise yapısı yakalıcaz
}).then(response => console.log(response))
.catch(err => console.log(err));
