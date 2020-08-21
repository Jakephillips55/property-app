import React, { useState, useEffect } from "react";
// import PropertyData from "../json/data.json";
import { Link } from "react-router-dom";
import "../index.css";
import Moment from "react-moment";

const PropertyList = () => {
  const [like, toggleLike] = useState(false);

  const [properties, setProperties] = useState([]);

  const fetchProperties = async () => {
    const response = await fetch("http://localhost:7000/properties");
    const data = await response.json();
    console.log(data);
    setProperties(data);
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <>
      <div className="title">Property Listings</div>
      {properties.map((propertyDetail) => (
        <div className="item" key={propertyDetail.id}>
          <center>
            <h1>
              <Link to={`/properties/${propertyDetail.id}`}>
                {propertyDetail.address.line1},{propertyDetail.address.city},
                {propertyDetail.address.postcode}
              </Link>
            </h1>
          </center>
          <center>
            <img
              className="item--image"
              src={propertyDetail.picture}
              alt={`Home in ${propertyDetail.postcode}`}
            />
          </center>
          <div className="item--content">
            <p>
              Available From:{" "}
              <Moment format="DD MMM YYYY">{propertyDetail.available}</Moment>
            </p>

            <p className="item--like">
              {propertyDetail.like ? "Favourited ❤️" : "Not Favourited 🖤"}
            </p>

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
