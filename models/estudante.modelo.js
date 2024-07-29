const mongoose = require('mongoose');

const estudanteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true, 
        lowercase: true 
    },
    password: {
        type: String,
        required: true
    }
});



module.exports = mongoose.model('Estudante', estudanteSchema);