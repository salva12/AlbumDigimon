import React from 'react';


class Introduccion extends React.Component{
    render() {
        return (
          <section class="jumbotron text-center">
              <div class="container">
                <h1 className="title">{this.props.titulo}</h1>
                <p class="lead text-muted">{this.props.descripcion}</p>
                <p>
                  <a href="#" class="btn btn-primary my-2">Main call to action</a>
                  <a href="#" class="btn btn-secondary my-2">Secondary action</a>
                </p>
              </div>
            </section>
        );
      }
    
}
export default Introduccion;



