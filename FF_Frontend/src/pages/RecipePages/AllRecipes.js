import "./RecipeList.css";
import { useState } from "react";
import "./AllRecipes.css";
import Dhokla from "./Dhokla";
import FudgeCake from "./FudgeCake";
import TarriPoha from "./TarriPoha";
import PaneerTikka from "./PaneerTikka";
import HoneyPotato from "./HoneyPotato";
import TomatoSoup from "./TomatoSoup";
import FarmhousePizza from "./FarmhousePizza";
import AlooParatha from "./AlooParatha";
import GreenSalad from "./GreenSalad";
import Milkshake from "./milkshake";

export default function Allrecipes() {
  const [state, setState] = useState("first");

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
                    Dhokla
                  </td>
                </tr>
                <tr scope="col">
                  <td id="seventh" className="recipe_list" scope="col">
                    Fudge Cake
                  </td>
                </tr>
                <tr scope="col">
                  <td id="eighth" className="recipe_list" scope="col">
                    Green Salad
                  </td>
                </tr>
                <tr scope="col">
                  <td id="ninth" className="recipe_list" scope="col">
                    Milkshake
                  </td>
                </tr>
                <tr scope="col">
                  <td id="tenth" className="recipe_list" scope="col">
                    Tarri Poha
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
          {state == "sixth" ? <Dhokla /> : null}
          {state == "seventh" ? <FudgeCake /> : null}
          {state == "eighth" ? <GreenSalad /> : null}
          {state == "ninth" ? <Milkshake /> : null}
          {state == "tenth" ? <TarriPoha /> : null}
        </div>
      </div>
    </>
  );
}
