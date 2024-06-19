import { Button, Input } from "antd";
import React, { useState } from "react";
import * as XLSX from "xlsx";

export default function Index_09() {
  const [file, setFile] = useState();
  const [data, setData] = useState([]);

  const handleChangeFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
    }
  };

  const handleDisplayData = () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = event.target.result;
        const workbook = XLSX.read(data, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
        setData(sheetData);
      };
      reader.readAsBinaryString(file);
    }
  };

  return (
    <div>
      <Input type="file" accept="*" onChange={handleChangeFile} />
      <br />
      <button onClick={handleDisplayData}>Hiển thị dữ liệu</button>

      {data.length > 0 && (
        <table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                {Object.keys(row).map((key) => (
                  <td key={key}>{row[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
