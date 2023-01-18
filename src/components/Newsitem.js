import React, { Component } from "react";

export class Newsitem extends Component {
  imge =
    "https://www.latercera.com/resizer/k1oOxFGp80hvtmpZHusJEzie71o=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/X52V37CBCFEZHAVUTKNDF25D74.jpg";

  render() {
    let { nes } = this.props;
    return (
      <div>
        <div className="card">
          <span
            className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
            style={{ left: "90%", zIndex: "10" }}
          >
            {nes.source.name}
          </span>
          <img
            src={nes.urlToImage ? nes.urlToImage : this.imge}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{nes.title}</h5>
            <p className="card-text">
              {nes.description ? nes.description.slice(0, 80) : ""}...
            </p>
            <a href={nes.url} className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>  
      </div>
    );
  }
}

export default Newsitem;
