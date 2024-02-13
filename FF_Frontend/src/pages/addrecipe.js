import React from "react";
import "../styles/addrecipe.css";
export default function AddRecipe() {
  return (
    <>
      {/* <nav
        className="navbar navbar-expand-lg navbar-light fixed-top "
        id="navbar--id"
        style={{ background: "rgb(240, 240, 240)" }}
      >
        <a href="/">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="nav__logo"
            id="logo"
          />
        </a>
      </nav> */}
      {/* <div id="logodiv">
        <img
          src="/images/logo.png"
          alt="Logo"
          className="nav__logo"
          id="logo"
        />
      </div> */}

      <div className="card " id="card">
        <div className="card-body" id="card-body" style={{ marginTop: "2%" }}>
          <h2 className="text-center" id="signUpheader">
            <b style={{ fontSize: "80%" }}>Add Recipe</b>
          </h2>
          <form>
            <div class="container" style={{ marginTop: "1%" }}>
              <div class="row">
                <div class="col-sm">
                  <label for="rname">Recipe Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="rname"
                    aria-describedby="rname"
                    placeholder="Enter your recipe name"
                  />
                  <label for="rname">Tags</label>
                  <input
                    type="text"
                    className="form-control"
                    id="rname"
                    aria-describedby="rname"
                    placeholder="Enter your recipe tags"
                  />
                </div>
                <div class="col-sm">
                  <label for="rtype">Recipe Type</label>
                  <input
                    type="text"
                    className="form-control"
                    id="rtype"
                    aria-describedby="rtype"
                    placeholder="Enter your recipe type"
                  />
                  <label for="cuisine">Insert Images</label>
                  <div class="input-group mb-3">
                    <input
                      type="file"
                      class="form-control"
                      id="inputGroupFile02"
                    />
                  </div>
                </div>
                <div class="col-sm">
                  <div class="row">
                    <div class="col-sm">
                      <label for="cuisine">Cuisine</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cuisine"
                        aria-describedby="cuisine"
                        placeholder="Enter cuisine"
                      />
                      <label for="rtime">Time Required</label>
                      {/* css in allrecipes.css */}
                      <div class="row">
                        <div class="col" id="rhr">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Hours"
                            min={0}
                            max={12}
                          />
                        </div>
                        <div class="col" id="colon">
                          <label>
                            <b>:</b>
                          </label>
                        </div>
                        <div class="col" id="rmin">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Minutes"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-3" id="rcontent">
                {/* css in allrecipes.css */}

                <label for="ingredients" class="form-label">
                  List of Ingredients
                </label>
                <input type="text" class="form-control" id="ingredients" />
                <label for="recipearea" class="form-label">
                  Description of recipe in detail
                </label>
                <textarea
                  class="form-control"
                  id="recipearea"
                  rows="8"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-info rounded-pill "
              id="signup"
            >
              Upload
            </button>
            <button
              type="reset"
              className="btn btn-info rounded-pill "
              id="signup"
            >
              Reset
            </button>
          </form>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

{
}
