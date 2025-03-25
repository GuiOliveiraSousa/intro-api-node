
const db = require('../dataBase/connection');

module.exports = {
    async ListarAvaliacao(request, response) {
        try {
            return responses.status(200).json({
                sucesso: true,
                mensagem: 'Lista de Avaliacao',
                dados: null
            });
        } catch (error) {
            return responses.status(500).json({
                sucesso: false,
                mensagem: 'Erro ao listar Avaliacao',
                dados: error.menssage
            });
        }
    }
}