import { z } from "zod";
import { getRequest } from "../helpers/api.helpers";
import { PlanProductionSchema } from "../schema/dashboard.schema";
const BASE_URL = import.meta.env.VITE_BACKEND_API;

const prefix = "dashboard";
export const getData = async (LineID: string) => {
  const data = await getRequest(
    `${BASE_URL}/${prefix}/${LineID}`,
    z.array(PlanProductionSchema)
  );
  return data;
};
