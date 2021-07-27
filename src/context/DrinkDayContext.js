import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

// Create Context
export const DrinkDayContext = createContext();

const DrinkDayProvider = props => {
  // State del Provider
  const [drinkDay, setDrinkDay] = useState({});
  const [lucky, setLucky] = useState(false);

  useEffect(() => {
    if (!lucky) return;

    const getRandomDrink = async () => {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

      const resultado = await axios.get(url);

      setDrinkDay(resultado.data.drinks[0]);
    };

    getRandomDrink();
  }, [lucky]);

  return (
    <DrinkDayContext.Provider value={{ drinkDay, setLucky }}>
      {props.children}
    </DrinkDayContext.Provider>
  );
};

export default DrinkDayProvider;
