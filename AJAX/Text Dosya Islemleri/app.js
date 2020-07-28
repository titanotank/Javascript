// Http Status
// 200 : OK
// 403 : Forbidden
// 404 : Not Found
// 505 : Internal Server Error

document.getElementById("btn").addEventListener("click",function(){

    // XMLHttpRequest -----> Bu objeye ihtiyacım var

    const xhr = new XMLHttpRequest();

    xhr.open("GET","example.txt",true);


    // Bu cok eski bir yöntem 
    // xhr.onreadystatechange = function(){
        // console.log(this.readyState);   //---> xhr objesinin icindeyim
        // console.log(this.status);

    //     if(this.status == 200 && this.readyState == 4){
            //Response Hazır
    //         console.log(this.responseText);
    //     }

    // }

    // Response hazır olduğunda yani 4 olduğunda direk calısır
    xhr.onload = function(){

        if(this.status === 200){
            // console.log(this.responseText);
            document.getElementById("ajax").textContent = this.responseText;
        }

        // console.log(this.readyState); // --> ready State 4 olunca calıstı
    }

    // Ready State 3
    xhr.onprogress = function(){
        console.log("Process Isleniyor...",this.readyState);
    }

    xhr.send();   // --> Parametrede yollabiliriz ama get yapıyoz, postta parametre

    // console.log(xhr);



});

