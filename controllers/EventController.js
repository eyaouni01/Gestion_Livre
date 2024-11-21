import Event from "../models/Event.js"
import {validateEvent } from "../validators/eventValidateur.js";

// une fonction pour creer un evenement


export const createEvent = async (req, res) =>{
    // Validation des données avec Joi
    const { error } = validateEvent(req.body);
    if (error) {
      return res.status(400).json({
        message: "Validation des données échouée.",
        errors: error.details.map((detail) => detail.message),
      });
    }
  
    try {
      // Création et sauvegarde de l'événement
      const newEvent = new Event(req.body);
      const savedEvent = await newEvent.save();
  
      return res.status(201).json({
        message: "Événement créé avec succès.",
        data: savedEvent,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        message: "Erreur interne du serveur.",
        error: err.message,
      });
    }
  };
  
