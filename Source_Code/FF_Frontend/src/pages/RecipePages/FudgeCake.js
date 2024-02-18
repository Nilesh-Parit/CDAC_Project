export default function FudgeCake() {
  return (
    <>
      <div>
        <h2 className="schedule-header">Chocolaty Fudge Cake</h2>
        <img className="res-img" src="/images/fudgecake.jpg" />
        <h4 className="ingredients">Ingredients:</h4>
        <p className="ingredients-list">
          <ol>
            <li>
              For the Cake-Base:
              <ul>
                <li>150ml sunflower oil, plus extra for the tin</li>
                <li>175g self-raising flour</li>
                <li>2 tbsp cocoa powder</li>
                <li>1 tsp bicarbonate of soda</li>
                <li>150g caster sugar</li>
                <li>2 tbsp golden syrup</li>
                <li>2 large eggs, lightly beaten</li>
                <li>150ml semi-skimmed milk</li>
              </ul>
            </li>
            <li>
              For the Icing:
              <ul>
                <li>100g unsalted butter</li>
                <li>225g icing sugar</li>
                <li>40g cocoa powder</li>
                <li>2½ tbsp milk (a little more if needed)</li>
              </ul>
            </li>
          </ol>
        </p>

        <div className="procedure">
          <h4>Procedure:</h4>
          <p>
            <span>
              <b>STEP 1</b>
              <br />
              Heat the oven to 180C/160C fan/gas 4. Oil and line the base of two
              18cm sandwich tins. Sieve the flour, cocoa powder and bicarbonate
              of soda into a bowl. Add the caster sugar and mix well.
              <br />
              <b>STEP 2</b>
              <br />
              Make a well in the centre and add the golden syrup, eggs,
              sunflower oil and milk. Beat well with an electric whisk until
              smooth.
              <br />
              <b>STEP 3</b>
              <br />
              Pour the mixture into the two tins and bake for 25-30 mins until
              risen and firm to the touch. Remove from oven, leave to cool for
              10 mins before turning out onto a cooling rack.
              <br />
              <b>STEP 4</b>
              <br />
              To make the icing, beat the unsalted butter in a bowl until soft.
              Gradually sieve and beat in the icing sugar and cocoa powder, then
              add enough of the milk to make the icing fluffy and spreadable.
              <br />
              <b>STEP 5</b>
              <br />
              Sandwich the two cakes together with the butter icing and cover
              the sides and the top of the cake with more icing.
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
