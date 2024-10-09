import {Component} from 'react';
import { FaCameraRetro } from 'react-icons/fa';


class Header extends Component{

    render() {

        return (
            <header>

            <div class="navbar-dark shadow-sm custom-nav">
              {/*  */}
              <div class="container d-flex justify-content-between">    
                  <p><FaCameraRetro class="custom-icon"/>Digi-Album</p>
              </div>
             
            </div>

            </header>
        );
      }
    
}
export default Header;














