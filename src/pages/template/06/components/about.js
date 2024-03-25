import React from "react";
import { Col, Row } from "antd";
export default function About() {
  return (
    <div>
      <Row>
        <Col
          span={12}
          offset={6}
          style={{ textAlign: "center", paddingTop: 50 }}
        >
          <div style={{ fontSize: 40, fontWeight: 900 }}>
            We love{" "}
            <span
              style={{
                padding: 10,
                background: "#ff7875",
                letterSpacing: 2,
                borderRadius: 10,
                fontSize: 25,
              }}
            >
              comfy
            </span>
          </div>
          <div
            style={{
              paddingTop: 20,
              textAlign: "start",
              margin: "0 20%",
              fontSize: 15,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            quae quam blanditiis vitae, dolor non eveniet ipsum voluptatibus,
            quia optio aut! Perferendis ipsa cumque ipsam nostrum reprehenderit
            ad illo sed officiis ea tempore! Similique eos minima sit porro,
            ratione aspernatur!
          </div>
        </Col>
      </Row>
    </div>
  );
}
