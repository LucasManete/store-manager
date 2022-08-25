
# BEM-VINDO AO STORE-MANAGER

## SOBRE:

Este projeto foi desenvolvido como forma de praticar e desenvolver determinadas habilidades do módulo de backend, do curso de formação em programação da Trybe.
Ele consiste em uma API utilizando a arquitetura MSC (model-service-controller)!

<details>
  <summary><strong>🖼 Tabelas</strong></summary><br />

Na raiz do projeto existe o arquivo `StoreManager.sql` que será usado para rodar os testes. Você pode importá-lo localmente para testar o comportamento da sua aplicação durante o desenvolvimento.

O banco terá três tabelas: `products`, `sales` e `sales_products`.

A tabela `products` tem o seguinte formato:

![Tabela Produtos](./public/tableproducts.png)

(O id será gerado automaticamente)

A tabela `sales` tem o seguinte formato:

![Tabela Vendas](./public/tablesales.png)

(O id e date são gerados automaticamente)

A tabela `sales_products`, é a tabela que faz o relacionamento `N:N` entre `products` e `sales` e tem o seguinte formato:

![Tabela Vendas-Produtos](./public/tablesalesproducts.png)

  <br />
</details>

## TECNOLOGIAS USADAS NO DESENVOLVIMENTO: 

- Node.js
  
- SQL
  
- Eslint

- Express

- Docker

- JOI

## HABILIDADES:

- Criação de API padrão RestFull

- Modelagem do Bando de Dados
  
## FEATURES
- [x] Endpoints para listar os produtos (/products)
- [x] Endpoints para listar um produto (/products/:id)
- [x] Endpoints para listar as venda (/sales)
- [x] Endpoints para listar uma venda (/sales/:id)
- [x] Middlewares de validação para as rotas /products e /sales
- [x] Endpoint para o cadastro de produtos POST /products
- [x] Endpoint para atualizar um produto PUT /products/:id
- [x] Endpoint para deletar um produto DELETE /products/:id
- [x] Endpoint para cadastrar vendas POST /sales
- [x] Endpoint para atualizar uma venda /sales/:id
- [x] Testes para cobrir 35% das camadas da sua aplicação
- [x] Testes para cobrir 40% das camadas da sua aplicação
- [x] Endpoint para deletar uma venda /sales/:id
- [x] Testes para cobrir 50% das camadas da sua aplicação
- [x] Testes para cobrir 60% das camadas da sua aplicação
