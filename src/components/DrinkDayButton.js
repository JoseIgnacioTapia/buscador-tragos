import { useContext } from 'react';
import { DrinkDayContext } from '../context/DrinkDayContext';

const DrinkDayButton = () => {
  const { setLucky } = useContext(DrinkDayContext);

  return (
    <div className="flex-column text-center mt-5">
      <h2>Prueba tu trago del día</h2>
      <button
        onClick={() => {
          setLucky(true);
        }}
        className="btn btn-success btn-lg mt-2"
      >
        Bebe o moriré
      </button>
    </div>
  );
};

export default DrinkDayButton;
