import axios from "axios";
import { createClient } from "pexels";
const auth = createClient(
  "iyqvDaJ4KCPGLxkq322R6Ta80ij1idm63VkwPOnHYEYmZdwh1dxgeHcc"
);
export default async function fetcher(...arg) {
  try {
    const response = await axios(...arg);
    return response;
  } catch (error) {
    return error;
  }
}

export async function getDataImage(page, per_page) {
  const options = {
    method: "GET",
    url: "https://api.pexels.com/v1/curated?page=${page}&per_page=40",
    headers: {
      "Content-Type": "application/json",
      authorization: auth,
    },
  };
  const response = await fetcher(options).catch((err) => err);
  if (response instanceof Error) {
    return response;
  }
  return response;
}
