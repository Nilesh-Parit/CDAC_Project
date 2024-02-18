import { Link } from "react-router-dom";
import "./Dashboard.css";
export default function AdminDashboard() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        style={{ background: "rgb(240, 240, 240)" }}
      >
        <img
          src="/images/logo.png"
          alt="Logo"
          className="nav__logo"
          id="logo"
        />
        <ul className="nav__links">
          <li className="nav__item">
            <button
              data-toggle="modal"
              data-target="#modalopen"
              id="login__btn"
              type="button"
              className="btn btn-info rounded-pill px-4"
            >
              Log out
            </button>
          </li>
        </ul>
      </nav>
      {/* CARD-1 */}
      <div style={{ marginBottom: "5%" }}>
        <div id="container-dashboard" className="container">
          <div id="admin-dashboard" className="card admin-card btn-light">
            <div className="card-body">
              <img
                class="card-img-top card-images"
                id="card-img"
                src="/images/recipe.jpg"
                alt="Card image cap"
                height={300}
                width={500}
              />
              <hr></hr>
              <h5 className="card-title">All Recipies</h5>
              <p className="card-text">Click here to see all Recipies</p>

              <Link
                id="dashboard-button"
                to="/admin/alluserrecipies"
                class="btn btn-outline-warning rounded-pill "
                onClick={() => window.scrollTo(0, 0)}
              >
                Click Here
              </Link>
            </div>
          </div>

          {/* CARD-2 */}
          <div id="admin-dashboard" className="card admin-card">
            <div className="card-body">
              <img
                class="card-img-top"
                src="/images/recipe.jpg"
                alt="Card image cap"
                height={300}
                width={300}
              />
              <hr></hr>
              <h5 className="card-title">All Users</h5>
              <p className="card-text">
                Click here to get all users
              </p>
              <a
                id="dashboard-button"
                href="#"
                class="btn btn-outline-warning rounded-pill "
                onClick={() => window.scrollTo(0, 0)}
              >
                Click Here
              </a>
            </div>
          </div>
        </div>

        <div id="container-dashboard" className="container">
          {/* CARD-3 */}
          <div id="admin-dashboard" className="card admin-card">
            <div className="card-body">
              <img
                class="card-img-top"
                src="/images/recipe.jpg"
                alt="Card image cap"
                height={300}
                width={500}
              />
              <hr></hr>
              <h5 className="card-title">All Children</h5>
              <p className="card-text">All childrens information and history</p>
              <Link
                id="dashboard-button"
                to="/childrenInfo"
                class="btn btn-outline-warning rounded-pill "
                onClick={() => window.scrollTo(0, 0)}
              >
                Click Here
              </Link>
            </div>
          </div>
          {/* CARD-4 */}
          <div id="admin-dashboard" className="card admin-card">
            <div className="card-body">
              <img
                class="card-img-top"
                src="/images/recipe.jpg"
                alt="Card image cap"
                height={300}
                width={500}
              />
              <hr></hr>
              <h5 className="card-title">Reminder</h5>
              <p className="card-text">Send reminders</p>
              <a
                id="dashboard-button"
                href="#"
                class="btn btn-outline-warning rounded-pill "
                onClick={() => window.scrollTo(0, 0)}
              >
                Click Here
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
