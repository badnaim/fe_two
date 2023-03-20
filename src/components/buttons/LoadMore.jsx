import React from "react";
import Table from "react-bootstrap/Table";

export default function LoadMore() {
  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Sale</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>URL</td>
            <td>Iphone 13 pro</td>
            <td>3.500.000</td>
            <td>Apple</td>
            <td>Phone</td>
            <td>10%</td>
            <td>Edit/Delete</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
