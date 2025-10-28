function menu() {
    const containerDiv = document.getElementById(`container`); // we have to regrab the containerDiv here because home.js doesn't have access to that variable
    const lowerMain = document.createElement("div");
    lowerMain.setAttribute("id", "lower-main");
    containerDiv.appendChild(lowerMain);

    const specialH1 = document.createElement("p");
    specialH1.setAttribute("class", "special-H1");
    specialH1.textContent = "Menu";
    lowerMain.appendChild(specialH1);

    const menuFlex = document.createElement("div");
    menuFlex.setAttribute("class", "menuCards");
    lowerMain.appendChild(menuFlex);

    ///////////////////////////////

    const item1 = document.createElement("div");
    item1.setAttribute("class", "foodItem");
    menuFlex.appendChild(item1);

    const foodName1 = document.createElement("div");
    foodName1.setAttribute("class", "foodName");
    foodName1.textContent = "Garlic Butter Shrimp Skewers";
    item1.appendChild(foodName1);

    const foodDesc1 = document.createElement("div");
    foodDesc1.setAttribute("class", "foodDesc");
    foodDesc1.textContent = "Plump jumbo shrimp are lightly seasoned, skewered, and grilled, then basted with a rich garlic butter sauce. Served with a side of lemon wedges and fresh parsley, these skewers offer a burst of savory, tangy flavor perfect for a light yet satisfying meal.";
    item1.appendChild(foodDesc1);

    const foodIngred1 = document.createElement("div");
    foodIngred1.setAttribute("class", "foodIngred");
    foodIngred1.textContent = "Jumbo shrimp, unsalted butter, fresh garlic, lemon juice, parsley, salt, black pepper, olive oil.";
    item1.appendChild(foodIngred1);

    ///////////////////////////////

    const item2 = document.createElement("div");
    item2.setAttribute("class", "foodItem");
    menuFlex.appendChild(item2);

    const foodName2 = document.createElement("div");
    foodName2.setAttribute("class", "foodName");
    foodName2.textContent = "Classic Fish Tacos"
    item2.appendChild(foodName2);

    const foodDesc2 = document.createElement("div");
    foodDesc2.setAttribute("class", "foodDesc");
    foodDesc2.textContent = "Tender, flaky cod is lightly spiced and pan-seared, then nestled in warm corn tortillas. Topped with crisp cabbage slaw, creamy avocado, and a zesty lime-cilantro drizzle, these tacos deliver a fresh, coastal vibe in every bite."
    item2.appendChild(foodDesc2);

    const foodIngred2 = document.createElement("div");
    foodIngred2.setAttribute("class", "foodIngred");
    foodIngred2.textContent = "Cod fillets, corn tortillas, cabbage slaw, lime juice, cilantro, avocado, chili powder, cumin, salt, pepper, sour cream.";
    item2.appendChild(foodIngred2);

    ////////////////////////////////

    const item3 = document.createElement("div");
    item3.setAttribute("class", "foodItem");
    menuFlex.appendChild(item3);

    const foodName3 = document.createElement("div");
    foodName3.setAttribute("class", "foodName");
    foodName3.textContent = "Clam Chowder Bowl"
    item3.appendChild(foodName3);

    const foodDesc3 = document.createElement("div");
    foodDesc3.setAttribute("class", "foodDesc");
    foodDesc3.textContent = "Our creamy New England-style clam chowder is brimming with tender clams, hearty potatoes, and aromatic herbs in a velvety broth. Served piping hot with a side of crispy oyster crackers, it’s a comforting, soul-warming classic."
    item3.appendChild(foodDesc3);

    const foodIngred3 = document.createElement("div");
    foodIngred3.setAttribute("class", "foodIngred");
    foodIngred3.textContent = "Fresh clams, potatoes, onions, celery, heavy cream, butter, thyme, bay leaf, salt, white pepper, oyster crackers.";
    item3.appendChild(foodIngred3);
}

export default menu;