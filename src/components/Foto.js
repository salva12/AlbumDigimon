import React from 'react';


class Foto extends React.Component{
    render() {
        return (
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <h4>{this.props.titulo}</h4>
            <img>{this.props.imagen}</img>
            <div class="card-body">
              <p class="card-text">{this.props.descripcion}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        );
      }
    
}
export default Foto;


