import React, { useState } from "react";

import { Button, Col, Modal } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div style={{ borderBottom: "1px solid #000", paddingBottom: 20 }}>
        <Col style={{ display: "flex", justifyContent: "space-between" }}>
          <Button onClick={showModal}>
            Document Information
            <InfoCircleOutlined />
          </Button>
        </Col>
        <Modal
          title="Infomation basic"
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
        >
          <p>Title : image and video library</p>
          <p>
            API Using:{" "}
            <a
              href="https://www.pexels.com/vi-vn/api/documentation/#"
              target="_blank"
            >
              Pexels API
            </a>
          </p>
        </Modal>
      </div>
    </div>
  );
}
