let ulHeader = document.querySelector("ul.global-nav__primary-items");

let liViewPosts = document.createElement('li');

liViewPosts.classList.add("global-nav__primary-item");

let aliViewPosts = document.createElement('a');

aliViewPosts.classList.add("app-aware-link", "global-nav__primary-link--active", "global-nav__primary-link")
aliViewPosts.setAttribute('target', "_blank");
aliViewPosts.setAttribute('href', "https://www.linkedin.com/my-items/");

let divOuter = document.createElement("div");
divOuter.classList.add("ivm-image-view-model", "global-nav__icon-ivm");


let divInner = document.createElement("div");
divInner.classList.add("ivm-view-attr__img-wrapper", "display-flex")

let logoSaved = document.createElement("img");
logoSaved.setAttribute("src", chrome.runtime.getURL("images/saved.png"))
logoSaved.setAttribute("id", "savedImg")

divInner.appendChild(logoSaved);
divOuter.appendChild(divInner);
aliViewPosts.appendChild(divOuter);

let spanViewPosts = document.createElement("span");
spanViewPosts.classList.add("t-12", "break-words", "block", "t-black--light", "t-normal","global-nav__primary-link-text");
spanViewPosts.innerHTML = "saved";

const handledKbd = (event) => {    
    if(event.ctrlKey && event.shiftKey && event.code === 'KeyS'){
        aliViewPosts.click();
    }
}
document.addEventListener("keypress", handledKbd)

const speechRecognition = new webkitSpeechRecognition();
speechRecognition.continuous = true;
speechRecognition.language = "en-us";
speechRecognition.start();

speechRecognition.onresult = function(event){
    let transcript = event.results[event.resultIndex][0].transcript;

    console.log(event);

    if(transcript.trim().toLowerCase().includes('open post')){
        aliViewPosts.click();
    }
}


aliViewPosts.appendChild(spanViewPosts);
liViewPosts.appendChild(aliViewPosts);

ulHeader.appendChild(liViewPosts);