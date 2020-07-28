
// Rest Api ile calısmak

document.getElementById("change").addEventListener("click",getExcange);

function getExcange(){

    let amount = document.getElementById("amount");

    const xhr = new XMLHttpRequest();
    
    xhr.open("GET","https://api.exchangeratesapi.io/latest",true);
    
    xhr.send();

    xhr.onload = function(){
        if(this.status == 200){
            const data = JSON.parse(xhr.responseText);

            const tl = data.rates.TRY *amount.value;

            document.getElementById("tl").value=Number(tl); 
            
            // console.log(tl);
            
        } 

    }

}