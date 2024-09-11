import {Component} from 'react';
import ImageDownloader from './ImageDownloader';



class Post extends Component{
    render() {
        return (
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <div class="text-center">
              <h4 >{this.props.titulo}</h4>
            </div>
            
            <img src={this.props.imagen}  alt="text"></img>
            <div class="card-body">
              <p class="card-text">Level: {this.props.descripcion}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  {/* <ImageDownloader imgUrl={this.props.imagen} fileName={this.props.titulo} /> */}
                  {/* <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                </div>
                {/* <small class="text-muted">9 mins</small> */}
              </div>
            </div>
          </div>
        </div>
        );
      }
    
}
export default Post;


