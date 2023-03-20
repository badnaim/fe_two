import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import axios from "axios";

export default function AllProduct() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("http://localhost:4000/products").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

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
          {data.map((product, index) => (
            <tr key={index}>
              <td>{product.image}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.brand_id}</td>
              <td>{product.category_id}</td>
              <td>{product.sale}</td>
              <td>Edit/Delete</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
