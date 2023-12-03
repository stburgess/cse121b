/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples")
var templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3")
        h3.textContent = temple.templeName;
        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.location;
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = ``;
}

/* sortBy Function */
const sortBy = (temples) => {
    reset();
    let filter = document.querySelector("#sortBy").value;
    switch (filter) {
        case "utah":
            displayTemples(templeList.filter(temple => temple.location.indexOf("Utah") != -1));
            break;
        case "notutah":
            displayTemples(templeList.filter(temple => temple.location.indexOf("Utah") == -1));
            break;
        case "older":
            displayTemples(templeList.filter(temple => parseInt(temple.dedicated.substring(0, 4)) < 1950));
            break;
        case "all":
            displayTemples(templeList);
            break;
    }
}

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)});

getTemples();
