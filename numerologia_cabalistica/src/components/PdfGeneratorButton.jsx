import React from "react";
import { Button, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { PictureAsPdf } from "@mui/icons-material";
import jsPDF from "jspdf";
// Certifique-se de que o caminho para o logo está correto
import logo from "../assets/image/logo.png";


// =================================================================
// IMPORTAÇÕES DE FUNÇÕES E DADOS (STUBS - NECESSÁRIO CRIAR ESTES ARQUIVOS)
// =================================================================

// Funções de Cálculo (Stubs)
import { calcularMotivacao } from "./CalculoMotivacao";
import { calcularImpressao } from "./CalculoImpressao";
import { calcularExpressao } from "./CalculoExpressao";
import { calcularDestino } from "./CalculoDestino";
import { calcularMissao } from "./CalculoMissao";
import { calcularDividasCarmicas } from "./CalculoDividasCarmicas";
import { calcularLicoesCarmicas } from "./CalculoLicoesCarmicas";
import { calcularMesesPessoaisRestantes } from "./CalculoMesDiaPessoal";
import { calcularAnoPessoal } from "./CalculoAnoPessoal";
import { calcularTendenciasOcultas } from "./CalculoTendenciasOcultas";
import { calcularSubconsciente } from "./CalculoSubconsciente";
import { calcularNumeroHarmonico } from "./CalculoHarmonico";
import { calcularCoresFavoraveis } from "./CalculoCoresFavoraveis";
import { calcularCicloVida } from "./CalculoCicloVida";
import { calcularDesafios } from "./CalculoDesafios";
import { calcularMomentosDecisivos } from "./CalcularMomentosDecisivos";
import { calcularHarmoniaConjugal } from "./CalculoHarmoniaConjugal";

// Tabelas e Textos (Stubs)
import {
  tabelaNumeros, tabelaAcentos, motivacaoTextos, impressaoTextos, expressaoTextos, destinoTextos, missaoTextos, dividasCarmicasTextos, licoesCarmicasTexto,
  anoPessoalDescritivo, tendenciaOculta, respostaSubconsciente, coresFavoraveis, mesesPessoal
} from "./TabelaNumerologia";


// =================================================================
// FUNÇÕES AUXILIARES
// =================================================================

/**
 * Adiciona uma marca d'água com opacidade a uma página do PDF.
 * @param {jsPDF} doc - Instância do jsPDF.
 * @param {string} imgBase64 - Imagem em Base64 (logo).
 */
const addWatermark = (doc, imgBase64) => {
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  doc.saveGraphicsState();
  doc.setGState(new doc.GState({ opacity: 0.1 }));

  const wmWidth = pageWidth * 0.7;
  const wmHeight = wmWidth;

  const x = (pageWidth - wmWidth) / 2;
  const y = (pageHeight - wmHeight) / 2;

  doc.addImage(imgBase64, "PNG", x, y, wmWidth, wmHeight);
  doc.restoreGraphicsState();
};


/**
 * Renderiza uma tabela no PDF
 * @param {jsPDF} doc - Instância do jsPDF
 * @param {Array} headers - Cabeçalhos da tabela
 * @param {Array} data - Dados da tabela
 * @param {number} startY - Posição Y inicial
 * @param {number} margin - Margem da página
 * @returns {number} - Nova posição Y
 */

const renderTable = (doc, headers, data, startY, margin = 20) => {
  const pageWidth = doc.internal.pageSize.getWidth();
  const tableWidth = pageWidth - (margin * 2);
  const colCount = headers.length;
  const colWidth = tableWidth / colCount;

  let yPosition = startY;

  // Configurações da tabela
  doc.setFontSize(10);
  doc.setDrawColor(0);
  doc.setLineWidth(0.1);

  // Cabeçalho
  doc.setFont("helvetica", "bold");
  doc.setFillColor(240, 240, 240);

  let xPosition = margin;
  headers.forEach((header, index) => {
    doc.rect(xPosition, yPosition, colWidth, 10, 'F');
    doc.text(header, xPosition + 2, yPosition + 6);
    xPosition += colWidth;
  });

  yPosition += 10;

  // Dados
  doc.setFont("helvetica", "normal");
  data.forEach((row, rowIndex) => {
    // Quebra de página se necessário
    if (yPosition > doc.internal.pageSize.getHeight() - 20) {
      doc.addPage();
      addWatermark(doc, logo);
      yPosition = margin;

      // Redesenha cabeçalho em nova página
      doc.setFont("helvetica", "bold");
      doc.setFillColor(240, 240, 240);
      xPosition = margin;
      headers.forEach((header) => {
        doc.rect(xPosition, yPosition, colWidth, 10, 'F');
        doc.text(header, xPosition + 2, yPosition + 6);
        xPosition += colWidth;
      });
      yPosition += 10;
      doc.setFont("helvetica", "normal");
    }

    xPosition = margin;
    Object.values(row).forEach((cell, cellIndex) => {
      const lines = doc.splitTextToSize(String(cell), colWidth - 4);
      const cellHeight = Math.max(10, lines.length * 5);

      doc.text(lines, xPosition + 2, yPosition + 6);
      doc.rect(xPosition, yPosition, colWidth, cellHeight);
      xPosition += colWidth;
    });

    // Ajusta Y para a maior célula da linha
    const maxLines = Math.max(...Object.values(row).map(cell =>
      doc.splitTextToSize(String(cell), colWidth - 4).length
    ));
    yPosition += Math.max(10, maxLines * 5);
  });

  return yPosition + 10;
};

/**
 * Componente React para gerar o Mapa Numerológico em PDF.
 * @param {string} nomeCliente - Nome completo do cliente.
 * @param {string} dataNascimento - Data de nascimento do cliente (formato ISO 8601).
 * @param {boolean} asListItem - Se deve ser renderizado como ListItem (para menus).
 * @param {boolean} darkMode - Se o tema escuro está ativo (para ícone).
 */
const PdfGeneratorButton = ({ nomeCliente, dataNascimento, asListItem, darkMode }) => {

  // Função para calcular valor com acento (copiada do NomeNumerologia)
  const calcularValorComAcento = (letra) => {
    if (letra.trim() === "") return 0;
    const acentos = letra.normalize('NFD').match(/[\u0300-\u036f]/g);
    const letraBase = letra.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    let valorBase = tabelaNumeros[letraBase] || 0;

    if (acentos) {
      acentos.forEach(acento => {
        if (tabelaAcentos[acento]) {
          valorBase += tabelaAcentos[acento];
        }
      });
    }
    return valorBase;
  };

  // Função para verificar vogal
  const isVogal = (letra) => {
    const letraBase = letra.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return ['A', 'E', 'I', 'O', 'U'].includes(letraBase);
  };

  /**
   * Renderiza o nome e seus valores numerológicos no PDF.
   * @param {jsPDF} doc - Instância do jsPDF.
   * @param {string} nome - Nome a ser renderizado.
   * @param {number} startY - Posição Y inicial.
   * @returns {number} - Nova posição Y após a renderização.
   */
  const renderNomeNumerologia = (doc, nome, startY) => {
    if (!nome) return startY;

    const nomeFormatado = nome.toUpperCase().replace(/\s/g, '');
    const letras = nomeFormatado.split('');
    const espacamento = 7; // Espaço entre letras

    // Centralizar o nome
    const totalWidth = (letras.length * espacamento) - 5;
    const startX = (doc.internal.pageSize.width - totalWidth) / 2;

    let xPosition = startX;
    let yPosition = startY;

    // Linha de letras
    letras.forEach(letra => {
      doc.setFontSize(14);
      doc.setTextColor(isVogal(letra) ? '#64B5F6' : '#9E9E9E');
      doc.text(letra, xPosition, yPosition);
      xPosition += espacamento;
    });

    // Linha de números
    xPosition = startX;
    yPosition += 7;

    letras.forEach(letra => {
      doc.setFontSize(12);
      doc.setTextColor(isVogal(letra) ? '#64B5F6' : '#9E9E9E');
      doc.text(calcularValorComAcento(letra).toString(), xPosition + 2, yPosition);
      xPosition += espacamento;
    });

    return yPosition + 15; // Retorna a posição Y para continuar escrevendo
  };

  /**
   * Função principal para gerar o PDF.
   */
  const generatePDF = async () => {
    const doc = new jsPDF();
    const pageHeight = doc.internal.pageSize.height;
    const margin = 20;

    // Configurações iniciais
    doc.setFont("helvetica", "bold");

    try {
      // =================================================================
      // 1. PRIMEIRA PÁGINA - CAPA
      // =================================================================
      doc.addImage(logo, 'PNG', 75, 20, 60, 60);
      doc.setFontSize(24);
      doc.text("MAPA NUMEROLOGICO CABALISTICO", 105, 100, { align: "center" });
      doc.setFontSize(16);
      doc.text("Orientadora: Manouche Yasmin", 105, 130, { align: "center" });
      const dataAtual = new Date().toLocaleDateString('pt-BR');
      doc.text(`Data: ${dataAtual}`, 105, 140, { align: "center" });

      // =================================================================
      // 2. SEGUNDA PÁGINA - DADOS DO CLIENTE
      // =================================================================
      doc.addPage();

      const startY = pageHeight / 2 - 30;
      doc.setFontSize(20);
      doc.text("DADOS DO CLIENTE", 105, startY, { align: "center" });
      doc.setFontSize(16);
      doc.text(`Cliente: ${nomeCliente || "Nome não informado"}`, 105, startY + 20, { align: "center" });
      const dataFormatada = dataNascimento
        ? new Date(dataNascimento).toLocaleDateString('pt-BR')
        : "Data não informada";
      doc.text(`Data de Nascimento: ${dataFormatada}`, 105, startY + 30, { align: "center" });

      // =================================================================
      // 3. TERCEIRA PÁGINA - INTRODUÇÃO À NUMEROLOGIA CABALÍSTICA
      // =================================================================
      doc.addPage();
      addWatermark(doc, logo);
      doc.setFontSize(22);
      doc.text("Numerologia Cabalística", 105, 30, { align: "center" });
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");

      const textoNumerologia = [
        "A Numerologia Cabalística é uma ciência sagrada que estuda a influência dos",
        "números na vida humana, revelando padrões energéticos e ciclos pessoais.",
        "Através da data de nascimento e do nome completo, podemos descobrir:",
        "",
        "- Missão de vida e propósito espiritual",
        "- Talentos e desafios cármicos",
        "- Ciclos pessoais e momentos decisivos",
        "- Compatibilidade e relações",
        "",
        "Cada número vibra em uma frequência específica que influencia nossa",
        "personalidade, escolhas e caminhos. A Cabala nos ensina que os números",
        "são a linguagem do universo, e compreendê-los é dar um passo essencial",
        "no autoconhecimento e evolução espiritual.",
        "",
        "Este mapa foi cuidadosamente elaborado para guiá-lo(a) na jornada de",
        "compreensão dos seus números pessoais e sua aplicação prática no dia a dia."
      ];

      let yPosition = 50;
      textoNumerologia.forEach(linha => {
        doc.text(linha, margin, yPosition);
        yPosition += 7;
      });

      // =================================================================
      // 4. PÁGINA - MOTIVAÇÃO
      // =================================================================
      if (nomeCliente) {
        doc.addPage();
        addWatermark(doc, logo);

        yPosition = renderNomeNumerologia(doc, nomeCliente, 30);

        // Título Motivação
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.setTextColor('#000000');
        doc.text("Motivação", 105, yPosition, { align: "center" });
        yPosition += 15;

        // Texto introdutório
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        const introText = [
          "A Motivação na Numerologia Cabalística revela seus desejos mais profundos,",
          "aquilo que verdadeiramente impulsiona suas ações e decisões. Representa",
          "sua essência interior, mostrando o que você realmente busca na vida."
        ];

        introText.forEach(linha => {
          doc.text(linha, margin, yPosition);
          yPosition += 7;
        });

        // Número da Motivação
        yPosition += 10;
        doc.setFont("helvetica", "bold");
        doc.text("Número da Motivação:", margin, yPosition);
        doc.setFont("helvetica", "normal");
        const numeroMotivacao = calcularMotivacao(nomeCliente);
        doc.text(numeroMotivacao.toString(), margin + 50, yPosition);
        yPosition += 15;

        // Definição com paginação inteligente
        doc.setFont("helvetica", "bold");
        doc.text("Definição:", margin, yPosition);
        yPosition += 7;

        if (motivacaoTextos[numeroMotivacao]) {
          doc.setFont("helvetica", "normal");
          const lines = doc.splitTextToSize(motivacaoTextos[numeroMotivacao], 170);

          lines.forEach(line => {
            if (yPosition > pageHeight - margin) {
              doc.addPage();
              addWatermark(doc, logo);
              yPosition = margin;
            }
            doc.text(line, margin, yPosition);
            yPosition += 7;
          });
        }
      }

      // =================================================================
      // 5. PÁGINA - IMPRESSÃO
      // =================================================================
      if (nomeCliente) {
        doc.addPage();
        addWatermark(doc, logo);

        yPosition = renderNomeNumerologia(doc, nomeCliente, 30);

        // Título Impressão
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.setTextColor('#000000');
        doc.text("Impressão", 105, yPosition, { align: "center" });
        yPosition += 15;

        // Texto introdutório sobre impressão
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        const introTextImpressao = [
          "A Impressão na Numerologia Cabalística representa como você se mostra ao mundo,",
          "a imagem que transmite aos outros e como é percebido socialmente.",
          "É calculada através da soma das consoantes do seu nome completo."
        ];

        introTextImpressao.forEach(linha => {
          doc.text(linha, margin, yPosition);
          yPosition += 7;
        });

        // Número da Impressão
        yPosition += 10;
        doc.setFont("helvetica", "bold");
        doc.text("Número da Impressão:", margin, yPosition);
        doc.setFont("helvetica", "normal");
        const numeroImpressao = calcularImpressao(nomeCliente);
        doc.text(numeroImpressao.toString(), margin + 50, yPosition);
        yPosition += 15;

        // Definição com paginação inteligente
        doc.setFont("helvetica", "bold");
        doc.text("Definição:", margin, yPosition);
        yPosition += 7;

        if (impressaoTextos[numeroImpressao]) {
          doc.setFont("helvetica", "normal");
          const lines = doc.splitTextToSize(impressaoTextos[numeroImpressao], 170);

          lines.forEach(line => {
            if (yPosition > pageHeight - margin) {
              doc.addPage();
              addWatermark(doc, logo);
              yPosition = margin;
            }
            doc.text(line, margin, yPosition);
            yPosition += 7;
          });
        }
      }

      // =================================================================
      // 6. PÁGINA - EXPRESSÃO
      // =================================================================
      if (nomeCliente) {
        doc.addPage();
        addWatermark(doc, logo);

        yPosition = renderNomeNumerologia(doc, nomeCliente, 30);

        // Título Expressão
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.setTextColor('#000000');
        doc.text("Expressão", 105, yPosition, { align: "center" });
        yPosition += 15;

        // Texto introdutório sobre Expressão
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        const introTextExpressao = [
          "A Expressão, ou Destino, revela seus talentos e habilidades naturais,",
          "o que você veio realizar e como você se expressa no mundo.",
          "É calculada pela soma de todas as letras do seu nome completo."
        ];

        introTextExpressao.forEach(linha => {
          doc.text(linha, margin, yPosition);
          yPosition += 7;
        });

        // Número da Expressão
        yPosition += 10;
        doc.setFont("helvetica", "bold");
        doc.text("Número da Expressão:", margin, yPosition);
        doc.setFont("helvetica", "normal");
        const numeroExpressao = calcularExpressao(nomeCliente);
        doc.text(numeroExpressao.toString(), margin + 50, yPosition);
        yPosition += 15;

        // Definição com paginação inteligente
        doc.setFont("helvetica", "bold");
        doc.text("Definição:", margin, yPosition);
        yPosition += 7;

        if (expressaoTextos[numeroExpressao]) {
          doc.setFont("helvetica", "normal");
          const lines = doc.splitTextToSize(expressaoTextos[numeroExpressao], 170);

          lines.forEach(line => {
            if (yPosition > pageHeight - margin) {
              doc.addPage();
              addWatermark(doc, logo);
              yPosition = margin;
            }
            doc.text(line, margin, yPosition);
            yPosition += 7;
          });
        }
      }

      // =================================================================
      // 7. PÁGINA - DESTINO
      // =================================================================
      if (dataNascimento) {
        doc.addPage();
        addWatermark(doc, logo);

        // Título Destino
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.setTextColor('#000000');
        doc.text("Destino", 105, 30, { align: "center" });
        yPosition = 50;

        // Texto introdutório sobre Destino
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        const introTextDestino = [
          "O Destino, ou Caminho de Vida, é o número mais importante do seu mapa.",
          "Ele revela o caminho que você deve seguir, as lições que precisa aprender",
          "e as oportunidades que a vida lhe trará. É calculado pela soma da sua data de nascimento."
        ];

        introTextDestino.forEach(linha => {
          doc.text(linha, margin, yPosition);
          yPosition += 7;
        });

        // Número do Destino
        yPosition += 10;
        doc.setFont("helvetica", "bold");
        doc.text("Número do Destino:", margin, yPosition);
        doc.setFont("helvetica", "normal");
        const numeroDestino = calcularDestino(dataNascimento);
        doc.text(numeroDestino.toString(), margin + 50, yPosition);
        yPosition += 15;

        // Definição com paginação inteligente
        doc.setFont("helvetica", "bold");
        doc.text("Definição:", margin, yPosition);
        yPosition += 7;

        if (destinoTextos[numeroDestino]) {
          doc.setFont("helvetica", "normal");
          const lines = doc.splitTextToSize(destinoTextos[numeroDestino], 170);

          lines.forEach(line => {
            if (yPosition > pageHeight - margin) {
              doc.addPage();
              addWatermark(doc, logo);
              yPosition = margin;
            }
            doc.text(line, margin, yPosition);
            yPosition += 7;
          });
        }
      }

      // =================================================================
      // 8. PÁGINA - MISSÃO
      // =================================================================
      if (nomeCliente && dataNascimento) {
        doc.addPage();
        addWatermark(doc, logo);

        // Título Missão
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.setTextColor('#000000');
        doc.text("Missão", 105, 30, { align: "center" });
        yPosition = 50;

        // Texto introdutório sobre Missão
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        const introTextMissao = [
          "A Missão de Vida é a soma do seu Número de Expressão com o seu Número de Destino.",
          "Ela representa o propósito maior da sua alma nesta encarnação, o que você veio",
          "realizar e o legado que deixará no mundo."
        ];

        introTextMissao.forEach(linha => {
          doc.text(linha, margin, yPosition);
          yPosition += 7;
        });

        // Número da Missão
        yPosition += 10;
        doc.setFont("helvetica", "bold");
        doc.text("Número da Missão:", margin, yPosition);
        doc.setFont("helvetica", "normal");
        const numeroMissao = calcularMissao(nomeCliente, dataNascimento);
        doc.text(numeroMissao.toString(), margin + 50, yPosition);
        yPosition += 15;

        // Definição com paginação inteligente
        doc.setFont("helvetica", "bold");
        doc.text("Definição:", margin, yPosition);
        yPosition += 7;

        if (missaoTextos[numeroMissao]) {
          doc.setFont("helvetica", "normal");
          const lines = doc.splitTextToSize(missaoTextos[numeroMissao], 170);

          lines.forEach(line => {
            if (yPosition > pageHeight - margin) {
              doc.addPage();
              addWatermark(doc, logo);
              yPosition = margin;
            }
            doc.text(line, margin, yPosition);
            yPosition += 7;
          });
        }
      }

      // =================================================================
      // 9. PÁGINA - DÍVIDAS CÁRMICAS
      // =================================================================
      if (nomeCliente && dataNascimento) {
        doc.addPage();
        addWatermark(doc, logo);

        // Título Dívidas Cármicas
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.setTextColor('#000000');
        doc.text("Dívidas Cármicas", 105, 30, { align: "center" });
        yPosition = 50;

        // Texto introdutório sobre dívidas cármicas
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        const introTextDividas = [
          "As Dívidas Cármicas na Numerologia Cabalística representam lições não",
          "aprendidas em vidas passadas, que se manifestam como desafios nesta vida.",
          "Elas são identificadas através da data de nascimento e dos números principais",
          "(Expressão, Destino e Motivação). Reconhecê-las ajuda a superar bloqueios.",
          " "
        ];

        introTextDividas.forEach(linha => {
          doc.text(linha, margin, yPosition);
          yPosition += 7;
        });

        // Cálculo das dívidas cármicas
        doc.setFont("helvetica", "bold");
        doc.text("Dívidas Identificadas:", margin, yPosition);
        yPosition += 10;

        doc.setFont("helvetica", "normal");
        const dividas = calcularDividasCarmicas(
          dataNascimento,
          calcularExpressao(nomeCliente),
          calcularDestino(dataNascimento),
          calcularMotivacao(nomeCliente)
        );

        doc.text(dividas === 'Nenhuma' ? "Nenhuma dívida cármica identificada." : `Números: ${dividas}`, margin + 10, yPosition);
        yPosition += 15;

        // Definição das dívidas (se houver)
        if (dividas !== 'Nenhuma') {
          doc.setFont("helvetica", "bold");
          doc.text("Significados:", margin, yPosition);
          yPosition += 10;

          const dividasArray = dividas.split(', ');

          dividasArray.forEach(numero => {
            if (dividasCarmicasTextos && dividasCarmicasTextos[numero]) {
              // Número da dívida cármica
              doc.setFont("helvetica", "bold");
              doc.setFontSize(14);
              doc.text(`Número ${numero}:`, margin, yPosition);

              // Texto da dívida cármica
              doc.setFont("helvetica", "normal");
              doc.setFontSize(12);
              const lines = doc.splitTextToSize(dividasCarmicasTextos[numero], 170);

              yPosition += 7;
              lines.forEach(line => {
                if (yPosition > pageHeight - margin) {
                  doc.addPage();
                  addWatermark(doc, logo);
                  yPosition = margin;
                }
                doc.text(line, margin + 5, yPosition);
                yPosition += 7;
              });
              yPosition += 10; // Espaço entre dívidas
            }
          });
        }
      }

      // =================================================================
      // 10. PÁGINA - LIÇÕES CÁRMICAS
      // =================================================================
      if (nomeCliente) {
        doc.addPage();
        addWatermark(doc, logo);

        // Título Lições Cármicas
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.setTextColor('#000000');
        doc.text("Lições Cármicas", 105, 30, { align: "center" });
        yPosition = 50;

        // Texto introdutório
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        const introTextLicoes = [
          "As Lições Cármicas revelam números ausentes no seu nome completo, indicando",
          "habilidades ou experiências que você precisa desenvolver nesta encarnação.",
          "Cada número faltante representa um desafio específico para seu crescimento.",
          " "
        ];

        introTextLicoes.forEach(linha => {
          doc.text(linha, margin, yPosition);
          yPosition += 7;
        });

        // Cálculo das lições
        doc.setFont("helvetica", "bold");
        doc.text("Lições Identificadas:", margin, yPosition);
        yPosition += 10;

        doc.setFont("helvetica", "normal");
        const licoes = calcularLicoesCarmicas(nomeCliente);

        // Formatação dos números identificados
        if (licoes === 'Nenhuma') {
          doc.text("Nenhuma lição cármica identificada.", margin + 10, yPosition);
          yPosition += 10;
        } else {
          doc.text(`Números: ${licoes}`, margin + 10, yPosition);
          yPosition += 15;

          // Definição das lições com novo layout
          doc.setFont("helvetica", "bold");
          doc.text("Significados:", margin, yPosition);
          yPosition += 10;

          const licoesArray = licoes.split(', ');

          licoesArray.forEach(numero => {
            if (licoesCarmicasTexto && licoesCarmicasTexto[numero]) {
              // Título da lição (ex: "Lições 6 - Responsabilidade")
              doc.setFont("helvetica", "bold");
              doc.text(`Lições ${numero}:`, margin, yPosition);
              yPosition += 7;

              // Texto explicativo
              doc.setFont("helvetica", "normal");
              const lines = doc.splitTextToSize(licoesCarmicasTexto[numero], 170);

              lines.forEach(line => {
                if (yPosition > pageHeight - margin) {
                  doc.addPage();
                  addWatermark(doc, logo);
                  yPosition = margin;
                }
                doc.text(line, margin + 5, yPosition, { maxWidth: 165 });
                yPosition += 7;
              });
              yPosition += 10; // Espaço maior entre lições
            }
          });
        }
      }

      // =================================================================
      // 11. PÁGINA - ANO PESSOAL
      // =================================================================
      if (dataNascimento) {
        const anoPessoal = calcularAnoPessoal(dataNascimento);

        doc.addPage();
        addWatermark(doc, logo);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.text("Ano Pessoal", 105, 30, { align: "center" });

        let y = 55;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);

        const introAno = [
          "O Ano Pessoal representa o ciclo energético que influencia a sua vida durante todo o ano corrente.",
          "Ele é calculado somando o dia e mês do seu nascimento ao ano atual reduzido a um único dígito.",
          "Esse número revela oportunidades, desafios e o tipo de vibração que estará mais presente em sua jornada."
        ];

        introAno.forEach(linha => {
          doc.text(linha, margin, y);
          y += 7;
        });

        y += 15;

        // Exibição do ano pessoal calculado
        doc.setFont("helvetica", "bold");
        doc.setFontSize(16);
        doc.text(`Seu Ano Pessoal: ${anoPessoal}`, margin, y);
        y += 12;

        // Texto explicativo do ano pessoal
        const textoAno = anoPessoalDescritivo[anoPessoal];

        if (textoAno) {
          doc.setFont("helvetica", "normal");
          doc.setFontSize(12);

          const linhas = doc.splitTextToSize(textoAno, 170);

          linhas.forEach(l => {
            if (y > pageHeight - margin) {
              doc.addPage();
              addWatermark(doc, logo);
              y = margin;
            }
            doc.text(l, margin, y);
            y += 7;
          });
        }

        y += 10;
      }

      // =================================================================
      // 12. PÁGINA - MÊS PESSOAL
      // =================================================================
      if (dataNascimento) {
        const mesesLista = calcularMesesPessoaisRestantes(dataNascimento);

        doc.addPage();
        addWatermark(doc, logo);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.text("Mês Pessoal", 105, 30, { align: "center" });

        let y = 55;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);

        const intro = [
          "O Mês Pessoal mostra como a energia numerológica atua mês a mês na sua vida.",
          "Ele é calculado a partir da sua data de nascimento e do ano corrente,",
          "indicando tendências, desafios e oportunidades específicas para o período."
        ];

        intro.forEach(linha => {
          doc.text(linha, margin, y);
          y += 7;
        });

        y += 10;

        mesesLista.forEach((item) => {
          const tituloLinha = `${item.nomeMes}/${item.ano} – ${item.valor}`;

          // Título do mês
          doc.setFont("helvetica", "bold");
          doc.setFontSize(14);

          if (y > pageHeight - margin) {
            doc.addPage();
            addWatermark(doc, logo);
            y = margin;
          }

          doc.text(tituloLinha, margin, y);
          y += 8;

          // Texto explicativo do mês
          const textoDoMes = mesesPessoal[item.valor];
          if (textoDoMes) {
            const linhas = doc.splitTextToSize(textoDoMes, 170);

            doc.setFont("helvetica", "normal");
            doc.setFontSize(12);

            linhas.forEach(l => {
              if (y > pageHeight - margin) {
                doc.addPage();
                addWatermark(doc, logo);
                y = margin;
              }
              doc.text(l, margin, y);
              y += 7;
            });
          }

          y += 10; // espaço entre meses
        });
      }

      // =================================================================
      // 13. PÁGINA - TENDÊNCIAS OCULTAS
      // =================================================================
      if (nomeCliente) {
        const resultadoOcultas = calcularTendenciasOcultas(nomeCliente);

        doc.addPage();
        addWatermark(doc, logo);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.text("Tendências Ocultas", 105, 30, { align: "center" });

        let y = 55;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);

        const intro = [
          "As Tendências Ocultas revelam padrões repetitivos que aparecem no seu nome quando",
          "cada letra é convertida para um número. Quando um número se repete três vezes ou mais,",
          "ele indica uma força latente, um impulso interno que influencia atitudes, escolhas e reações.",
          "Mesmo que não seja sempre visível, essa vibração atua nos bastidores da sua personalidade."
        ];

        intro.forEach(linha => {
          doc.text(linha, margin, y);
          y += 7;
        });

        y += 15;

        // MOSTRA O RESULTADO DOS NÚMEROS ENCONTRADOS
        doc.setFont("helvetica", "bold");
        doc.setFontSize(16);

        doc.text(`Tendências encontradas: ${resultadoOcultas}`, margin, y);
        y += 12;

        // Se não tiver nenhuma tendência
        if (resultadoOcultas === "Nenhuma") {
          doc.setFont("helvetica", "normal");
          doc.setFontSize(12);

          const textoNeutro = [
            "Nenhuma sequência significativa de repetição foi encontrada no seu nome.",
            "Isso indica que suas energias são equilibradas e não há impulsos ocultos dominantes.",
            "Sua personalidade opera de forma mais aberta e transparente."
          ];

          textoNeutro.forEach(linha => {
            if (y > pageHeight - margin) {
              doc.addPage();
              addWatermark(doc, logo);
              y = margin;
            }
            doc.text(linha, margin, y);
            y += 7;
          });

          y += 10;

        } else {
          // Se houver números, detalhar cada tendência
          const numeros = resultadoOcultas.split(",").map(n => n.trim());

          numeros.forEach(numero => {
            const titulo = `Número ${numero}`;

            doc.setFont("helvetica", "bold");
            doc.setFontSize(14);

            if (y > pageHeight - margin - 10) {
              doc.addPage();
              addWatermark(doc, logo);
              y = margin;
            }

            doc.text(titulo, margin, y);
            y += 8;

            // Pega o texto descritivo do seu dicionário
            const texto = tendenciaOculta[numero];

            if (texto) {
              doc.setFont("helvetica", "normal");
              doc.setFontSize(12);

              const linhas = doc.splitTextToSize(texto, 170);

              linhas.forEach(l => {
                if (y > pageHeight - margin) {
                  doc.addPage();
                  addWatermark(doc, logo);
                  y = margin;
                }
                doc.text(l, margin, y);
                y += 7;
              });

              y += 10;
            }
          });
        }
      }

      // =================================================================
      // 14. PÁGINA - SUBCONSCIENTE
      // =================================================================
      if (nomeCliente) {

        // Calcula lições kármicas REALMENTE
        const licoes = calcularLicoesCarmicas(nomeCliente);

        // Agora sim calcula o subconsciente certo
        const valorSubconsciente = calcularSubconsciente(licoes);

        doc.addPage();
        addWatermark(doc, logo);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.text("Subconsciente", 105, 30, { align: "center" });

        let y = 55;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);

        const intro = [
          "O Subconsciente representa sua força interna instintiva, ligada à autoconfiança,",
          "intuição, impulsos naturais e capacidade de reagir automaticamente aos desafios.",
          "Ele é calculado subtraindo o número de lições kármicas do valor 9.",
          "Quanto menor o número de lições, mais forte é o seu subconsciente."
        ];

        intro.forEach(linha => {
          doc.text(linha, margin, y);
          y += 7;
        });

        y += 15;

        doc.setFont("helvetica", "bold");
        doc.setFontSize(16);
        doc.text(`Seu número do Subconsciente: ${valorSubconsciente}`, margin, y);
        y += 12;

        const textoDescricao = respostaSubconsciente[valorSubconsciente];

        if (textoDescricao) {
          doc.setFont("helvetica", "normal");
          doc.setFontSize(12);

          const linhas = doc.splitTextToSize(textoDescricao, 170);

          linhas.forEach(l => {
            if (y > pageHeight - margin) {
              doc.addPage();
              addWatermark(doc, logo);
              y = margin;
            }
            doc.text(l, margin, y);
            y += 7;
          });
        }

        y += 10;
      }

      // =================================================================
      // 15. PÁGINA - NÚMERO HARMÔNICO
      // =================================================================
      if (dataNascimento) {
        const resultadoHarmonico = calcularNumeroHarmonico(dataNascimento);

        doc.addPage();
        addWatermark(doc, logo);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.text("Número Harmônico", 105, 30, { align: "center" });

        let y = 55;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);

        const intro = [
          "O Número Harmônico é derivado do dia do seu nascimento.",
          "Ele representa a vibração essencial que acompanha suas ações,",
          "indicando como você lida com situações, pessoas e desafios do cotidiano."
        ];

        intro.forEach(linha => {
          doc.text(linha, margin, y);
          y += 7;
        });

        y += 15;

        // Mostra o valor encontrado
        doc.setFont("helvetica", "bold");
        doc.setFontSize(16);
        doc.text(`Seu Número Harmônico:`, margin, y);
        y += 10;

        doc.setFont("helvetica", "bold");
        doc.setFontSize(20);

        const valorStr = Array.isArray(resultadoHarmonico)
          ? resultadoHarmonico.join(", ")
          : resultadoHarmonico;

        doc.text(valorStr || "—", margin, y);
        y += 15;

        y += 10;
      }

      // =================================================================
      // 16. PÁGINA - CORES FAVORÁVEIS
      // =================================================================
      const numeroExpressaoFinal = calcularExpressao(nomeCliente);

      if (numeroExpressaoFinal) {

        // Pega as cores diretamente do seu cálculo
        const listaCores = calcularCoresFavoraveis(numeroExpressaoFinal);

        doc.addPage();
        addWatermark(doc, logo);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.text("Cores Favoráveis", 105, 30, { align: "center" });

        let y = 55;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);

        const intro = [
          "As cores favoráveis refletem as vibrações energéticas associadas ao seu",
          "Número de Expressão. Elas funcionam como catalisadores emocionais e",
          "psicológicos, reforçando seus potenciais naturais e equilibrando seus",
          "pontos mais sensíveis.",
          "Usá-las em roupas, detalhes pessoais ou ambientes ajuda a alinhar sua",
          "frequência interna com o melhor da sua própria numerologia."
        ];

        intro.forEach(linha => {
          doc.text(linha, margin, y);
          y += 7;
        });

        y += 15;

        doc.setFont("helvetica", "bold");
        doc.setFontSize(16);

        y += 12;

        doc.text("Cores recomendadas:", margin, y);
        y += 10;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(13);

        const blocoCores = doc.splitTextToSize(listaCores, 170);

        blocoCores.forEach(linha => {
          if (y > pageHeight - margin) {
            doc.addPage();
            addWatermark(doc, logo);
            y = margin;
          }
          doc.text(linha, margin, y);
          y += 7;
        });

        y += 15;

        const explicacaoFinal = [
          "Essas cores fortalecem seu campo emocional, ampliam sua presença e",
          "harmonizam sua energia pessoal. Quanto mais você as utiliza, mais sente",
          "clareza, foco e equilíbrio nos seus movimentos diários.",
          "Trata-se de uma ferramenta simples, mas poderosa, de alinhamento vibracional."
        ];

        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);

        explicacaoFinal.forEach(linha => {
          if (y > pageHeight - margin) {
            doc.addPage();
            addWatermark(doc, logo);
            y = margin;
          }
          doc.text(linha, margin, y);
          y += 7;
        });

        y += 10;
      }

      // =================================================================
      // 17. PÁGINA - CICLO DE VIDA
      // =================================================================
      if (dataNascimento && nomeCliente) {
        const destino = calcularDestino(dataNascimento);
        const ciclosVida = calcularCicloVida(dataNascimento, destino);

        if (ciclosVida) {
          doc.addPage();
          addWatermark(doc, logo);

          doc.setFont("helvetica", "bold");
          doc.setFontSize(22);
          doc.text("Ciclo de Vida", 105, 30, { align: "center" });

          yPosition = 50;

          doc.setFont("helvetica", "normal");
          doc.setFontSize(12);

          const introCiclos = [
            "Os Ciclos de Vida representam fases energéticas distintas que influenciam",
            "diferentes períodos da sua existência. Cada ciclo traz aprendizados,",
            "oportunidades e desafios específicos para seu desenvolvimento pessoal.",
            " "
          ];

          introCiclos.forEach(linha => {
            doc.text(linha, margin, yPosition);
            yPosition += 7;
          });

          yPosition += 10;

          // Renderizar tabela de ciclos de vida
          const headersCiclos = ["Ciclo", "Idade", "Período", "Energia"];
          const dataCiclos = ciclosVida.map(ciclo => ({
            ciclo: ciclo.ciclo,
            idade: ciclo.idade,
            periodo: ciclo.periodo,
            energia: ciclo.energia.toString()
          }));

          yPosition = renderTable(doc, headersCiclos, dataCiclos, yPosition, margin);
        }
      }

      // =================================================================
      // 18. PÁGINA - DESAFIOS
      // =================================================================
      if (dataNascimento && nomeCliente) {
        const destino = calcularDestino(dataNascimento);
        const ciclosVida = calcularCicloVida(dataNascimento, destino);
        const desafios = calcularDesafios(dataNascimento, ciclosVida);

        if (desafios && desafios.length > 0) {
          doc.addPage();
          addWatermark(doc, logo);

          doc.setFont("helvetica", "bold");
          doc.setFontSize(22);
          doc.text("Desafios", 105, 30, { align: "center" });

          yPosition = 50;

          doc.setFont("helvetica", "normal");
          doc.setFontSize(12);

          const introDesafios = [
            "Os Desafios Numerológicos representam lições específicas que você",
            "precisa aprender em cada fase da vida. Eles indicam áreas que",
            "requerem mais atenção e desenvolvimento para seu crescimento pessoal.",
            " "
          ];

          introDesafios.forEach(linha => {
            doc.text(linha, margin, yPosition);
            yPosition += 7;
          });

          yPosition += 10;

          // Renderizar tabela de desafios
          const headersDesafios = ["Desafio", "Valor", "Período"];
          const dataDesafios = desafios.map(desafio => ({
            desafio: desafio.nome,
            valor: desafio.valor.toString(),
            periodo: desafio.periodo
          }));

          yPosition = renderTable(doc, headersDesafios, dataDesafios, yPosition, margin);
        }
      }

      // =================================================================
      // 19. PÁGINA - MOMENTOS DECISIVOS
      // =================================================================
      if (dataNascimento && nomeCliente) {
        const destino = calcularDestino(dataNascimento);
        const momentos = calcularMomentosDecisivos(dataNascimento, destino);

        if (momentos) {
          doc.addPage();
          addWatermark(doc, logo);

          doc.setFont("helvetica", "bold");
          doc.setFontSize(22);
          doc.text("Momentos Decisivos", 105, 30, { align: "center" });

          yPosition = 50;

          doc.setFont("helvetica", "normal");
          doc.setFontSize(12);

          const introMomentos = [
            "Os Momentos Decisivos são períodos específicos onde importantes",
            "escolhas e transformações ocorrem. Estes são momentos-chave que",
            "definem o rumo da sua jornada pessoal e espiritual.",
            " "
          ];

          introMomentos.forEach(linha => {
            doc.text(linha, margin, yPosition);
            yPosition += 7;
          });

          yPosition += 10;

          // Renderizar tabela de momentos decisivos
          const headersMomentos = ["Energia", "Idade", "Período"];
          const dataMomentos = momentos.map((momento, index) => {
            const idadeInicio = index === 0 ? 0 : momentos[index - 1].fim - new Date(dataNascimento).getFullYear();
            const idadeFim = momento.fim === '...' ? 'em diante' : `${idadeInicio + (momento.fim - momento.inicio)} anos`;

            return {
              energia: momento.momento.toString(),
              idade: `${idadeInicio} até ${idadeFim}`,
              periodo: `${momento.inicio} até ${momento.fim}`
            };
          });

          yPosition = renderTable(doc, headersMomentos, dataMomentos, yPosition, margin);
        }
      }

      // =================================================================
      // 20. PÁGINA - HARMONIA CONJUGAL
      // =================================================================
      if (nomeCliente && dataNascimento) {
        const missao = calcularMissao(nomeCliente, dataNascimento);
        const harmonia = calcularHarmoniaConjugal(missao);

        if (harmonia) {
          doc.addPage();
          addWatermark(doc, logo);

          doc.setFont("helvetica", "bold");
          doc.setFontSize(22);
          doc.text("Harmonia Conjugal", 105, 30, { align: "center" });

          yPosition = 50;

          doc.setFont("helvetica", "normal");
          doc.setFontSize(12);

          const introHarmonia = [
            "A Harmonia Conjugal revela suas compatibilidades e desafios nos",
            "relacionamentos. Mostra com quais energias você vibra melhor,",
            "quais atraí naturalmente e quais requerem mais atenção.",
            " "
          ];

          introHarmonia.forEach(linha => {
            doc.text(linha, margin, yPosition);
            yPosition += 7;
          });

          yPosition += 15;

          // Número base
          doc.setFont("helvetica", "bold");
          doc.text(`Número de Harmonia: ${harmonia.numero}`, margin, yPosition);
          yPosition += 10;

          // Renderizar tabela de harmonia conjugal
          const headersHarmonia = ["Tipo", "Números"];
          const dataHarmonia = [
            { tipo: "Vibra com", numeros: harmonia.vibraCom.toString() },
            { tipo: "Atrai", numeros: harmonia.atrai },
            { tipo: "É oposto", numeros: harmonia.oposto },
            { tipo: "É passivo em relação a", numeros: harmonia.passivo }
          ];

          yPosition = renderTable(doc, headersHarmonia, dataHarmonia, yPosition, margin);
        }
      }


      // =================================================================
      // FIM
      // =================================================================
      doc.save(`Mapa_Numerologico_${nomeCliente || 'Cliente'}.pdf`);
    } catch (error) {
      console.error("Erro ao gerar PDF:", error);
      // Em um ambiente React real, você usaria um Toast ou Snackbar
      // alert("Ocorreu um erro ao gerar o PDF. Por favor, tente novamente.");
    }
  };









  // =================================================================
  // RENDERIZAÇÃO DO COMPONENTE
  // =================================================================
  if (asListItem) {
    return (
      <ListItem button onClick={generatePDF}>
        <ListItemIcon>
          <PictureAsPdf sx={{ color: darkMode ? '#ffffff' : '#000000' }} />
        </ListItemIcon>
        <ListItemText primary="Gerar PDF" />
      </ListItem>
    );
  }

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<PictureAsPdf />}
      onClick={generatePDF}
      fullWidth
      sx={{ mt: 2 }}
    >
      Gerar PDF
    </Button>
  );
};

export default PdfGeneratorButton;
