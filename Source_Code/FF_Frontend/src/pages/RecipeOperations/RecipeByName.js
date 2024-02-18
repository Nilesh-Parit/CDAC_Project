import "./RecipeByName.css";
import axios from "axios";

export default function RecipeByName() {
  function sendData() {
    const search = document.getElementById("search-box").value;
    const recipe = axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    recipe?.then((res) => {
      console.log(res);
      if (res.data.meals && res.data.meals.length > 0) {
        var infoProcedure = res?.data?.meals[0].strInstructions;
        var infoCuisine = res?.data?.meals[0].strArea;
      }
      //   console.log(info);
      document.getElementById(
        "ingredients-span"
      ).innerHTML = `<p>${infoProcedure}</p>`;
      document.getElementById(
        "recipe-span"
      ).innerHTML = `<p>${infoCuisine}</p>`;
    });
    // }
  }

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="card " id="recipebyname-card">
        <div className="card-body" style={{ marginTop: "2%" }}>
          <h2 style={{ marginLeft: "15%" }}>
            <b>Search recipies by name</b>
          </h2>
          <div id="search-panel">
            <input
              id="search-box"
              class="form-control mr-sm-2"
              type="search"
              placeholder="Enter recipe name.."
              aria-label="Search"
            />
            <button
              class="btn my-2 my-sm-0 rounded-pill"
              type="submit"
              id="search-btn"
              onClick={sendData}
            >
              Search
            </button>
          </div>
          <div class="container text-center">
            <div class="row row-cols-1">
              <div class="col" id="infoCuisine"></div>
              <div class="col" id="info-ingredients">
                <span id="ingredients-span"></span>
              </div>
              <div class="col" id="info-procedure">
                <span id="recipe-span"></span>
              </div>
            </div>
          </div>
          <div id="recipe-div"></div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
