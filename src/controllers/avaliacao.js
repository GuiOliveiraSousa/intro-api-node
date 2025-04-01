
const db = require('../dataBase/connection');

module.exports = {
    async listarAvaliacao(request, response) {
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
    },


    async cadastrarAvaliacao(request, response) {
        try {
            return responses.status(200).json({
                sucesso: true,
                mensagem: 'cadastrar de Avaliacao',
                dados: null
            });
        } catch (error) {
            return responses.status(500).json({
                sucesso: false,
                mensagem: 'Erro ao cadastrar Avaliacao',
                dados: error.menssage
            });
        }
    },


    async editarAvaliacao(request, response) {
        try {
            return responses.status(200).json({
                sucesso: true,
                mensagem: 'editar de Avaliacao',
                dados: null
            });
        } catch (error) {
            return responses.status(500).json({
                sucesso: false,
                mensagem: 'Erro ao editar Avaliacao',
                dados: error.menssage
            });
        }
    },


    async apagarAvaliacao(request, response) {
        try {
            return responses.status(200).json({
                sucesso: true,
                mensagem: 'apagar de Avaliacao',
                dados: null
            });
        } catch (error) {
            return responses.status(500).json({
                sucesso: false,
                mensagem: 'Erro ao apagar Avaliacao',
                dados: error.menssage
            });
        }
    }
}

