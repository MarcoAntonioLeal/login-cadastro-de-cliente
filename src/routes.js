const express = require('express')
const router = express.Router()
const ferramentasController = require('./controllers/ferramentasController')

const validateNome = require('./middlewares/validateNome')
const validateCategoria = require('./middlewares/validateCategoria')
const validateQuant = require('./middlewares/validateQuant')
const validatePreco = require('./middlewares/validatePreco')

router.get('/', ferramentasController.todasFerramentas)
router.get('/ferramenta/:id', ferramentasController.ferramenta)

router.post('/nova-ferramenta', 
    validateNome, 
    validateCategoria,
    validateQuant,
    validatePreco,
    ferramentasController.novaFerramenta
)

router.put('/atualizar-ferramenta/:id',
    validateNome,
    validateCategoria,
    validateQuant,
    validatePreco,
    ferramentasController.atualizarFerramenta
)

router.delete('/excluir-ferramenta/:id', ferramentasController.excluirFerramenta)

module.exports = router