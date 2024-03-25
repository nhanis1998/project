import { Spin } from "antd";
import React from "react";
import Search from "./Search";
import TableSearch from "./TableSearch";
import { useRecoilValue } from "recoil";
import { Loading, Data, typeSearch } from "../state";

export default function OverView() {
  const loading = useRecoilValue(Loading);
  const dataTable = useRecoilValue(Data);
  const type = useRecoilValue(typeSearch);
  return (
    <Spin spinning={loading}>
      <Search />
      <TableSearch data={dataTable} type={type} />
    </Spin>
  );
}
