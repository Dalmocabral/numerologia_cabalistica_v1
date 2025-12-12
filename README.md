# 📘 Documentação do Projeto: Numeris - Sistema de Numerologia Cabalística

## 1. Visão Geral

O **Numeris** é uma aplicação web desenvolvida para automatizar a criação de Mapas Numerológicos Cabalísticos. O sistema processa dados pessoais (nome e data de nascimento) para gerar cálculos complexos, interpretações, previsões e relatórios em PDF profissionais.

A documentação a seguir visa detalhar a **estrutura do projeto**, o **ambiente de desenvolvimento** e os **procedimentos de manutenção**, complementando a descrição de funcionalidades já existente.

## 2. Stack Tecnológica

O projeto é construído com tecnologias modernas de desenvolvimento web, garantindo performance e manutenibilidade:

| Categoria | Tecnologia | Versão (Aproximada) | Propósito |
| :--- | :--- | :--- | :--- |
| **Frontend** | React.js | 19.0.0 | Biblioteca principal para construção da interface de usuário. |
| **Build Tool** | Vite | 6.2.0 | Empacotador e servidor de desenvolvimento rápido. |
| **UI Framework** | Material UI (MUI) | 6.4.8 | Componentes visuais e sistema de temas (Dark/Light Mode). |
| **PDF Generation** | `jsPDF` | 3.0.1 | Criação de PDFs vetorizados no lado do cliente. |
| **Testing** | Vitest | 4.0.15 | Framework de testes unitários e de integração. |
| **Deployment** | `gh-pages` | 6.3.0 | Publicação automatizada no GitHub Pages. |

## 3. Estrutura de Arquivos e Componentes

O projeto está organizado em uma estrutura modular para facilitar a manutenção e a adição de novos cálculos. A pasta principal do código-fonte é `numerologia_cabalistica/src/`.

### 3.1. Core (Raiz)

| Arquivo/Pasta | Descrição |
| :--- | :--- |
| `App.jsx` | Componente principal. Gerencia o estado global (dados do cliente, companheiro e resultados dos cálculos) e orquestra a comunicação entre o `Sidebar` e o `NumerologyPanel`. |
| `main.jsx` | Ponto de entrada da aplicação (renderização do React). |
| `NumerologyPanel.jsx` | O componente "visualizador". Recebe os dados calculados e renderiza os TextFields, Tabelas e Gráficos na tela. |
| `NumerologiaContext.js` | Contexto do React para prover o estado global a todos os componentes. |

### 3.2. Componentes de UI (`src/components/`)

Esta pasta contém os componentes reutilizáveis da interface e os modais de interação:

| Componente | Função Principal |
| :--- | :--- |
| `Sidebar.jsx` | Menu lateral com botões de ação (Novo Mapa, Assinatura, PDF, Tema). |
| `NovoMapaDialog.jsx` | Formulário modal para entrada de dados (Nome/Data de Nascimento). Inclui validação de campos. |
| `DialogAssinatura.jsx` | Interface para criação e validação da Assinatura do Poder. |
| `PdfGeneratorButton.jsx` | Motor de geração do PDF. Contém a lógica de `jsPDF`, paginação e renderização de conteúdo. |
| `PdfSelectionDialog.jsx` | Modal com *checkboxes* para filtrar as seções a serem incluídas no PDF. |
| `PiramideInvertida.jsx` | Componente visual que desenha a pirâmide e lista sequências negativas. |

### 3.3. Lógica de Cálculo (`src/components/`)

Cada cálculo numerológico está isolado em seu próprio arquivo, seguindo o padrão `Calculo[NomeDoCalculo].jsx` para facilitar a manutenção e o teste unitário.

| Exemplo de Arquivo | Cálculo Correspondente |
| :--- | :--- |
| `CalculoMotivacao.jsx` | Motivação (Vogais do Nome) |
| `CalculoDestino.jsx` | Destino (Data de Nascimento) |
| `CalculoExpressao.jsx` | Expressão (Nome Completo) |
| `CalculoHarmoniaConjugal.jsx` | Lógica de compatibilidade entre dois mapas. |
| `generateInvertedPyramid.jsx` | Algoritmo recursivo para montar a Pirâmide Invertida. |

### 3.4. Dados Estáticos e Configurações

| Arquivo | Conteúdo |
| :--- | :--- |
| `TabelaNumerologia.js` | Contém a Tabela Pitagórica (A=1, B=2...), descrições dos números, significados dos Arcanos e textos longos de interpretação usados nos relatórios. **Este é o arquivo a ser editado para alterar os textos interpretativos.** |
| `vite.config.js` | Configuração do *build* e do servidor de desenvolvimento do Vite. |
| `eslint.config.js` | Regras de linting para garantir a qualidade do código. |

## 4. Ambiente de Desenvolvimento e Execução

Para configurar o ambiente de desenvolvimento e executar o projeto localmente, siga os passos abaixo.

### 4.1. Pré-requisitos

Certifique-se de ter o **Node.js** (versão 18+) e o **npm** (ou yarn/pnpm) instalados em sua máquina.

### 4.2. Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/Dalmocabral/numerologia_cabalistica_v1.git
    cd numerologia_cabalistica_v1/numerologia_cabalistica
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou pnpm install
    # ou yarn install
    ```

### 4.3. Comandos de Execução

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor de desenvolvimento local (Vite). A aplicação estará acessível em `http://localhost:5173` (ou porta similar). |
| `npm run build` | Compila o projeto para produção na pasta `dist/`. |
| `npm run preview` | Serve a versão de produção compilada localmente. |
| `npm run test` | Executa os testes unitários configurados com Vitest. |
| `npm run deploy` | Executa o *build* e publica a aplicação na branch `gh-pages` do GitHub. |

## 5. Procedimentos de Manutenção

### 5.1. Alteração de Textos Interpretativos

Para modificar as descrições dos números, significados dos Arcanos ou qualquer texto longo de interpretação:

1.  Edite o arquivo `src/components/TabelaNumerologia.js`.
2.  Localize a estrutura de dados correspondente ao texto que deseja alterar.

### 5.2. Adição de Novo Cálculo

Para integrar um novo cálculo numerológico ao sistema:

1.  Crie um novo arquivo em `src/components/`, por exemplo, `CalculoNovo.jsx`.
2.  Implemente a lógica de cálculo e o componente de exibição.
3.  Importe o novo cálculo em `App.jsx`.
4.  No *handler* de salvamento de nome (`handleSalvarNome` ou similar em `App.jsx`), chame a função de cálculo e armazene o resultado no estado global.
5.  Renderize o novo componente em `NumerologyPanel.jsx`, passando os dados calculados como *props*.

### 5.3. Ajustes na Geração de PDF

Toda a lógica de paginação, layout e renderização do PDF está isolada em `PdfGeneratorButton.jsx`. Para ajustes finos no layout, como margens, fontes ou quebras de página, edite este arquivo.

---

## 6. Funcionalidades Principais (Resumo)

Para referência rápida, as principais funcionalidades do sistema incluem:

*   **Cálculos Centrais:** Motivação, Impressão, Expressão, Destino e Missão de Vida.
*   **Karmas:** Dívidas Cármicas, Lições Cármicas e Tendências Ocultas.
*   **Previsões:** Ano Pessoal, Mês Pessoal, Dia Pessoal e Arcanos de Trânsito.
*   **Ferramentas:** Pirâmide Invertida, Assinatura do Poder (Automática/Manual) e Harmonia Conjugal.
*   **Relatório:** Geração de PDF profissional com seleção de conteúdo, índice dinâmico e paginação inteligente.
