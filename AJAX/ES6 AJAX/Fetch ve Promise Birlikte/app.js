

class Request {

    // Verileri elde etmek icin promise yapısıyla return edicez
    // Dataları resovle ve rejecte koyduk
    get(url){ // Get Request

        return new Promise(function(resolve,reject){
       
        fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err)); 

        });
    }

    post(url,data){

        return new Promise(function(resolve,reject){

            fetch(url,{
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type" : "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));


        });


    }

    put(url,data){

        return new Promise(function(resolve,reject){

            fetch(url,{
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-type" : "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));


        });


    }

    delete(url){

        return new Promise(function(resolve,reject){

            fetch(url,{
                method: "DELETE"
            })
            .then(response => response.json())
            .then(data => {resolve("silindi")})
            .catch(err => reject(err));


        });


    }

}

const req = new Request()

let albums;

// req.get("https://jsonplaceholder.typicode.com/albums")
// .then(data => {
//     albums = data;
//     console.log(albums);
// })
// .catch(err => console.log(err));

// console.log(albums);     // İlk basta bunu yazdıracak undefined then icine koyduk islemi

// req.post("https://jsonplaceholder.typicode.com/albums",{userId:1,title:"Tuncay"})
// .then(data => console.log(data))
// .catch(err => console.log(err));

// req.put("https://jsonplaceholder.typicode.com/albums/1",{userId:1,title:"Tuncay"})
// .then(data => console.log(data))
// .catch(err => console.log(err));

req.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(data => console.log(data))
.catch(err => console.log(err));
