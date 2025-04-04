const express = require('express');
const router = express.Router();

const Avaliacao = require('../controllers/avaliacao');
const Laboratorio = require('../controllers/laboratorio');

router.get('/avaliacao', Avaliacao.ListarAvaliacao);


router.get('/laboratorio', Laboratorio.ListarLaboratorio);



module.exports = router;