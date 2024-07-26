const mongoose = require('mongoose');

const estudanteSchema = new mongoose.Schema({
    nome: String,
    idade: Number,
    curso: String,
    // Adicione outros campos necessários
});

module.exports = mongoose.model('Estudante', estudanteSchema);