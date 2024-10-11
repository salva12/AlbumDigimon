import {Component} from 'react';
import { FaCameraRetro } from 'react-icons/fa';


class Header extends Component{

    render() {

        return (
            <header>

            <div className="navbar-dark shadow-sm custom-nav">
              {/*  */}
              <div className="container d-flex justify-content-between">    
                  <p><FaCameraRetro className="custom-icon"/>Digi-Album</p>
              </div>
             
            </div>

            </header>
        );
      }
    
}
export default Header;














