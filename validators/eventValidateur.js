import Joi from "joi";

export const validateEvent = (data) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(100).required().messages({
      "string.base": "Le titre doit être une chaîne de caractères.",
      "string.empty": "Le titre est obligatoire.",
      "string.min": "Le titre doit contenir au moins 3 caractères.",
      "string.max": "Le titre ne peut pas dépasser 100 caractères.",
      "any.required": "Le titre est requis.",
    }),
    startDate: Joi.date().required().messages({
      "date.base": "La date de début doit être une date valide.",
      "any.required": "La date de début est requise.",
    }),
    endDate: Joi.date()
      .greater(Joi.ref("startDate"))
      .required()
      .messages({
        "date.base": "La date de fin doit être une date valide.",
        "date.greater": "La date de fin doit être postérieure à la date de début.",
        "any.required": "La date de fin est requise.",
      }),
  });

  return schema.validate(data, { abortEarly: false });
};
