import "./styles.css";
import fishImage from "./fish-logo-smaller.png";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

// import { container } from "webpack";


function switchMenu() {
    const delLowerMain = document.getElementById("lower-main"); // grab lower-main div so we can delete it
    delLowerMain.remove(); // delete lower main so we can add a new one
    console.log("removed lower-main div");
    menu();
};

function switchHome() {
    const delLowerMain = document.getElementById("lower-main"); // grab lower-main div so we can delete it
    delLowerMain.remove(); // delete lower main so we can add a new one
    console.log("removed lower-main div");
    home();
};

function switchContact() {
    const delLowerMain = document.getElementById("lower-main"); // grab lower-main div so we can delete it
    delLowerMain.remove(); // delete lower main so we can add a new one
    console.log("removed lower-main div");
    contact();
};

const contentDiv = document.getElementById(`content`);

const containerDiv = document.createElement("div");
containerDiv.setAttribute("id", "container");
contentDiv.appendChild(containerDiv);

const navMenu = document.createElement("div");
navMenu.setAttribute("id", "nav-menu");
containerDiv.appendChild(navMenu);

const image = document.createElement("img");
image.src = fishImage;
image.setAttribute("class", "fish-image");
navMenu.appendChild(image);

const fakeFishSlot = document.createElement("div"); // the fish image is absolute positioned so this is used to create fake space
fakeFishSlot.setAttribute("class", "fake-slot-fish");
navMenu.appendChild(fakeFishSlot);

const homeButton = document.createElement("button");
homeButton.setAttribute("class", "nav-button");
homeButton.addEventListener("click", function () {
    switchHome();
});
homeButton.textContent = "Home";
navMenu.appendChild(homeButton);

const menuButton = document.createElement("button");
menuButton.setAttribute("class", "nav-button");
menuButton.addEventListener("click", function () {
    switchMenu();
});
menuButton.textContent = "Menu";
navMenu.appendChild(menuButton);

const contactButton = document.createElement("button");
contactButton.setAttribute("class", "nav-button");
contactButton.addEventListener("click", function () {
    switchContact();
});
contactButton.textContent = "Contact Us";
navMenu.appendChild(contactButton);

const aboutButton = document.createElement("button");
aboutButton.setAttribute("class", "nav-button");
aboutButton.textContent = "About";
navMenu.appendChild(aboutButton);

const logInButton = document.createElement("p");
logInButton.setAttribute("class", "right-align");
logInButton.textContent = "Log in";
navMenu.appendChild(logInButton);

const cartButton = document.createElement("p");
cartButton.textContent = "Cart";
navMenu.appendChild(cartButton);


const navDivider = document.createElement("div");
navDivider.setAttribute("id", "nav-divider");
containerDiv.appendChild(navDivider);

const findLocationMsg = document.createElement("p");
findLocationMsg.setAttribute("class", "find-location-msg");
findLocationMsg.textContent = "Find A Location Near You";
navDivider.appendChild(findLocationMsg);

(function(){
    console.log(home);
    home();
})();





console.log("server is running..");