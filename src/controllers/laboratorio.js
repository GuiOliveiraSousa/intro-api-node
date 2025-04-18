const db = require('../dataBase/connection');

module.exports = {

  // Listar Laboratório
  async listarLaboratorio(request, response) {
    try {

      const sql = `SELECT lab_id, nome_laboratorio, lab_cnpj FROM laboratorios;`;

      const [rows] = await db.query(sql);


      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de Laboratórios.',
        itens: rows.length,
        dados: rows
      });
    }catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      });
    }
  },

  // Cadastrar Laboratório
  async cadastrarLaboratorio(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Cadastrar Laboratórios.',
        dados: null
      });
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      });
    }
  },

  // Editar Laboratório
  async editarLaboratorio(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Editar Laboratórios.',
        dados: null
      });
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      })
    }
  },

  // Apagar Laboratório
  async apagarLaboratorio(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Apagar Laboratórios.',
        dados: null
      });
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      })
    }
  },
}