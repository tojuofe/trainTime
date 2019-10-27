import React from 'react';
import '../App.css';
import img01 from './layout/images/01.jpg';
import img02 from './layout/images/02.jpg';
import img03 from './layout/images/hiker.jpg';

const Media = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h4 className="center">
            Add photos of yours from your sporting life
          </h4>
          <div className="col s10">
            <h5>Media</h5>
          </div>
          <input
            type="submit"
            className="btn right alignTop blue darken-3"
            value="Create Album"
          />
        </div>
      </div>
      <div className="row">
        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">
              <img src={img01} alt="img" />
              <span className="card-title">Album name</span>
            </div>
            <div className="card-content">
              <i className="material-icons red-text right cur">delete</i>
              lorem ipsum dolor sit amet consectetur adipiscing eliit.
            </div>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">
              <img src={img02} alt="img" />
              <span className="card-title">Album name</span>
            </div>
            <div className="card-content">
              <i className="material-icons red-text right cur">delete</i>
              lorem ipsum dolor sit amet consectetur adipiscing eliit.
            </div>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">
              <img src={img03} alt="img" />
              <span className="card-title">Album name</span>
            </div>
            <div className="card-content">
              <i className="material-icons red-text right cur">delete</i>
              lorem ipsum dolor sit amet consectetur adipiscing eliit.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
