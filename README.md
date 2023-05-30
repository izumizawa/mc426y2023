# 🛵  _Comu_ 
### 💻 [UNICAMP][1S2023] MC426 • Engenharia de Software

#

### 🧑‍🤝‍🧑 Autores

_**Comu**_ é um projeto criado e desenvolvido por:

195334 ∷ Camila Porfírio da Silva Pinto  
174817 ∷ João Victor Pereira de Andrade  
256453 ∷ Jonas Cardoso Gonçalves  
221859 ∷ Mariana Megumi Izumizawa  
187462 ∷ Thales Iwashima Andrade  

#

### 📔 A Disciplina

A disciplina MC426 (Engenharia de Software) da Unicamp tem como objetivos terminais que alunes,
ao final do semestre, sejam capazes de:

- Compreender a necessidade de métodos e práticas adequadas para o desenvolvimento de sistemas
de software (in-the-large).
- Desenvolver um sistema de software utilizando um ciclo de vida (fim-a-fim), incluindo métodos, 
práticas e ferramentas adequados para as atividades de requisitos, projeto e testes de software. 

De forma prática, ao longo do curso, desenvolvemos o projeto _**Comu**_ aplicando os conhecimentos
apresentados em aula.

#

### 🗒️ Descrição do Projeto

O _**Comu**_ consiste num software livre de delivery de refeições/compras de mercado que 
possibilita a formação e funcionamento de cooperativas locais de maneira independente ao
iFood/UberEats/Rappi; a ideia é que hajam taxas customizáveis e ferramentas que permitam 
uma diversidade de modelos de negócio, que seja fácil de subir e que de fato auxilie os
trabalhadores sem submeter tanto restaurantes quanto entregadores a más condições de trabalho.

#

### 🛠 Execução

Primeiramente, instale o nvm para instalar o Node posteriormente.

##### `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash`

##### `nvm install 16.16.0`

A seguir, no diretório do projeto, execute os seguintes comandos:

- **`npm i`**
  - Inicia e instala todos os pacotes e dependências do projeto.
- **`npm run start`**
  - Esse comando faz com que a aplicação seja executada em modo desemvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) no navegador, caso isso não seja feito de
forma automática.
  - A página vai recarregar de forma automática, isso significa que suas mudanças são
refletidas quase que instantaneamente.
- **`npm run test`**
  - Inicia o executor de teste no modo interativo.
- **`npm run predeploy`**
  - Contrói a aplicação em modo produção para a pasta `target/classes/public`.
- **`npm run deploy`**
  - Atualiza a branch gh-pages de acordo com a última atualização da pasta `target/classes/public`.

#

### 🏗️ Arquitetura

< !-- Descrição da arquitetura considerando os requisitos atuais da aplicação, contendo: -->

#### Diagramas em nível de componentes

O diagrama em nível de componentes é uma representação visual da arquitetura de software em um nível
mais detalhado, focando nos componentes individuais que compõem o sistema e nas suas interações. O
diagrama em nível de componentes faz parte da abordagem C4 (Context, Container, Component, Code), 
que é uma técnica de modelagem arquitetural para representar a arquitetura de software de forma 
clara e concisa.

No contexto do C4, o diagrama em nível de componentes (Nível 3) é uma expansão do diagrama em nível
de contêineres (Nível 2), que mostra os principais componentes internos de cada contêiner. Ele permite
uma visão mais detalhada da estrutura interna dos contêineres e como os componentes se relacionam.

O objetivo do diagrama em nível de componentes é fornecer uma visão mais detalhada da estrutura interna
do sistema, mostrando como os componentes se organizam e como eles se comunicam entre si. Ele auxilia na
compreensão da arquitetura, na identificação de pontos de acoplamento e na definição de fronteiras e 
responsabilidades claras entre os componentes.

##### Diagrama Nível 1 - Context
![Diagrama do Nível 1](src/main/js/assets/images/diagramaN1.jpeg)

##### Diagrama Nível 2 - Containers
![Diagrama do Nível 2](src/main/js/assets/images/diagramaN2.jpeg)

##### Diagrama Nível 3 - Components
![Diagrama do Nível 3](src/main/js/assets/images/diagramaN3.jpeg)

#### Estilo Adotado na Elaboração da Arquitetura

O estilo adotado na elaboração da arquitetura foi o modelo MVC (*Model-View-Controller*), que 
se revelou como uma escolha natural em virtude das tecnologias selecionadas.

Na camada de View do nosso projeto, encontra-se a interface desenvolvida em React, que está 
integrada ao repositório no GitHub. 

A camada Controller é baseada em nossa camada interna de APIs, que é invocada pela interface.

A camada de Model concentra-se principalmente no Firestore, um serviço de banco de dados
fornecido pelo Firebase, juntamente com as funcionalidades e serviços internos oferecidos pela
plataforma Firebase. O Firebase é conhecido por ser um serviço "_Back-end as a Service_" (BaaS),
o que facilita a abstração dessa parte do projeto.

#### Principais Componentes e Suas Responsabilidades
<!-- Uma descrição textual sucinta dos principais componentes e suas responsabilidades -->

- Para o projeto de um dos componentes, adote um padrão de projeto adequado de sua escolha.
Nesse ponto, crie uma issue (e uma branch) para a implementação desse padrão.
A issue deve ter o label "AvaliacaoA4.1", identificar qual o padrão de projeto utilizado, e 
ser acompanhada de um merge request onde seja possível ver as alterações para a implementação do 
padrão de projeto.

#

⋰ 🛵 ⋱ 🌭 ⋰ 🍔 ⋱ 🍟 ⋰ 🍕 ⋱ 🥙 ⋰ 🌮 ⋱ 🌯 ⋰ 🫔 ⋱ 🥗 ⋰ 🍝 ⋱ 🍛 ⋰ 🍱 ⋱ 🧁 ⋰ 🍪 ⋱ 🍩 ⋰
