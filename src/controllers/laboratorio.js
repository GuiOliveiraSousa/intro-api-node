
const db = require('../dataBase/connection');

module.exports = {
    async ListarLaboratorio(request, response) {
        try {
            return responses.status(200).json({
                sucesso: true,
                mensagem: 'Lista de Laboratorio',
                dados: null
            });
        } catch (error) {
            return responses.status(500).json({
                sucesso: false,
                mensagem: 'Erro ao listar Laboratorio',
                dados: error.menssage
            });
        }
    }
}