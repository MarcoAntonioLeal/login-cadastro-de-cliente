let id = 4

let ferramentas = [
        {
    "id": 1,
    "nome": "Furadeira Bosch",
    "categoria": "Eletrica",
    "quantidade": 5,
    "preco": 450,
    "disponivel": true
    },
      
        {
    "id": 2,
    "nome": "Chave de fenda Phillips",
    "categoria": "Manual",
    "quantidade": 0,
    "preco": 13.50,
    "disponivel": false
    },

        {
    "id": 3,
    "nome": "Martelo Vonder",
    "categoria": "Seguranca",
    "quantidade": 3,
    "preco": 35.70,
    "disponivel": true
    },
]

const ferramentasModel = {

    todasFerramentas() {
        return ferramentas
    },

    ferramenta(id) {
        const ferramenta = ferramentas.filter(ferramenta => ferramenta.id === +id)
        return ferramenta
    },

    novaFerramenta(nome, categoria, quantidade, preco) {
        const novaFerramenta = {
            id: id,
            nome: nome,
            categoria: categoria,
            quantidade: quantidade,
            preco: preco,
            disponivel: quantidade > 0
        }

        ferramentas.push(novaFerramenta)
        id++
    },

    atualizarFerramenta(id, nome, categoria, quantidade, preco) {
        const index = ferramentas.findIndex(ferramenta => ferramenta.id === +id)
        ferramentas[index].nome = nome
        ferramentas[index].categoria = categoria
        ferramentas[index].quantidade = quantidade
        ferramentas[index].preco = preco
    },

    excluirFerramenta(id) {
        const index = ferramentas.findIndex(ferramenta => ferramenta.id === +id)
        ferramentas.splice(index, 1)
    }
}

module.exports = ferramentasModel