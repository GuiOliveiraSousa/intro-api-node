
const db = require('../dataBase/connection');

module.exports = {
    async ListarUsuarios(request, response) {
        try {
            return responses.status(200).json({
                sucesso: true,
                mensagem: 'Lista de usuarios',
                dados: null
            });
        } catch (error) {
            return responses.status(500).json({
                sucesso: false,
                mensagem: 'Erro ao listar usuarios',
                dados: error.menssage
            });
        } 