const db = require('../dataBase/connection');
const { json, response } = require('express');

module.exports = {

  // Listar Avaliações
  async Login(request, response) {
    try {
      // Instrução SQL para listar avaliações
      const sql = 'SELECT ava_id, usu_id, far_id, nota, ava_comentario FROM avaliacao;';
      // Executa a consulta no banco de dados
      const [rows] = await db.query(sql);
      // Verifica se há registros retornados
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de Login',
        itens: rows.length,
        dados: rows
      });
    }catch (error) {
      // Retorna erro caso ocorra
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      });
    }
  },

};