import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/header.css";

export default function Header() {
  const navigate = useNavigate();
  const [active, setActive] = useState(localStorage.getItem("btnVal") || "all");

  return (
    <div className="header">
      <button
        id="btn"
        onClick={() => {
          navigate("/");
          setActive("all");
          localStorage.setItem("btnVal", "all");
        }}
        style={{ backgroundColor: active === "all" ? "#003585" : "#EFEFEF" }}
      >
        All product
      </button>
      <button
        id="btn"
        onClick={() => {
          navigate("/loadMore");
          setActive("load");
          localStorage.setItem("btnVal", "load");
        }}
        style={{ backgroundColor: active === "load" ? "#003585" : "#EFEFEF" }}
      >
        Load more
      </button>
      <button
        id="btn"
        onClick={() => {
          navigate("/filterByCategory");
          setActive("filterC");
          localStorage.setItem("btnVal", "filterC");
        }}
        style={{
          backgroundColor: active === "filterC" ? "#003585" : "#EFEFEF",
        }}
      >
        Filter by category
      </button>
      <button
        id="btn"
        onClick={() => {
          navigate("/filterByBrand");
          setActive("filterB");
          localStorage.setItem("btnVal", "filterB");
        }}
        style={{
          backgroundColor: active === "filterB" ? "#003585" : "#EFEFEF",
        }}
      >
        Filter by brand
      </button>
      <button
        id="btn"
        onClick={() => {
          navigate("/addProduct");
          setActive("addP");
          localStorage.setItem("btnVal", "addP");
        }}
        style={{ backgroundColor: active === "addP" ? "#003585" : "#EFEFEF" }}
      >
        Add product
      </button>
    </div>
  );
}
