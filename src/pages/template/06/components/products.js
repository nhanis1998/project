import React from "react";
import { Link, Outlet } from "react-router-dom";
import { data } from "../data/data";
import { Col, Row } from "antd";
export default function Products() {
  return (
    <Row justify="start" style={{ textAlign: "center", paddingTop: 20 }}>
      {data.map((item) => (
        <Col span={6} style={{ marginTop: 20 }}>
          {" "}
          <Link to={`/template06/products/${item.id}`} key={item.id}>
            <img src={item.image} alt={item.name} width={200} />
            <br />
            {item.name}
          </Link>
        </Col>
      ))}
    </Row>
  );
}
