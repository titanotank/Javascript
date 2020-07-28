

class Request{
    constructor(){
        this.xhr  = new XMLHttpRequest();
    }

    post(url,data,callback){
        
        this.xhr.open("POST",url);

        // Data yollamak istiyorsak headerda belirlememiz lazim
        // Göndermek istediğim veri tipi, içerik tipi-applicaton/json
        this.xhr.setRequestHeader("Content-type","application/json");

        this.xhr.onload = () =>{
            
            if(this.xhr.status === 201){ // Created or Update icin kod
                callback(null,this.xhr.responseText);
            }else{
                callback("Herhangi bir hata meydana geldi",null);
            }
        }
        
        this.xhr.send(JSON.stringify(data)); /// Datayı json olarak yolladık
    }

    put(url,data,callback){

        this.xhr.open("PUT",url);

        this.xhr.setRequestHeader("Content-type","application/json");

        this.xhr.onload = () =>{
            
            if(this.xhr.status === 200){  // Güncellediğimiz icin 200
                callback(null,this.xhr.responseText);
            }else{
                callback("Put Hata olustu",null);
            }
        };

        this.xhr.send(JSON.stringify(data));

    }

    delete(url,callback){
        
        this.xhr.open("DELETE",url);

        this.xhr.setRequestHeader("Content-type","application/json");

        this.xhr.onload= () =>{
            if(this.xhr.status === 200){
                callback(null, "Veri Silme İslemi Başarılı");
            }else{
                callback("Delete Hata Olustu",null);
            }
        };

        this.xhr.send();
    }

}

const req = new Request();

const data = {userId: 11,title: "tese",};

req.post("https://jsonplaceholder.typicode.com/posts",data,function(err,response){
  if(err === null) console.log(response);
  else console.log(err);  
});


const putdata = {userId: 123,title: "Yeniden Put",};

req.put("https://jsonplaceholder.typicode.com/posts/1",putdata,function(err,response){
    if(err === null){
        console.log(response);
    }else{
        console.log(err);
    }
});


req.delete("https://jsonplaceholder.typicode.com/albums/10",function(err,response){
    if(err === null){
        console.log(response);  // Basarili ise bize bos bir obje döner
    }else{
        console.log(err);
    }
});
