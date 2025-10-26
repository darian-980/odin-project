import "./styles.css";
import fishImage from "./fish-logo-smaller.png";
// import { container } from "webpack";

// const navMenu = document.getElementById(`nav-menu`);


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
homeButton.textContent = "Home";
navMenu.appendChild(homeButton);

const menuButton = document.createElement("button");
menuButton.setAttribute("class", "nav-button");
menuButton.textContent = "Menu";
navMenu.appendChild(menuButton);

const contactButton = document.createElement("button");
contactButton.setAttribute("class", "nav-button");
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


const lowerMain = document.createElement("div");
lowerMain.setAttribute("id", "lower-main");
containerDiv.appendChild(lowerMain);

const specialH1 = document.createElement("p");
specialH1.setAttribute("class", "special-H1");
specialH1.textContent = "Today's Special";
lowerMain.appendChild(specialH1);

const specialP = document.createElement("p");
specialP.setAttribute("class", "special-p");
specialP.textContent = "Today's special is a mouthwatering Grilled Lobster Tail Platter, featuring a succulent, buttery lobster tail grilled to perfection, served with a zesty lemon herb sauce. Accompanied by creamy garlic mashed potatoes and fresh, seasonal asparagus, this dish is a delightful blend of flavors that celebrates the ocean's finest. Available only today, come savor this coastal treat while it lasts!";
lowerMain.appendChild(specialP);

const imgGrid = document.createElement("div");
imgGrid.setAttribute("class", "img-grid");
lowerMain.appendChild(imgGrid);

const bg1 = document.createElement("div");
bg1.setAttribute("class", "background-color1");
imgGrid.appendChild(bg1);

const bg2 = document.createElement("div");
bg2.setAttribute("class", "background-color2");
imgGrid.appendChild(bg2);

const bg3 = document.createElement("div");
bg3.setAttribute("class", "background-color3");
imgGrid.appendChild(bg3);






console.log("server is running..");