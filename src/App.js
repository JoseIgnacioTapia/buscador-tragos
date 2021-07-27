import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaRecetas from './components/ListaRecetas';
import DrinkDayButton from './components/DrinkDayButton';

import CategoriasProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext';
import ModalProvider from './context/ModalContext';
import CardDrinkDay from './components/CardDrinkDay';
import DrinkDayProvider from './context/DrinkDayContext';

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <DrinkDayProvider>
            <Header />

            <div className="container mt-5">
              <div className="row">
                <Formulario />
              </div>
              <DrinkDayButton />
              <CardDrinkDay />
              <ListaRecetas />
            </div>
          </DrinkDayProvider>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
