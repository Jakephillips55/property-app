import React, { useState, useEffect } from "react";
import ImageUploader from "react-images-upload";

function Form({ match }) {
  const url = "http://localhost:7000/properties/" + match.params.id;

  const [property, setProperty] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    console.log("fetching property");
    fetch(`http://localhost:7000/properties/${match.params.id}/`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setProperty(res);
        setAddress(res.address);
      });
  }, [match.params.id]);

  const updateProperty = async () => {
    let updateDetails = property;
    updateDetails["address"] = address;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(property),
    });
    const data = await response.json();
    setProperty(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateProperty();
  };

  const onDrop = (picture) => {
    setProperty({ ...property, picture: picture });
  };

  return (
    <div>
      {property && address && property.available ? (
        <form onSubmit={handleSubmit} className="item">
          <label className="label">
            Address:
            <input
              type="text"
              name="line1"
              value={address.line1}
              onChange={(event) =>
                setAddress({ ...address, line1: event.target.value })
              }
            />
          </label>
          <br />
          <label className="label">Postcode:</label>
          <input
            type="text"
            name="postcode"
            value={address.postcode}
            onChange={(event) =>
              setAddress({ ...address, postcode: event.target.value })
            }
          />

          <br />
          <label className="label">City:</label>
          <input
            type="text"
            name="city"
            value={address.city}
            onChange={(event) =>
              setAddress({ ...address, city: event.target.value })
            }
          />
          <br />
          <img
            className="item--image"
            src={`http://localhost:3000/${property.picture}`}
            alt={`Home in ${property.postCode}`}
          />
          <ImageUploader
            withIcon={true}
            buttonText="Choose images"
            onChange={onDrop}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
          />
          <br />
          <label className="label">
            Price:
            <input
              type="text"
              name="price"
              value={property.price}
              onChange={(event) =>
                setProperty({ ...property, price: event.target.value })
              }
            />
          </label>
          <br />
          <label className="label">
            Like:
            <input
              type="button"
              name="like"
              value={property.like ? "LIKE" : "NOT LIKE"}
              onClick={() => setProperty({ ...property, like: !property.like })}
            />
          </label>
          <br />
          <label className="label">
            Available:
            <input
              type="date"
              name="available"
              value={property.available.slice(0, 10)}
              onChange={(event) =>
                setProperty({
                  ...property,
                  available: new Date(event.target.value).toISOString(),
                })
              }
            />
            {console.log(property.available)}
          </label>
          <br />

          <input type="submit" value="Update Property" />
        </form>
      ) : (
        "Loading... "
      )}
    </div>
  );
}

export default Form;
