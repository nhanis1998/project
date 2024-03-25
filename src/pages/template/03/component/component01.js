import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "antd";
import "./style.css";
import { useRecoilState } from "recoil";
import { pageState, dataPageState } from "../stateRecoil";
export default function Component01() {
  const [page, setPage] = useRecoilState(pageState);
  const [data, setData] = useRecoilState(dataPageState);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <>
      <div style={{ paddingTop: 20 }}>
        <Row>
          <Col xs={4}>
            <div
              style={{
                padding: 20,
                border: "1px solid #000",
                textAlign: "center",
                width: "80%",
              }}
            >
              <div className="container">
                <img
                  src="https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg"
                  alt="Avatar"
                  className="image"
                  style={{ width: "100%" }}
                />
                <div className="middle">
                  <div className="text">John Doe</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            xs={24}
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: 20,
            }}
          >
            <Button
              onClick={() => {
                setPage(page - 1);
              }}
            >
              Prev
            </Button>
            {page}
            <Button onClick={() => handleNextPage()}>Next</Button>
          </Col>
        </Row>
      </div>
    </>
  );
}
