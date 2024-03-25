import React, { useEffect, useState } from "react";
import Header from "./component/header";
import { GetIPNow } from "./api";
import { Form, Input, message } from "antd";
export default function Index_02() {
  const [data, setData] = useState();
  useEffect(() => {
    async function getIpNow() {
      const res = await GetIPNow();
      if (res.status === 200) {
        setData(res.data);
      } else {
        message.error("Có lỗi xảy ra, vui lòng thử lại");
      }
    }
    getIpNow();
  }, []);
  return (
    <div>
      <Header />
      <div style={{ paddingTop: 20 }}>
        <Form>
          <Form.Item>
            <div>IP hiện tại:</div>
            <Input value={data} />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
