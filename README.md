# Desafio Técnico - Easysecrets

Olá! Bem-vindo ao meu repositório para o desafio técnico da Easysecrets. Desenvolvi esta aplicação em React com TypeScript para consumir e renderizar dados de vendas em um gráfico de barras e pie interativos.

Construí este projeto com foco na qualidade do código, em uma boa experiência de usuário (UX) e em uma arquitetura moderna, superando os desafios de integração de bibliotecas para entregar um resultado funcional e elegante.

## ✨ Visão Geral & Funcionalidades

A aplicação apresenta um dashboard de vendas com alguns diferenciais que implementei:

* **Gráfico Interativo e Responsivo**: Utilizei D3.js para construir um gráfico que se adapta a qualquer tamanho de tela e oferece tooltips com informações detalhadas ao passar o mouse sobre as barras.
* **Foco no Tema Dark**: A interface foi desenhada com um tema escuro funcional e elegante, visando o conforto visual do usuário.
* **Animações Suaves**: As barras do gráfico possuem uma transição animada ao serem renderizadas, o que torna a interface mais fluida e profissional.
* **Código Limpo e Otimizado**: Refatorei a aplicação para garantir um fluxo de dados claro e unidirecional, onde o estado é gerenciado pelo componente principal (`App.tsx`).

## 🛠️ Minhas Decisões Técnicas (Stack & Arquitetura)

A escolha das tecnologias foi pensada para entregar um produto robusto, performático e alinhado com as práticas de desenvolvimento mais atuais.

### 1. **Core: React 19 + Vite**

* **React 19**: Optei pela versão mais recente do React para aproveitar suas otimizações e features.
* **Vite**: Escolhi o Vite como build tool pelo seu ambiente de desenvolvimento extremamente rápido (HMR) e build otimizado.

### 2. **Linguagem: TypeScript**

* Para mim, o uso de TypeScript é fundamental para a robustez do projeto. Ele garante a segurança de tipos, o que reduz bugs e facilita a manutenção do código.

### 3. **Estilização: Tailwind CSS v4**

* A abordagem *utility-first* do Tailwind me permitiu construir a interface de forma rápida e consistente, sem precisar escrever CSS customizado.

### 4. **Visualização de Dados: D3.js**

* Minha escolha pelo **D3.js** foi intencional. Diferente de outras bibliotecas, o D3 me deu controle total sobre a manipulação do DOM, permitindo a criação de uma visualização de dados customizada e performática.
* Para integrar o D3 com o React, criei um hook customizado, `useD3`, que abstrai a lógica de renderização e garante que tudo funcione de forma segura e eficiente.

### 5. **Estrutura de Código Simplificada**

* Durante o desenvolvimento, enfrentei alguns desafios com o build e as importações de módulos. Para garantir a estabilidade e a entrega de um projeto 100% funcional, tomei a decisão estratégica de consolidar toda a lógica em um **único arquivo** (`src/App.tsx`).
* **Motivo**: Essa abordagem eliminou completamente os erros de build e me permitiu focar na funcionalidade. Reconheço que, em um projeto de produção em maior escala, eu separaria os arquivos em suas respectivas pastas (`components`, `hooks`, etc.) para melhor organização.

## 🚀 Como Rodar o Projeto

**Pré-requisitos:** Node.js v22+ e npm v10+.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SEU_USUARIO/Desafio-tecnico-Easysecrets.git](https://github.com/SEU_USUARIO/Desafio-tecnico-Easysecrets.git)
    cd Desafio-tecnico-Easysecrets
    ```

2.  **Instale as dependências:**
    Este projeto usa o React 19. Para resolver possíveis conflitos, utilize a flag `--legacy-peer-deps`.
    ```bash
    npm install --legacy-peer-deps
    ```

3.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

A aplicação estará disponível em `http://localhost:5173`.
