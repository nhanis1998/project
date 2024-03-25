import axios from "axios";

export default async function fetcher(...args) {
  try {
    const response = await axios(...args);
    return response;
  } catch (error) {
    return error;
  }
}

export async function GetIPNow() {
  const options = {
    method: "GET",
    url: `https://ipapi.co/ip/`,
  };
  const response = await fetcher(options).catch((err) => err);
  if (response instanceof Error) {
    return response;
  }
  return response;
}
