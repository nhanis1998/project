import React, { useEffect, useState } from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Table, Modal } from "antd";
import ModalDetail from "./ModalDetail";

export default function TableSearch(props) {
  const [value, setValue] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (id) => {
    setIsModalOpen(id);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    switch (props.type) {
      case "search":
        setValue(props.data?.organic);
        break;
      case "images":
        setValue(props.data?.images);
        break;
      case "videos":
        setValue(props.data?.videos);
        break;
      case "news":
        setValue(props.data?.news);
        break;
      case "places":
        setValue(props.data?.places);
        break;
      case "shopping":
        setValue(props.data?.shopping);
        break;
      case "scholar":
        setValue(props.data?.organic);
        break;
    }
  });

  return (
    <div>
      <Table pagination={true} dataSource={value}>
        <Table.Column
          title="ID"
          dataIndex="position"
          key="position"
          align="center"
          render={(text, record, index) => {
            return index + 1;
          }}
        />
        <Table.Column
          title="Tiêu đề"
          dataIndex="title"
          key="title"
          align="center"
          render={(text, record) => {
            return record?.title;
          }}
        />
        <Table.Column
          title="Mô tả "
          dataIndex="snippet"
          key="snippet"
          align="center"
          render={(text, record) => {
            return record?.snippet;
          }}
        />
        <Table.Column
          title="Chi tiết tin tức"
          dataIndex="link"
          key="link"
          align="center"
          render={(text, record, index) => {
            return (
              <>
                <ExclamationCircleOutlined
                  style={{ fontSize: 25 }}
                  onClick={() => {
                    showModal(index + 1);
                  }}
                />
                <ModalDetail
                  open={isModalOpen == index + 1}
                  ok={handleOk}
                  cancel={handleCancel}
                  key={+record.data?.position}
                  data={record}
                />
              </>
            );
          }}
        />
      </Table>
    </div>
  );
}
