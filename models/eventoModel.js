const mongoose = require('mongoose');

const EventoSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  attendance: {
    type: String,
    enum: ['yes', 'no'],
    required: true,
  },
  attendees: {
    type: Number,
    required: true,
    min: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Evento = mongoose.model('Evento', EventoSchema);

module.exports = Evento;
