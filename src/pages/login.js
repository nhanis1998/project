import { Form, Input, Button, message } from "antd";
import React from "react";
import IMG_LOGIN from "../asset/img/image_login.jpg";

export default function Login() {
  const [formLogin] = Form.useForm();

  const handleLogin = (e) => {
    console.log(e);
  };
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          // height: "100%",
          zIndex: "-1",
          position: "fixed",
        }}
      >
        <source
          src="https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr"
          type="video/mp4"
        />
      </video>

      <div>
        <div
          style={{
            // backgroundColor: "rgba(0, 0, 0, 0.4)",
            color: "white",
            fontWeight: "bold",
            position: "absolute",
            top: " 50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            width: "80%",
            padding: "20p",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: 960,
              // background: "#fff",
              backgroundColor: "rgb(255 255 255 / 20%)",
              margin: "0 auto",
              padding: "177px 130px 33px 95px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <img src={IMG_LOGIN} />
            </div>
            <div style={{ width: "50%" }}>
              <div
                className="title"
                style={{
                  fontSize: 25,
                  background:
                    "linear-gradient(to right, #30CFD0 0%, #330867 100%)",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Member Login
              </div>
              <Form form={formLogin} onFinish={handleLogin}>
                <Form.Item name="username">
                  <p
                    style={{
                      color: "#fff",
                      textAlign: "left",
                      background:
                        "linear-gradient(to right, #30CFD0 0%, #330867 100%)",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    Username <span style={{ color: "red" }}>*</span>{" "}
                  </p>
                  <Input />
                </Form.Item>
                <Form.Item name="password">
                  <p style={{ color: "#fff", textAlign: "left" }}>
                    Username <span style={{ color: "red" }}>*</span>{" "}
                  </p>
                  <Input.Password />
                </Form.Item>

                <Button htmlType="submit">Sign Up</Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
