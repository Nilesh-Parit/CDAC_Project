import "./AllRecipes.css";

import RecipeThree from "./TomatoSoup";
import RecipeFour from "./FarmhousePizza";
import RecipeFive from "./AlooParatha";
import RecipeSix from "./recipesix";
import RecipeSeven from "./recipeseven";
import RecipeEight from "./recipeeight";
import RecipeNine from "./recipenine";
import RecipeTen from "./recipeten";

import "./RecipeList.css";
import { useState } from "react";
import PaneerTikka from "./PaneerTikka";
import HoneyPotato from "./HoneyPotato";
import TomatoSoup from "./TomatoSoup";
import FarmhousePizza from "./FarmhousePizza";
import AlooParatha from "./AlooParatha";

export default function Allrecipes() {
  const [state, setState] = useState("");

  const recipeHandler = (e) => {
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
          <h2 className="reslist">All Recipes</h2>
          <div className="row" id="row--recipe">
            <div className="col-sm">
              <table className="table table-hover" onClick={recipeHandler}>
                {/* <tr scope="col">
                  <th id="parent" className="recipe_list" scope="col">
                    <i className="fas fa-home"></i>
                    <a href="/">&nbsp;Parents</a>
                  </th>
                </tr> */}

                <tr scope="col">
                  <td id="first" className="recipe_list" scope="col">
                    Paneer Tikka
                  </td>
                </tr>
                <tr scope="col">
                  <td id="second" className="recipe_list" scope="col">
                    Tangy Potato
                  </td>
                </tr>
                <tr scope="col">
                  <td id="third" className="recipe_list" scope="col">
                    Tomato Soup
                  </td>
                </tr>
                <tr scope="col">
                  <td id="fourth" className="recipe_list" scope="col">
                    Farmhouse Pizza
                  </td>
                </tr>
                <tr scope="col">
                  <td id="fifth" className="recipe_list" scope="col">
                    Aloo Paratha
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
          {state == "first" ? <PaneerTikka /> : null}
          {state == "second" ? <HoneyPotato /> : null}
          {state == "third" ? <TomatoSoup /> : null}
          {state == "fourth" ? <FarmhousePizza /> : null}
          {state == "fifth" ? <AlooParatha /> : null}
          {state == "sixth" ? <RecipeSix /> : null}
          {state == "seventh" ? <RecipeSeven /> : null}
          {state == "eighth" ? <RecipeEight /> : null}
          {state == "ninth" ? <RecipeNine /> : null}
          {state == "tenth" ? <RecipeTen /> : null}
        </div>
      </div>
    </>
  );
}
