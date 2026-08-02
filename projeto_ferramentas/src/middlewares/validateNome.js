function validateNome(req, res, next) {
        
    const { nome } = req.body
    const nomeMinCaracteres = nome.length <= 2
    const nomeMaxCaracteres = nome.length > 50

    if(!nome || nomeMinCaracteres || nomeMaxCaracteres) {
        return res.status(400).json('Os nomes das ferramentas tem de ser preenchidos e terem entre 3 a 50 caracteres')
    } 
    
    next()
}

module.exports = validateNome