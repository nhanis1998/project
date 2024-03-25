import { Spin } from "antd";
import React from "react";
import OverView from "./components/OverView";
import { RecoilRoot } from "recoil";
export default function SearchGG() {
  return (
    <RecoilRoot>
      <OverView />
    </RecoilRoot>
  );
}
