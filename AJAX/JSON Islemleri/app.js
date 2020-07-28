
// Ajax ve JSON islemleri

document.getElementById("ajax").addEventListener("click",getAllEmployess);


function getAllEmployess(){

    const xhr = new XMLHttpRequest();

    xhr.open("GET","employees.json",true);

    xhr.send();

    xhr.onload = function(){

        let list = document.getElementById("employees");

        if(this.status == 200){
            // console.log(JSON.parse(xhr.responseText));

            const employees = JSON.parse(xhr.responseText);
            
            employees.forEach(function(employee){
                list.innerHTML += `<tr>
                <td>${employee.name}</td>
                <td>${employee.departman}</td>
                <td>${employee.salary}</td>
                </tr>` 
            });


        }
    }

}
















