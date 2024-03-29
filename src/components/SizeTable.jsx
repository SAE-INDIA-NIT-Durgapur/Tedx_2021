import React, { Component } from "react";

class SizeTable extends Component {
  render() {
    return (
      <div>
        <h4
          style={{ marginBottom: "20px", color: "white", textAlign: "center" }}
        >
          Size Chart
        </h4>

        <table class="table table-dark border-danger table-bordered size-table">
          <thead>
            <tr>
              <th scope="col">Size</th>
              <th scope="col">Chest</th>
              <th scope="col">Length</th>
              <th scope="col">Sleeve Length</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">S</td>
              <td>38''</td>
              <td>26''</td>
              <td>7.5''</td>
            </tr>

            <tr>
              <td scope="row">M</td>
              <td>40''</td>
              <td>27''</td>
              <td>8''</td>
            </tr>

            <tr>
              <td scope="row">L</td>
              <td>42''</td>
              <td>28''</td>
              <td>8''</td>
            </tr>

            <tr>
              <td scope="row">XL</td>
              <td>44''</td>
              <td>29''</td>
              <td>8.5''</td>
            </tr>

            <tr>
              <td scope="row">2XL</td>
              <td>46''</td>
              <td>30''</td>
              <td>9''</td>
            </tr>

            <tr style={{ borderBottom: "1px solid red" }}>
              <td scope="row">3XL</td>
              <td>48''</td>
              <td>31''</td>
              <td>9.5''</td>
            </tr>
          </tbody>
        </table>
        <h2
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "1.2rem",
            color: "rgb(207, 198, 198)",
          }}
        >
          Note: All measurements are in inches
        </h2>
      </div>
    );
  }
}

export default SizeTable;
