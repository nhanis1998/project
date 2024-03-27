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
          <p>Tính năng xuất excel </p>
          <p>Plugin: https://www.npmjs.com/package/@linways/table-to-excel</p>
        </Modal>
      </div>
    </div>
  );
}
