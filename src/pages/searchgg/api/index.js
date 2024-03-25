import axios from "axios";

export default async function fetcher(...args) {
  try {
    const response = await axios(...args);
    return response;
  } catch (error) {
    return error;
  }
}

export async function getDataSearch(type, data) {
  const options = {
    method: "POST",
    url: `https://google.serper.dev/${type}`,
    headers: {
      "X-API-KEY": "ed83369beadd68a9f7d0dd69192ff84d0c9b23ef",
      "Content-Type": "application/json",
    },
    data: data,
  };
  const response = await fetcher(options).catch((err) => err);
  if (response instanceof Error) {
    return response;
  }
  return response;
}
