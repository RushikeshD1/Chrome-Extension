
let body = document.querySelector("body");

let btnQuerious = document.createElement('button');
btnQuerious.setAttribute("id", "btnQuerious");

const speechRecognition = new webkitSpeechRecognition();
speechRecognition.continuous = true;
speechRecognition.interimResults = true;
speechRecognition.language = "en-us"

let transcript = "";
speechRecognition.onresult = function(event){
    transcript = "";
    // for(i=0; i<event.results.length; i++){
    //     transcript += event.results[i][0].transcript;
    // }
    event.results.forEach(result => {
        transcript += result[0].transcript;
    });
}

const doSomeThing = () => {
    if(btnQuerious.hasAttribute('listening') === false){
        btnQuerious.setAttribute('listening',true);
        speechRecognition.start();
    }else{
        btnQuerious.removeAttribute('listening',false);
        speechRecognition.stop();

        const myPopup = new Popup({
            id: "my-popup",
            title: "Here what you say:",
            content: transcript
        });
        myPopup.show();
    }
}

btnQuerious.addEventListener('click', doSomeThing);

const handledKbd = (event) => {    

    if(event.ctrlKey && event.shiftKey && event.code === 'KeyQ'){
        btnQuerious.click();
    }
}

document.addEventListener("keypress", handledKbd)

body.appendChild(btnQuerious);



