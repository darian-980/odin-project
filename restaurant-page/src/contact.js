function contact() {
    const containerDiv = document.getElementById(`container`); // we have to regrab the containerDiv here because home.js doesn't have access to that variable
    const lowerMain = document.createElement("div");
    lowerMain.setAttribute("id", "lower-main");
    containerDiv.appendChild(lowerMain);

    const specialH1 = document.createElement("p");
    specialH1.setAttribute("class", "special-H1");
    specialH1.textContent = "Contact Us";
    lowerMain.appendChild(specialH1);

    const specialP = document.createElement("p");
    specialP.setAttribute("class", "special-p");
    specialP.textContent = "We value your feedback and are always looking to enhance our seafood restaurant to better serve you! Whether it's a comment about your dining experience or a creative suggestion for new menu items, we’d love to hear your thoughts. Share your ideas through our Contact Us page, and help us make every visit even more delightful. Your input is key to our growth!";
    lowerMain.appendChild(specialP);

    const contactFlex = document.createElement("div");
    contactFlex.setAttribute("class", "contactCards");
    lowerMain.appendChild(contactFlex);

    const contact1 = document.createElement("div");
    contact1.setAttribute("class", "contactItem");
    contact1.textContent = "Email: RosySeafood@email.ca";
    contactFlex.appendChild(contact1);

    const contact2 = document.createElement("div");
    contact2.setAttribute("class", "contactItem");
    contact2.textContent = "Phone: 1234-555-9034";
    contactFlex.appendChild(contact2);

    const week1 = document.createElement("div");
    week1.setAttribute("class", "weekItem");
    week1.textContent = "Monday: 11 AM - 9 PM\r\n";
    week1.textContent += "Tuesday: 11 AM - 9 PM\r\n";
    week1.textContent += "Wednesday: 11 AM - 9 PM\r\n";
    week1.textContent += "Thursday: 11 AM - 9 PM\r\n";
    week1.textContent += "Friday: 11 AM - 10 PM\r\n";
    week1.textContent += "Saturday: 11 AM - 10 PM\r\n";
    week1.textContent += "Sunday: 12 PM - 8 PM\r\n";
    week1.textContent += "Join us for fresh seafood all week!";
    contactFlex.appendChild(week1);
}


export default contact;