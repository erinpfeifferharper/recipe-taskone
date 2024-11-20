//recipe component
//this component renders recipe card/s with its details
export default function Recipe({ recipe, handleFavourite, isFavourite }) {
  //this returns the information to display the recipe details
  //styling components have been added, can be seen as "className"
  return (
    <div className="recipe-container">
      <div className="recipe-card">
        <div className="recipe-image">
          <img src={recipe.image} alt={recipe.name} />
          <span
            //this will check if the recipe has been favourited
            onClick={() => handleFavourite(recipe.id)}
            className={`heart-icon ${isFavourite ? "filled" : ""}`}
          >
            &#9829;
          </span>
        </div>
        {/* this section contains the recipe details, they are pretty self-explainitory, i'll expand on certain parts */}
        <div className="recipe-details">
          <h4>{recipe.name}</h4>
          <p>
            Dietary Restrictions: {""}
            {/* within this part it will check if dietary restrictions exist and showcase that, if not it will showcase nothing "none" */}
            {recipe.dietaryRestrictions.length > 0
              ? recipe.dietaryRestrictions.join(",")
              : "None"}
          </p>
          <p>Cooking Time: {recipe.cookingTime} minutes</p>
          <h4>Ingredients:</h4>
          <ul>
            {/* this will iterate over the ingredients array and render each ingredient as a list item */}
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
