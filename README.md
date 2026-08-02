# 🛠️ API de Controle de Ferramentas

API REST para gerenciamento de ferramentas, permitindo realizar operações de cadastro, consulta, atualização e remoção de ferramentas.

O projeto foi desenvolvido em **Node.js + Express**, seguindo a arquitetura **MVC** e utilizando **middlewares** para validação das requisições antes da execução das regras de negócio.

A API foi testada utilizando o **Insomnia**.

---

## 🚀 Tecnologias utilizadas

- Node.js
- Express
- JavaScript
- Arquitetura MVC
- Middlewares
- Insomnia (testes de API)

---

## 📌 Regras de negócio

Cada ferramenta deve possuir a seguinte estrutura:

```json
{
  "id": 1,
  "nome": "Furadeira Bosch",
  "categoria": "Eletrica",
  "quantidade": 5,
  "preco": 450,
  "disponivel": true
}
```

### ID

- Gerado automaticamente.
- Deve ser único.

### Nome

- Obrigatório.
- Deve possuir entre **3 e 50 caracteres**.

### Categoria

Obrigatória e deve ser uma das seguintes:

- Eletrica
- Manual
- Medicao
- Jardinagem
- Seguranca

### Quantidade

- Obrigatória.
- Deve ser um número inteiro.
- Não pode ser negativa.

### Preço

- Obrigatório.
- Deve ser maior que zero.

### Disponível

Este campo não é enviado pelo cliente.

Seu valor é definido automaticamente:

- `true` quando a quantidade for maior que zero.
- `false` quando a quantidade for igual a zero.

---

## 🎯 Funcionalidades

### Ferramentas

- Listar todas as ferramentas
- Buscar ferramenta por ID
- Cadastrar nova ferramenta
- Atualizar uma ferramenta
- Excluir uma ferramenta

### Validação

Todas as requisições de cadastro e atualização passam por middlewares responsáveis por validar:

- Nome
- Categoria
- Quantidade
- Preço

Somente após todas as validações serem aprovadas a requisição é encaminhada ao controller.

---

## 🧱 Estrutura do projeto (MVC)

```
src/
│
├── controllers/
│   └── ferramentasController.js
│
├── middlewares/
│   ├── validateCategoria.js
│   ├── validateNome.js
│   ├── validatePreco.js
│   └── validateQuant.js
│
├── models/
│   └── ferramentasModel.js
│
├── index.js
└── routes.js
```

---

## 🌐 Endpoints da API

### GET /

Lista todas as ferramentas cadastradas.

---

### GET /ferramenta/:id

Retorna uma ferramenta pelo seu ID.

---

### POST /nova-ferramenta

Cadastra uma nova ferramenta.

Exemplo de body:

```json
{
  "nome": "Parafusadeira Makita",
  "categoria": "Eletrica",
  "quantidade": 10,
  "preco": 599.90
}
```

---

### PUT /atualizar-ferramenta/:id

Atualiza todos os dados de uma ferramenta.

Exemplo de body:

```json
{
  "nome": "Parafusadeira Makita",
  "categoria": "Eletrica",
  "quantidade": 8,
  "preco": 549.90
}
```

---

### DELETE /excluir-ferramenta/:id

Remove uma ferramenta pelo ID.

---

## ⚙️ Como executar o projeto

Instale as dependências:

```bash
npm install
```

Inicie o servidor:

```bash
node src/index.js
```

Servidor disponível em:

```
http://localhost:3000
```

---

## 🧠 Observações

- Os dados são armazenados em memória utilizando um array.
- O campo **disponivel** é calculado automaticamente conforme a quantidade informada.
- Todas as respostas da API são retornadas em formato JSON.
- O projeto possui finalidade educacional para estudo de APIs REST, arquitetura MVC e utilização de middlewares.

---

## 🚀 Melhorias futuras

- Implementação de autenticação com JWT.