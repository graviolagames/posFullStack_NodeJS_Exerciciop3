
Pontifícia Universidade Católica de Minas Gerais
Curso: Desenvolvimento web Full Stack
Disciplina: Programação web com Node.js
Professor: Samuel Martins
Valor: 20pts

Exercício 3

Neste exercício, iremos criar uma prova de conceito de uma loja online com persistência de dados. Para
esse contexto, iremos utilizar a seguinte stack: nodejs, nodemon, express, handlebars, mongoose,
mongodb, knex e sqlite.

Passo 1
Clone o repositório abaixo e em seguida rode o comando npm install.
https://github.com/samwx/nodejs-knex

Passo 2
Utilizando os conceitos da aula 02, crie uma rota /products/:id e liste todos os detalhes do produto
clicado. Para isso, além de declarar a rota especificada, você deverá implementar o método getById no
arquivo Products.js dentro da pasta services. Utilize o método where para filtrar o produto por id.

Passo 3
Abaixo dos detalhes do produto iremos listar todas as avaliações feitas via comentário. Para isso, além de
listar os comentários feitos anteriormente, crie um formulário com os campos Nome e Comentário para
que seja possível adicionar novos comentários
