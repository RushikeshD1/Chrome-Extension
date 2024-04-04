let ulHeader = document.querySelector("ul.global-nav__primary-items");
let liViewPosts = document.createElement("li");
liViewPosts.classList.add("global-nav__primary-item");

let aliViewPosts = document.createElement("a");
aliViewPosts.classList.add(
  "app-aware-link",
  "global-nav__primary-link--active",
  "global-nav__primary-link"
);
aliViewPosts.setAttribute("target", "_blank");
aliViewPosts.setAttribute("href", "https://www.linkedin.com/my-items/");



// let aNetworkView = document.querySelector(".global-nav__primary-item .global-nav__primary-link");
// if (aNetworkView) {
//   aNetworkView.setAttribute("target", "_blank");
//   aNetworkView.setAttribute("href", "https://www.linkedin.com/mynetwork/");
// } 

// let aJobsView = document.querySelector(
//   ".app-aware-link"
// );
// aJobsView.setAttribute("target", "_blank");
// aJobsView.setAttribute("href", "https://www.linkedin.com/jobs/?=");

// let aMessagingView = document.querySelector(
//   ".app-aware-link"
// );
// aMessagingView.setAttribute("target", "_blank");
// aMessagingView.setAttribute(
//   "href",
//   "https://www.linkedin.com/messaging/thread/2-M2Q1NTVjNTQtYWE0ZC00M2FkLWI0YTQtMjc4ZGQzODlkNDI3XzAxMw==/"
// );

// let aNotificationView = document.querySelector(
//   ".app-aware-link"
// );
// aNotificationView.setAttribute("target", "_blank");
// aNotificationView.setAttribute(
//   "href",
//   "https://www.linkedin.com/notifications/?="
// );

// let aNetworkView = document.querySelector("a[href='https://www.linkedin.com/mynetwork/']");
// if (aNetworkView) {
//   aNetworkView.setAttribute("target", "_blank");
//   aNetworkView.setAttribute("href", "https://www.linkedin.com/mynetwork/");
// } 

// let aNetworkView = document.querySelector("a[href='https://www.linkedin.com/mynetwork/']");

// // Check if aNetworkView is not null before setting attributes and attaching event listener
// if (aNetworkView) {
//   // Set attributes to open link in a new tab
//   aNetworkView.setAttribute("target", "_blank");
//   aNetworkView.setAttribute("href", "https://www.linkedin.com/mynetwork/");
  
//   // Attach event listener to handle click event
//   aNetworkView.addEventListener("click", function(event) {
//     event.preventDefault(); // Prevent default action
//     window.open(aNetworkView.getAttribute("href"), '_blank'); // Open link in a new tab
//   });
// } 

// let aJobsView = document.querySelector("a[href='https://www.linkedin.com/jobs/']");
// if (aJobsView) {
//   aJobsView.setAttribute("target", "_blank");
//   aJobsView.setAttribute("href", "https://www.linkedin.com/jobs/?=");
// }

// let aMessagingView = document.querySelector("a[href='https://www.linkedin.com/messaging/thread/2-M2Q1NTVjNTQtYWE0ZC00M2FkLWI0YTQtMjc4ZGQzODlkNDI3XzAxMw==/']");
// if (aMessagingView) {
//   aMessagingView.setAttribute("target", "_blank");
//   aMessagingView.setAttribute("href", "https://www.linkedin.com/messaging/thread/2-M2Q1NTVjNTQtYWE0ZC00M2FkLWI0YTQtMjc4ZGQzODlkNDI3XzAxMw==/");
// }

// let aNotificationView = document.querySelector("a[href='https://www.linkedin.com/notifications/']");
// if (aNotificationView) {
//   aNotificationView.setAttribute("target", "_blank");
//   aNotificationView.setAttribute("href", "https://www.linkedin.com/notifications/?=");
// }


function openHomePage() {
  let homeLink = document.querySelector("a[href*='/feed']");
  if (homeLink) {
    homeLink.click();
  }
}

function openMyNetworkPage() {
  let navLinks = document.querySelectorAll("ul.global-nav__primary-items a");
  navLinks.forEach(link => {
    if (link.textContent.trim().toLowerCase() === "my network") {
      link.click();
      return;
    }
  });
}

function openJobsPage() {
  let jobsLink = document.querySelector("a[href='https://www.linkedin.com/jobs/?']");
  if (jobsLink) {
      jobsLink.click();
  }
}

function openMessagePage() {
  let messagesLink = document.querySelector("a.app-aware-link.global-nav__primary-link[href*='/messaging']");

  if (messagesLink) {
    messagesLink.click();
  }
}

function openNotifications() {
  let notificationLink = document.querySelector("a[href*='/notifications']");
  if (notificationLink) {    
    notificationLink.click();
  }
}

function addIconToPost(postElement) {
    let controlMenu = postElement.querySelector(".feed-shared-control-menu.feed-shared-update-v2__control-menu");
    if (controlMenu) {
        let savedPostIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        savedPostIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        savedPostIcon.setAttribute("viewBox", "0 0 24 24");
        savedPostIcon.setAttribute("fill", "rgba(0, 0, 0, 1)");    
        savedPostIcon.setAttribute("width", "20");
        savedPostIcon.setAttribute("height", "30");
        savedPostIcon.setAttribute("focusable", "false");
        savedPostIcon.style.opacity = "0.7";
        savedPostIcon.innerHTML = `<path d="M18 2H6c-1.103 0-2 .897-2 2v18l8-4.572L20 22V4c0-1.103-.897-2-2-2zm0 16.553-6-3.428-6 3.428V4h12v14.553z"></path>`;

        let firstChild = controlMenu.firstElementChild;
        controlMenu.insertBefore(savedPostIcon, firstChild);
    }
}

function handleMutations(mutationsList, observer) {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1 && node.matches('.feed-shared-update-v2')) {
                    addIconToPost(node);
                }
            });
        }
    }
}
// Create a MutationObserver instance
let observer = new MutationObserver(handleMutations);

// Start observing changes to the DOM subtree
observer.observe(document.body, { childList: true, subtree: true });

// Add icon to existing posts
document.querySelectorAll('.feed-shared-update-v2').forEach(postElement => {
    addIconToPost(postElement);
});

// const savedPostDirectly = () => {

// }

// savedPostIconMenu.addEventListener("click", savedPostDirectly);

let divOuter = document.createElement("div");
divOuter.classList.add("ivm-image-view-model", "global-nav__icon-ivm");

let divInner = document.createElement("div");
divInner.classList.add("ivm-view-attr__img-wrapper", "display-flex");

let liIcon = document.createElement("li-icon");
liIcon.setAttribute("aria-hidden", "true");
liIcon.setAttribute("type", "job");
liIcon.setAttribute("class", "ivm-view-attr__icon");
liIcon.setAttribute("size", "large");

let svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svgElement.setAttribute("viewBox", "0 0 24 24");
svgElement.setAttribute("data-supported-dps", "24x24");
svgElement.setAttribute("fill", "currentColor");
svgElement.setAttribute("class", "mercado-match");
svgElement.setAttribute("width", "24");
svgElement.setAttribute("height", "24");
svgElement.setAttribute("focusable", "false");

svgElement.innerHTML =
  '<path d="M5 21h14a2 2 0 0 0 2-2V8l-5-5H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2zM7 5h4v2h2V5h2v4H7V5zm0 8h10v6H7v-6z"></path>';

liIcon.appendChild(svgElement);

divInner.appendChild(liIcon);
divOuter.appendChild(divInner);
aliViewPosts.appendChild(divOuter);

let spanViewPosts = document.createElement("span");
spanViewPosts.classList.add(
  "t-12",
  "break-words",
  "block",
  "t-black--light",
  "t-normal",
  "global-nav__primary-link-text"
);
spanViewPosts.innerText = "saved";

const handledKbd = (event) => {
  if (event.ctrlKey && event.shiftKey && event.code === "KeyS") {
    aliViewPosts.click();
  }
};
document.addEventListener("keypress", handledKbd);

const speechRecognition = new webkitSpeechRecognition();
speechRecognition.continuous = true;
speechRecognition.language = "en-us";
speechRecognition.start();

speechRecognition.onresult = function (event) {
  let transcript = event.results[event.resultIndex][0].transcript;
  console.log(transcript)

  console.log(event);

  if (transcript.trim().toLowerCase().includes("open saved")) {
    console.log("saved post");
    aliViewPosts.click();
  }

  
  if (transcript.trim().toLowerCase().includes("open home")) {
    
    openHomePage();
    }
  
  if (transcript.trim().toLowerCase().includes("open my network")) {
  console.log("my network");
  openMyNetworkPage();
  } 

if (transcript.includes("jobs")) {
  console.log("jobs");
    openJobsPage();
}

if (transcript.trim().toLowerCase().includes("open message")) {
  
  openMessagePage();
  } 

  if (transcript.trim().toLowerCase().includes("open notification")) {
  
    openNotifications();
    }

}

speechRecognition.onend = () => {
  speechRecognition.start();
}

aliViewPosts.appendChild(spanViewPosts);
liViewPosts.appendChild(aliViewPosts);

ulHeader.appendChild(liViewPosts);