// Muestra y formatea los ingredientes
export const mostrarIngredientes = informacion => {
  let ingredientes = [];

  for (let i = 1; i < 16; i++) {
    if (informacion[`strIngredient${i}`]) {
      ingredientes.push(
        <li>
          {informacion[`strIngredient${i}`]} {informacion[`strMeasure${i}`]}
        </li>
      );
    }
  }

  return ingredientes;
};
