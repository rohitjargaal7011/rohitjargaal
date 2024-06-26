let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let skills = document.querySelector(".skills");
let experience = document.querySelector(".experience");
let educations = document.querySelector(".educations");
let bar = document.querySelector(".fa-bars");
let ul = document.querySelector("ul");
let contentbox = document.querySelector(".contentbox");


btn1.addEventListener("click",()=>{
        if(skills.style.display === "none" || skills.style.display === ""){
            skills.style.display = "block";
            educations.style.display = "none";
            experience.style.display = "none";
            btn1.style.borderBottom = "5px solid #fca311";
            btn2.style.borderBottom = "none";
            btn3.style.borderBottom = "none";
        }
})
btn2.addEventListener("click",()=>{
    if(experience.style.display === "none" || experience.style.display === ""){
        experience.style.display = "block";
        skills.style.display = "none";
        educations.style.display = "none";
        btn2.style.borderBottom = "5px solid #fca311";
        btn1.style.borderBottom = "none";
        btn3.style.borderBottom = "none";
    }
})
btn3.addEventListener("click",()=>{
    if(educations.style.display === "none" || educations.style.display === ""){
        educations.style.display = "block";
        skills.style.display = "none";
        experience.style.display = "none";
        btn3.style.borderBottom = "5px solid  #fca311";
        btn1.style.borderBottom = "none";
        btn2.style.borderBottom = "none";
    }
})


let createaccount = document.querySelector(".createaccount");
let passwordcontainer = document.querySelector(".password-container");
let h10 = document.querySelector("h10");
createaccount.addEventListener("click",()=>{
    if(h10.style.innerText === "LOGIN"){
        h10.style.innerText = "SIGNUP";
    }else{
        h10.style.innerText = "LOGIN";
    }
})


