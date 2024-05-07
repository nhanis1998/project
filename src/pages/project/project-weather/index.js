import React, { useEffect, useState } from "react";
import "../project-weather/style.css";
import iconUm from "../project-weather/images/icon-umberella.png";
import { getCoordinates, getCurrentWeather } from "./api/weather";
import { Row, Col, Input, Form, Button, message, Spin, Collapse } from "antd";
const { Search } = Input;
const { Panel } = Collapse;
export default function Weather() {
  const [coordi, setCoordi] = useState({});
  const [loading, setLoading] = useState(false);
  const [dataCurrent, setDataCurrent] = useState();
  const handleSearch = async (e) => {
    setLoading(true);
    const res = await getCoordinates(e);
    if (res.status === 200) {
      setCoordi({
        lat: res.data[0].lat,
        lon: res.data[0].lon,
        name: res.data[0].name,
      });
      const resCurrent = await getCurrentWeather(res);
      if (resCurrent.status === 200) {
        setDataCurrent(resCurrent.data);
        setLoading(false);
      } else {
        setLoading(false);
        message.error(
          "Có lỗi xảy ra về dữ liệu dự báo hiện tại,vui lòng thử lại sau.",
          4
        );
      }
    } else {
      setLoading(false);
      message.error("Có lỗi xảy ra về tọa độ, vui lòng thử lại sau.", 4);
    }
  };

  const convertTimestampToDate = (timestamp) => {
    const date = new Date(timestamp * 1000);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return formattedDate;
  };

  const convertVisible = (e) => {
    const res = e / 1000;
    return res;
  };

  const convertWind = (e) => {
    if (337.5 < e && e > 22.5) {
      return "Hướng Bắc";
    } else if (22.5 <= e && e < 67.5) {
      return "Hướng Đông Bắc";
    } else if (67.5 <= e && e < 112.5) {
      return "Hướng Đông ";
    } else if (112.5 <= e && e < 157.5) {
      return "Hướng Tây Bắc";
    } else if (157.5 <= e && e < 202.5) {
      return "Hướng Nam";
    } else if (202.5 <= e && e < 247.5) {
      return "Hướng Đông Nam";
    } else if (247.5 <= e && e < 292.5) {
      return "Hướng Tây";
    } else if (292.5 <= e && e < 337.5) {
      return "Hướng Tây Nam";
    } else {
      return "";
    }
  };

  // const convertSecondsToDateHour = (seconds) => {
  //   // Create a new Date object from the seconds multiplied by 1000 (milliseconds)
  //   const date = new Date(seconds * 1000);

  //   // Extract year, month, day, and hours components for formatting
  //   const year = date.getFullYear();
  //   const month = String(date.getMonth() + 1).padStart(2, "0"); // Add leading zero for single-digit months
  //   const day = String(date.getDate()).padStart(2, "0");
  //   const hours = String(date.getHours()).padStart(2, "0");

  //   // Format the date and hour according to your preference (YYYY-MM-DD HH)
  //   const formattedDate = `${year}-${month}-${day} ${hours}`;
  //   return formattedDate;
  // };

  // const convertToTimeZone = (timestamp, offsetSeconds) => {
  //   // Create a Date object from the timestamp in milliseconds
  //   const date = new Date(timestamp * 1000);

  //   // Add the offset seconds to the timestamp
  //   date.setTime(date.getTime() + offsetSeconds * 1000);

  //   // Format the date according to your preference
  //   const options = {
  //     year: "numeric",
  //     month: "2-digit",
  //     day: "2-digit",
  //     hour: "2-digit",
  //     minute: "2-digit",
  //   };
  //   const formattedDate = date.toLocaleDateString("en-US", options);

  //   return formattedDate;
  // };
  return (
    <Spin
      spinning={loading}
      tip={<div style={{ paddingTop: 20 }}>Loanding.....</div>}
    >
      <div>
        <Row>
          <Col xs={24}>
            <Search
              placeholder="Nhập vị trí"
              allowClear
              enterButton="Search"
              size="large"
              onSearch={handleSearch}
            />
          </Col>
        </Row>
      </div>
      <div style={{ paddingTop: 20 }}>
        {dataCurrent ? (
          <div class="forecast-table">
            <div class="container">
              <div class="forecast-container">
                <div class="today forecast">
                  <div class="forecast-header">
                    <div class="day">{dataCurrent?.name}</div>
                    <div class="date">
                      {convertTimestampToDate(dataCurrent?.dt)}
                    </div>
                    <div class="forecast-content">
                      <div class="location">{dataCurrent?.name}</div>
                      <div class="degree">
                        <div class="num">
                          {dataCurrent?.main?.temp}
                          <sup>o</sup>C
                        </div>
                        <div class="forecast-icon">
                          <img
                            src={`https://openweathermap.org/img/wn/${dataCurrent?.weather[0]?.icon}@2x.png`}
                            alt=""
                            style={{ width: 90 }}
                          />
                        </div>
                      </div>
                      <Row>
                        <Col xs={12}>
                          <ul>
                            <li>
                              Nhiệt độ cao nhất: {dataCurrent?.main?.temp_max}{" "}
                              <sup>o</sup>C
                            </li>
                            <li>
                              Nhiệt độ thấp nhất: {dataCurrent?.main?.temp_min}{" "}
                              <sup>o</sup>C
                            </li>
                            <li>
                              Áp suất khí quyển: {dataCurrent?.main?.pressure}{" "}
                              hPa
                            </li>
                            <li>Độ ẩm: {dataCurrent?.main?.humidity}%</li>
                            <li>Độ đục (mây): {dataCurrent?.clouds?.all}%</li>
                            <li>
                              Thời tiết chính hiện tại:{" "}
                              {dataCurrent?.weather[0]?.description}
                            </li>
                          </ul>
                        </Col>
                        <Col xs={12}>
                          <ul>
                            <li>
                              Giờ mặt trời mọc:{" "}
                              {convertTimestampToDate(dataCurrent?.sys.sunrise)}
                            </li>
                            <li>
                              Giờ mặt trời lặn:{" "}
                              {convertTimestampToDate(dataCurrent?.sys.sunset)}
                            </li>
                            <li>
                              Tầm nhìn:{" "}
                              {convertVisible(dataCurrent?.visibility)} km
                            </li>
                            <li>Tốc độ gió: {dataCurrent?.wind?.speed} m/s</li>
                            <li>
                              Hướng gió: {convertWind(dataCurrent?.wind?.deg)}
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </Spin>
  );
}
