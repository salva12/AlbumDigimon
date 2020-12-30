import {Component} from 'react';


class Introduccion extends Component{
    render() {
        return (
          <section class="jumbotron text-center">
              <div class="container">
                <h1 className="title">{this.props.titulo}</h1>
                <p class="lead text-muted">{this.props.descripcion}</p>
              </div>
            </section>
        );
      }
    
}
export default Introduccion;



