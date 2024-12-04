import { z } from "zod";

export const PlanProductionSchema = z.object({
  LineCode: z.string(),
  // HourID: z.number(),
  Target: z.number(),
  HourlyProduction: z.number(),
  AchivedTarget: z.number(),
});

export type PlanProductionType = (typeof PlanProductionSchema)["_output"];
