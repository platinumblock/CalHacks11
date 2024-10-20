const { validateHeaderValue } = require("http")

var userLocation = "Metreon" //change with user"s location to be implemented later


//format: [name, distance, {items:price}]
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
        }
    ],
    ["The Melt", 0.4, 
        {
            "Sandwich":10.49,
            "Cheeseburger":10.49, 
            "Sandwich":8.99,
            "Mac and Cheese":8.99,
            "French Fries":3.99,
            "Tomato Soup":4.79,
            "Salad":7.99,
            "Milkshake":5.99
        }
    ],
    ["SF Pizza", 0.3,
        {
            "Chicken Wings":10.99,
            "Pizza":10.99,
            "Salad":10.99
        }
    ],
    ["Blondie's Pizza", 0.4,
        {
            "Pizza":13.00,
            "Pasta":12.99,
            "Breadsticks":9.99,
            "Chicken Wings":9.99,
            "Salad":8.99
        }
    ],
    ["Abe's Pizza", 0.4,
        {
            "Pizza":13.00,
            "Pizza Slice":6.99,
            "Salad":8.99,
            "Chicken Wings":9.99,
        }
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
        }
    ],
    ["California Pizza Kitchen", 0.3,
        {
            "Pizza":16.99,
            "Salad":15.99,
            "Mac and Cheese":15.99,
            "Pasta":17.99,
            "Burger":18.49,
            "Dumplings":11.99,
            "Egg rolls":14.99,
            "Tomato Soup":10.49,
            "Sandwich":17.74
        }
    ],
    ["SF Chickenbox", 1.5,
        {
            "Fries":4.25,
            "Sandwich":10.50,
            "Fried Chicken Box":15.00,
            "Steamed Rice":3.50,
            "Salad":6.00
        }
    ],
    ["The Bird", 0.4,
        {
            "Sandwich":10.25,
            "Fried Chicken":8.00,
            "Chicken Wings":8.00,
            "Salad":7.75,
            "Curly Fries":4.00
        }
    ],
    ["Krispy Krunchy Chicken", 0.4,
        {
            "Fried Chicken":8.24,
            "Chicken Wings":10.99,
            "Sandwich":6.99,
            "French Fries":5.99,
            "Mashed Potatoes":5.99,
            "Mac and Cheese":5.99
        }
    ],
    ["Taqueria Castillo", 0.7,
        {
            "Burrito":10.60,
            "Taco":3.69,
            "Quesadilla":9.25,
            "Nachos":8.75,
            "Torta":9.67
        }
    ],
    ["Buena Vida Cantina", 0.3,
        {
            "Salad":16.00,
            "Taco":5.00,
            "Burrito":18.00,
            "Birria Ramen":26.00
        }
    ],
    ["Chipotle", 0.015,
        {
            "Burrito":11.40,
            "Tacos":3.80,
            "Quesadilla":11.95,
            "Salad":11.40
        }
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
        }
    ],
    ["Taco Bell", 1.1,
        {
            "Burrito":1.99,
            "Taco":1.79,
            "Quesadilla":5.79,
            "Nachos":2.59
        }
    ]
]
console.log(restaurants.length + " restaurants in database.") //How many restaurants?

//How many times does each food show up? takes in restaurant list, returns a dictionary
function count_frequencies(restaurants) {

    var food_frequencies = {}
    for (var i = 0; i < restaurants.length; i++) {
        for (const [key, value] of Object.entries(restaurants[i][2])) {

            var new_key = key.toLowerCase()

            if (new_key in food_frequencies) {
                //console.log(`${key} has been found!`)
                food_frequencies[new_key] += 1
            }
            else {
                food_frequencies[new_key] = 1
            }
        }
    }

    //console.log(food_frequencies)
    //console.log(Object.keys(food_frequencies).length + " unique items!") //# of unique items

    return food_frequencies
}

//Search through restaurant database for desired_food (returns list of restaurants)
function search(restaurants, desired_food) {
    var desired_food = "Chicken".toLowerCase()
    var search_results = []

    for (var i = 0; i < restaurants.length; i++) {
        for (const [key, value] of Object.entries(restaurants[i][2])) {
            if (key.toLowerCase().includes(desired_food) && !(restaurants[i] in search_results)) {
                search_results.push(restaurants[i])
            }
        }
    }
    console.log(search_results)
    console.log(search_results.length + " restaurants found!")
}

//Search through ONE restaurant to find lowest menu item that contains desired_food
function lowest_price(restaurant, desired_food) {
    let lowest_price = null
    for (const [key, value] of Object.entries(restaurant[2])) {
        if (key.toLowerCase().includes(desired_food.toLowerCase())) {
            if (lowest_price === null || value < lowest_price) {
                lowest_price = value
            }
        }
    }
    if (lowest_price === null) {
        return "Item Not Found"
    }
    return lowest_price
}
