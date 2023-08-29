import axios from "axios";
import { BACKEND_URL } from "@/constants/config";

export async function sendSupportEmail(body: any): Promise<boolean> {
  const API = `${BACKEND_URL}/reelife/support`;

  console.log("API", API);
  console.log("body", body);

  return axios
    .post(API, body)
    .then((response) => {
      return response.data;
    })
    .then((responseJson) => {
      return Promise.resolve(responseJson);
    })
    .catch((error) => {
      const result = error.result;
      return Promise.reject(result);
    });
}
