import "./RecipeList.css";
export default function RecipeOne() {
  return (
    <>
      <div>
        <h2 className="schedule-header">Delicious Paneer Tikka</h2>
        <img className="res-img" src="/images/paneertikka.jpg" />
        <h4 className="ingredients">Ingredients:</h4>
        <p className="ingredients-list">
          <ul>
            <li>250g paneer, cut into cubes</li>
            <li>1 tablespoon ginger-garlic paste</li>
            <li>1 tablespoon red chili powder</li>
            <li>1 tablespoon garam masala</li>
            <li>1 tablespoon coriander powder</li>
            <li>1 tablespoon cumin powder</li>
            <li>1 tablespoon chaat masala</li>
            <li>1 tablespoon lemon juice</li>
            <li>Salt to taste</li>
            <li>2 tablespoons oil</li>
            <li>Skewers (pre-soaked in water)</li>
          </ul>
        </p>

        <div className="procedure">
          <h4>Procedure:</h4>
          <p>
            <span>
              <ol>
                <li>
                  <b>Marination:</b>
                </li>
                In a bowl, mix yogurt, ginger-garlic paste, red chili powder,
                garam masala, coriander powder, cumin powder, chaat masala,
                lemon juice, salt, and oil to make the marinade. Add paneer
                cubes to the marinade, ensuring each piece is well-coated. Allow
                it to marinate for at least 1-2 hours in the refrigerator.
                <li>
                  <b>Grilling:</b>
                </li>
                Preheat your oven or grill to a high temperature (about 200°C or
                400°F). Thread the marinated paneer cubes onto the soaked
                skewers. Place the skewers on the grill or in the oven, and cook
                until the paneer is golden brown and has a nice char on the
                edges. You can baste the paneer with some oil or butter during
                grilling.
                <li>
                  <b>Serving:</b>
                </li>
                Serve the Paneer Tikka hot, garnished with lemon wedges and
                fresh coriander. You can also serve it with mint chutney or your
                favorite dipping sauce.
              </ol>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
