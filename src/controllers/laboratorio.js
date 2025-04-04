
const db = require('../dataBase/connection');

module.exports = {
    async listarLaboratorio(request, response) {
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
    },


    async cadastrarLaboratorio(request, response) {
        try {
            return responses.status(200).json({
                sucesso: true,
                mensagem: 'Cadastar de Laboratorio',
                dados: null
            });
        } catch (error) {
            return responses.status(500).json({
                sucesso: false,
                mensagem: 'Erro ao Cadastrar Laboratorio',
                dados: error.menssage
            })
        }
    },


    async editarLaboratorio(request, response) {
        try {
            return responses.status(200).json({
                sucesso: true,
                mensagem: 'editar de Laboratorio',
                dados: null
            });
        } catch (error) {
            return responses.status(500).json({
                sucesso: false,
                mensagem: 'Erro ao editar Laboratorio',
                dados: error.menssage
            });
        }
    },


    async apagarLaboratorio(request, response) {
        try {
            return responses.status(200).json({
                sucesso: true,
                mensagem: 'apagar de Laboratorio',
                dados: null
            });
        } catch (error) {
            return responses.status(500).json({
                sucesso: false,
                mensagem: 'Erro ao apagar Laboratorio',
                dados: error.menssage
            });
        }
    },
}