import React, { useEffect, useState, useForm } from "react";
import { Form, Col, Input, Button, DatePicker, Space, Radio } from "antd";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import moment from "moment";
export default function Component01() {
  const [form] = Form.useForm();

  const [dataEditor, setDataEditor] = useState([]);

  const [stateDataEditor, setStateDataEditor] = useState(
    EditorState.createEmpty()
  );
  const onEditorStateChange = (e) => {
    setStateDataEditor(e);
    const request = draftToHtml(convertToRaw(e.getCurrentContent()));
    setDataEditor({ request });
  };

  const handleSubmit = (e) => {
    const dataForm = {
      name: e.fullname,
      email: e.email,
      phone: e.phone,
      sex: e.sex,
      id: e.idCard,
      dob: moment(e).format("DD/MM/YYYY"),
    };
    const data = Object.assign(dataForm, dataEditor);
    console.log(data);

    // form.validateFields().then((values) => {
    //   console.log(values);
    // });
    // form.resetFields(); // reset form lại data ban đầu
    // setStateDataEditor(EditorState.createEmpty()); // reset phần editor thành rổng
  };
  const initialValues = {
    fullname: "",
    email: "",
    phone: "",
    sex: 1,
    idCard: "",
    dob: "",
  };

  const onChangeDate = (e) => {
    const date = moment(e).format("DD/MM/YYYY");
    console.log(date);
  };
  return (
    <>
      <Col
        xs={24}
        style={{ marginTop: 20, border: "1px solid #000", padding: 40 }}
      >
        <Form
          onFinish={handleSubmit}
          initialValues={initialValues}
          form={form}
          name="basic"
          labelCol={{ span: 3 }}
          wrapperCol={{ span: 24 }}
          style={{ maxWidth: 1200 }}
          autoComplete="off"
        >
          <Form.Item
            name="fullname"
            label="Họ và tên"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input name="fullname" />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Số điện thoại"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
              {
                pattern: /(((84|0)[3|5|7|8|9])+([0-9]{8})\b)/,
                message: "Invalid phone number format",
              },
            ]}
          >
            <Input name="phone" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please input your Email" },
              {
                pattern:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Invaild email format",
              },
            ]}
          >
            <Input name="email" />
          </Form.Item>
          <Form.Item
            name="dob"
            label="Ngày sinh"
            rules={[
              {
                required: true,
                message: "Please input your birthday",
              },
            ]}
          >
            <DatePicker
              onChange={onChangeDate}
              placeholder="Chọn ngày sinh"
              format="DD/MM/YYYY"
              style={{ width: "100%" }}
              size="medium"
            />
          </Form.Item>
          <Form.Item
            name="idCard"
            label="CCCD/Hộ Chiếu"
            rules={[
              {
                required: true,
                message: "Please input your ID",
              },
              {
                pattern: /^(0|[1-9]\d{10})\d$|^[A-Z][A-Z]\d{7}[A-Z]$/,
                message: "Sai định dạng CCCD hoặc Hộ Chiếu",
              },
            ]}
          >
            <Input name="id" />
          </Form.Item>
          <Form.Item
            name="sex"
            label="Giới tính"
            rules={[
              {
                required: true,
                message: "Please choose",
              },
            ]}
          >
            <Radio.Group>
              <Radio value={1}> Nam</Radio>
              <Radio value={2}> Nữ</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Gửi yêu cầu"
            name="request"
            rules={[
              {
                required: true,
                message: "Nhập nội dung yêu cầu",
              },
            ]}
          >
            <Editor
              editorState={stateDataEditor}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={onEditorStateChange}
              name="reason"
            />
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit">Gửi thông tin</Button>
          </Form.Item>
        </Form>
      </Col>
    </>
  );
}
