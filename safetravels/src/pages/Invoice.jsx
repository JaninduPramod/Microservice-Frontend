import React from "react";
import "./Invoice.css";

function InvoicePage() {
  
  return (
    <div className="invoice-container">
      <header className="invoice-header">
        <h1>Invoice</h1>
      </header>
      <div className="invoice-content">
        <h2>Customer Name: John Doe</h2>
        <table className="invoice-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Product A</td>
              <td>2</td>
              <td>$50</td>
              <td>$100</td>
            </tr>
            <tr>
              <td>Product B</td>
              <td>1</td>
              <td>$75</td>
              <td>$75</td>
            </tr>
          </tbody>
        </table>
        <div className="invoice-total">
          <h3>Total: $175</h3>
        </div>
      </div>
    </div>
  );
}

export default InvoicePage;
