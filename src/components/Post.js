import {Component} from 'react';
// import ImageDownloader from './ImageDownloader';
import ImageWithSkeleton from './ImageWithSkeleton';


class Post extends Component{
    render() {
        return (
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="text-center">
              <p className="custom-title">{this.props.titulo}</p>
            </div>
            
            {/* <img src={this.props.imagen}  alt="text"></img> */}
            <ImageWithSkeleton src={this.props.imagen} alt="Imagen de prueba" />

            <div className="card-body">
              <p className="custom-desc">Level: {this.props.descripcion}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
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


