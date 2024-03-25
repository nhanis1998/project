import React from "react";
import { Row, Col } from "antd";
import "../components/style.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <div style={{ background: "#414558" }}>
        <Row
          style={{
            padding: 5,
            width: 1200,
            margin: "0 auto",
            padding: "5px 0",
          }}
        >
          <Col
            span={24}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "5px 0",
              color: "#fff",
            }}
          >
            <div style={{ paddingRight: 30 }}>Sign in / Guest</div>
            <div>Create Account</div>
          </Col>
        </Row>
      </div>
      <div style={{ backgroundColor: "#181920 " }}>
        <Row
          style={{
            padding: 5,
            width: 1200,
            margin: "0 auto",
          }}
        >
          <Col span={4}>
            <div
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <span
                style={{
                  border: "1px solid #fff",
                  textAlign: "center",
                  padding: "10px 20px",
                  borderRadius: 15,
                  background: "#fff",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                N
              </span>
            </div>
          </Col>
          <Col span={16}>
            <ul
              style={{
                display: "flex",
                listStyleType: "none",
                justifyContent: "space-evenly",
              }}
            >
              <li>
                <Link to="/template06" style={{ color: "#fff" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/template06/about" style={{ color: "#fff" }}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/template06/products" style={{ color: "#fff" }}>
                  Product
                </Link>
              </li>
              <li>
                <Link to="/template06/cart" style={{ color: "#fff" }}>
                  Cart
                </Link>
              </li>
            </ul>
          </Col>
          <Col
            span={4}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "5px 0",
              color: "#fff",
            }}
          >
            <ShoppingCartOutlined style={{ color: "#fff", fontSize: 20 }} />
          </Col>
        </Row>
      </div>
    </div>
  );
}
