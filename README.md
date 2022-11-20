# DEVinKnowledge
## _Repositório de dicas_

DEVinKnowledge é uma aplicação web para armazenamento de informações para Base do Conhecimento relacionada a programação.

### Sumário

1. [Funções](#funcoes)
2. [Tecnologias](#tech)
3. [Instalação](#instal)

<a id="funcoes"></a>
## Funções

O DEVinKnowledge organiza suas dicas de programação em cartões. Possibilitando Criação, Remoção e Edição de informações de forma dinâmica.


1. [Criação](#criacao)
2. [Edição](#edicao)
3. [Remoção](#remocao)
4. [Navegação](#navegacao)
5. [Midia](#midia)
6. [Dados](#dados)

<a  id="criacao"></a> 
### Criação
Para criar cartões, preencha os campos obrigatórios do formulário: Título, Linguagem, 
e Descrição.<br>
<img src="https://github.com/Osnei-Luzia/DEVinKnowledge/blob/main/projeto/imagens/formulario.png" width="300"><br>

Agora você pode "Salvar" o cartão, apenas confirme os dados enviados ou limpar o formulário para novo cadastro.<br>
<img src="https://github.com/Osnei-Luzia/DEVinKnowledge/blob/main/projeto/imagens/formularioBotoes.png" width="300"><br>

Existe também a possibilidade de adicionar uma URL direcionando para um vídeo.<br>
<a  id="edicao"></a>
### Edição
A edição é realizada através do botão "Editar" em cada cartão. Suas informações serão transferidas para o formulário.<br>
<img src="https://github.com/Osnei-Luzia/DEVinKnowledge/blob/main/projeto/imagens/editar.png" width="300"><br>
Agora o formulário poderá confirmar a edição no botão "Editar" se todos os campos ainda cumprirem os requerimentos ou cancelar a edição no botão "Cancelar", que limpará o formulário.

<a  id="remocao"></a>
### Remoção
A remoção também é feita diretamente nos cartões, no botão "Deletar".<br>
<img src="https://github.com/Osnei-Luzia/DEVinKnowledge/blob/main/projeto/imagens/deletar.png" width="300"><br>

<a  id="navegacao"></a>
### Navegação
A navegação é feita por Título dos cartões pela barra de pesquisa:<br>
<img src="https://github.com/Osnei-Luzia/DEVinKnowledge/blob/main/projeto/imagens/pesquisa.png" width="500"><br>
A cada letra digitada novos cartões que possuem um Título que abrange a sequência de letras ira aparecer logo abaixo da barra de pesquisa.<br>
<img src="https://github.com/Osnei-Luzia/DEVinKnowledge/blob/main/projeto/imagens/cartoes.png" width="500"><br>
Caso haja muitos cartões, eles se organizaram com uma barra de rolagem.

<a id="midia"></a>
### Mídia
Algumas dicas poderão ter sido criadas com uma URL, estás terão um botão a mais para acesso ao vídeo.<br>
<img src="https://github.com/Osnei-Luzia/DEVinKnowledge/blob/main/projeto/imagens/midia.png" width="300"><br>

<a id="dados"></a>
### Dados
O DEVinKnowledge também mostra a quantidade de cartões, organizado por categorias.<br>
<img src="https://github.com/Osnei-Luzia/DEVinKnowledge/blob/main/projeto/imagens/dados.png" width="500"><br>

<a id="tech"></a>
## Tecnologias

É utilizado para seu funcionamento:
- [Live.Server] - Servidor Local para Desenvolvimento com recarregamentos em tempo real.
- [JSON.Server] - REST API para testes.

<a id="instal"></a>
## Instalação

1. [JSONServer](#jsonServer)
2. [Live Server](#liveServer)

<a  id="jsonServer"></a>
### JSON Server

A instalação pode ser feita diretamente em seu Visual Studio Code. Escolha a pasta onde o servidor ficará pelo seu terminal e realize os seguintes comandos:

```
npm init
npm install json-server
```

Isto criará o JSON Server e suas dependências. Agora crie um novo arquivo chamado db.json e adicione a seguinte estrutura:

```
{
  "dicas": []
}
```

Agora no arquivo package.json, adicione o script:
```
"scripts": {
   "start": "json-server --watch db.json"
 },
```

Inicie o servidor antes de iniciar a aplicação com o seguinte comando e já é possível utilizar o DEVinKnowledge
```
npm start
```
<a  id="liveServer"></a>
### Live Server
O Live Server pode ser instalado diretamente do seu VSCode pela aba de extensões.
Após a instalação deve-se editar suas configurações de leitura de arquivos. Clique na engrenagem ao lado de "Uninstall" e em seguida "Configurações de Aplicação"
Em seguida procure por "ignore" e edite o "settings.json"<br>
<img src="https://github.com/Osnei-Luzia/DEVinKnowledge/blob/main/projeto/imagens/liveServerConfig.png"><br>
Adicione dentro de "liveServer.settings.ignoreFiles" o caminho para seu JSON Server e todas seus arquivos
```
{
    "liveServer.settings.ignoreFiles": [
        ".vscode/**",
        "**/*.scss",
        "**/*.sass",
        "**/*.ts",

        "JsonServer/**" //caminho para seu JsonServer/"**" representa todos os arquivos
    ]
}
```

   [JSON.Server]: <https://www.npmjs.com/package/json-server>
   [Live.Server]: <https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer>
