import {Component} from 'react';


class Footer extends Component{
    render() {
        const navbarCustom = {
            background:'#3b9ff9',
          }
        return (
            <footer className="custom-footer">
                <div className="container" type={navbarCustom}>
                    <p className="float-right">
                    <a href="/#">Back to top</a>
                    </p>
                    <p>Development for React Module  | Informatorio-2020 </p>
                    <p>Contact: salvamanu12@gmail.com</p>
                </div>
            </footer>
        );
      }
    
}
export default Footer;



