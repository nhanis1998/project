import React from "react";

export default function ExportList(props) {
  return (
    <div>
      <table id={"reportList"} style={{ display: "none" }}>
        <thead>
          <tr>
            <th
              data-f-name={"Times new roman"}
              data-f-sz={"16"}
              data-b-a-s={"thin"}
              data-f-bold={true}
            >
              STT
            </th>
            <th
              data-f-name={"Times new roman"}
              data-f-sz={"16"}
              data-b-a-s={"thin"}
              data-f-bold={true}
            >
              First Name
            </th>
            <th
              data-f-name={"Times new roman"}
              data-f-sz={"16"}
              data-b-a-s={"thin"}
              data-f-bold={true}
            >
              Last Name
            </th>
            <th
              data-f-name={"Times new roman"}
              data-f-sz={"16"}
              data-b-a-s={"thin"}
              data-f-bold={true}
            >
              Age
            </th>
            <th
              data-f-name={"Times new roman"}
              data-f-sz={"16"}
              data-b-a-s={"thin"}
              data-f-bold={true}
            >
              Movies
            </th>
            <th
              data-f-name={"Times new roman"}
              data-f-sz={"16"}
              data-b-a-s={"thin"}
              data-f-bold={true}
            >
              Country
            </th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item, index) => {
            return (
              <tr>
                <th>{index + 1}</th>
                <th>{item.first_name}</th>
                <th>{item.last_name}</th>
                <th>{item.age}</th>
                <th>{item.movies}</th>
                <th>{item.country ? item.country : "No data"}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
