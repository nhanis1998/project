import axios from "axios";

export default async function fetcher(...args) {
  try {
    const response = await axios(...args);
    return response;
  } catch (error) {
    return error;
  }
}
