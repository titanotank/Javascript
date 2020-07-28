// Local  Storage ta veriler sabit kalıyor kendimiz silmeliyiz

// Session Storage -- Oturum boyunca kalıyor , sekme veya browser kapanınca siliniyor

// Key -- Value değerlerini tutuyor --> Aynı keyle deger girersek günceller

// Butonları secme

const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

// Inputları secme

const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");

add.addEventListener("click",addItem);
del.addEventListener("click",deleteItem);
clear.addEventListener("click",clearItems);

function addItem(e){
    sessionStorage.setItem(addkey.value,addvalue.value);
    console.log(addkey.value);
}

function deleteItem(e){
    sessionStorage.removeItem(deletekey.value);
}

function clearItems(e){
    sessionStorage.clear();
}

console.log();
