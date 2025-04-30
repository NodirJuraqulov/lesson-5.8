
const commentWrapperEl = document.querySelector(".comment_wrapper");
const API_URL_comments = "https://jsonplaceholder.typicode.com/comments";  

function commentCard(cdata) {
    const fragment = document.createDocumentFragment();
    cdata.forEach(comEl => {
        let comCard = document.createElement("div");
        comCard.className = "comment_card";
        comCard.innerHTML = `
            <h2>${comEl.name}</h2>
            <p>${comEl.email}</p>
            <p>${comEl.body}</p>
        `
        fragment.appendChild(comCard);
    });
    commentWrapperEl.appendChild(fragment);
}

async function commentData(){
    try{
        const c_response = await fetch(API_URL_comments);
        const c_promise = c_response.json();
        c_promise
            .then(res => {
                commentCard(res);
            })
            .catch(err => {
                console.log(err);
            })
    }catch(err){
        console.error(err);
    }
}

window.onload = ()=>{
    commentData();
}