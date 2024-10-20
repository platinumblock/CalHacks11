import {initializeApp} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import {getFirestore, collection, doc, getDocs, setDoc, deleteDoc} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js"
import * as cb from "https://platinumblock.github.io/chillbase/chillbase.js";
const firebaseConfig = {
    apiKey: "AIzaSyBWrUPErRuxZUH8ncvJyLQigIrWmGx1Fsw",
    authDomain: "calhacks11-f9794.firebaseapp.com",
    projectId: "calhacks11-f9794",
    storageBucket: "calhacks11-f9794.appspot.com",
    messagingSenderId: "552197134956",
    appId: "1:552197134956:web:93e1886e2d984e4f911649",
    measurementId: "G-243PWKYPT6"
};
cb.start(firebaseConfig);
var dat = await cb.getDocument("data", "fooddata");
const restaurants = JSON.parse(dat.data);



var maxPrice = 99999;
var maxDistance = 99999;
var minRating = 0;
var y = 0;


var params = {};
location.search.slice(1).split("&").forEach(function(pair) {
   pair = pair.split("=");
   params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
});
var item = params["item"];
if(item == "nothing"){
    document.getElementById("search2").value = "";
}else{
    document.getElementById("search2").value = item;
}
function enterSearch(){
    location.href = "search.html?item=" + document.getElementById("search2").value
}
document.getElementById("search2").addEventListener('keyup', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        enterSearch();
    }
});
var names = [];
var prices = [];
var distances = [];
var ratings = [];
var images = [];
async function search(restaurants, desired_food) {
    var old = document.getElementsByClassName("place");
    var l = old.length;
    for(var i = 0; i < l; i++){
        old[0].remove();
    }
    names = [];
    prices = [];
    distances = [];
    ratings = [];
    images = [];
    for (var i = 0; i < restaurants.length; i++) {
        for (const [key, value] of Object.entries(restaurants[i][2])) {
            if (key.toLowerCase().includes(desired_food) && !(names.includes(restaurants[i][0])) && value < maxPrice && restaurants[i][1] < maxDistance && restaurants[i][3] > minRating) {
                names.push(restaurants[i][0])
                prices.push(value);
                distances.push(restaurants[i][1]);
                ratings.push(restaurants[i][3]);
                images.push(restaurants[i][4]);
            }
        }
    }
    if(names.length > 0){
        document.getElementById("noResults").style.display = "none";
    }else{
        document.getElementById("noResults").style.display = "block";
    }
    var sorting = Array.from(Array(names.length).keys());
    sorting.sort(compare);
    for(var i = 0; i < names.length; i++){
        var place = document.createElement("button");
        place.classList.add("place");
        place.style.top = (40 + i * 23) + "%";
        place.setAttribute("onclick", "openRes(" + i + ")")
        var image = document.createElement("img");
        image.classList.add("placeImage");
        image.src = "images/" + images[sorting[i]];
        var name = document.createElement("div");
        name.classList.add("placeName");
        name.innerHTML = names[sorting[i]];
        var stats = document.createElement("div");
        stats.classList.add("placeStats");
        stats.innerHTML = "<span class='price'>$" + prices[sorting[i]].toFixed(2) + "</span> <span class='distance'>" + distances[sorting[i]] + "mi</span> <span class='reviews'>" + ratings[sorting[i]].toFixed(1) + "</span>";
        place.appendChild(image);
        place.appendChild(name);
        place.appendChild(stats);
        document.body.appendChild(place);
        await new Promise(r => setTimeout(r, 100));
    }
    
}
function compare(a, b){
    var scoreA = prices[a] * (1 + distances[a]) * (7 - ratings[a]);
    var scoreB = prices[b] * (1 + distances[b]) * (7 - ratings[b]);
    return scoreA - scoreB;
}
function openRes(k){
    document.getElementById("circle").style.display = "block";
    document.getElementById("circleBackground").style.display = "block";
    document.getElementById("circle").style.top = (-2 + k * 23) + "%";
    document.getElementById("circleBackground").style.top = (-2 + k * 23) + "%";
    document.getElementById("circle").style.animation = "expand 1s forwards";
    var name = document.getElementsByClassName("place")[k].children[1].innerHTML;
    for (var i = 0; i < restaurants.length; i++) {
        if(restaurants[i][0] === name){
            document.getElementById("circleName").innerHTML = restaurants[i][0]
            document.getElementById("circleCuisine").innerHTML = restaurants[i][5];
            document.getElementById("circleAddress").innerHTML = restaurants[i][6];
            document.getElementById("circleDescription").innerHTML = restaurants[i][7];
        }
    }
}
function hideCircle(){
    document.getElementById("circle").style.animation = "depand 1s forwards";
    setTimeout(() => {
        document.getElementById("circle").style.display = "none";
        document.getElementById("circleBackground").style.display = "none";
        document.getElementById("circle").style.animation = "none";
    }, 1000)
}
search(restaurants, item);
document.getElementById("priceFilter").onchange = (event) => {
    var inputText = event.target.value;
    if(inputText == "Under $5"){
        maxPrice = 5;
        search(restaurants, item);
    }else if (inputText == "Under $10"){
        maxPrice = 10;
        search(restaurants, item);
    }else if(inputText == "Under $20"){
        maxPrice = 20;
        search(restaurants, item);
    }else{
        maxPrice = 99999;
        search(restaurants, item);
    }
}
document.getElementById("distanceFilter").onchange = (event) => {
    var inputText = event.target.value;
    if(inputText == "Under 0.2mi"){
        maxDistance = 0.2;
        search(restaurants, item);
    }else if (inputText == "Under 0.5mi"){
        maxDistance = 0.5;
        search(restaurants, item);
    }else if(inputText == "Under 1.5mi"){
        maxDistance = 1.5;
        search(restaurants, item);
    }else{
        maxDistance = 99999;
        search(restaurants, item);
    }
}
document.getElementById("ratingsFilter").onchange = (event) => {
    var inputText = event.target.value;
    if(inputText == "Over 4.5"){
        minRating = 4.5;
        search(restaurants, item);
    }else if (inputText == "Over 4.0"){
        minRating = 4.0;
        search(restaurants, item);
    }else if(inputText == "Over 3.5"){
        minRating = 3.5;
        search(restaurants, item);
    }else{
        minRating = 0;
        search(restaurants, item);
    }
}
