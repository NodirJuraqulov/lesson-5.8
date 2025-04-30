
// HOMEWORK:

// Uzum -- Banner:
const mainImgEl = document.querySelector(".main_img img");

let img1 = "/assets/swiper-slide.png";
let img2 = "/assets/img3.avif";
let img3 = "/assets/img33.avif";
let img4 = "/assets/img4.avif";
let img5 = "/assets/img5.avif";

let arrImg = [img1, img2, img3, img4, img5];

let i = 0;

function mainImg() {
    mainImgEl.setAttribute("src", arrImg[i]);
}

function nextImg() {
    if (i < arrImg.length - 1) {
        i++;
        mainImg();
    }
}

function afterImg() {
    if (i > 0) {
        i--;
        mainImg();
    }
}


// function nextImg(next) {
//     mainImg.setAttribute("src", next);
// }
// function afterImg(next) {
//     mainImg.setAttribute("src", next);
// }

// let i = 1;
// function foo() {
//     if (i < arrImg.length) {
//         nextImg(arrImg[i]);
//         i++;
//     }
//     return i;
// }

// let j = i - 1;
// function goo() {
//     if (j >= 0) {
//         nextImg(arrImg[j]);
//         j--;
//     }
// }








// // // // LESSON:
// // // // console.log("Hello World!");

// // // console.log(1);

// // // setTimeout(() => {
// // //     console.log("setTimeout");
// // // }, 0);

// // // let object = new Promise((resolve, reject) => {
// // //     let status = true;

// // //         if (status) {
// // //             resolve("mana senga pul");
// // //         } else {
// // //             reject("pul yoq");
// // //         }
// // // })  // class - object;

// // // // * pedding - kutish;
// // // // * fulfilled - yaxshi holat;
// // // // * rejected - bekor qilish holati;

// // // object 
// // //     .then((res) => {
// // //         console.log(res);
// // //     })
// // //     .catch((err) => {
// // //         console.error(err);
// // //     })
// // //     .finally(() => {
// // //         console.log("jarayon tugadi.");
// // //     })

// // // console.log(2);

// // // function foo() {
// // //     console.log("foo");
// // // }
// // // foo();


// // // asynchronous function:
// // async function asynchronous() {
// //     let data = await [];
// //     return "asynchronous function";
// // }
// // // console.log(asynchronous());    // promise qaytaradi.
// // asynchronous()
// //     .then((res) => {
// //         console.log(res);
// //     })

// // // synchronous function:
// // function synchronous() {
// //     let data = [];
// //     return "synchronous function";
// // }
// // console.log(synchronous());



const wrapperEl = document.querySelector(".wrapper")
const API_URL = "https://jsonplaceholder.typicode.com/posts"

function renderCard(data){
    const fragment = document.createDocumentFragment()
    data.forEach((post)=>{
        let card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <button>learn more</button>
        `
        fragment.appendChild(card)
    })
    wrapperEl.appendChild(fragment)
}


async function fetchData(){
    try{
        const response = await fetch(API_URL)
        const promise = response.json() 
        promise
            .then(res => {
                renderCard(res);
            })
            .catch(err => {
                console.log(err);
            })
    }catch(err){
        console.error(err);
    }
}

window.onload = ()=>{
    fetchData()
}






