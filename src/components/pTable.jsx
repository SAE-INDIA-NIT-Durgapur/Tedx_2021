import React from "react";
import "../CSS/register.css";

const PTable = () => {
  return (
    <div className="ptable table price-table">
      <h4 style={{ marginBottom: "20px" }}>Price Guide</h4>
      <table className="table table-dark border-danger table-bordered">
        <thead>
          <tr>

        
            <th scope="col"></th>
            <th scope="col">Ticket</th>


            <th scope="col">T-Shirt</th>
            <th scope="col">Ticket + Tshirt</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Other Institutes</td>
            <td>INR 99/-</td>
            <td>INR 299/-</td>
            <td>INR 349/-</td>
          </tr>
          <tr>
            
            <td>NIT DURGAPUR</td>
            <td>INR 49/-</td>
            <td>INR 279/-</td>
            <td>INR 299/-</td>
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
        Note: T-Shirt price inclusive of shipping
      </h2>
    </div>
  );
};

export default PTable;
