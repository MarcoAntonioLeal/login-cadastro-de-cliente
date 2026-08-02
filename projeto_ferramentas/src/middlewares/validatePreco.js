function validatePreco(req, res, next) {
    const { preco } = req.body

    if(typeof preco !== 'number') {
        return res.status(400).json('O preço tem de ser um número')
    }

    if(preco < 0) {
        return res.status(400).json('O preço tem de ser maior que 0')
    }

    next()
}

module.exports = validatePreco