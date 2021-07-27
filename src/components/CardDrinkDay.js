import React, { useContext } from 'react';
import { DrinkDayContext } from '../context/DrinkDayContext';

import { mostrarIngredientes } from '../helpers/mostrarIngredientes';

const CardDrinkDay = () => {
  const { drinkDay } = useContext(DrinkDayContext);

  return (
    <div className="row justify-content-center mt-4">
      <div className="card col-9 flex-row">
        <img className="card-img-left" src="" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul>Ingredientes</ul>
      </div>
    </div>
  );
};

export default CardDrinkDay;
