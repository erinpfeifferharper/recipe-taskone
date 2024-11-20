//imports components
//the imports are the title and recipe book components that are to be used within the app
import Title from "./Title";
import RecipeBook from "./RecipeBook";

//the app component
//serves as the main container for the application
export default function App() {
  return (
    //returns the main layout of the application, which is the information from these components
    <div>
      <Title />
      <RecipeBook />
    </div>
  );
}
