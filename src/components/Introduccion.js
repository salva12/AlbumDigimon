import {Component} from 'react';
import './Introduccion.css';

class Introduccion extends Component{

    render() {
        const customBackground= {
          background:'#3b9ff9',
        }

        const customTitle= {
          color:'#f9b74e',
          fontWeight:'bold',
          fontFamily:'Georgia',
          textShadow: '0px 2px 4px black'
        }

        const customDesc= {
          color:'#f9b74e',
          fontWeight:'bold',
          fontSize:'1rem',
          fontFamily:'Georgia',
          textShadow: '0px 2px 4px black'
        }

        return (
          <section class="jumbotrom-custom text-center" style={customBackground}>
              <div class="container">
                <h1 className="title" style={customTitle}>{this.props.titulo}</h1>
                <p class="lead" style={customDesc}>{this.props.descripcion}</p>
              </div>
            </section>
        );
      }
    
}
export default Introduccion;



