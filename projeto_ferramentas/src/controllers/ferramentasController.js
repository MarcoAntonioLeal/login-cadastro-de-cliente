const ferramentasModel = require('../models/ferramentasModel')

const ferramentasController = {

    //GET /
    todasFerramentas(req, res) {
        const todasAsFerramentas = ferramentasModel.todasFerramentas()
        return res.json(ferramentasModel.todasFerramentas())
    },

    //GET /ferramenta/:id
    ferramenta(req, res) {
        const { id } = req.params
        return res.json(ferramentasModel.ferramenta(id)) 
    },

    //POST /nova-ferramenta
    novaFerramenta(req, res) {
        const { nome, categoria, quantidade, preco } = req.body

        const ferramenta = ferramentasModel.novaFerramenta(
        nome,
        categoria,
        quantidade,
        preco
    )

        return res.status(201).json({
            mensagem: "Ferramenta cadastrada com sucesso.",
            ferramenta
        })
    },

    //PUT /atualizar-ferramenta/:id
    atualizarFerramenta(req, res) {
        const { id } = req.params
        const { nome, categoria, quantidade, preco } = req.body

        const ferramenta = ferramentasModel.atualizarFerramenta(
            id,
            nome,
            categoria,
            quantidade,
            preco
        )

        return res.status(201).json({
            mensagem: "Ferramenta atualizada com sucesso.",
            ferramenta
        })
    },

    //DELETE /excluir-ferramenta/:id
    excluirFerramenta(req, res) {
        const { id } = req.params
        return res.status(200).json(ferramentasModel.excluirFerramenta(id))
    }
}

module.exports = ferramentasController  