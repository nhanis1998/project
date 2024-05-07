import axios from "axios";
const keyApi = "bb059e3eedc7e6bfb3163154294b16b9";
export default async function fetcher(...args) {
  try {
    const response = await axios(...args);
    return response;
  } catch (error) {
    return error;
  }
}

export async function getCoordinates(data) {
  const options = {
    method: "GET",
    url: `http://api.openweathermap.org/geo/1.0/direct?q=${data}&appid=${keyApi}`,
  };
  const response = await fetcher(options).catch((err) => err);
  if (response instanceof Error) {
    return response;
  }
  return response;
}

export async function getForecast5Day(data) {
  const options = {
    method: "GET",
    url: `http://api.openweathermap.org/data/2.5/forecast?lat=${data.data[0].lat}&lon=${data.data[0].lon}&units=metric&lang=vi&appid=${keyApi}`,
  };
  const response = await fetcher(options).catch((err) => err);
  if (response instanceof Error) {
    return response;
  }
  return response;
}

export async function getCurrentWeather(data) {
  const options = {
    method: "GET",
    url: `https://api.openweathermap.org/data/2.5/weather?lat=${data.data[0].lat}&lon=${data.data[0].lon}&units=metric&lang=vi&appid=${keyApi}`,
  };
  const response = await fetcher(options).catch((err) => err);
  if (response instanceof Error) {
    return response;
  }
  return response;
}
