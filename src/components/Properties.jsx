import React, { useState, useEffect } from "react";
// import PropertyData from "../json/data.json";
import { Link } from "react-router-dom";
import "../index.css";

const PropertyList = () => {
  const [like, toggleLike] = useState(false);

  const [properties, setProperties] = useState([]);

  const fetchProperties = async () => {
    const response = await fetch(`http://locahost:3000/properties`);
    const data = await response.json();
    console.log(data);
    setProperties(data);
  };

  useEffect(() => {
    fetchProperties();
  });

  return (
    <>
      <div className="title">Property Listings</div>
      {properties.map((propertyDetail) => (
        <div className="item" key={propertyDetail.id}>
          <h1>
            <Link to={`/properties/${propertyDetail.id}`}>
              {propertyDetail.address.line1},{propertyDetail.address.city},
              {propertyDetail.address.postcode}
            </Link>
          </h1>
          <img
            className="item--image"
            src={propertyDetail.picture}
            alt={`Home in ${propertyDetail.postCode}`}
          />
          <div className="item--content">
            <p>
              {/* {/* <small>Available From:  { new Intl.DateTimeFormat("en-GB", {
                                                year: "numeric",
                                                month: "long", 
                                                day: "2-digit"
                                                }).format(propertyDetail.available)}</small> */}
            </p>
            <button className="item--like" onClick={() => toggleLike(!like)}>
              Like
            </button>

            <p>
              {new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(propertyDetail.price)}
            </p>
          </div>
        </div>
      ))}

      {/* <Route
              exact
              path="/PropertyDetails/:id"
              render={(props) => <PropertyEditForm {...props} />}
            /> */}
    </>
  );
};

export default PropertyList;
