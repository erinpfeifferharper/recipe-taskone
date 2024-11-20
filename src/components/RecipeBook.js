import { useState } from "react"; //importing useState hook from the React Library that allows functional components to managed state
import Recipe from "./Recipe"; //importing the recipe component
import Search from "./Search"; //importing the serach component
import pastaData from "./pastaData"; //importing pasta dish array created

export default function RecipeBook() {
  //using state function as search, dietary restirctions, show/hide favourites and favourite recipes
  //this is alo where i declare my own variables for when i use state
  const [search, setSearch] = useState("");
  const [dietaryRestrictions, setDietaryRestrictions] = useState([]);
  const [showFavourites, setShowFavourites] = useState(false);
  const [favourites, setFavourites] = useState([]);

  //this function handles the search input (which allows users to search for the recipe name)
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  //this function handles how the dietary restructions are applied (they are also in the form of check boxes)
  const handleDietaryRestrictionChange = (event) => {
    const restriction = event.target.value;
    //add or remove recipes based on the state of the checkbox
    if (event.target.checked) {
      setDietaryRestrictions([...dietaryRestrictions, restriction]);
    } else {
      setDietaryRestrictions(
        dietaryRestrictions.filter((r) => r !== restriction)
      );
    }
  };

  //this function toggles showing favourite recipes
  const handleShowFavourites = () => {
    setShowFavourites(!showFavourites);
  };

  //this function handles adding/removing items from the favorited list
  const handleFavourite = (recipeId) => {
    if (favourites.includes(recipeId)) {
      setFavourites(favourites.filter((id) => id !== recipeId));
    } else {
      setFavourites([...favourites, recipeId]);
    }
  };

  // this function filters recipes based on search, dietary restrictions, and favourites (basically an all in one)
  const filteredRecipes = pastaData.filter((recipe) => {
    const nameMatch = recipe.name.toLowerCase().includes(search.toLowerCase());
    const dietaryMatch =
      dietaryRestrictions.length === 0 ||
      dietaryRestrictions.every((restriction) =>
        recipe.dietaryRestrictions.includes(restriction)
      );
    const favouriteMatch = !showFavourites || favourites.includes(recipe.id);
    return nameMatch && dietaryMatch && favouriteMatch;
  });

  return (
    <div className="recipe-book-container">
      {/* the search component */}
      <Search
        searchTerm={search}
        handleSearch={handleSearch}
        selectedDietaryRestrictions={dietaryRestrictions}
        handleDietaryRestrictionChange={handleDietaryRestrictionChange}
        showFavourites={showFavourites}
        handleShowFavourites={handleShowFavourites}
      />
      <div className="recipe-list">
        {/* this iterates over the filtered recipes array and renders each recipe using the recipe component */}
        {filteredRecipes.map((recipe) => (
          <Recipe
            key={recipe.id}
            recipe={recipe}
            handleFavourite={handleFavourite}
            isFavourite={favourites.includes(recipe.id)}
          />
        ))}
      </div>
    </div>
  );
}
