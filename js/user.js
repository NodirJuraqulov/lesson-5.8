

const userWrapperEl = document.querySelector(".user_wrapper");
const tableEl = document.querySelector(".tbody");
const API_URL_user = "https://jsonplaceholder.typicode.com/users";  

function userCard(udata) {
    const fragment = document.createDocumentFragment();
    udata.forEach(userEl => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${userEl.id}</td>
            <td>${userEl.name}</td>
            <td>${userEl.email}</td>
            <td>${userEl.address.street}</td>
            <td>${userEl.phone}</td>
            <td>${userEl.company.name}</td>
        `
        fragment.appendChild(tr);
    });
    tableEl.appendChild(fragment);
}

async function userData(){
    try{
        const u_response = await fetch(API_URL_user);
        const u_promise = u_response.json();
        u_promise
            .then(res => {
                userCard(res);
            })
            .catch(err => {
                console.log(err);
            })
    }catch(err){
        console.error(err);
    }
}

window.onload = ()=>{
    userData();
}