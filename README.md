# b2w-challenge

## Clean architecture.

Seguindo alguns principios do clean architecture, temos um repository que se conecta com o banco, o service que orquestra a comunicação entre o repository, 
os helpers e a controller que por sua vez faz a interação com os clients.

## Testes automatizados.

Para rodar os testes, bastar executar o comando abaixo:

> **npm test**

Obs. Temos um banco de dados dedicado para testes.

## Como rodar a aplicação?

#### Docker container

A api roda em um container do Docker. Você precisa ter instalado o Docker na sua máquina.
Após isso basta rodar o seguinte comando:

> **docker-compose up**

O ambiente de desenvolvimento estará rodando localmente para você. O nodemon mantém o servidor do container de pé, ou seja, você não precisará
ficar parando o container e subindo ele novamente a cada mudança que você fizer.

#### .env.example
Copie o arquivo .env.example, cole na raiz do projeto e renomeie para .env (com isso teremos todas as variaveis de ambiente setadas na aplicação).
