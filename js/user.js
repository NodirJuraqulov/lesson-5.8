

const userWrapperEl = document.querySelector(".user_wrapper");
const API_URL_user = "https://jsonplaceholder.typicode.com/users";  

function userCard(udata) {
    const fragment = document.createDocumentFragment();
    udata.forEach(userEl => {
        let userCard = document.createElement("div");
        userCard.className = "user_card";
        userCard.innerHTML = `
            <h2>${userEl.name}</h2>
            <p>${userEl.email}</p>
        `
        fragment.appendChild(userCard);
    });
    userWrapperEl.appendChild(fragment);
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