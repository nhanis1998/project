import { Modal, Table, Button, Rate } from "antd";
import React from "react";
import { FieldTimeOutlined, InfoCircleOutlined } from "@ant-design/icons";
export default function ModalDetail(props) {
  return (
    <Modal
      title={props.data.title}
      open={props.open}
      onOk={props.ok}
      onCancel={props.cancel}
      key={+props.key}
      width="1200px"
      footer={[
        <Button key="back" onClick={props.cancel}>
          Quay lại
        </Button>,
        <Button key="submit" type="primary">
          <a href={props.data.link} target="_blank">
            Liên kết web
          </a>
        </Button>,
      ]}
    >
      {props.data.date && (
        <div>
          <FieldTimeOutlined style={{ fontSize: 15, paddingRight: 5 }} />
          {props.data.date}
        </div>
      )}
      {props.data.source && (
        <div>
          <p style={{ fontWeight: 500 }}>
            <InfoCircleOutlined style={{ fontSize: 15, paddingRight: 5 }} />
            Nguồn: {props.data.source}
          </p>
        </div>
      )}
      {props.data.channel && (
        <div>
          <p style={{ fontWeight: 500 }}>
            <InfoCircleOutlined style={{ fontSize: 15, paddingRight: 5 }} />
            Kênh: {props.data.channel}
          </p>
        </div>
      )}
      {props.data.duration && (
        <div>
          <p style={{ fontWeight: 500 }}>
            <InfoCircleOutlined style={{ fontSize: 15, paddingRight: 5 }} />
            Thời gian: {props.data.duration}
          </p>
        </div>
      )}
      {props.data.section && (
        <div>
          <InfoCircleOutlined style={{ fontSize: 15, paddingRight: 5 }} />
          {props.data.section}
        </div>
      )}
      <br />
      {props.data.imageUrl && (
        <img
          src={props.data.imageUrl}
          style={{ width: props.data.imageWidth ? props.data.imageWidth : 500 }}
        />
      )}
      <br />
      {props.data.snippet && (
        <div>
          <span style={{ fontSize: 12, fontWeight: "500", paddingRight: 5 }}>
            Đoạn trích ngắn tin tức:
          </span>
          {props.data.snippet}
        </div>
      )}
      {props.data.link && (
        <div>
          <span style={{ fontSize: 12, fontWeight: "500", paddingRight: 5 }}>
            Link liên kết:
          </span>
          <a href={props.data.link} target="_blank">
            {props.data.link}
          </a>
        </div>
      )}
      {props.data.address && <div>Địa chỉ: {props.data.address}</div>}
      {props.data.category && <div>Danh mục: {props.data.category}</div>}
      {props.data.rating && (
        <div>
          Đánh giá: <Rate disabled allowHalf defaultValue={props.data.rating} />
        </div>
      )}
      {props.data.ratingCount && (
        <div>Lượt đánh giá: {props.data.ratingCount}</div>
      )}
    </Modal>
  );
}
