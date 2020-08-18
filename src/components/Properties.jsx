import React, { Component } from "react";
import PropertyData from "../json/data.json";

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
      </div>
    );
  }
}

export default PropertyList;
