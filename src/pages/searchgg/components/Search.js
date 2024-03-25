import React, { useEffect, useState } from "react";
import { Col, Row, Button, Form, Input, Space, Select, Spin } from "antd";

import { getDataSearch } from "../api";
import { useRecoilState } from "recoil";
import { Loading, Data, typeSearch } from "../state";
export default function Search() {
  const [q, setQ] = useState("");
  const [type, setType] = useRecoilState(typeSearch);
  const [form] = Form.useForm();
  const [loading, setLoading] = useRecoilState(Loading);
  const [data, setData] = useRecoilState(Data);

  const options = [
    { value: "search", label: "Tìm kiếm" },
    { value: "images", label: "Hình ảnh" },
    { value: "videos", label: "Video" },
    { value: "places", label: "Địa điểm" },
    { value: "news", label: "Tin tức" },
    { value: "shopping", label: "Mua sắm" },
    { value: "scholar", label: "Học Giả" },
  ];
  const onFinish = async () => {
    setLoading(true);
    const data = JSON.stringify({
      gl: "vn",
      hl: "vi",
      q: q,
      engine: "google",
      num: "100",
    });
    const res = await getDataSearch(type, data);
    setData(res?.data);
    setLoading(false);
  };

  const onChangeFormSearch = (e) => {
    const value = e.target.value;
    setQ(value);
  };

  const handleChangeType = (value) => {
    setType(value);
  };

  return (
    <Row
      style={{
        border: "1px solid #000",
        padding: 20,
        marginBottom: 20,
        borderRadius: 20,
      }}
    >
      <Col span={24}>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item name="type">
            <div>Loại tìm kiếm</div>
            <Select
              defaultValue={"search"}
              onChange={handleChangeType}
              options={options}
            />
          </Form.Item>
          <Form.Item name="search">
            <div>Nội dung tìm kiếm</div>
            <Input
              placeholder="nội dung "
              name="search"
              onChange={onChangeFormSearch}
            />
          </Form.Item>

          <Form.Item style={{ textAlign: "center" }}>
            <Space>
              <Button type="primary" htmlType="submit">
                Tìm kiếm
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
