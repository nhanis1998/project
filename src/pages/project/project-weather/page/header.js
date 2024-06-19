import {
  Col,
  Dropdown,
  Row,
  Space,
  Button,
  Breadcrumb,
  List,
  Card,
} from "antd";
import React from "react";

export default function Header() {
  const items = [
    {
      key: "1",
      label: (
        <a target="_blank" rel="noopener noreferrer">
          Thời tiết hằng ngày
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a target="_blank" rel="noopener noreferrer">
          Thời tiết du lịch
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a target="_blank" rel="noopener noreferrer">
          Thời tiết thiên nhiên
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a target="_blank" rel="noopener noreferrer">
          Tin tổng hợp
        </a>
      ),
    },
    {
      key: "5",
      label: (
        <a target="_blank" rel="noopener noreferrer">
          Khám phá
        </a>
      ),
    },
  ];
  const data = [
    { id: 1, name: "Hiện tại" },
    { id: 2, name: "Theo giờ" },
    { id: 3, name: "Ngày mai" },
    { id: 4, name: "3 ngày tới" },
    { id: 5, name: "5 ngày tới" },
    { id: 6, name: "7 ngày tới" },
    { id: 7, name: "10 ngày tới" },
    { id: 8, name: "15 ngày tới" },
    { id: 9, name: "20 ngày tới" },
    { id: 10, name: "30 ngày tới" },
  ];
  return (
    <div>
      <Row
        style={{
          background: "#fff",
          boxShadow: "0 .25rem .75rem rgba(18,38,63,.08)",
        }}
      >
        <Col xs={4}>
          <Space>
            <p>Tỉnh/Thành phố</p>
          </Space>
        </Col>

        <Col xs={4}>
          <Space>
            <Dropdown
              menu={{
                items,
              }}
              placement="bottom"
              arrow
            >
              <p>Tin thời tiết </p>
            </Dropdown>
          </Space>
        </Col>
        <Col xs={4}>
          <Space>
            <p>Thời tiết hằng ngày</p>
          </Space>
        </Col>
        <Col xs={8}>
          <Space>
            <p>Thành phố hiện tại của bạn: Thành phố Hồ Chí Minh</p>
          </Space>
        </Col>
      </Row>
      <Row>
        <Col xs={24} style={{ paddingTop: 10 }}>
          <Breadcrumb
            items={[
              {
                title: "Trang chủ",
              },
              {
                title: <a href="">Hồ Chí Minh</a>,
              },
            ]}
          />
        </Col>
        <Col xs={24} style={{ paddingTop: 10 }}>
          <List
            grid={{
              gutter: 24,
              column: 10,
            }}
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <a>
                  <Card
                    style={{ textAlign: "center", padding: 5 }}
                    id={item.id}
                  >
                    {item.name}
                  </Card>
                </a>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </div>
  );
}
