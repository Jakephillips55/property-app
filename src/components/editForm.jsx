import React from "react";
import { properties } from "../json/data.json";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Price" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A value was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <>
        <div> test </div>
        {properties.map((propertyDetail, index) => {
          return <h1>{propertyDetail.id} </h1>;
        })}
        <form onSubmit={this.handleSubmit}>
          <label>
            Edit Price:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
          <label>
            Edit Available Date:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Edit Address:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Edit Postcode:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input type="submit" value="Submit" />
          </label>
        </form>
      </>
    );
  }
}

export default Form;
