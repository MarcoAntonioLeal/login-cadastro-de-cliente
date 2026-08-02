function validationQuant(req, res, next) {
    const { quantidade } = req.body

    if(typeof quantidade !== 'number') {
        return res.status(400).json('A quantidade tem de ser um número inteiro')
    }

    if(!Number.isInteger(quantidade)) {
        return res.status(400).json('A quantidade não pode ser em número decimal')
    }

    if(quantidade < 0) {
        return res.status(400).json('A quantidade não pode ser negativa')
    }

    next()
}

module.exports = validationQuant