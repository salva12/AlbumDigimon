import {Component} from 'react';
// import ImageDownloader from './ImageDownloader';
import ImageWithSkeleton from './ImageWithSkeleton';


class Post extends Component{
    render() {
        return (
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <div class="text-center">
              <p class="custom-title">{this.props.titulo}</p>
            </div>
            
            {/* <img src={this.props.imagen}  alt="text"></img> */}
            <ImageWithSkeleton src={this.props.imagen} alt="Imagen de prueba" />

            <div class="card-body">
              <p class="custom-desc">Level: {this.props.descripcion}</p>
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


