import { Table, Button } from "antd";
import React from "react";
import { data } from "./data";
import ExportList from "./exportList";
import TableToExcel from "@linways/table-to-excel";
import Header from "./header";

export default function Index_08() {
  const exportFileList = async () => {
    setTimeout(() => {
      TableToExcel.convert(document.getElementById("reportList"), {
        name: "table1.xlsx",
        sheet: {
          name: "Sheet 1",
        },
      });
    }, 1000);
  };
  const handleSubmit = () => {
    setTimeout(() => {
      exportFileList();
    }, 1000);
  };
  return (
    <div>
      <Header />
      <Button onClick={handleSubmit}> Xuất danh sách</Button>
      <Table dataSource={data}>
        <Table.Column
          title="ID"
          dataIndex="index"
          key="index"
          align="center"
          render={(text, record, index) => {
            return index + 1;
          }}
        />
        <Table.Column
          title="Frist Name"
          dataIndex="first_name"
          key="first_name"
          align="center"
          render={(text, record, index) => {
            return record.first_name;
          }}
        />
        <Table.Column
          title="Last Name"
          dataIndex="last_name"
          key="last_name"
          align="center"
          render={(text, record, index) => {
            return record.last_name;
          }}
        />
        <Table.Column
          title="Age"
          dataIndex="age"
          key="age"
          align="center"
          render={(text, record, index) => {
            return record.age;
          }}
        />
        <Table.Column
          title="Movies"
          dataIndex="movies"
          key="movies"
          align="center"
          render={(text, record, index) => {
            return record.movies;
          }}
        />
        <Table.Column
          title="Country"
          dataIndex="country"
          key="country"
          align="center"
          render={(text, record, index) => {
            return record.country;
          }}
        />
      </Table>

      <ExportList data={data} />
    </div>
  );
}
