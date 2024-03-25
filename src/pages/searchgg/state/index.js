import { atom } from "recoil";

export const Loading = atom({
  key: "loading",
  default: false,
});

export const Data = atom({
  key: "data",
  default: [],
});

export const typeSearch = atom({
  key: "type",
  default: "search",
});
