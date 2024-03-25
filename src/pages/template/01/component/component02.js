import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { stepState, dataDetail } from "../stateRecoil";
import { Button, Col, Form, Input, Row, Modal } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
export default function Component02(props) {
  const [step, setStep] = useRecoilState(stepState);
  const data = useRecoilValue(dataDetail);
  useEffect(() => console.log(data), []);
  const languages = data?.languages;
  const languageList = Object.keys(languages).map((code) => {
    return (
      <ul>
        <li>
          {code}: {languages[code]}
        </li>
      </ul>
    );
  });
  return (
    <div>
      <div style={{ paddingTop: 20 }}>
        <div>Thông tin chi tiết về {data?.name?.common} </div>
        <Row>
          <Col span={8}>
            <div
              style={{
                borderRadius: 20,
                border: "1px solid #eee",
                padding: 20,
                margin: "20px 0",
                boxShadow: "0px 0px 5px darkgrey",
              }}
            >
              <p>Quốc gia: {data?.name?.common}</p>
              <p>Thủ đô: {data?.capital}</p>
              <p>Văn phòng: {data?.name?.official}</p>
              <p>Trạng thái: {data?.status}</p>
              <p>
                Chủ quyền:{" "}
                {data?.independent === true ? "Độc lập" : "Không độc lập"}
              </p>
            </div>
          </Col>
          <Col span={16}>
            <div
              style={{
                borderRadius: 20,
                border: "1px solid #eee",
                padding: 20,
                margin: "20px 0 20px 20px",
                boxShadow: "0px 0px 5px darkgrey",
                height: "31.5vh",
              }}
            >
              <p>Tên tiền tệ: {data?.currencies?.HKD?.name}</p>
              <p>Biểu tượng tiền tệ: {data?.currencies?.HKD?.symbol}</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div
              style={{
                borderRadius: 20,
                border: "1px solid #eee",
                padding: 20,
                margin: "20px 20px 0 0",
                boxShadow: "0px 0px 5px darkgrey",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p>Mã quốc gia cca2: {data?.cca2}</p>
                <p>Mã quốc gia ccn3: {data?.ccn3}</p>
                <p>Mã quốc gia cca3: {data?.cca3}</p>
                <p>Mã quốc gia cioc: {data?.cioc}</p>
                <p>Khu vực: {data?.region}</p>
                <p>Tiểu khu vực: {data?.subregion}</p>
                <p>Ngôn ngữ thông dụng: {languageList}</p>
                <p>
                  Biển:{" "}
                  {data?.landlocked === true ? "Giáp biển" : "Không giáp biển"}
                </p>
                <p>Link Bản đồ: </p>
                <ul>
                  <li>
                    <a href={data?.maps?.googleMaps}> Google maps</a>
                  </li>
                  <li>
                    <a href={data?.maps?.openStreetMaps}> Streets maps</a>
                  </li>
                </ul>
                <p>Múi giờ: {data?.timezones} </p>
              </div>
              <div>
                {data?.flags?.png || data?.flags?.svg ? (
                  <>
                    {" "}
                    <p>Lá Cờ</p>
                    <img
                      src={data?.flags?.png || data?.flags?.svg}
                      style={{ width: "20%" }}
                    />
                  </>
                ) : (
                  ""
                )}

                <br />
                {data?.coatOfArms?.png || data?.coatOfArms?.svg ? (
                  <>
                    {" "}
                    <p>Huy Hiệu</p>
                    <img
                      src={data?.coatOfArms?.png || data?.coatOfArms?.svg}
                      style={{ width: "20%" }}
                    />
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div></div>
    </div>
  );
}
