import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Button,
  Col,
  Modal,
  Table,
  Tag,
  Select,
  Row,
  message,
} from "antd";
import { useRecoilState, useRecoilValue } from "recoil";
import { InfoCircleOutlined } from "@ant-design/icons";
import {
  stepState,
  dataAllCountries,
  dataDetail,
  dataQuery,
} from "../stateRecoil";
import {
  GetAllCountriesOfName,
  GetAllCountriesOfCode,
  GetAllCountriesOfCurrency,
  GetAllCountriesOfLanguage,
  GetAllCountriesOfCapital,
  GetAllCountriesOfRegion,
  GetAllCountriesOfSubRegion,
  GetAllCountriesOfTranslation,
} from "../api";
export default function Component01() {
  const [step, setStep] = useRecoilState(stepState);
  const dataAllCountry = useRecoilValue(dataAllCountries);
  const [dataSearch, setDataSearch] = useState();
  const [detail, setDetail] = useRecoilState(dataDetail);
  const [typeFormSearch, setTypeFormSearch] = useState("");

  const handleSubmit = async (e) => {
    const q = e.title;
    switch (+typeFormSearch) {
      case 1:
        const responseName = await GetAllCountriesOfName(q);
        if (responseName.status === 200) {
          setDataSearch(responseName.data);
        } else {
          message.error("Not Found");
        }
        break;
      case 2:
        const responsCode = await GetAllCountriesOfCode(q);
        if (responsCode.status === 200) {
          setDataSearch(responsCode.data);
        } else {
          message.error("Not Found");
        }
        break;
      case 3:
        const responseCurrency = await GetAllCountriesOfCurrency(q);
        if (responseCurrency.status === 200) {
          setDataSearch(responseCurrency.data);
        } else {
          message.error("Not Found");
        }
        break;
      case 4:
        const responseLanguage = await GetAllCountriesOfLanguage(q);
        if (responseLanguage.status === 200) {
          setDataSearch(responseLanguage.data);
        } else {
          message.error("Not Found");
        }
        break;
      case 5:
        const responseCapital = await GetAllCountriesOfCapital(q);
        if (responseCapital.status === 200) {
          setDataSearch(responseCapital.data);
        } else {
          message.error("Not Found");
        }
        break;
      case 6:
        const responseRegion = await GetAllCountriesOfRegion(q);
        if (responseRegion.status === 200) {
          setDataSearch(responseRegion.data);
        } else {
          message.error("Not Found");
        }
        break;
      case 7:
        const responseSubRegion = await GetAllCountriesOfSubRegion(q);
        if (responseSubRegion.status === 200) {
          setDataSearch(responseSubRegion.data);
        } else {
          message.error("Not Found");
        }
        break;

      case 8:
        const responseTranslation = await GetAllCountriesOfTranslation(q);
        if (responseTranslation.status === 200) {
          setDataSearch(responseTranslation.data);
        } else {
          message.error("Not Found");
        }
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    console.log(dataSearch);
  }, [dataSearch]);
  const onChangeSelect = (e) => {
    setTypeFormSearch(e);
  };
  const handleSubmitRefesh = (e) => {
    setDataSearch(dataAllCountries);
  };
  return (
    <Col span={24}>
      <Form
        onFinish={handleSubmit}
        style={{
          padding: 20,
          background: "#f3f3f3",
          marginTop: 20,
          borderRadius: 20,
        }}
      >
        <Row>
          <Col span={24}>
            <span>Type: </span>
            <Form.Item>
              <Select
                style={{ width: "100%" }}
                onChange={onChangeSelect}
                options={[
                  { value: "1", label: "Name" },
                  { value: "2", label: "Code" },
                  { value: "3", label: "Currency" },
                  { value: "4", label: "Language" },
                  { value: "5", label: "Capital City" },
                  { value: "6", label: "Region" },
                  { value: "7", label: "Subregion" },
                  { value: "8", label: "Translation" },
                ]}
              />
            </Form.Item>
          </Col>

          <Col xs={24}>
            <span>Information to search for </span>
            <Form.Item
              name="title"
              rules={[
                {
                  required: true,
                  message: "Please provide the information you are looking for",
                },
              ]}
            >
              <Input name="title" />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item>
              <Button
                onSubmit={handleSubmit}
                htmlType="submit"
                className="btn-custom"
                block={true}
                style={{
                  background: "#c1d9d2",
                  color: "#2A3790",
                  height: "48px",
                }}
              >
                Search NOW !!!
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>

      <Table dataSource={dataSearch ? dataSearch : dataAllCountry}>
        <Table.Column
          title="Serial"
          dataIndex="serial"
          key="serial"
          render={(text, record, index) => index + 1}
        />
        <Table.Column
          title="Common Name"
          dataIndex="name.common"
          key="name.common"
          render={(text, record) => {
            if (record && record.name && record.name.common) {
              return record.name.common;
            }
          }}
        />
        <Table.Column
          title="Capital Name"
          dataIndex="capital"
          key="capital"
          render={(text, record) => {
            if (record && record.capital) {
              return record.capital;
            }
          }}
        />
        <Table.Column
          title="Offical Name"
          dataIndex="name.official"
          key="name.official"
          render={(text, record) => {
            if (record && record.name.official && record.name) {
              return record.name.official;
            }
          }}
        />
        <Table.Column
          title="View detail"
          render={(record) => {
            return (
              <>
                <InfoCircleOutlined
                  style={{ fontSize: 20 }}
                  onClick={() => {
                    setStep(step + 1);
                    setDetail(record);
                  }}
                />
              </>
            );
          }}
        />
      </Table>
    </Col>
  );
}
