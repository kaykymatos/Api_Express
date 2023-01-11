import { body } from "express-validator";

export const movieCreateValidation = () => {
  return [
    body("title")
      .isString()
      .withMessage("O Título é obrigatório!")
      .isLength({ min: 5 })
      .withMessage("O Título deve conter no mínimo 5 caracteres!"),

    body("rating")
      .isNumeric()
      .withMessage("A Nota é precisa ser um número!")
      .custom(validaNota),

    body("description")
      .isString()
      .withMessage("A Descrição é obrigatório!")
      .isLength({ min: 10 })
      .withMessage("A Descrição deve conter no mínimo 10 caracteres!"),

    body("director")
      .isString()
      .withMessage("O nome do Diretor é obrigatório!")
      .isLength({ min: 5 })
      .withMessage("A Descrição deve conter no mínimo 5 caracteres!"),

    body("stars")
      .isArray()
      .withMessage("O nome das estrelas esta em formato inválido!")
      .isLength({ min: 5 })
      .withMessage(
        "Cada nome das estrelas deve conter no mínimo 5 caracteres cada uma!"
      ),

    body("poster")
      .isString()
      .withMessage("O Poster é obrigatório!")
      .isLength({ min: 5 })
      .withMessage("O Poster deve conter no mínimo 5 caracteres!"),
  ];
};

const validaNota = (value: number) => {
  if (value < 0 || value > 10) {
    throw new Error("A nota precisa estar entre 0 e 10!");
  } else {
    return true;
  }
};
