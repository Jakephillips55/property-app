import React, { useState } from "react";
import PropertyData from "../json/data.json";
import { Link } from "react-router-dom";
import "../index.css";
import { withRouter } from "react-router";
import Form from "./editForm";

const PropertyList = () => {
  const [like, toggleLike] = useState(false);

  return (
    <>
      <div className="title">Property Listings</div>
      {PropertyData.map((propertyDetail) => (
        <div className="item" key={propertyDetail._id}>
          <h1>
            <Link to={`${propertyDetail._id}`}>
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

            <Form />

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

export default withRouter(PropertyList);
