import { atom, selector } from "recoil";

export const recoilCount = atom({
  key: "count",
  default: 0,
});

export const recoilSelector = selector({
  key: "recoilSelector",
  get: ({ get }) => get(recoilCount) * 100,
});

export const stepState = atom({
  key: "stepState",
  default: 1,
});

export const listStep = [
  {
    step: 1,
  },
  {
    step: 2,
  },
];

export const dataForm = atom({
  key: "data",
  default: {},
});

export const recoilSelectorData = selector({
  key: "recoilSelectorData",
  get: ({ get }) => get(dataForm),
});

export const dataAllCountries = atom({
  key: "allCountry",
  default: [],
});

export const dataDetail = atom({
  key: "datadetail",
  default: "",
});

export const dataQuery = atom({
  key: "datasearch",
  default: [],
});
