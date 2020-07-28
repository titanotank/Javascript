
function getTextFile(){

    fetch("example.txt")
    .then(response => {
        return response.text();  /// Responsedan Promise döndürdük
    })
    .then(data => console.log(data))   /// Promisi yazınca valuesunu verdi 
    .catch(err => console.log(err));

    // console.log(this);

}

function getJsonFile(){

    fetch("example.json")
    .then(response => {         // .text() dersek text şeklinde aliriz
        return response.json(); // Responsu json olarak aldık
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));

}

// getTextFile();
getJsonFile();


function getExternalRates(){

    fetch("https://api.exchangeratesapi.io/latest")
    .then(response => response.json())
    .then(data => console.log(data.rates))
    .catch(err => console.log(err));


}

getExternalRates();