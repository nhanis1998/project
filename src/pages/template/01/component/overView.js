import React, { useEffect } from "react";
import Component01 from "./component01";
import Component02 from "./component02";
import { stepState, dataAllCountries } from "../stateRecoil";
import { useRecoilState } from "recoil";
import { GetAllCountries } from "../api";
import { message } from "antd";
import Header from "./header";
export default function OverView() {
  const [step, setStep] = useRecoilState(stepState);
  const [data, setData] = useRecoilState(dataAllCountries);
  const renderStep = () => {
    switch (+step) {
      case 1:
        return <Component01 />;
      case 2:
        return <Component02 onBack={onBackStep} />;
    }
  };
  const onBackStep = () => {
    let currentStep = step;
    setStep(currentStep - 1);
    if (step === 1) return <Component01 />;
  };
  const renderHeader = () => {
    return <Header />;
  };
  useEffect(() => {
    async function getAllCountries() {
      const res = await GetAllCountries();
      if (res.status === 200) {
        setData(res.data);
      } else {
        message.error("Load data country");
      }
    }
    getAllCountries();
  }, []);
  return (
    <div>
      <div>{renderHeader()}</div>
      {renderStep()}
    </div>
  );
}
