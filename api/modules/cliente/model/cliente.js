const { database } = require('oi-node-api-framework');
const mongoose     = require('mongoose');
const connection   = database.connections.aplicacao || mongoose;

const schema = mongoose.Schema({
    nome: String,
}, {
    collection: 'clientes'
});

module.exports = connection.model('Cliente', schema);
