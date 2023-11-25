/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Stephen T. Burgess",
    photo: "images/me.jpg",
    favoriteFoods: ["Fruit & yogurt", "Hawaiian pizza", "Pea soup"],
    hobbies: ["Financial markets", "Playing chess", "Internet learning"],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Ukraine",
        length: "2 Years"
    }
);
myProfile.placesLived.push(
    {
        place: "Austria",
        length: "2 Years"
    }
);
myProfile.placesLived.push(
    {
        place: "Canada",
        length: "31 Years"
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
        let li = document.createElement("li");
        li.textContent = food;
        document.querySelector("#favorite-foods").appendChild(li);
    }
);

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
        let li = document.createElement("li");
        li.textContent = hobby;
        document.querySelector("#hobbies").appendChild(li);
    }
);

/* Places Lived DataList */
myProfile.placesLived.forEach(placeLived => {
        let dt = document.createElement("dt");
        dt.textContent = placeLived.place;
        let dd = document.createElement("dd");
        dd.textContent = placeLived.length;
        document.querySelector("#places-lived").append(dt);
        document.querySelector("#places-lived").append(dd);
    }
);

