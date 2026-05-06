# Desafio Backend: Gestao de Matriculas com NestJS

npx npm install -g @nestjs/cli 

npx nest new gestao-de-matricula

cd .\gestao-de-matricula\

npx nest generate resource matriculas

npx npm run start

cd .\gestao-de-matricula\
npx npm run start:dev


Objetivo Desenvolver uma API REST utilizando o framework NestJS para o gerenciamento de alunos. O foco principal é a correta manipulação dos dados de entrada (JSON) e a aplicação de lógica de estado inicial no modelo de dados.  Modelo base como sugestão: https://github.com/danielbaumannbr/bibliotecaPOO  Use o branch GRUD.  Requisitos da Atividade Estrutura do Recurso: Crie um módulo de alunos que contenha os campos:  codigo_matricula (String)  nome_completo (String)  situacao (String)  acompanhamento (String)  Regra de Negócio (Entidade/Classe):  A classe/entidade que representa o aluno deve possuir um construtor.  Comportamento Padrão: Ao instanciar um novo aluno, o campo situacao deve ser definido automaticamente como "Cursando" via construtor, caso nenhum valor seja informado.  Sobrescrita: Se o JSON de entrada contiver o valor "Evadido Desistente",  no o campo situacao o sistema deve ser capaz de aceitar esse parâmetro e sobrescrever o valor padrão. (  Validação de Dados :  Garantir que o nome completo e o código de matrícula não sejam enviados vazios.  O campo situacao deve ser opcional no envio do JSON.  Endpoint:  Criar um método POST /alunos que receba o JSON, instancie a classe seguindo as regras acima e retorne o objeto criado.  Entregas Link publico no gitHub Print de testes via insomnia  Opcional publica no site https://render.com/ e colocar o link no readme.md do projeto do gitHub.
