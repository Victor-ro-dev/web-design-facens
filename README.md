# Web-design-facens
Repositório com exercícios de Web Design desenvolvidos para a faculdade Facens.

## Projetos com API's
Aqui estão quatro páginas web que utilizam diferentes APIs públicas para realizar requisições GET e POST, exibindo informações dinâmicas para o usuário.

### Projeto 1: Busca por CEP
<hr>
Este projeto utiliza a API pública [ViaCEP](https://viacep.com.br) para obter e exibir informações detalhadas de um CEP inserido pelo usuário, como logradouro, bairro, cidade e estado.

#### Funcionalidades

- Entrada de um CEP para consulta.
- A função `buscar()` faz a requisição à API ViaCEP.
- As informações são exibidas dinamicamente na página.

#### Como funciona

1. O usuário insere o CEP em um campo de texto com o `id="cep_in"`.
2. Ao clicar no botão de busca, a função `buscar()` é acionada.
3. A função utiliza `fetch` para fazer uma requisição GET à API ViaCEP, passando o CEP como parâmetro na URL.
4. Se a resposta for bem-sucedida, os dados são extraídos do JSON retornado pela API e exibidos em elementos HTML.
5. Em caso de erro, uma mensagem de erro é exibida ao usuário.

<br>

### Projeto 2: Gráfico de População 
<hr>
Este projeto consome dados da API pública [DataUSA](https://datausa.io/) para exibir um gráfico de barras com a evolução populacional dos Estados Unidos ao longo dos anos.

#### Funcionalidades

- A função `fazer_grafico()` realiza a requisição para buscar os dados de população.
- Os dados são organizados e exibidos em um gráfico de barras, com anos no eixo X e população no eixo Y.

#### Como funciona

1. A função `fazer_grafico()` faz uma requisição GET à API DataUSA através da URL:  
   `https://datausa.io/api/data?drilldowns=Nation&measures=Population`.
2. Os dados de ano e população são extraídos e organizados em um objeto.
3. As barras do gráfico são coloridas de acordo com o ano usando as opções de cores definidas no objeto `options`.
4. O gráfico é renderizado na página utilizando a biblioteca de gráficos `Plot.Bar`.

<br>

### Projeto 3: Gerador de Usuário Aleatório
<hr>
Este projeto utiliza a API pública [RandomUser](https://randomuser.me/) para gerar e exibir um perfil de usuário fictício, incluindo foto, nome, idade, gênero, endereço e data de registro.

#### Funcionalidades

- A função `usuario()` faz uma requisição à API RandomUser para obter dados de um usuário fictício.
- Os dados retornados incluem a foto, nome, idade, gênero, endereço completo e data de registro do usuário.
- As informações são exibidas dinamicamente na página.

#### Como funciona

1. A função `usuario()` faz uma requisição GET à API RandomUser através da URL:  
   `https://randomuser.me/api/`.
2. Ao receber os dados, as seguintes informações do usuário são extraídas:
   - Foto do usuário (resolução média)
   - Nome e sobrenome
   - Idade
   - Gênero
   - Endereço completo (rua, número, cidade, estado, país e código postal)
   - Data de registro
3. As informações são inseridas em elementos HTML específicos para exibição.
4. Caso ocorra um erro, uma mensagem é exibida no console do navegador.

<br>

### Projeto 4: Exibição de Imagem de Cachorro e Piada Aleatória
<hr>
Este projeto busca e exibe uma imagem aleatória de um cachorro da API [Dog CEO](https://dog.ceo/) e uma piada aleatória da API [Official Joke API](https://official-joke-api.appspot.com/). O usuário pode alternar entre mostrar e esconder a resposta da piada, além de carregar uma nova piada e imagem.

#### Funcionalidades

- Exibe uma imagem aleatória de cachorro.
- Mostra uma piada aleatória com a opção de revelar ou esconder a resposta.
- Permite ao usuário carregar uma nova piada e imagem de cachorro ao clicar em um botão.

#### Como funciona

1. Ao carregar a página, as funções `buscarImagemCachorro()` e `buscarPiada()` são automaticamente executadas.
2. A função `buscarImagemCachorro()` faz uma requisição à API Dog CEO para buscar uma imagem aleatória de cachorro e exibi-la em um elemento `<img>`.
3. A função `buscarPiada()` faz uma requisição à API Official Joke para buscar uma piada aleatória composta por uma introdução (setup) e uma resposta (punchline).
4. A punchline começa oculta, e o botão de alternância permite ao usuário mostrar ou esconder a resposta.
5. Um botão adicional permite carregar uma nova piada e imagem de cachorro simultaneamente.

<br>

## Tecnologias Utilizadas

- **JavaScript**
- **HTML**
- **CSS**

<br>

## Outros Projetos

### 1. Cardápio
Uma página web simples com o cardápio de uma hamburgueria.

#### Tecnologias
- **HTML**
- **CSS**

### 2. Currículo
Uma página web básica com um layout moderno de currículo.

#### Tecnologias
- **HTML**
- **CSS**

<br>

## IDE Utilizada
- **VSCode**
