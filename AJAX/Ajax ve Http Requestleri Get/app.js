
// Ajax, callback, http requests


class Request{

    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    // Get Request

    get(url,callback){
        this.xhr.open("GET",url); // Bağlanti actik
        // const temp = this;  // Cozüm 1 : kendi objemi temp olarak tutabilirm Eski yöntem
        this.xhr.onload = function(){      // ! this.xhr.onload icinde this xhr objesini gösterir
            // console.log(this);         -> this. xhr i gösterir
            if(this.xhr.status === 200){    // Cozüm 2 : this.xhr yerine xhr deriz
                // console.log(this.xhr.responseText);
                callback(null,this.xhr.responseText);
            }else{  // Hata durumunda ne yapcaz
                callback("Herhangi bir hata olustu",null);
            }
        }.bind(this);      // 3. Yöntem bu fonksion icinde this xhr değil, kendi objemi bindliyorum


        // 4. Yöntem Arrow Function kendisi bind islemini gerceklestiriyor

        

        this.xhr.send();

    }

}

const req = new Request();
const albums = req.get("https://jsonplaceholder.typicode.com/posts");

console.log(albums); // Undefined verdi neden ?    // Cünkü get islemi uzun sürdü undefinded oldu

// Callback ile çözeceğiz bunu     ---> Hata durumlarınıda yönetebiliyoruz
const al = req.get("https://jsonplaceholder.typicode.com/posts/50",function(err,response){
    if( err == null ) console.log(response);
    else console.log(err);
})


