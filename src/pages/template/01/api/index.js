import axios from "axios";

export default async function fetcher(...args) {
  try {
    const response = await axios(...args);
    return response;
  } catch (error) {
    return error;
  }
}
// Lấy danh sách các quốc gia (tất cả)
export async function GetAllCountries() {
  const options = {
    method: "GET",
    url: `https://restcountries.com/v3.1/all`,
  };
  const response = await fetcher(options).catch((err) => err);
  if (response instanceof Error) {
    return response;
  }
  return response;
}

// Lấy danh sách các quốc gia theo Tên
export async function GetAllCountriesOfName(data) {
  const options = {
    method: "GET",
    url: `https://restcountries.com/v3.1/name/${data}`,
  };

  const response = await fetcher(options).catch((err) => err);
  if (response instanceof Error) {
    return response;
  }
  return response;
}

// Lấy danh sách các quốc gia theo Code
export async function GetAllCountriesOfCode(data) {
  const options = {
    method: "GET",
    url: `https://restcountries.com/v3.1/alpha/${data}`,
  };

  const response = await fetcher(options).catch((err) => err);
  if (response instanceof Error) {
    return response;
  }
  return response;
}
// Lấy danh sách các quốc gia theo Currency
export async function GetAllCountriesOfCurrency(data) {
  const options = {
    method: "GET",
    url: `https://restcountries.com/v3.1/currency/${data}`,
  };

  const response = await fetcher(options).catch((err) => err);
  if (response instanceof Error) {
    return response;
  }
  return response;
}
// Lấy danh sách các quốc gia theo Ngôn ngữ
export async function GetAllCountriesOfLanguage(data) {
  const options = {
    method: "GET",
    url: `https://restcountries.com/v3.1/lang/${data}`,
  };

  const response = await fetcher(options).catch((err) => err);
  if (response instanceof Error) {
    return response;
  }
  return response;
}
// Lấy danh sách các quốc gia theo Thủ Đô
export async function GetAllCountriesOfCapital(data) {
  const options = {
    method: "GET",
    url: `https://restcountries.com/v3.1/capital/${data}`,
  };

  const response = await fetcher(options).catch((err) => err);
  if (response instanceof Error) {
    return response;
  }
  return response;
}
// Lấy danh sách các quốc gia theo Vùng
export async function GetAllCountriesOfRegion(data) {
  const options = {
    method: "GET",
    url: `https://restcountries.com/v3.1/region/${data}`,
  };

  const response = await fetcher(options).catch((err) => err);
  if (response instanceof Error) {
    return response;
  }
  return response;
}
// Lấy danh sách các quốc gia theo Tiểu Vùng
export async function GetAllCountriesOfSubRegion(data) {
  const options = {
    method: "GET",
    url: `https://restcountries.com/v3.1/subregion/${data}`,
  };

  const response = await fetcher(options).catch((err) => err);
  if (response instanceof Error) {
    return response;
  }
  return response;
}
// Lấy danh sách các quốc gia theo Bản dịch
export async function GetAllCountriesOfTranslation(data) {
  const options = {
    method: "GET",
    url: `https://restcountries.com/v3.1/translation/${data}`,
  };

  const response = await fetcher(options).catch((err) => err);
  if (response instanceof Error) {
    return response;
  }
  return response;
}
// Lấy danh sách các quốc gia theo Tên
// Lấy danh sách các quốc gia theo Tên
// Lấy danh sách các quốc gia theo Tên
