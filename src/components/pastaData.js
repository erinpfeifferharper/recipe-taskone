//this is our pasta data array, wherein we get our information for our pasta's.
//the commented information on the first dish apply to all other dishes, in terms of what it means
const pastaData = [
  {
    //unique id for each pasta dish
    id: 1,
    //the name of the pasta dish
    name: "Spaghetti Carbonara",
    //the dietary restrictions for the dish
    dietaryRestrictions: ["Vegetarian"],
    //the time to cook the dish in minutes
    cookingTime: 30,
    //ingriedents required for the dish, not all but some basic ones
    ingredients: [
      "spaghetti",
      "eggs",
      "parmesan cheese",
      "garlic",
      "black pepper",
    ],
    //image of the dish, the image i got was ai-generated so they might look a bit fake
    //the image path of the dish - folder is found in the public folder
    image: "pastas/item-one.jpg",
  },
  {
    id: 2,
    name: "Gluten-Free Vegetable Lasagna",
    dietaryRestrictions: ["Vegetarian", "Gluten-free"],
    cookingTime: 90,
    ingredients: [
      "gluten-free lasagna noodles",
      "tomato sauce",
      "ricotta cheese",
      "mozzarella cheese",
      "spinach",
      "mushrooms",
    ],
    image: "pastas/item-two.jpg",
  },
  {
    id: 3,
    name: "Vegan Pesto Pasta",
    dietaryRestrictions: ["Vegan"],
    cookingTime: 20,
    ingredients: ["linguine", "vegan pesto", "pine nuts", "cherry tomatoes"],
    image: "pastas/item-three.jpg",
  },
  {
    id: 4,
    name: "Shrimp Scampi",
    dietaryRestrictions: ["Seafood"],
    cookingTime: 25,
    ingredients: [
      "linguine",
      "shrimp",
      "garlic",
      "butter",
      "white wine",
      "lemon",
      "parsley",
    ],
    image: "pastas/item-four.jpg",
  },
  {
    id: 5,
    name: "Dairy-Free Mushroom Stroganoff",
    dietaryRestrictions: ["Vegan", "Dairy-free"],
    cookingTime: 45,
    ingredients: [
      "pappardelle pasta",
      "mushrooms",
      "onion",
      "garlic",
      "vegetable broth",
      "dairy-free cream",
    ],
    image: "pastas/item-five.jpg",
  },
  {
    id: 6,
    name: "Classic Beef Bolognese",
    dietaryRestrictions: [],
    cookingTime: 120,
    ingredients: [
      "spaghetti",
      "ground beef",
      "onion",
      "carrots",
      "celery",
      "tomato sauce",
      "red wine",
      "parmesan cheese",
    ],
    image: "pastas/item-six.jpg",
  },
];

export default pastaData;
