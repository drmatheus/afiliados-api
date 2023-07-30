import { z } from "zod";
import { affiliatedOperationSchemaWithId } from "./affilietedOperations.schema";

export const userSchema = z.object({
  name: z.string(),
  password: z.string(),
  email: z.string().email(),
});

export const userReturnSchema = userSchema.omit({ password: true }).extend({
  id: z.string(),
  affiliatedOperations: z.array(affiliatedOperationSchemaWithId).optional(),
});
