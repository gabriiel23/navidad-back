const Evento = require('../models/eventoModel');

exports.createEvento = async (req, res) => {
  try {
    const { firstName, lastName, attendance, attendees } = req.body;

    const nuevoEvento = new Evento({
      firstName,
      lastName,
      attendance,
      attendees,
    });

    const evento = await nuevoEvento.save();
    res.status(201).json({ message: 'Evento creado exitosamente', evento });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllEventos = async (req, res) => {
  try {
    const eventos = await Evento.find();
    res.status(200).json(eventos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEventoById = async (req, res) => {
  try {
    const evento = await Evento.findById(req.params.id);
    if (!evento) return res.status(404).json({ error: 'Evento no encontrado' });
    res.status(200).json(evento);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateEvento = async (req, res) => {
  try {
    const evento = await Evento.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!evento) return res.status(404).json({ error: 'Evento no encontrado' });
    res.status(200).json({ message: 'Evento actualizado exitosamente', evento });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteEvento = async (req, res) => {
  try {
    const evento = await Evento.findByIdAndDelete(req.params.id);
    if (!evento) return res.status(404).json({ error: 'Evento no encontrado' });
    res.status(200).json({ message: 'Evento eliminado exitosamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
