import TableToExcel from "@linways/table-to-excel";
export function exportTableExcel(tableID, fileName = "") {
  TableToExcel.convert(document.getElementById(tableID), { name: fileName });
}
