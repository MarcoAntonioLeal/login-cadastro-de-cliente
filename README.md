# 🛠️ API de Controle de Ferramentas


API REST para gerenciamento de ferramentas, permitindo realizar operações de cadastro, consulta, atualização e remoção de ferramentas.

O projeto foi desenvolvido em **Node.js + Express**, seguindo a arquitetura **MVC** e utilizando **middlewares** para validação das requisições antes da execução das regras de negócio.

A API foi testada utilizando o **Insomnia**.
<img width="1912" height="898" alt="image" src="https://github.com/user-attachments/assets/6bcdd1c7-8986-4c72-8073-df34ed54bccd" />

---

## 🚀 Tecnologias utilizadas

- Node.js
- Express
- JavaScript
- Arquitetura MVC
- Middlewares
- Insomnia (testes de API)

---

## 📋 Regras de negócio

As regras de negócio da API estão documentadas no arquivo:

- `regras_negocio.md`

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
