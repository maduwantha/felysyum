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

export const serverGetWithBare = async (
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
