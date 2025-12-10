Com certeza. Com base em todo o código que desenvolvemos e nas funcionalidades implementadas, preparei uma documentação técnica e funcional do projeto **Numeris**.

Esta documentação serve tanto para orientar o uso quanto para facilitar a manutenção futura do código.

---

# 📘 Documentação do Projeto: Numeris - Sistema de Numerologia Cabalística

## 1. Visão Geral
O **Numeris** é uma aplicação web desenvolvida para automatizar a criação de Mapas Numerológicos Cabalísticos. O sistema processa dados pessoais (nome e data de nascimento) para gerar cálculos complexos, interpretações, previsões e relatórios em PDF profissionais.

## 2. Stack Tecnológica
* **Frontend:** React.js
* **UI Framework:** Material UI (MUI) - Para componentes visuais e sistema de temas (Dark/Light Mode).
* **Geração de Relatórios:** `jsPDF` - Para criação de PDFs vetorizados no lado do cliente.
* **Ícones:** Material Icons.

---

## 3. Funcionalidades Principais

### 3.1. Cálculos Numerológicos
O sistema realiza automaticamente a redução teosófica e interpretação dos seguintes itens:
* **Números Centrais:** Motivação, Impressão, Expressão e Destino.
* **Missão de Vida:** Cálculo combinado de Destino + Expressão.
* **Karmas:** Dívidas Cármicas, Lições Cármicas e Tendências Ocultas.
* **Previsões:** Ano Pessoal, Mês Pessoal, Dia Pessoal (automático para data atual ou selecionada) e Arcanos de Trânsito (ciclos de 4 anos).
* **Ciclos de Vida:** Ciclos, Desafios e Momentos Decisivos.

### 3.2. Ferramentas Avançadas
* **Pirâmide Invertida:** Gera visualmente a pirâmide do nome, destacando sequências numéricas negativas (ex: 333, 555) e o Arcano do topo.
* **Assinatura do Poder:**
    * **Modo Automático:** O sistema sugere assinaturas baseadas nas letras do nome que mantêm a Expressão original e eliminam sequências negativas.
    * **Modo Manual:** Permite ao numerólogo testar uma rubrica, validando em tempo real se ela é positiva.
    * **Visualização:** Exibe a pirâmide da assinatura ao lado da carta do Arcano Regente.
* **Harmonia Conjugal:**
    * Permite inserir dados de um companheiro(a).
    * Exibe tabelas comparativas lado a lado (Vibra, Atrai, Oposto, Passivo).
    * Destaca (em verde) as compatibilidades numéricas entre o casal.
* **Nomes Sociais:** Permite criar e armazenar múltiplos nomes sociais para análise comparativa.

### 3.3. Geração de PDF Profissional
* **Seleção de Conteúdo:** Dialog com *checkboxes* permitindo escolher quais seções incluir no relatório.
* **Layout:** Capa, marca d'água, índice dinâmico (auto-ajustável em colunas) e numeração de páginas.
* **Conteúdo:** Inclui todas as tabelas, textos interpretativos e imagens das cartas de Tarot.

---

## 4. Estrutura de Arquivos e Componentes

A organização do projeto segue uma separação clara de responsabilidades:

### 4.1. Core (Raiz)
* **`App.jsx`**: Gerenciador de estado global. Armazena os dados do cliente, companheiro e resultados. Orquestra a comunicação entre o Sidebar e o Painel de Exibição.
* **`DashboardLayout.jsx`** (Implícito): Estrutura base com Sidebar e Área de Conteúdo.

### 4.2. Componentes de UI (`src/components/`)
* **`Sidebar.jsx`**: Menu lateral contendo os botões de ação (Calcular, Assinatura, PDF, Tema).
* **`NumerologyPanel.jsx`**: O componente "visualizador". Recebe os dados calculados e renderiza os TextFields, Tabelas e Gráficos na tela.
* **`NovoMapaDialog.jsx`**: Formulário modal para entrada de dados. Possui validação de campos obrigatórios (Nome/Data).
* **`PdfGeneratorButton.jsx`**: Motor de geração do PDF. Contém toda a lógica do `jsPDF`, paginação e renderização.
* **`PdfSelectionDialog.jsx`**: Modal com checkboxes para filtrar o que sai no PDF.
* **`DialogAssinatura.jsx`**: Interface para criação e validação da Assinatura do Poder.
* **`PiramideInvertida.jsx`**: Componente visual que desenha a pirâmide e lista sequências negativas.

### 4.3. Lógica de Cálculo (Arquivos `.js`)
Cada aspecto da numerologia tem seu próprio arquivo para facilitar manutenção:
* `CalculoMotivacao.js`, `CalculoDestino.js`, `CalculoExpressao.js`, etc.
* `CalculoHarmoniaConjugal.js`: Lógica de compatibilidade.
* `CalculoArcano.jsx`: Contém lógica para Arcano Pessoal, Arcano do Nome e Arcano Cabalístico.
* `generateInvertedPyramid.js`: Algoritmo recursivo para montar a pirâmide.

### 4.4. Dados Estáticos
* **`TabelaNumerologia.js`**: Contém a Tabela Pitagórica (A=1, B=2...), descrições dos números, significados dos Arcanos e textos longos usados nos relatórios.

---

## 5. Detalhes de Implementação Importantes

### 5.1. Validação de Entrada (`NovoMapaDialog`)
O sistema impede cálculos se o nome ou data de nascimento estiverem vazios. O estado `errors` controla a exibição de bordas vermelhas nos campos.

### 5.2. Lógica do PDF (`PdfGeneratorButton`)
* **Paginação Inteligente:** A função `checkPageBreak` calcula se o próximo elemento cabe na página. Se não, cria uma nova.
* **Índice Dinâmico:** O índice é gerado no final do processo, mas inserido na **Página 4** (reservada). Se houver muitos itens, ele se divide automaticamente em duas colunas e reduz a fonte para caber em uma única página.
* **Imagens:** As imagens (logo, cartas) são processadas via `canvas` para garantir transparência correta no PDF, inclusive em dispositivos móveis.

### 5.3. Responsividade
* O layout utiliza `flexDirection: { xs: 'column', md: 'row' }`.
* No celular, tabelas comparativas (como a Harmonia Conjugal) ficam uma embaixo da outra.
* No desktop, elas ficam lado a lado para facilitar a comparação.

---

## 6. Como Utilizar (Fluxo do Usuário)

1.  **Início:** Ao abrir, o sistema mostra uma tela de boas-vindas.
2.  **Novo Mapa:** Clique em `+` no menu lateral. Preencha Nome e Data. (Opcional: Preencha dados do Companheiro para Harmonia).
3.  **Análise:** O sistema exibe o painel com todos os números calculados.
4.  **Assinatura:** No menu lateral, clique em "Assinatura do Poder". Use o modo automático para sugestões ou manual para testar. Clique em "Escolher" para fixar uma assinatura no mapa.
5.  **PDF:** Clique em "Gerar PDF". Selecione as seções desejadas no dialog (ou "Todos"). O arquivo será baixado automaticamente.

---

## 7. Manutenção Futura

* **Alterar Textos:** Para mudar as descrições dos números, edite o arquivo `src/components/TabelaNumerologia.js`.
* **Adicionar Novo Cálculo:** Crie um arquivo `CalculoNovo.js`, importe no `App.jsx`, realize o cálculo dentro de `handleSalvarNome` e passe o resultado para o `NumerologyPanel.jsx`.
* **Ajustar PDF:** Toda a lógica de desenho do PDF está isolada em `PdfGeneratorButton.jsx`.