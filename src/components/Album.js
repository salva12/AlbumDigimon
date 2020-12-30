import {Component} from "react";
import Post from "./Post"

class Album extends Component{
    render() {
        return (
            <div class="album py-5 bg-light">
                <div class="container">
                    <div class = "row">
                    {console.log("abrio el componente album")}      
                    {this.props.personajes.map((personaje) =><Post titulo={personaje.name} imagen ={personaje.img} descripcion={personaje.level} />)}
                    </div>           
                </div>
            </div>
        );
      }
    
}
export default Album;