import { atom } from "recoil";

export const pageState = atom({
  key: "page",
  default: 0,
});

export const dataPageState = atom({
  key: "data",
  default: {},
});
