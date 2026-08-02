# Regras de Negócio – API de Controle de Ferramentas

## Estrutura da ferramenta

Cada ferramenta deve possuir os seguintes campos:

```json
{
  "id": 1,
  "nome": "Furadeira Bosch",
  "categoria": "Elétrica",
  "quantidade": 5,
  "preco": 450,
  "disponivel": true
}
```

## Rotas

* `GET /ferramentas` → Listar todas as ferramentas.
* `GET /ferramentas/:id` → Buscar ferramenta por ID.
* `POST /ferramentas` → Cadastrar uma nova ferramenta.
* `PUT /ferramentas/:id` → Atualizar todos os dados da ferramenta.
* `DELETE /ferramentas/:id` → Remover uma ferramenta.

---

## Regras de Cadastro

### ID

* Gerado automaticamente.
* Deve ser único.

### Nome

* Obrigatório.
* Deve possuir entre **3 e 50 caracteres**.

### Categoria

Obrigatória e deve ser uma das seguintes:

* Eletrica
* Manual
* Medicao
* Jardinagem
* Seguranca

### Quantidade

* Obrigatória.
* Deve ser um número inteiro.
* Não pode ser negativa.

### Preço

* Obrigatório.
* Deve ser um número maior que zero.

### Disponível

* Não pode ser enviado pelo cliente.
* É definido automaticamente:

  * `true` quando `quantidade > 0`
  * `false` quando `quantidade === 0`

---

## Regras de Atualização (PUT)

* Todos os campos obrigatórios devem ser enviados.
* As mesmas validações do cadastro devem ser respeitadas.

---

## Regras Gerais

* Todas as respostas devem ser retornadas em formato JSON.
* Toda requisição deve passar pelas validações (middlewares) antes de chegar ao controller.