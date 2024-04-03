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

let aHomeView = document.querySelector(
  ".app-aware-link",
  ".global-nav__primary-link"
);
aHomeView.setAttribute("target", "_blank");
aHomeView.setAttribute(
  "href",
  "https://www.linkedin.com/feed/?doFeedRefresh=true&nis=true&"
);

let aNetworkView = document.querySelector(
  ".app-aware-link",
  ".global-nav__primary-link"
);
aNetworkView.setAttribute("target", "_blank");
aNetworkView.setAttribute("href", "https://www.linkedin.com/mynetwork/");

let aJobsView = document.querySelector(
  ".app-aware-link",
  ".global-nav__primary-link"
);
aJobsView.setAttribute("target", "_blank");
aJobsView.setAttribute("href", "https://www.linkedin.com/jobs/?=");

let aMessagingView = document.querySelector(
  ".app-aware-link",
  ".global-nav__primary-link"
);
aMessagingView.setAttribute("target", "_blank");
aMessagingView.setAttribute(
  "href",
  "https://www.linkedin.com/messaging/thread/2-M2Q1NTVjNTQtYWE0ZC00M2FkLWI0YTQtMjc4ZGQzODlkNDI3XzAxMw==/"
);

let aNotificationView = document.querySelector(
  ".app-aware-link",
  ".global-nav__primary-link"
);
aNotificationView.setAttribute("target", "_blank");
aNotificationView.setAttribute(
  "href",
  "https://www.linkedin.com/notifications/?="
);


// let savedPostIconMenus = document.querySelectorAll(
//     ".feed-shared-control-menu.feed-shared-update-v2__control-menu.feed-shared-update-v2--with-hide-post"
//   );
  
//   savedPostIconMenus.forEach(savedPostIconMenu => {
//     let savedPostIcon = document.createElementNS(
//       "http://www.w3.org/2000/svg",
//       "svg"
//     );
//     savedPostIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    
//     savedPostIcon.setAttribute("viewBox", "0 0 24 24");
//     savedPostIcon.setAttribute("fill", "rgba(0, 0, 0, 1)");
    
//     savedPostIcon.setAttribute("width", "20");
//     savedPostIcon.setAttribute("height", "30");
//     savedPostIcon.setAttribute("focusable", "false");
//     savedPostIcon.style.opacity = "0.7";
//     savedPostIcon.innerHTML = `<path d="M18 2H6c-1.103 0-2 .897-2 2v18l8-4.572L20 22V4c0-1.103-.897-2-2-2zm0 16.553-6-3.428-6 3.428V4h12v14.553z"></path>`;
  
//     let firstChild = savedPostIconMenu.firstElementChild;
//     savedPostIconMenu.insertBefore(savedPostIcon, firstChild);
//   });

  let savedPostIconMenus = document.querySelectorAll(".feed-shared-control-menu.feed-shared-update-v2__control-menu.feed-shared-update-v2--with-hide-post");

  savedPostIconMenus.forEach(savedPostIconMenu => {
      let savedPostIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      savedPostIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      savedPostIcon.setAttribute("class", "artdeco-button__icon mercado-match");
      savedPostIcon.setAttribute("viewBox", "0 0 24 24");
      savedPostIcon.setAttribute("fill", "rgba(0, 0, 0, 1)");
      savedPostIcon.setAttribute("width", "20");
      savedPostIcon.setAttribute("height", "30");
      savedPostIcon.setAttribute("focusable", "false");
      savedPostIcon.style.opacity = "0.7";
      savedPostIcon.innerHTML = `<path d="M18 2H6c-1.103 0-2 .897-2 2v18l8-4.572L20 22V4c0-1.103-.897-2-2-2zm0 16.553-6-3.428-6 3.428V4h12v14.553z"></path>`;
  
      let triggerButton = savedPostIconMenu.querySelector(".feed-shared-control-menu__trigger");
      
    savedPostIconMenu.insertBefore(savedPostIcon, triggerButton);
      
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

  console.log(event);

  if (transcript.trim().toLowerCase().includes("open saved post")) {
    aliViewPosts.click();
  }

  if (transcript.trim().toLowerCase().includes("open home")) {
    aHomeView.click();
  }

  if (transcript.trim().toLowerCase().includes("open network")) {
    aNetworkView.click();
  }

  if (transcript.trim().toLowerCase().includes("open jobs")) {
    aJobsView.click();
  }

  if (transcript.trim().toLowerCase().includes("open messaging")) {
    aMessagingView.click();
  }

  if (transcript.trim().toLowerCase().includes("open notifications")) {
    aNotificationView.click();
  }
};

aHomeView.appendChild(spanViewPosts);
aNetworkView.appendChild(spanViewPosts);
aJobsView.appendChild(spanViewPosts);
aMessagingView.appendChild(spanViewPosts);
aNotificationView.appendChild(spanViewPosts);

aliViewPosts.appendChild(spanViewPosts);
liViewPosts.appendChild(aliViewPosts);

ulHeader.appendChild(liViewPosts);
