//this is the search component
//it provied a serach bar and filter such as checkbox and favourites to search and filter through the recipes
export default function Search({
  searchTerm, //the current search term (pretty self-explanitory)
  handleSearch, //handles search input
  selectedDietaryRestrictions, //array of the dietary restrictions
  handleDietaryRestrictionChange, //to handle change within the dietary restrictions
  showFavourites, //to show favourites
  handleShowFavourites, //to toggle favourite view
}) {
  return (
    //the search and filter section
    <div className="search-filters">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search pasta dishes..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {/* dietary restrictions filters, with checkboxes for the restictions */}
      <div className="filters">
        <label>
          <input
            type="checkbox"
            value="Vegetarian"
            onChange={handleDietaryRestrictionChange}
            checked={selectedDietaryRestrictions.includes("Vegetarian")}
          />
          Vegetarian
        </label>
        <label>
          <input
            type="checkbox"
            value="Vegan"
            onChange={handleDietaryRestrictionChange}
            checked={selectedDietaryRestrictions.includes("Vegan")}
          />
          Vegan
        </label>
        <label>
          <input
            type="checkbox"
            value="Gluten-free"
            onChange={handleDietaryRestrictionChange}
            checked={selectedDietaryRestrictions.includes("Gluten-free")}
          />
          Gluten-Free
        </label>
        <label>
          <input
            type="checkbox"
            value="Dairy-free"
            onChange={handleDietaryRestrictionChange}
            checked={selectedDietaryRestrictions.includes("Dairy-free")}
          />
          Dairy-Free
        </label>
        <label>
          <input
            type="checkbox"
            value="Seafood"
            onChange={handleDietaryRestrictionChange}
            checked={selectedDietaryRestrictions.includes("Seafood")}
          />
          Seafood
        </label>
      </div>
      {/* toggle to show all recipes or favourites */}
      <div className="favorites-toggle">
        <button onClick={handleShowFavourites}>
          {/* the toggle button text based on showFavourites state */}
          {showFavourites ? "Show All" : "Show Favourites"}
        </button>
      </div>
    </div>
  );
}
