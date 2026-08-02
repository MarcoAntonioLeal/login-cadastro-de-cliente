function validateCategoria(req, res, next) {
    const categoriasPermitidas = ['Eletrica', 'Manual', 'Medicao', 'Jardinagem', 'Seguranca']
    const { categoria } = req.body
    const categoriaSelecionada = categoriasPermitidas.includes(categoria)
    
    if(!categoriaSelecionada) {
        return res.status(400).json('As categorias permitidas são: Eletrica, Manual, Medicao, Jardinagem ou Seguranca')
    }

    next()
}

module.exports = validateCategoria