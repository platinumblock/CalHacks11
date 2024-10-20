const restaurants = [
    ["Bonchon", 0.03, 
        {
            "Chicken Wings":17.99,
            "Chicken Drumsticks":16.99,
            "Chicken Strips":17.99,
            "French Fries":5.99,
            "Edamame":7.49,
            "Fried Rice":13.99,
            "Steamed Rice":2.99
        }, 4.2
    ],
    ["The Melt", 0.4, 
        {
            "Cheeseburger":10.49, 
            "Sandwich":8.99,
            "Mac and Cheese":8.99,
            "French Fries":3.99,
            "Tomato Soup":4.79,
            "Salad":7.99,
            "Milkshake":5.99
        }, 4.0
    ],
    ["SF Pizza", 0.3,
        {
            "Chicken Wings":10.99,
            "Pizza":10.99,
            "Salad":10.99
        }, 3.1
    ],
    ["Blondie's Pizza", 0.4,
        {
            "Pizza":13.00,
            "Pasta":12.99,
            "Breadsticks":9.99,
            "Chicken Wings":9.99,
            "Salad":8.99
        }, 4.8
    ],
    ["Abe's Pizza", 0.4,
        {
            "Pizza":13.00,
            "Pizza Slice":6.99,
            "Salad":8.99,
            "Chicken Wings":9.99,
        }, 4.9
    ],
    ["Milan Pizza", 1.0,
        {
            "Pizza":16.70,
            "Pizza Slice":4.99,
            "Lasagna":13.79,
            "French Fries":5.00,
            "Chicken Wings":7.99,
            "Breadsticks":10.00,
            "Salad":7.50,
            "Calzone":21.90,
            "Sandwich":12.00,
        }, 3.6
    ],
    ["California Pizza Kitchen", 0.3,
        {
            "Pizza":16.99,
            "Salad":15.99,
            "Mac and Cheese":15.99,
            "Pasta":17.99,
            "Burger":18.49,
            "Dumplings":11.99,
            "Egg Rolls":14.99,
            "Tomato Soup":10.49,
            "Sandwich":17.74
        }, 3.5
    ],
    ["SF Chickenbox", 1.5,
        {
            "Fries":4.25,
            "Sandwich":10.50,
            "Fried Chicken Box":15.00,
            "Steamed Rice":3.50,
            "Salad":6.00
        }, 4.1
    ],
    ["The Bird", 0.4,
        {
            "Sandwich":10.25,
            "Fried Chicken":8.00,
            "Chicken Wings":8.00,
            "Salad":7.75,
            "Curly Fries":4.00
        }, 4.3
    ],
    ["Krispy Krunchy Chicken", 0.4,
        {
            "Chicken Wings":10.99,
            "Sandwich":6.99,
            "French Fries":5.99,
            "Mashed Potatoes":5.99,
            "Mac and Cheese":5.99
        }, 2.3
    ],
    ["Taqueria Castillo", 0.7,
        {
            "Burrito":10.60,
            "Taco":3.69,
            "Quesadilla":9.25,
            "Nachos":8.75,
            "Torta":9.67
        }, 3.7
    ],
    ["Buena Vida Cantina", 0.3,
        {
            "Salad":16.00,
            "Taco":5.00,
            "Burrito":18.00,
            "Ramen":26.00
        }, 4.5
    ],
    ["Chipotle", 0.015,
        {
            "Burrito":11.40,
            "Tacos":3.80,
            "Quesadilla":11.95,
            "Salad":11.40
        }, 4.0
    ],
    ["Tropisueno", 0.1,
        {
            "Ceviche":11.45,
            "Salad":12.50,
            "Nachos":12.95,
            "Taco":5.98,
            "Burrito":10.45,
            "Torta":14.10,
            "Quesadilla":10.50
        }, 3.5
    ],
    ["Taco Bell", 1.1,
        {
            "Burrito":1.99,
            "Taco":1.79,
            "Quesadilla":5.79,
            "Nachos":2.59
        }, 5.0
    ]
]




var maxPrice = 99999;
var maxDistance = 99999;
var minRating = 0;


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
async function search(restaurants, desired_food) {
    var old = document.getElementsByClassName("place");
    var l = old.length;
    for(var i = 0; i < l; i++){
        old[0].remove();
    }
    var names = [];
    var prices = [];
    var distances = [];
    var ratings = [];
    for (var i = 0; i < restaurants.length; i++) {
        for (const [key, value] of Object.entries(restaurants[i][2])) {
            if (key.toLowerCase().includes(desired_food) && !(restaurants[i][0] in names) && value < maxPrice && restaurants[i][1] < maxDistance && restaurants[i][3] > minRating) {
                names.push(restaurants[i][0])
                prices.push(value);
                distances.push(restaurants[i][1]);
                ratings.push(restaurants[i][3]);
            }
        }
    }
    if(names.length > 0){
        document.getElementById("noResults").style.display = "none";
    }else{
        document.getElementById("noResults").style.display = "block";
    }
    for(var i = 0; i < names.length; i++){
        var place = document.createElement("div");
        place.classList.add("place");
        place.style.top = (40 + i * 20) + "%";
        var image = document.createElement("img");
        image.classList.add("placeImage");
        image.src = "bonchon.jpg";
        var name = document.createElement("div");
        name.classList.add("placeName");
        name.innerHTML = names[i];
        var stats = document.createElement("div");
        stats.classList.add("placeStats");
        stats.innerHTML = "<span class='price'>$" + prices[i].toFixed(2) + "</span> <span class='distance'>" + distances[i] + "mi</span> <span class='reviews'>" + ratings[i] + "</span>";
        place.appendChild(image);
        place.appendChild(name);
        place.appendChild(stats);
        document.body.appendChild(place);
        await new Promise(r => setTimeout(r, 100));
    }
    
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