import { CardContent } from '@material-ui/core';
import React, { useContext } from 'react';
import { DrinkDayContext } from '../context/DrinkDayContext';

import { mostrarIngredientes } from '../helpers/mostrarIngredientes';

const CardDrinkDay = () => {
  const { drinkDay, lucky } = useContext(DrinkDayContext);

  const cardContent = lucky ? (
    <div className="row justify-content-center mt-4">
      <div className="card col-12 flex-md-row align-items-center">
        <img
          className="card-img-left"
          style={{ width: '50%', height: '250px' }}
          src={drinkDay.strDrinkThumb}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{drinkDay.strDrink}</h5>
          <p className="card-text">{drinkDay.strInstructions}</p>
        </div>
        <ul>{mostrarIngredientes(drinkDay)}</ul>
      </div>
    </div>
  ) : null;

  return cardContent;
};

export default CardDrinkDay;
