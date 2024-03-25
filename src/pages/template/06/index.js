import React, { useEffect } from "react";
import Header from "./components/header";
import { Outlet } from "react-router-dom";
import { RecoilRoot } from "recoil";
export default function Index_06() {
  return (
    <RecoilRoot>
      <div style={{ width: "100%" }}>
        <Header />
        <Outlet />
      </div>
    </RecoilRoot>
  );
}
