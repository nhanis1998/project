import React, { useEffect, useState } from "react";
import Header from "./component/header";
import { GetIPNow, GetIpInfo } from "./api";
import { Form, Input, message, Row, Col, Button } from "antd";
export default function Index_02() {
  const [form] = Form.useForm();
  const [ipAddress, setIpAddress] = useState();
  const [ipAddressData, setIpAddressData] = useState({});
  const initialValues = { ipaddress: ipAddress };

  useEffect(() => {
    async function getIP() {
      const res = await GetIPNow();
      if (res.status !== 200) {
        message.warning("Có lỗi xảy ra. Thử lại sau");
      } else {
        setIpAddress(res.data);
      }
    }
    getIP();
  }, [ipAddress]);

  useEffect(() => {
    const getInfo = async (ip) => {
      const res = await GetIpInfo(ip);
      if (res.status !== 200) {
        message.warning("Có lỗi xảy ra. Thử lại sau");
      } else {
        setIpAddressData(res.data);
      }
    };
    getInfo(ipAddress);
  }, []);

  useEffect(() => console.log(ipAddressData), [ipAddressData]);

  return (
    <div>
      <Header />
      <div style={{ paddingTop: 20, textAlign: "center" }}>
        <h2
          style={{
            letterSpacing: 3,
            color: "#3544af",
            fontSize: 30,
            fontWeight: 100,
          }}
        >
          IP ADDRESS {ipAddress}
        </h2>
        <Form initialValues={initialValues} form={form}>
          <Form.Item name="ipaddress">
            <Input name="ipaddress" value={ipAddress} />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Search IP</Button>
          </Form.Item>
        </Form>
        <Row
          style={{
            border: "1px solid #eee",
            padding: "20px 10px",
            // display: "none",
          }}
        >
          <Col
            span={24}
            style={{
              textAlign: "left",
              letterSpacing: 5,
              fontSize: 15,
              marginLeft: 10,
            }}
          >
            IP LOCATION{" "}
          </Col>
          <Col span={6} style={{ padding: 10, textAlign: "left" }}>
            <label style={{ fontSize: 14 }}>IP Address</label>
            <p
              style={{
                color: "#4f57a3",
                fontWeight: 200,
                fontSize: 20,
                marginTop: 0,
              }}
            >
              {ipAddressData.query}
            </p>
          </Col>
          <Col span={6} style={{ padding: 10, textAlign: "left" }}>
            <label style={{ fontSize: 14 }}>Country</label>
            <p
              style={{
                color: "#4f57a3",
                fontWeight: 200,
                fontSize: 20,
                marginTop: 0,
              }}
            >
              {ipAddressData.country}
            </p>
          </Col>
          <Col span={6} style={{ padding: 10, textAlign: "left" }}>
            <label style={{ fontSize: 14 }}>Region</label>
            <p
              style={{
                color: "#4f57a3",
                fontWeight: 400,
                fontSize: 20,
                marginTop: 0,
              }}
            >
              {ipAddressData.region}
            </p>
          </Col>
          <Col span={6} style={{ padding: 10, textAlign: "left" }}>
            <label style={{ fontSize: 14 }}>Region Name</label>
            <p
              style={{
                color: "#4f57a3",
                fontWeight: 400,
                fontSize: 20,
                marginTop: 0,
              }}
            >
              {ipAddressData.regionName}
            </p>
          </Col>
          <Col span={6} style={{ padding: 10, textAlign: "left" }}>
            <label style={{ fontSize: 14 }}>City</label>
            <p
              style={{
                color: "#4f57a3",
                fontWeight: 400,
                fontSize: 20,
                marginTop: 0,
              }}
            >
              {ipAddressData.city}
            </p>
          </Col>
          <Col span={6} style={{ padding: 10, textAlign: "left" }}>
            <label style={{ fontSize: 14 }}>AS</label>
            <p
              style={{
                color: "#4f57a3",
                fontWeight: 400,
                fontSize: 20,
                marginTop: 0,
              }}
            >
              {ipAddressData.as}
            </p>
          </Col>
          <Col span={6} style={{ padding: 10, textAlign: "left" }}>
            <label style={{ fontSize: 14 }}>ZIP Code</label>
            <p
              style={{
                color: "#4f57a3",
                fontWeight: 400,
                fontSize: 20,
                marginTop: 0,
              }}
            >
              {" "}
              {ipAddressData.zip}
            </p>
          </Col>
          <Col span={6} style={{ padding: 10, textAlign: "left" }}>
            <label style={{ fontSize: 14 }}>Organization</label>
            <p
              style={{
                color: "#4f57a3",
                fontWeight: 400,
                fontSize: 20,
                marginTop: 0,
              }}
            >
              {ipAddressData.org}
            </p>
          </Col>
          <Col span={6} style={{ padding: 10, textAlign: "left" }}>
            <label style={{ fontSize: 14 }}>Time Zone</label>
            <p
              style={{
                color: "#4f57a3",
                fontWeight: 400,
                fontSize: 20,
                marginTop: 0,
              }}
            >
              Ho Chi Minh
            </p>
          </Col>
          <Col span={6} style={{ padding: 10, textAlign: "left" }}>
            <label style={{ fontSize: 14 }}>ASN</label>
            <p
              style={{
                color: "#4f57a3",
                fontWeight: 400,
                fontSize: 20,
                marginTop: 0,
              }}
            >
              Quan 8
            </p>
          </Col>
          <Col span={6} style={{ padding: 10, textAlign: "left" }}>
            <label style={{ fontSize: 14 }}>AS</label>
            <p
              style={{
                color: "#4f57a3",
                fontWeight: 400,
                fontSize: 20,
                marginTop: 0,
              }}
            >
              Ho Chi Minh
            </p>
          </Col>
          <Col span={6} style={{ padding: 10, textAlign: "left" }}>
            <label style={{ fontSize: 14 }}>ISP</label>
            <p
              style={{
                color: "#4f57a3",
                fontWeight: 400,
                fontSize: 20,
                marginTop: 0,
              }}
            >
              Quan 8
            </p>
          </Col>
          <Col span={6} style={{ padding: 10, textAlign: "left" }}>
            <label style={{ fontSize: 14 }}>Domain</label>
            <p
              style={{
                color: "#4f57a3",
                fontWeight: 400,
                fontSize: 20,
                marginTop: 0,
              }}
            >
              Quan 8
            </p>
          </Col>
          <Col span={6} style={{ padding: 10, textAlign: "left" }}>
            <label style={{ fontSize: 14 }}>Weather Station</label>
            <p
              style={{
                color: "#4f57a3",
                fontWeight: 400,
                fontSize: 20,
                marginTop: 0,
              }}
            >
              Quan 8
            </p>
          </Col>
          <Col span={6} style={{ padding: 10, textAlign: "left" }}>
            <label style={{ fontSize: 14 }}>Net Speed</label>
            <p
              style={{
                color: "#4f57a3",
                fontWeight: 400,
                fontSize: 20,
                marginTop: 0,
              }}
            >
              Quan 8
            </p>
          </Col>

          <Col span={6} style={{ padding: 10, textAlign: "left" }}>
            <label style={{ fontSize: 14 }}>IDD & Area Code</label>
            <p
              style={{
                color: "#4f57a3",
                fontWeight: 400,
                fontSize: 20,
                marginTop: 0,
              }}
            >
              Quan 8
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}
