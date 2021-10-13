import React from "react";
import "../CSS/register.css";

const PTable = () => {
  return (
    <div className="ptable table">
      <h4 style={{ marginBottom: "20px" }}>Price Guide</h4>
      <table className="table table-dark border-danger table-bordered">
        <thead>
          <tr>
            <th scope="col">Ticket</th>
            <th scope="col">T-Shirt</th>
            <th scope="col">Ticket + Tshirt</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>INR 99</td>
            <td>INR 299</td>
            <td>INR 349</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PTable;
