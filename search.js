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
        }, 4.2, "bonchon.png", "Korean Food", "135 4th Street, San Francisco, CA", "Bonchon is famous for crunchy Korean Fried Chicken. Our menu features unique recipes and a wide range of Korean comfort foods."
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
        }, 4.0, "the-melt.png", "American Food", "925 Market Street, San Francisco, CA", "Here at The Melt, we believe when you melt with honest ingredients, amazing flavors come naturally."
    ],
    ["SF Pizza", 0.3,
        {
            "Chicken Wings":10.99,
            "Pizza":10.99,
            "Salad":10.99
        }, 3.1, "sf-pizza.jpg", "American Food", "883 Mission Street, San Francisco, CA", "Pizzeria offering a wide variety of pies, including vegan and gluten-free options."
    ],
    ["Blondie's Pizza", 0.4,
        {
            "Pizza":13.00,
            "Pasta":12.99,
            "Breadsticks":9.99,
            "Chicken Wings":9.99,
            "Salad":8.99
        }, 4.8, "blondie's-pizza.jpeg", "Italian Food", "865 Market Street, San Francisco, CA", "FRESH FROM BLONDIE'S PIZZA."
    ],
    ["Abe's Pizza", 0.4,
        {
            "Pizza":13.00,
            "Pizza Slice":6.99,
            "Salad":8.99,
            "Chicken Wings":9.99,
        }, 4.9, "abe's-pizza.jpeg", "American Food", "940 Market Street, San Francisco, CA", "Counter-service pizzeria selling a range of pies, but known for dispensing grab-and-go slices."
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
        }, 3.6, "milan-pizza.jpeg", "Italian Food", "606 Geary Street, San Francisco, CA", "No-frills spot with very late hours that sells pizza by the slice & offers delivery."
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
        }, 3.5, "california-pizza-kitchen.jpg", "American Food", "53 3rd Street, San Francisco, CA", "Chain eatery serving up inventive pizzas, plus pastas & salads in a modern setting."
    ],
    ["SF Chickenbox", 1.5,
        {
            "Fries":4.25,
            "Sandwich":10.50,
            "Fried Chicken Box":15.00,
            "Steamed Rice":3.50,
            "Salad":6.00
        }, 4.1, "sf-chickenbox.png", "American Food", "464 Broadway, San Francisco, CA", "Counter-serve spot for halal fried chicken, mochi and sides in a laid-back setting."
    ],
    ["The Bird", 0.4,
        {
            "Sandwich":10.25,
            "Fried Chicken":8.00,
            "Chicken Wings":8.00,
            "Salad":7.75,
            "Curly Fries":4.00
        }, 4.3, "the-bird.png", "American Food", "115 New Montgomery Street, San Francisco, CA", "We're the ultimate fried chicken sandwich shop, now with 2 locations in San Francisco. We're the go-to for indulgent food that's made with integrity."
    ],
    ["Krispy Krunchy", 0.4,
        {
            "Chicken Wings":10.99,
            "Sandwich":6.99,
            "French Fries":5.99,
            "Mashed Potatoes":5.99,
            "Mac and Cheese":5.99
        }, 2.3, "krispy-krunchy-chicken.jpg", "American Food", "330 5th Street, San Francisco, CA", "Serve up freshly made, golden-fried deliciousness straight from your own counter."
    ],
    ["Taqueria Castillo", 0.7,
        {
            "Burrito":10.60,
            "Taco":3.69,
            "Quesadilla":9.25,
            "Nachos":8.75,
            "Torta":9.67
        }, 3.7, "taqueria-castillo.jpeg", "Mexican Food", "86 McAllister Street, San Francisco, CA", "Burritos & tacos feature prominently at this small, laid-back order-at-the-counter Mexican joint."
    ],
    ["Buena Vida Cantina", 0.3,
        {
            "Salad":16.00,
            "Taco":5.00,
            "Burrito":18.00,
            "Ramen":26.00
        }, 4.5, "buena-vida-cantina.jpeg", "Mexican Food", "860 Folsom Street, San Francisco, CA", "Laid-back neighborhood restaurant with outdoor seating dishing up Mexican classics."
    ],
    ["Chipotle", 0.015,
        {
            "Burrito":11.40,
            "Taco":3.80,
            "Quesadilla":11.95,
            "Salad":11.40
        }, 4.0, "chipotle.png", "Mexican Food", "121 4th Street, San Francisco, CA", "An international chain of fast casual restaurants specializing in bowls, tacos, and Mission burritos made to order in front of the customer."
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
        }, 3.5, "tropisueno.jpeg", "Mexican Food", "75 Yerba Buena Lane, San Francisco, CA", "Lively Mexican eatery serving classic plates and margaritas in a relaxed, upbeat environment."
    ],
    ["Taco Bell", 1.1,
        {
            "Burrito":1.99,
            "Taco":1.79,
            "Quesadilla":5.79,
            "Nachos":2.59
        }, 5.0, "taco-bell.jpeg", "Mexican Food", "710 3rd Street, San Francisco, CA", "An American multinational chain of fast food restaurants."
    ],
    ["Trader Joe's", 0.2, 
        {
            "Burger": 6.99,
            "Pizza": 4.99,    
            "Chicken Wings": 8.99,  
            "French Fries": 2.99,   
            "Mac and Cheese": 3.99,
            "Fried Rice": 3.99,
            "Salad": 4.49,
            "Pasta": 5.99,
            "Sandwich": 4.99, 
            "Dumplings": 5.99, 
            "Taco": 3.49,     
            "Quesadilla": 6.99, 
            "Burrito": 7.99     
        },
        4.5, "trader-joes.png", "Grocery Store", "10 4th St, San Francisco, CA 94103", "Popular Grocery Store in the US"
    ],
    ["Safeway", 1.2,
        {
            "Burger": 25.99,
            "Pizza": 22.50,
            "Chicken Wings": 19.99,
            "French Fries": 7.99,
            "Mac and Cheese": 15.99,
            "Fried Rice": 18.50,
            "Salad": 14.99,
            "Pasta": 12.99,
            "Sandwich": 16.50,
            "Dumplings": 21.99,
            "Taco": 20.50,
            "Quesadilla": 13.99,
            "Burrito": 22.50
        },
        3.9, "safeway.png", "Grocery Store", "298 King St, San Francisco, CA 94107", "Popular Grocery store in the US"
    ],
    ["Costco", 1.2,
        {
            
            "Burger": 25.99,
            "Pizza": 22.50,
            "Chicken Wings": 19.99,
            "French Fries": 7.99,
            "Mac and Cheese": 15.99,
            "Fried Rice": 18.50,
            "Salad": 14.99,
            "Pasta": 12.99,
            "Sandwich": 16.50,
            "Dumplings": 21.99,
            "Taco": 20.50,
            "Quesadilla": 13.99,
            "Burrito": 22.50
            
        },
        4.4, "costco.png", "Grocery Store", "450 10th St, San Francisco, CA 94103", "Sells objects in large quantities, resulting in high price, high quantity"
    ]
]





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
    var images = [];
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
    for(var i = 0; i < names.length; i++){
        var place = document.createElement("button");
        place.classList.add("place");
        place.style.top = (40 + i * 23) + "%";
        place.setAttribute("onclick", "openRes(" + i + ")")
        var image = document.createElement("img");
        image.classList.add("placeImage");
        image.src = "images/" + images[i];
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
function openRes(k){
    document.getElementById("circle").style.display = "block";
    document.getElementById("circleBackground").style.display = "block";
    document.getElementById("circle").style.top = (-2 + k * 23) + "%";
    document.getElementById("circleBackground").style.top = (-2 + k * 23) + "%";
    document.getElementById("circle").style.animation = "expand 1s forwards";
    var name = document.getElementsByClassName("place")[k].children[1].innerHTML;
    console.log(name);
    for (var i = 0; i < restaurants.length; i++) {
        console.log(restaurants[i][0])
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