import React, { useEffect } from "react";
import { data } from "./api/data";

export default function Index_07() {
  useEffect(() => {
    console.log(data);
  });

  // // Hàm sắp xếp data theo tuổi từ lớn dến nhỏ
  // useEffect(() => {
  //   const sortDescAge = (a, b) => b.age - a.age;
  //   const sortedDataDescAge = data.sort(sortDescAge);
  //   // console.log(sortedDataDescAge);
  // }, []);

  // // Hàm sắp xếp data theo tuổi từ nhỏ dến lớn
  // useEffect(() => {
  //   const sortAscAge = (a, b) => a.age - b.age;
  //   const sortedDataAscAge = data.sort(sortAscAge);
  //   // console.log(sortedDataAscAge);
  // }, []);

  // // Hàm sắp xếp data theo alphabet frist name
  // useEffect(() => {
  //   const sortAscFristName = data.sort((a, b) => {
  //     const fristName1 = a.first_name.toLocaleLowerCase();
  //     const fristName2 = b.first_name.toLocaleLowerCase();
  //     if (fristName1 < fristName2) return -1;
  //     if (fristName1 > fristName2) return 1;
  //   });
  //   // console.log(sortAscFristName);
  // }, []);

  // Hàm lọc data theo quốc gia
  // useEffect(() => {
  //   // console.log(data);
  //   const filterData = data.filter((data) => data.country === "USA");
  //   // console.log(filterData);
  // });

  return <></>;
}
