
import React from 'react';
//importar los componentes
import Footer from './components/Footer'
import Header from './components/Header'
import Foto from './components/Foto'
import Introduccion from './components/Introduccion'
//importar bootstrap
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <React.Fragment>
          <Header></Header>
              <Introduccion titulo="Las ciudades más famosas del mundo" descripcion="Un recorrido visual por todos los lugares mas valorados para viajar y conocer algún dia."></Introduccion>
              <div class="album py-5 bg-light">
                      <div class="container">
                          <div class="row">
                          <Foto></Foto>
                          </div>
                      </div>
              </div>
          <Footer></Footer>
      </React.Fragment> 
    </div>
  );
}

export default App;
