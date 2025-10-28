import foodImageImport1 from "./home-food-images/edward-howell-TACZ-gz4li4-unsplash.jpg";
import foodImageImport2 from "./home-food-images/fernando-andrade-TrD7yA09Vg8-unsplash.jpg";
import foodImageImport3 from "./home-food-images/vino-li-TqOEGdRNowY-unsplash.jpg";


function home() {
    const containerDiv = document.getElementById(`container`); // we have to regrab the containerDiv here because home.js doesn't have access to that variable
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

    //////////////////////

    const bg1 = document.createElement("div");
    bg1.setAttribute("class", "background-color1");
    imgGrid.appendChild(bg1);

    const foodImg1 = document.createElement("img");
    foodImg1.src = foodImageImport1;
    bg1.appendChild(foodImg1);

    ////////

    const bg2 = document.createElement("div");
    bg2.setAttribute("class", "background-color2");
    imgGrid.appendChild(bg2);

    const foodImg2 = document.createElement("img");
    foodImg2.src = foodImageImport2;
    bg2.appendChild(foodImg2);

    ////////

    const bg3 = document.createElement("div");
    bg3.setAttribute("class", "background-color3");
    imgGrid.appendChild(bg3);

    const foodImg3 = document.createElement("img");
    foodImg3.src = foodImageImport3;
    bg3.appendChild(foodImg3);

    ////////
}

export default home;