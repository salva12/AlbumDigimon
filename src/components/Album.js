import {Component} from "react";
import Post from "./Post"

class Album extends Component{
    render() {
        return (
            <div className="album py-0 bg-light">
                <div className="container">
                    <div className = "row">
                    {/* {console.log("abrio el componente album")}       */}
                    {this.props.personajes.map((personaje,i) =><Post titulo={personaje.name} imagen ={personaje.img} descripcion={personaje.level} key={i}/>)}
                    </div>           
                </div>
            </div>
        );
      }
    
}
export default Album;