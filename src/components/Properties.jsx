import React, { Component } from "react";
import PropertyData from "../json/data.json";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
  Switch,
} from "react-router-dom";

class PropertyList extends Component {
  render() {
    return (
      <div>
        <h1> hi </h1>
        {PropertyData.map((propertyDetail, index) => {
          return (
            <div>
              <h1>{propertyDetail.price} </h1>
              <p>{propertyDetail.postcode}</p>
            </div>
          );
        })}
        <>
          {PropertyData.map((propertyDetail) => (
            <div className="item" key={propertyDetail._id}>
              <Link to={`${propertyDetail._id}`}>
                <button type="button">
                  {propertyDetail.address.line1},{propertyDetail.address.city},
                  {propertyDetail.address.postcode}
                </button>
              </Link>
              <img
                className="item--image"
                src={propertyDetail.picture}
                alt="Picture"
              />
              <div className="item--content">
                <p>
                  <small>Available From: {propertyDetail.available}</small>
                </p>
                {/* <button onClick={() => toggleLike(!like)}>Like</button> */}
                <p>{/* <small>Likes: {like}</small> */}</p>
                <p>£{propertyDetail.price}</p>
              </div>
            </div>
          ))}

          <Route
            exact
            path="/PropertyDetails/:id"
            render={(props) => <PropertyList {...props} />}
          />
        </>
      </div>
    );
  }
}

export default PropertyList;
