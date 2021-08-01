import React, { Component } from "react";

export class Square extends Component {
  render() {
    return (
      <div className="col-10 col-sm-9 col-md-6 col-lg-4 col-xl-4">
        <p className="mt-4 p">{this.props.name}</p>
        <div className="material">
          <div className="image-container">
            <img className="img-fluid" src={this.props.srcPath} />
          </div>
          <div id="overlay">
            <div className="view">
              <div
                className="bg-danger"
                data-toggle="modal"
                data-target={this.props.target}
              >
                View More
              </div>
            </div>
          </div>
          <div className="view">
            <div
              className="bg-danger"
              data-toggle="modal"
              data-target="#CrystalWhite"
            >
              View More
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Square;
