Desafio Técnico - Easysecrets

Bem-vindo ao repositório do desafio técnico da Easysecrets. Esta é uma aplicação desenvolvida em React com TypeScript que consome dados de vendas e os renderiza em um gráfico de barras interativo e visualmente agradável.

O projeto foi construído com foco na qualidade do código, na experiência do usuário (UX) e em uma arquitetura moderna e de fácil manutenção, mesmo diante dos desafios de integração de bibliotecas.
✨ Visão Geral & Funcionalidades

A aplicação apresenta um dashboard de vendas simples, mas com diferenciais importantes:

    Gráfico Interativo e Responsivo: Construído com D3.js, o gráfico se adapta a qualquer tamanho de tela e oferece tooltips com informações detalhadas ao passar o mouse sobre as barras.

    Tema Dark/Light: Um seletor de tema que persiste a escolha do usuário, oferecendo conforto visual em diferentes ambientes.

    Animações Suaves: As barras do gráfico possuem uma transição animada ao serem renderizadas, tornando a interface mais fluida e profissional.

    Código Limpo e Otimizado: A aplicação foi refatorada para garantir um fluxo de dados unidirecional e claro, com o estado sendo gerenciado pelo componente principal (App.tsx).

🛠️ Decisões Técnicas (Stack & Arquitetura)

A escolha das tecnologias foi pensada para entregar um produto robusto, performático e alinhado com as práticas de desenvolvimento de 2025.
1. Core: React 19 + Vite

    React 19: Utilizamos a versão mais recente do React (simulada) para aproveitar as últimas otimizações e features.

    Vite: Escolhido como build tool pelo seu ambiente de desenvolvimento extremamente rápido (Hot Module Replacement) e processo de build otimizado.

2. Linguagem: TypeScript

    Fundamental para a robustez do projeto. O TypeScript garante a segurança de tipos, reduzindo bugs, facilitando a manutenção e melhorando a experiência de desenvolvimento (DX) com autocompletação e clareza no código.

3. Estilização: Tailwind CSS v4

    A abordagem utility-first do Tailwind permite construir interfaces complexas de forma rápida e consistente, sem a necessidade de escrever CSS customizado. A versão 4 (simulada) simplifica o setup, integrando-se perfeitamente ao processo de build.

4. Visualização de Dados: D3.js

    A escolha pelo D3.js foi intencional. Diferente de bibliotecas de gráficos prontas, o D3 oferece controle total sobre a manipulação do DOM, permitindo a criação de visualizações de dados altamente customizadas e performáticas.

    Integração com React: Para unir o modelo imperativo do D3 com o modelo declarativo do React, foi criado um hook customizado, useD3. Este hook abstrai a lógica de renderização do D3, garantindo que ele opere de forma segura e eficiente dentro do ecossistema do React.

5. Estrutura de Código Simplificada

    Após um processo de depuração e refatoração, optou-se por consolidar toda a lógica dos componentes (ThemeToggle, SalesChart), o hook (useD3) e os dados em um único arquivo (src/App.tsx).

    Motivo: Esta decisão, embora atípica para projetos maiores, foi tomada para eliminar completamente os erros de importação/exportação e garantir a funcionalidade do projeto neste contexto específico, demonstrando a capacidade de adaptar a arquitetura para resolver problemas de build. Em um projeto de produção maior, os arquivos seriam separados em suas respectivas pastas (components, hooks, etc.).

🚀 Como Rodar o Projeto

Pré-requisitos: Node.js v22+ e npm v10+.

    Clone o repositório:

    git clone https://github.com/SEU_USUARIO/Desafio-tecnico-Easysecrets.git
    cd Desafio-tecnico-Easysecrets

    Instale as dependências:
    Este projeto usa o React 19, que pode ter conflitos de dependência com outras bibliotecas. Use a flag --legacy-peer-deps para garantir que a instalação seja concluída.

    npm install --legacy-peer-deps

    Execute o servidor de desenvolvimento:

    npm run dev

A aplicação estará disponível em http://localhost:5173.
