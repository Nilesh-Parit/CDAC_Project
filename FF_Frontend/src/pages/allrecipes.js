import "../styles/allrecipes.css";
import RecipeOne from "./recipes/recipeone";
import RecipeTwo from "./recipes/recipetwo";
import RecipeThree from "./recipes/recipethree";
import RecipeFour from "./recipes/recipefour";
import RecipeFive from "./recipes/recipefive";
import RecipeSix from "./recipes/recipesix";
import RecipeSeven from "./recipes/recipeseven";
import RecipeEight from "./recipes/recipeeight";
import RecipeNine from "./recipes/recipenine";
import RecipeTen from "./recipes/recipeten";
import CareChild from "./recipes/careChild";
import "../styles/recipelist.css";
import { useState } from "react";

export default function Allrecipes() {
  const [state, setState] = useState("");

  const ageHandler = (e) => {
    console.log(e.target.id);
    setState(e.target.id);
  };
  return (
    <>
      {/* <nav
        className="navbar  fixed-top "
        id="navbar--id"
        style={{ background: "rgb(240, 240, 240)" }}
      >
        <h2 className="navbar-heading">Recipes</h2>
      </nav> */}
      <div className="container" id="recipe-container">
        <div className="left ">
          <h2 className="vacc-by-age">All Recipes</h2>
          <div className="row" id="row--recipe">
            <div className="col-sm">
              <table className="table table-hover" onClick={ageHandler}>
                <tr scope="col">
                  <th id="parent" className="recipe_list" scope="col">
                    <i className="fas fa-home"></i>
                    <a href="/">&nbsp;Parents</a>
                  </th>
                </tr>

                <tr scope="col">
                  <td id="first" className="recipe_list" scope="col">
                    A
                  </td>
                </tr>
                <tr scope="col">
                  <td id="second" className="recipe_list" scope="col">
                    B
                  </td>
                </tr>
                <tr scope="col">
                  <td id="third" className="recipe_list" scope="col">
                    C
                  </td>
                </tr>
                <tr scope="col">
                  <td id="fourth" className="recipe_list" scope="col">
                    D
                  </td>
                </tr>
                <tr scope="col">
                  <td id="fifth" className="recipe_list" scope="col">
                    E
                  </td>
                </tr>
                <tr scope="col">
                  <td id="sixth" className="recipe_list" scope="col">
                    F
                  </td>
                </tr>
                <tr scope="col">
                  <td id="seventh" className="recipe_list" scope="col">
                    G
                  </td>
                </tr>
                <tr scope="col">
                  <td id="eighth" className="recipe_list" scope="col">
                    H
                  </td>
                </tr>
                <tr scope="col">
                  <td id="ninth" className="recipe_list" scope="col">
                    I
                  </td>
                </tr>
                <tr scope="col">
                  <td id="tenth" className="recipe_list" scope="col">
                    J
                  </td>
                </tr>
              </table>
            </div>
            <div className="col-sm"></div>
          </div>
        </div>
        <div className="right">
          {/* on which the user click the component will appear */}
          {state == "" ? <first /> : null}
          {state == "first" ? <RecipeOne /> : null}
          {state == "second" ? <RecipeTwo /> : null}
          {state == "third" ? <RecipeThree /> : null}
          {state == "fourth" ? <RecipeFour /> : null}
          {state == "fifth" ? <RecipeFive /> : null}
          {state == "sixth" ? <RecipeSix /> : null}
          {state == "seventh" ? <RecipeSeven /> : null}
          {state == "eighth" ? <RecipeEight /> : null}
          {state == "ninth" ? <RecipeNine /> : null}
          {state == "tenth" ? <RecipeTen /> : null}
          <CareChild></CareChild>
        </div>
      </div>
    </>
  );
}
