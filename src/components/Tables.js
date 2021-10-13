import React, { Component } from "react";

import tshirt1 from "../images/merchandise/tshirt...1.jpg";
import tshirt2 from "../images/merchandise/tshirt...2.jpg";

import SizeTable from "./SizeTable";
import PTable from "./pTable";

export class Tables extends Component {
  render() {
    return (
      <div class="container">
        <div class="row" style={{ width: "100%", margin: 0 }}>
          <div class="col">
            <div class="shirt-wrapper">
              <img src={tshirt2} className="merchandise_img" />
            </div>
            <SizeTable />
          </div>
          <div class="col">
            {/* <img src={tshirt3} className="merchandise_img"/> */}
            <div class="shirt-wrapper">
              <img src={tshirt1} className="merchandise_img" />
            </div>
            <PTable />
          </div>
        </div>
      </div>
    );
  }
}

export default Tables;
