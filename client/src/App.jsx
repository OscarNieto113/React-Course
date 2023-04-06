import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./pages/Form"
import DishRestaurant from "./pages/DishRestaurant";
import Layout from "./components/Layout";


/*
Lo ideal del archivo App.jsx es contener las rutas de la "single web application"
.
Se encapsulan las rutas (<Routes>) dentro de BrowserRouter para configurar las rutas.

Dentro de <Routes> se colocan todas las rutas de nuestra aplicación con <Route>.

Se puede especificar solo el atributo element para mostrar siempre un componente.

Como el Navbar es el componente común de todas las páginas se muestra por default este
componente en <Layout />.

Cuando accedamos a las rutas "/" y "dish-restaurant" se renderizará el componente <Layout /> siempre
por están encapsuladas un nivel más interno que <Layout />

Para entender más la lógica de la renderización de los componentes de las rutas "/" y "dish-restaurant"
ir al componente <Layout />
*/
function App() {
  return (
    <div className="App w-full h-full">
      <BrowserRouter>
        <Routes>
          <Route element={ <Layout /> }>
            <Route path="/" element={ <Form /> } />
            <Route path="/ListOrden" element={ <ListOrden /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
 