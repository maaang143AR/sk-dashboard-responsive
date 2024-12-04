import axios from "axios";
import { ZodSchema } from "zod";

export const getRequest = async <T>(
  apiPath: string,
  Schema: ZodSchema<T>
): Promise<T> => {
  try {
    const response = await axios.get(apiPath);
    const result = response.data;
    Schema.parse(result);
    return result;
  } catch (error) {
    console.log("Error in Fetching Data");
    throw error;
  }
};
