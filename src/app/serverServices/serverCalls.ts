import { BASE_URL } from "@/utils/generateMetaData";
import axios from "axios";

export const serverPostRequest = async (object: any, classPath: string) => {
  try {
    const response = await axios.post(BASE_URL + classPath, object, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Response:", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const serverGetWithBareGet = async (
  params: any,
  classPath: string,
  token: string,
) => {
  try {
    const response = await axios.get(BASE_URL + classPath, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      params: params,
    });

    console.log("Response:", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const serverGetWithBarePost = async (
  params: any,
  classPath: string,
  token: string,
) => {
  try {
    const response = await fetch(BASE_URL + classPath, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Response:", JSON.stringify(data));
    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};