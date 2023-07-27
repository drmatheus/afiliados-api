// import { z } from "zod";

// const affiliatedOperationSchema = z.object({
//   type: z.string(),
//   date: z
//     .string()
//     .regex(
//       /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}-\d{2}:\d{2}$/,
//       "Invalid format to date"
//     ),
//   product: z.string().max(30).nonempty("Product must be informed"),
//   value: z
//     .string()
//     .length(10, "Value must contain exactly 12 character(s)")
//     .refine((value) => !isNaN(Number(value)), {
//       message: "Value content is not a number",
//     }),
//   seller: z.string().nonempty("Seller must be informed"),
// });

// export const affiliatedOperationArraySchema = z.array(
//   affiliatedOperationSchema
// );

import { z } from "zod";

const affiliatedOperationSchema = z.object({
  type: z.string({ description: "O tipo deve ser uma string" }).refine(
    (data) => {
      const operationsTypes = ["1", "2", "3", "4", 1, 2, 3, 4];
      return operationsTypes.includes(data);
    },
    `Os tipos de operações aceitas são: 
    1 para Venda produtor 
    2 para Venda afiliado 
    3 para Comissão paga 
    4 para Comissão recebida`
  ),
  date: z
    .string()
    .regex(
      /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}-\d{2}:\d{2}$/,
      "A data deve estar no formato 'AAAA-MM-DDTHH:mm:ss-ZZ:ZZ'"
    ),
  product: z
    .string()
    .max(30, "O produto não pode ter mais de 30 caracteres")
    .nonempty("O produto deve ser informado"),
  value: z
    .string()
    .length(10, "O valor deve conter exatamente 10 caracteres")
    .refine((value) => !isNaN(Number(value)), {
      message: "O conteúdo do valor não é um número",
    }),
  seller: z.string().nonempty("O vendedor deve ser informado"),
});

export const affiliatedOperationArraySchema = z.array(
  affiliatedOperationSchema
);
