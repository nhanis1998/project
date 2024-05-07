import { ShareAltOutlined } from "@ant-design/icons";
import { Button, Row, Col } from "antd";
import React from "react";
import "./style.css";
export default function Wellcome() {
  return (
    <div className="body_well">
      <header>
        <Button>
          <ShareAltOutlined />
          Share{" "}
        </Button>

        <div></div>
      </header>
    </div>
  );
}
