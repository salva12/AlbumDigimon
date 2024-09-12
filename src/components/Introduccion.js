import {Component} from 'react';
import './Introduccion.css';

class Introduccion extends Component{
    render() {
        return (
          <section class="jumbotrom-custom text-center">
              <div class="container">
                <h1 className="title">{this.props.titulo}</h1>
                <p class="lead text-muted">{this.props.descripcion}</p>
              </div>
            </section>
        );
      }
    
}
export default Introduccion;



