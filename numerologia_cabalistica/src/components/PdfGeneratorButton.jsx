import React from "react";
import { Button, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { PictureAsPdf } from "@mui/icons-material";
import jsPDF from "jspdf";
import logo from "../assets/image/logo.png";

// =================================================================
// 1. IMPORTAÇÕES DE CÁLCULOS E DADOS
// =================================================================
import { calcularMotivacao } from "./CalculoMotivacao";
import { calcularImpressao } from "./CalculoImpressao";
import { calcularExpressao } from "./CalculoExpressao";
import { calcularDestino } from "./CalculoDestino";
import { calcularMissao } from "./CalculoMissao";
import { calcularDividasCarmicas } from "./CalculoDividasCarmicas";
import { calcularLicoesCarmicas } from "./CalculoLicoesCarmicas";
import { calcularMesesPessoaisRestantes, calcularDiaPessoal } from "./CalculoMesDiaPessoal";
import { calcularAnoPessoal } from "./CalculoAnoPessoal";
import { calcularTendenciasOcultas } from "./CalculoTendenciasOcultas";
import { calcularSubconsciente } from "./CalculoSubconsciente";
import { calcularNumeroHarmonico } from "./CalculoHarmonico";
import { calcularCoresFavoraveis } from "./CalculoCoresFavoraveis";
import { calcularCicloVida } from "./CalculoCicloVida";
import { calcularDesafios } from "./CalculoDesafios";
import { calcularMomentosDecisivos } from "./CalcularMomentosDecisivos";
import { calcularHarmoniaConjugal } from "./CalculoHarmoniaConjugal";
import { generateInvertedPyramid, findSequences } from "./generateInvertedPyramid";



import {
  tabelaNumeros, tabelaAcentos, motivacaoTextos, impressaoTextos, expressaoTextos, destinoTextos, missaoTextos,
  dividasCarmicasTextos, licoesCarmicasTexto, anoPessoalDescritivo, tendenciaOculta, respostaSubconsciente,
  mesesPessoal, sequenciaNegativa, arcanos, CicloVida, segundoCicloVida, terceiroCicloVida, desafios as desafiosTextos, momentosDecisivos, segundoMomentoDecisivo,
  terceiroMomentoDecisivo, quartoMomentoDecisivo, diaPessoal as diaPessoalTextos,
  caracteristicasDiaNascimento
} from "./TabelaNumerologia";

// =================================================================
// 2. COMPONENTE PRINCIPAL
// =================================================================
const PdfGeneratorButton = ({ nomeCliente, dataNascimento, asListItem, darkMode, nomesSociais = [], mesInteresse, diaInteresse }) => {

  // --- Funções Utilitárias ---
  const calcularValorComAcento = (letra) => {
    if (!letra || letra.trim() === "") return 0;
    const acentos = letra.normalize('NFD').match(/[\u0300-\u036f]/g);
    const letraBase = letra.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    let valorBase = tabelaNumeros[letraBase] || 0;
    if (acentos) {
      acentos.forEach(acento => {
        if (tabelaAcentos[acento]) valorBase += tabelaAcentos[acento];
      });
    }
    return valorBase;
  };

  const isVogal = (letra) => {
    const letraBase = letra.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return ['A', 'E', 'I', 'O', 'U'].includes(letraBase);
  };

  const loadImage = (url) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      };
      img.onerror = () => resolve(null);
    });
  };

  // Função para carregar a imagem JÁ com opacidade aplicada (Fix definitivo para mobile)
  const prepareWatermarkImage = (url, opacity = 0.1) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');

        // A MÁGICA ACONTECE AQUI:
        // Define a transparência no Canvas antes de desenhar
        ctx.globalAlpha = opacity;
        ctx.drawImage(img, 0, 0);

        // Retorna a imagem já processada como PNG transparente
        resolve(canvas.toDataURL('image/png'));
      };
      img.onerror = () => {
        console.warn("Erro ao processar marca d'água");
        resolve(null);
      };
    });
  };

  // =================================================================
  // 3. FUNÇÃO GERADORA DO PDF (CORE)
  // =================================================================
  const generatePDF = async () => {
    const doc = new jsPDF();

    // ... (suas configurações CONFIG permanecem iguais) ...
    const CONFIG = {
      margin: 20,
      pageHeight: doc.internal.pageSize.height,
      pageWidth: doc.internal.pageSize.width,
      centerX: doc.internal.pageSize.width / 2,
      lineHeight: 7,
      colorBlack: '#000000',
      colorBlue: '#64B5F6',
      colorGray: '#9E9E9E'
    };

    let y = CONFIG.margin;
    const indiceItens = [];

    // 1. PREPARAR A MARCA D'ÁGUA (Carrega ela já transparente)
    // Passamos 0.08 (8%) de opacidade para ficar bem suave
    const watermarkBase64 = await prepareWatermarkImage(logo, 0.08);

    // --- Helper ATUALIZADO (Sem setGState) ---
    const addWatermarkHelper = () => {
      if (watermarkBase64) {
        const wmWidth = CONFIG.pageWidth * 0.7;
        const x = (CONFIG.pageWidth - wmWidth) / 2;
        const wmY = (CONFIG.pageHeight - wmWidth) / 2;

        // NÃO USAMOS MAIS setGState AQUI
        // A imagem 'watermarkBase64' já é transparente por natureza
        doc.addImage(watermarkBase64, "PNG", x, wmY, wmWidth, wmWidth);
      }
    };

    // Verifica se o elemento que queremos desenhar cabe na página.
    // heightNeeded: Altura do elemento que será desenhado
    const checkPageBreak = (currentY, heightNeeded = 0) => {
      const limit = CONFIG.pageHeight - CONFIG.margin;
      if (currentY + heightNeeded > limit) {
        doc.addPage();
        addWatermarkHelper();
        return CONFIG.margin; // Retorna o cursor para o topo
      }
      return currentY;
    };

    // Títulos de Seção Inteligentes: 
    // Se estiver no meio da página, cria nova. Se já estiver no topo, usa a atual.
    const printSectionTitle = (title) => {
      // Se já tem muito conteúdo na página (> 1/3 usada), força quebra para destaque.
      // Ou se não cabe o título + um pouco de texto (40px).
      if (y > CONFIG.margin + 10) {
        y = checkPageBreak(y, 200); // Força quebra se não estiver no topo
        // Se checkPageBreak não quebrou (pq cabe), forçamos addPage para organização
        if (y > CONFIG.margin) {
          doc.addPage();
          addWatermarkHelper();
          y = CONFIG.margin;
        }
      }

      // Desenha o título
      y += 10;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(22);
      doc.setTextColor(CONFIG.colorBlack);
      doc.text(title, CONFIG.centerX, y, { align: "center" });
      return y + 15; // Retorna Y abaixo do título
    };

    const printWrappedText = (text, currentY, fontSize = 12, fontType = "normal", color = CONFIG.colorBlack, x = CONFIG.margin, maxWidth = 170) => {
      if (!text) return currentY;
      doc.setFont("helvetica", fontType);
      doc.setFontSize(fontSize);
      doc.setTextColor(color);

      const lines = doc.splitTextToSize(String(text), maxWidth);

      // Antes de imprimir, verifica se o bloco inteiro cabe? Não, linha a linha.
      lines.forEach(line => {
        currentY = checkPageBreak(currentY, CONFIG.lineHeight);
        doc.text(line, x, currentY);
        currentY += CONFIG.lineHeight;
      });
      return currentY;
    };

    const addToIndex = (titulo) => {
      indiceItens.push({ titulo, pagina: doc.internal.getNumberOfPages() });
    };

    // --- Helper da Pirâmide ---
    const drawPyramid = (nomeParaPiramide, startY) => {
      const pyramidData = generateInvertedPyramid(nomeParaPiramide);
      if (!pyramidData || pyramidData.length === 0) return { nextY: startY, data: [] };

      let currentY = startY;
      const cellWidth = 6;
      const cellHeight = 4;

      pyramidData.forEach((row) => {
        // Verifica se a próxima linha da pirâmide cabe
        currentY = checkPageBreak(currentY, cellHeight + 2);

        const rowLength = row.data.length;
        const totalRowWidth = rowLength * cellWidth;
        const startX = (CONFIG.pageWidth - totalRowWidth) / 2;
        const sequences = row.type === 'numbers' ? findSequences(row.data) : [];

        row.data.forEach((item, itemIndex) => {
          const x = startX + (itemIndex * cellWidth);
          const isSequence = sequences.includes(itemIndex);

          doc.setDrawColor(0);
          doc.rect(x, currentY, cellWidth, cellHeight);

          if (row.type === 'letters') {
            doc.setFontSize(6);
            doc.setFont("helvetica", "bold");
            doc.setTextColor(0, 0, 0);
          } else {
            doc.setFontSize(5);
            doc.setFont("helvetica", isSequence ? "bold" : "normal");
            doc.setTextColor(isSequence ? 255 : 0, isSequence ? 0 : 0, 0);
          }
          doc.text(item.toString(), x + (cellWidth / 2), currentY + (cellHeight / 2) + 1, { align: "center" });
        });
        currentY += cellHeight + 1;
      });

      return { nextY: currentY + 5, data: pyramidData };
    };

    const renderNomeNumerologia = (nome, startY) => {
      if (!nome) return startY;

      // Verifica espaço para as duas linhas do nome (aprox 20px)
      let currentY = checkPageBreak(startY, 30);

      const nomeFormatado = nome.toUpperCase().replace(/\s/g, '');
      const letras = nomeFormatado.split('');
      const espacamento = 7;
      const totalWidth = (letras.length * espacamento) - 5;
      const startX = (CONFIG.pageWidth - totalWidth) / 2;
      let x = startX;

      letras.forEach(letra => {
        doc.setFontSize(14);
        doc.setTextColor(isVogal(letra) ? CONFIG.colorBlue : CONFIG.colorGray);
        doc.text(letra, x, currentY);
        x += espacamento;
      });

      x = startX;
      currentY += 7;
      letras.forEach(letra => {
        doc.setFontSize(12);
        doc.setTextColor(isVogal(letra) ? CONFIG.colorBlue : CONFIG.colorGray);
        doc.text(calcularValorComAcento(letra).toString(), x + 2, currentY);
        x += espacamento;
      });
      return currentY + 15;
    };

    const renderTableHelper = (headers, data, startY) => {
      const colWidth = (CONFIG.pageWidth - (CONFIG.margin * 2)) / headers.length;
      let currentY = checkPageBreak(startY, 20); // Garante espaço pro header

      const printHeader = (curr) => {
        doc.setFontSize(10);
        doc.setFont("helvetica", "bold");
        doc.setFillColor(240, 240, 240);
        let x = CONFIG.margin;
        headers.forEach(header => {
          doc.rect(x, curr, colWidth, 10, 'F');
          doc.text(header, x + 2, curr + 6);
          x += colWidth;
        });
        return curr + 10;
      };

      currentY = printHeader(currentY);
      doc.setFont("helvetica", "normal");

      data.forEach(row => {
        const cellValues = Object.values(row);
        const maxLines = Math.max(...cellValues.map(cell => doc.splitTextToSize(String(cell), colWidth - 4).length));
        const rowHeight = Math.max(10, maxLines * 5);

        // Verifica se a LINHA cabe
        currentY = checkPageBreak(currentY, rowHeight);
        // Se mudou de página (voltou pro topo), reimprime o header
        if (currentY === CONFIG.margin) {
          currentY = printHeader(currentY);
        }

        let x = CONFIG.margin;
        cellValues.forEach(cell => {
          const lines = doc.splitTextToSize(String(cell), colWidth - 4);
          doc.text(lines, x + 2, currentY + 6);
          doc.rect(x, currentY, colWidth, rowHeight);
          x += colWidth;
        });
        currentY += rowHeight;
      });
      return currentY + 10;
    };

    try {
      // =================================================================
      // INÍCIO DA GERAÇÃO
      // =================================================================

      // 1. CAPA
      doc.addImage(logo, 'PNG', 75, 20, 60, 60);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(24);
      doc.text("MAPA NUMEROLOGICO CABALISTICO", CONFIG.centerX, 100, { align: "center" });
      doc.setFontSize(16);
      doc.text("Orientadora: Manouche Yasmin", CONFIG.centerX, 130, { align: "center" });
      doc.text(`Data: ${new Date().toLocaleDateString('pt-BR')}`, CONFIG.centerX, 140, { align: "center" });
      addToIndex("Capa");

      // 2. DADOS DO CLIENTE (Força nova página manualmente apenas aqui no início estrutural)
      doc.addPage();
      y = CONFIG.pageHeight / 2 - 30;
      doc.setFontSize(20);
      doc.text("DADOS DO CLIENTE", CONFIG.centerX, y, { align: "center" });
      doc.setFontSize(16);
      doc.text(`Cliente: ${nomeCliente || "Não informado"}`, CONFIG.centerX, y + 20, { align: "center" });

      let dataFmt = "Não informada";
      if (dataNascimento) {
        const partes = dataNascimento.split('-');
        if (partes.length === 3) dataFmt = `${partes[2]}/${partes[1]}/${partes[0]}`;
      }
      doc.text(`Data de Nascimento: ${dataFmt}`, CONFIG.centerX, y + 30, { align: "center" });
      addToIndex("Dados do Cliente");

      // 3. INTRODUÇÃO
      // A partir daqui, usamos o printSectionTitle para gerenciar páginas
      doc.addPage(); // Força página para intro
      addWatermarkHelper();
      y = CONFIG.margin;

      y = printSectionTitle("Numerologia Cabalística");
      const introText = [
        "A Numerologia Cabalística é uma ciência sagrada que estuda a influência dos números na vida humana...",
        "Através da data de nascimento e do nome completo, podemos descobrir missão, talentos e desafios.",
        "Este mapa foi cuidadosamente elaborado para guiá-lo(a) na jornada de autoconhecimento."
      ];
      introText.forEach(t => y = printWrappedText(t, y));
      addToIndex("Introdução");

      // 4. RESERVA DA PÁGINA DE ÍNDICE
      doc.addPage(); // Página 4 física (reservada)
      addWatermarkHelper();
      const paginaIndiceRef = doc.internal.getNumberOfPages();
      y = CONFIG.margin;

      // Aqui forçamos uma página nova para começar o conteúdo real (Página 5)
      doc.addPage();
      addWatermarkHelper();
      y = CONFIG.margin;

      // 5. MOTIVAÇÃO
      if (nomeCliente) {
        y = printSectionTitle("Motivação");
        addToIndex("Motivação");
        y = renderNomeNumerologia(nomeCliente, y);
        y = printWrappedText("A Motivação revela seus desejos mais profundos e o que impulsiona suas ações.", y);
        y += 5;
        const motivacaoVal = calcularMotivacao(nomeCliente);
        doc.setFont("helvetica", "bold");
        doc.text(`Número da Motivação: ${motivacaoVal}`, CONFIG.margin, y);
        y += 10;
        doc.text("Definição:", CONFIG.margin, y);
        y += 7;
        y = printWrappedText(motivacaoTextos[motivacaoVal], y);
      }

      // 6. IMPRESSÃO
      if (nomeCliente) {
        y = printSectionTitle("Impressão");
        addToIndex("Impressão");
        y = renderNomeNumerologia(nomeCliente, y);
        y = printWrappedText("A Impressão representa como você é percebido socialmente.", y);
        y += 5;
        const impressaoVal = calcularImpressao(nomeCliente);
        doc.setFont("helvetica", "bold");
        doc.text(`Número da Impressão: ${impressaoVal}`, CONFIG.margin, y);
        y += 10;
        doc.text("Definição:", CONFIG.margin, y);
        y += 7;
        y = printWrappedText(impressaoTextos[impressaoVal], y);
      }

      // 7. EXPRESSÃO
      if (nomeCliente) {
        y = printSectionTitle("Expressão");
        addToIndex("Expressão");
        y = renderNomeNumerologia(nomeCliente, y);
        y = printWrappedText("A Expressão revela seus talentos naturais e como você se expressa no mundo.", y);
        y += 5;
        const expressaoVal = calcularExpressao(nomeCliente);
        doc.setFont("helvetica", "bold");
        doc.text(`Número da Expressão: ${expressaoVal}`, CONFIG.margin, y);
        y += 10;
        doc.text("Definição:", CONFIG.margin, y);
        y += 7;
        y = printWrappedText(expressaoTextos[expressaoVal], y);
      }

      // 8. DESTINO
      if (dataNascimento) {
        y = printSectionTitle("Destino");
        addToIndex("Destino");
        y = printWrappedText("O Destino revela o caminho que você deve seguir.", y);
        y += 5;
        const destinoVal = calcularDestino(dataNascimento);
        doc.setFont("helvetica", "bold");
        doc.text(`Número do Destino: ${destinoVal}`, CONFIG.margin, y);
        y += 10;
        doc.text("Definição:", CONFIG.margin, y);
        y += 7;
        y = printWrappedText(destinoTextos[destinoVal], y);
      }

      // =================================================================
      // 8-B. DIA DO NASCIMENTO (NOVA SEÇÃO)
      // =================================================================
      if (dataNascimento) {
        // 1. Extrai apenas o dia da string "YYYY-MM-DD"
        // O split pega a 3ª parte (índice 2) que é o dia.
        const partesData = dataNascimento.split('-');

        if (partesData.length === 3) {
          const diaNasc = parseInt(partesData[2], 10); // Converte para número inteiro (tira zeros à esquerda)

          y = printSectionTitle("Dia do Nascimento");
          addToIndex("Dia do Nascimento");
          addWatermarkHelper();

          // Texto introdutório (Opcional)
          y = printWrappedText(
            "O Dia do Nascimento registra as qualidades inatas, os talentos naturais e as características que a pessoa traz consigo desde o primeiro momento de vida. Ele revela como você se vê e como instintivamente reage ao mundo.",
            y
          );
          y += 10;

          // Exibe o Dia
          doc.setFont("helvetica", "bold");
          doc.setFontSize(14);
          doc.setTextColor(CONFIG.colorBlack);
          doc.text(`Nascido(a) no dia: ${diaNasc}`, CONFIG.margin, y);
          y += 10;

          // Exibe a Descrição
          if (caracteristicasDiaNascimento && caracteristicasDiaNascimento[diaNasc]) {
            y = printWrappedText(caracteristicasDiaNascimento[diaNasc], y);
          } else {
            y = printWrappedText("Descrição não disponível para este dia.", y);
          }

          y += 5; // Espaço extra
        }
      }

      // 9. MISSÃO
      if (nomeCliente && dataNascimento) {
        y = printSectionTitle("Missão");
        addToIndex("Missão");
        y = printWrappedText("A Missão de Vida é o propósito maior da sua alma.", y);
        y += 5;
        const valorDestino = calcularDestino(dataNascimento);
        const valorExpressao = calcularExpressao(nomeCliente);
        const missaoVal = calcularMissao(valorDestino, valorExpressao);
        doc.setFont("helvetica", "bold");
        doc.text(`Número da Missão: ${missaoVal}`, CONFIG.margin, y);
        y += 10;
        doc.text("Definição:", CONFIG.margin, y);
        y += 7;
        y = printWrappedText(missaoTextos[missaoVal] || "Descrição não disponível.", y);
      }

      // 10. DÍVIDAS CÁRMICAS
      if (nomeCliente && dataNascimento) {
        y = printSectionTitle("Dívidas Cármicas");
        addToIndex("Dívidas Cármicas");
        y = printWrappedText("Representam lições de vidas passadas.", y);
        const dividas = calcularDividasCarmicas(dataNascimento, calcularExpressao(nomeCliente), calcularDestino(dataNascimento), calcularMotivacao(nomeCliente));
        y += 5;
        doc.setFont("helvetica", "bold");
        doc.text(`Dívidas: ${dividas === 'Nenhuma' ? 'Nenhuma' : dividas}`, CONFIG.margin, y);
        y += 15;
        if (dividas !== 'Nenhuma') {
          doc.text("Significados:", CONFIG.margin, y);
          y += 10;
          dividas.split(', ').forEach(num => {
            // Verifica se cabe o título + um pouco de texto
            y = checkPageBreak(y, 40);
            if (dividasCarmicasTextos?.[num]) {
              doc.setFont("helvetica", "bold");
              doc.text(`Número ${num}:`, CONFIG.margin, y);
              y += 7;
              y = printWrappedText(dividasCarmicasTextos[num], y);
              y += 5;
            }
          });
        }
      }

      // 11. LIÇÕES CÁRMICAS
      if (nomeCliente) {
        y = printSectionTitle("Lições Cármicas");
        addToIndex("Lições Cármicas");
        const licoes = calcularLicoesCarmicas(nomeCliente);
        y += 5;
        doc.setFont("helvetica", "bold");
        doc.text(`Lições: ${licoes === 'Nenhuma' ? 'Nenhuma' : licoes}`, CONFIG.margin, y);
        y += 15;
        if (licoes !== 'Nenhuma') {
          doc.text("Significados:", CONFIG.margin, y);
          y += 10;
          licoes.split(', ').forEach(num => {
            y = checkPageBreak(y, 40);
            if (licoesCarmicasTexto?.[num]) {
              doc.setFont("helvetica", "bold");
              doc.text(`Lição ${num}:`, CONFIG.margin, y);
              y += 7;
              y = printWrappedText(licoesCarmicasTexto[num], y);
              y += 5;
            }
          });
        }
      }

      // 12. ANO PESSOAL
      if (dataNascimento) {
        y = printSectionTitle("Ano Pessoal");
        addToIndex("Ano Pessoal");
        const anoPessoal = calcularAnoPessoal(dataNascimento);
        y += 5;
        doc.setFont("helvetica", "bold");
        doc.text(`Seu Ano Pessoal: ${anoPessoal}`, CONFIG.margin, y);
        y += 15;
        y = printWrappedText(anoPessoalDescritivo[anoPessoal], y);
      }

      // 13. MÊS PESSOAL
      if (dataNascimento) {
        y = printSectionTitle("Mês Pessoal");
        addToIndex("Mês Pessoal");
        y += 10;
        const meses = calcularMesesPessoaisRestantes(dataNascimento);
        meses.forEach(item => {
          // Verifica se cabe o título e um pouco do texto
          y = checkPageBreak(y, 40);
          doc.setFont("helvetica", "bold");
          doc.text(`${item.nomeMes}/${item.ano} – Energia ${item.valor}`, CONFIG.margin, y);
          y += 8;
          y = printWrappedText(mesesPessoal[item.valor], y);
          y += 10;
        });
      }

      // =================================================================
      // 13-B. DIA PESSOAL (Refatorado e Tolerante)
      // =================================================================
      if (dataNascimento) {

        // 1. Tratamento de Valores (Fallback para HOJE se estiver vazio)
        let diaCalc, mesCalc;
        let isDataPadrao = false;

        if (diaInteresse && mesInteresse) {
          // Se o usuário preencheu, usa os dados dele
          diaCalc = parseInt(diaInteresse, 10);
          mesCalc = parseInt(mesInteresse, 10);
        } else {
          // Se faltou algum dado, usa a data de HOJE
          const hoje = new Date();
          diaCalc = hoje.getDate();
          mesCalc = hoje.getMonth() + 1; // Janeiro é 0
          isDataPadrao = true;
        }

        // 2. Executa o cálculo com os valores tratados
        const diaPessoalValor = calcularDiaPessoal(dataNascimento, mesCalc, diaCalc);

        // 3. Renderização (Só se o cálculo for um número válido)
        if (diaPessoalValor && !isNaN(diaPessoalValor) && diaPessoalValor !== '—') {

          // Verifica se cabe na página (Título + Texto)
          y = checkPageBreak(y, 80);

          y = printSectionTitle("Dia Pessoal");
          addToIndex("Dia Pessoal");
          // Não chamamos addWatermarkHelper aqui para não duplicar se printSectionTitle já chamou

          // Texto introdutório
          const introText = isDataPadrao
            ? "Como nenhuma data específica foi selecionada, calculamos o Dia Pessoal para a data de hoje. Ele revela as vibrações específicas deste momento."
            : "O Dia Pessoal revela as vibrações específicas para a data escolhida, orientando a melhor forma de agir e aproveitar as oportunidades daquele momento.";

          y = printWrappedText(introText, y);
          y += 10;

          // Subtítulo
          doc.setFont("helvetica", "bold");
          doc.setFontSize(14);
          doc.setTextColor(CONFIG.colorBlack);

          // Formata a data para exibição (DD/MM)
          const dataFormatada = `${diaCalc.toString().padStart(2, '0')}/${mesCalc.toString().padStart(2, '0')}`;

          doc.text(`Dia Pessoal ${diaPessoalValor} (Data: ${dataFormatada})`, CONFIG.margin, y);
          y += 10;

          // Texto do Dicionário
          if (diaPessoalTextos && diaPessoalTextos[diaPessoalValor]) {
            y = printWrappedText(diaPessoalTextos[diaPessoalValor], y);
          } else {
            y = printWrappedText("Descrição não disponível para este dia.", y);
          }

          y += 5; // Espaço extra após a seção
        }
      }

      // 14. TENDÊNCIAS OCULTAS
      if (nomeCliente) {
        y = printSectionTitle("Tendências Ocultas");
        addToIndex("Tendências Ocultas");
        const ocultas = calcularTendenciasOcultas(nomeCliente);
        y += 5;
        doc.setFont("helvetica", "bold");
        doc.text(`Tendências: ${ocultas}`, CONFIG.margin, y);
        y += 15;
        if (ocultas !== 'Nenhuma') {
          ocultas.split(',').map(n => n.trim()).forEach(num => {
            y = checkPageBreak(y, 40);
            if (tendenciaOculta?.[num]) {
              doc.setFont("helvetica", "bold");
              doc.text(`Número ${num}`, CONFIG.margin, y);
              y += 7;
              y = printWrappedText(tendenciaOculta[num], y);
              y += 5;
            }
          });
        }
      }

      // 15. SUBCONSCIENTE
      if (nomeCliente) {
        y = printSectionTitle("Subconsciente");
        addToIndex("Subconsciente");
        const valSub = calcularSubconsciente(calcularLicoesCarmicas(nomeCliente));
        doc.setFont("helvetica", "bold");
        doc.text(`Número: ${valSub}`, CONFIG.margin, y);
        y += 10;
        y = printWrappedText(respostaSubconsciente[valSub], y);
      }

      // =================================================================
      // 16. CICLO DE VIDA (CORRIGIDO COM DICIONÁRIOS SEPARADOS)
      // =================================================================
      if (dataNascimento && nomeCliente) {
        const ciclos = calcularCicloVida(dataNascimento, calcularDestino(dataNascimento));

        if (ciclos) {
          y = printSectionTitle("Ciclo de Vida");
          addWatermarkHelper();
          addToIndex("Ciclo de Vida");

          y = printWrappedText("Fases energéticas que influenciam diferentes períodos da sua vida.", y);
          y += 10;

          // Renderiza a Tabela
          const headers = ["Ciclo", "Idade", "Período", "Energia"];
          const data = ciclos.map(c => ({ c: c.ciclo, i: c.idade, p: c.periodo, e: c.energia }));
          y = renderTableHelper(headers, data, y);
          y += 15;

          // Renderiza as Descrições
          // O parâmetro 'index' nos diz qual é o ciclo (0 = 1º, 1 = 2º, 2 = 3º)
          ciclos.forEach((c, index) => {
            y = checkPageBreak(y, 30);

            doc.setFont("helvetica", "bold");
            doc.text(`${c.ciclo} - Energia ${c.energia}`, CONFIG.margin, y);
            y += 7;

            // Lógica de Seleção do Dicionário Correto
            let textoDescricao = "";

            switch (index) {
              case 0: // Primeiro Ciclo
                textoDescricao = CicloVida?.[c.energia];
                break;
              case 1: // Segundo Ciclo
                textoDescricao = segundoCicloVida?.[c.energia];
                break;
              case 2: // Terceiro Ciclo
                textoDescricao = terceiroCicloVida?.[c.energia];
                break;
              default:
                textoDescricao = "Descrição não disponível.";
            }

            // Imprime o texto selecionado
            y = printWrappedText(textoDescricao || "Descrição indisponível para este número.", y);
            y += 5;
          });
        }
      }

      // 17. DESAFIOS
      if (dataNascimento && nomeCliente) {
        const ciclos = calcularCicloVida(dataNascimento, calcularDestino(dataNascimento));
        const desafiosList = calcularDesafios(dataNascimento, ciclos);
        if (desafiosList?.length) {
          y = printSectionTitle("Desafios");
          addToIndex("Desafios");
          const headers = ["Desafio", "Valor", "Período"];
          const data = desafiosList.map(d => ({ n: d.nome, v: d.valor, p: d.periodo }));
          y = renderTableHelper(headers, data, y + 10);
          y += 15;
          desafiosList.forEach(d => {
            y = checkPageBreak(y, 30);
            doc.setFont("helvetica", "bold");
            doc.text(`${d.nome} - Valor ${d.valor}`, CONFIG.margin, y);
            y += 7;
            y = printWrappedText(desafiosTextos?.[d.valor], y);
            y += 5;
          });
        }
      }

      // =================================================================
      // 18. MOMENTOS DECISIVOS (CORRIGIDO COM DICIONÁRIOS SEPARADOS)
      // =================================================================
      if (dataNascimento && nomeCliente) {
        const momentos = calcularMomentosDecisivos(dataNascimento, calcularDestino(dataNascimento));
        
        if (momentos) {
          y = printSectionTitle("Momentos Decisivos");
          addToIndex("Momentos Decisivos");
          addWatermarkHelper();
          
          // Texto introdutório opcional (se quiser adicionar)
          y = printWrappedText("Os Momentos Decisivos marcam as etapas de maturidade e as influências predominantes em cada fase da sua jornada.", y);
          y += 10;

          // Preparação dos dados da tabela
          const data = momentos.map((m, i) => {
            const startAge = i === 0 ? 0 : momentos[i - 1].fim - new Date(dataNascimento).getFullYear();
            const endAge = m.fim === '...' ? '...' : (startAge + (m.fim - m.inicio));
            return { e: m.momento, i: `${startAge} a ${endAge} anos`, p: `${m.inicio} - ${m.fim}` };
          });
          
          // Renderiza a Tabela
          y = renderTableHelper(["Energia", "Idade", "Período"], data, y);
          y += 15;

          // Renderiza as Descrições
          momentos.forEach((m, i) => {
            y = checkPageBreak(y, 30);
            
            doc.setFont("helvetica", "bold");
            // i + 1 transforma o índice 0 em "Momento 1"
            doc.text(`${i + 1}º Momento Decisivo - Energia ${m.momento}`, CONFIG.margin, y);
            y += 7;

            // Lógica de Seleção do Dicionário Correto
            let textoDescricao = "";

            switch (i) {
                case 0: // Primeiro Momento (índice 0)
                    textoDescricao = momentosDecisivos?.[m.momento];
                    break;
                case 1: // Segundo Momento (índice 1)
                    textoDescricao = segundoMomentoDecisivo?.[m.momento];
                    break;
                case 2: // Terceiro Momento (índice 2)
                    textoDescricao = terceiroMomentoDecisivo?.[m.momento];
                    break;
                case 3: // Quarto Momento (índice 3)
                    textoDescricao = quartoMomentoDecisivo?.[m.momento];
                    break;
                default:
                    textoDescricao = "Descrição não disponível.";
            }

            // Imprime o texto selecionado
            y = printWrappedText(textoDescricao || "Descrição indisponível para este número.", y);
            y += 5;
          });
        }
      }

      // 19. HARMONIA CONJUGAL
      if (nomeCliente && dataNascimento) {
        const harmonia = calcularHarmoniaConjugal(calcularMissao(nomeCliente, dataNascimento));
        if (harmonia) {
          y = printSectionTitle("Harmonia Conjugal");
          addToIndex("Harmonia Conjugal");
          doc.setFont("helvetica", "bold");
          doc.text(`Número Base: ${harmonia.numero}`, CONFIG.margin, y);
          y += 10;
          const data = [
            { t: "Vibra com", v: harmonia.vibraCom },
            { t: "Atrai", v: harmonia.atrai },
            { t: "Oposto", v: harmonia.oposto },
            { t: "Passivo", v: harmonia.passivo }
          ];
          y = renderTableHelper(["Tipo", "Números"], data, y);
        }
      }

      // 20. PIRÂMIDE INVERTIDA (PRINCIPAL)
      if (nomeCliente) {
        y = printSectionTitle("Pirâmide Invertida");
        addToIndex("Pirâmide Invertida");

        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.setTextColor(CONFIG.colorBlack);
        doc.text(`Nome: ${nomeCliente}`, CONFIG.margin, y);
        y += 10;

        // Pirâmide
        const nomeTratado = nomeCliente.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toUpperCase();
        const pyResult = drawPyramid(nomeTratado, y);
        y = pyResult.nextY + 10;

        // Arcano Cabalístico (Ponta)
        let pontaPiramide = null;
        if (pyResult.data.length > 0) {
          const ultimaLinha = pyResult.data[pyResult.data.length - 1];
          if (ultimaLinha.data.length === 1) pontaPiramide = ultimaLinha.data[0];
        }

        // Exibir Arcano (Com Imagem)
        if (pontaPiramide !== null && arcanos?.[pontaPiramide]) {
          y = checkPageBreak(y, 60);
          const arcanoInfo = arcanos[pontaPiramide];
          const imgWidth = 35;
          const imgHeight = 55;
          const gap = 5;
          const textX = CONFIG.margin + imgWidth + gap;
          const textMaxWidth = CONFIG.pageWidth - CONFIG.margin - textX;
          const startBlockY = y;

          doc.setFont("helvetica", "bold");
          doc.setFontSize(14);
          doc.setTextColor(CONFIG.colorBlack);
          doc.text(`Arcano Cabalístico: ${pontaPiramide} - ${arcanoInfo.titulo}`, CONFIG.margin, y);
          y += 10;

          let imageAdded = false;
          if (arcanoInfo.image) {
            try {
              const imgBase64 = await loadImage(arcanoInfo.image);
              if (imgBase64) {
                doc.addImage(imgBase64, 'PNG', CONFIG.margin, y, imgWidth, imgHeight);
                imageAdded = true;
              }
            } catch (err) { console.error(err); }
          }

          let currentTextY = y;
          const currentX = imageAdded ? textX : CONFIG.margin;
          const currentMaxW = imageAdded ? textMaxWidth : 170;

          currentTextY = printWrappedText(arcanoInfo.descricao, currentTextY, 10, "normal", CONFIG.colorBlack, currentX, currentMaxW);
          const imageEndY = y + imgHeight;
          y = Math.max(currentTextY, imageAdded ? imageEndY : currentTextY);
          y += 10;
        }

        // Sequências
        const sequencesFound = {};
        pyResult.data.forEach(row => {
          if (row.type === 'numbers') {
            const seqs = findSequences(row.data);
            seqs.forEach(index => {
              if (index % 3 === 0) {
                const num = row.data[index];
                const key = `${num}${num}${num}`;
                if (sequenciaNegativa && sequenciaNegativa[key]) {
                  sequencesFound[key] = sequenciaNegativa[key];
                }
              }
            });
          }
        });

        if (Object.keys(sequencesFound).length > 0) {
          y = checkPageBreak(y, 40);
          doc.setDrawColor(200, 200, 200);
          doc.line(CONFIG.margin, y, CONFIG.pageWidth - CONFIG.margin, y);
          y += 10;
          doc.setFont("helvetica", "bold");
          doc.setFontSize(14);
          doc.setTextColor(255, 0, 0);
          doc.text("Interpretação das Sequências:", CONFIG.margin, y);
          y += 10;
          Object.entries(sequencesFound).forEach(([seq, desc]) => {
            y = checkPageBreak(y);
            doc.setFont("helvetica", "bold");
            doc.setTextColor(255, 0, 0);
            doc.text(`${seq.charAt(0)} ${seq.charAt(1)} ${seq.charAt(2)} -`, CONFIG.margin, y);
            y += 6;
            y = printWrappedText(desc, y);
            y += 5;
          });
        }
      }

      // 21. NOMES SOCIAIS
      if (nomesSociais && nomesSociais.length > 0) {
        y = printSectionTitle("Nomes Sociais");
        addToIndex("Nomes Sociais");
        y = printWrappedText(
          "O Nome Social representa a vibração que a pessoa escolhe expressar no presente. Ele simboliza a identidade assumida por vontade própria, refletindo como ela deseja ser vista, reconhecida e tratada pelo mundo. \n\n" +
          "Ao contrário do nome de nascimento, que revela tendências profundas, missão e aspectos estruturais da alma, o nome social traduz o eu construído conscientemente, funcionando como uma assinatura energética que pode reforçar, suavizar ou redirecionar padrões da personalidade. \n\n" +
          "Sua análise mostra a energia vibracional ativada quando alguém usa o nome social no dia a dia — seja socialmente, profissionalmente ou emocionalmente — e revela a forma como a pessoa quer se posicionar, ser percebida e influenciar o ambiente. " +
          "Quando harmônico com o nome de origem, o nome social amplia a fluidez e fortalece a expressão pessoal. Quando há contraste entre eles, o nome social pode atuar como ajuste, proteção, afirmação ou correção vibracional.",
          y
        );
        y += 10;

        const uniqueNomes = nomesSociais.filter((item, index, self) =>
          index === self.findIndex((t) => (t.nome.toLowerCase().trim() === item.nome.toLowerCase().trim()))
        );

        for (const [idx, social] of uniqueNomes.entries()) {
          const imgWidth = 35;
          const imgHeight = 55;
          const gap = 5;
          const textX = CONFIG.margin + imgWidth + gap;
          const textMaxWidth = CONFIG.pageWidth - CONFIG.margin - textX;

          // Verifica espaço para todo o bloco inicial (título + pirâmide mínima)
          y = checkPageBreak(y, 80);

          doc.setFont("helvetica", "bold");
          doc.setFontSize(14);
          doc.setTextColor(CONFIG.colorBlack);
          doc.text(`Opção ${idx + 1}: ${social.nome}`, CONFIG.margin, y);
          y += 10;

          const pyResult = drawPyramid(social.nome, y);
          y = pyResult.nextY + 5;

          const startBlockY = y;
          y = checkPageBreak(y, imgHeight);
          const effectiveBlockY = (y === CONFIG.margin) ? y : startBlockY;

          let imageAdded = false;
          if (arcanos?.[social.arcano]?.image) {
            try {
              const imgBase64 = await loadImage(arcanos[social.arcano].image);
              if (imgBase64) {
                doc.addImage(imgBase64, 'PNG', CONFIG.margin, effectiveBlockY, imgWidth, imgHeight);
                imageAdded = true;
              }
            } catch (err) { console.error(err); }
          }

          let currentTextY = effectiveBlockY;
          const currentX = imageAdded ? textX : CONFIG.margin;
          const currentMaxW = imageAdded ? textMaxWidth : 170;

          doc.setFont("helvetica", "bold");
          doc.setFontSize(12);
          doc.setTextColor(CONFIG.colorBlack);
          doc.text(`Arcano: ${social.arcano} - ${arcanos?.[social.arcano]?.titulo || ''}`, currentX, currentTextY + 5);
          currentTextY += 10;

          if (arcanos?.[social.arcano]) {
            currentTextY = printWrappedText(arcanos[social.arcano].descricao, currentTextY, 10, "normal", CONFIG.colorBlack, currentX, currentMaxW);
          }

          const imageEndY = effectiveBlockY + imgHeight;
          y = Math.max(currentTextY, imageAdded ? imageEndY : currentTextY);
          y += 10;
          doc.setDrawColor(200, 200, 200);
          doc.line(CONFIG.margin, y, CONFIG.pageWidth - CONFIG.margin, y);
          y += 10;
        }
      }

      // 25. MENSAGEM FINAL
      doc.addPage(); // Força última página limpa
      addWatermarkHelper();
      let yFinal = CONFIG.pageHeight / 4;

      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);
      doc.setTextColor(CONFIG.colorBlack);
      doc.text("Uma Nota Pessoal", CONFIG.centerX, yFinal, { align: "center" });
      yFinal += 20;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
      const mensagem =
        `Este Mapa Numerológico foi preparado especialmente para você, ${nomeCliente || ''}, com atenção às suas vibrações, aos caminhos que se abrem diante da sua jornada.\n\n` +
        "Cada número aqui não fala de destino fechado, mas de potenciais, talentos e desafios que fazem parte da sua história única.\n\n" +
        "Que este material sirva como um espelho gentil, revelando aspectos profundos do seu ser. Agradeço de coração por confiar seu mapa às minhas mãos.\n\n" +
        "Que a leitura traga clareza, força e direção — e que você se reconheça, com verdade e acolhimento, em cada página.";

      yFinal = printWrappedText(mensagem, yFinal, 12, "normal", CONFIG.colorBlack, 40, 130);
      yFinal += 10;
      doc.text("Com carinho,", 40, yFinal);

      yFinal += 25;
      doc.setFont("times", "italic");
      doc.setFontSize(30);
      doc.setTextColor(CONFIG.colorBlack);
      doc.text("Manouche Yasmin", CONFIG.centerX, yFinal, { align: "center" });

      yFinal += 15;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(CONFIG.colorGray);
      doc.text("Numeróloga Cabalística", CONFIG.centerX, yFinal, { align: "center" });

      // -------------------------------------------------------------
      // FINALIZAÇÃO - ÍNDICE
      // -------------------------------------------------------------
      doc.setPage(paginaIndiceRef);
      y = CONFIG.margin;

      doc.setFont("helvetica", "bold");
      doc.setFontSize(20);
      doc.setTextColor(CONFIG.colorBlack);
      doc.text("ÍNDICE", CONFIG.centerX, y + 10, { align: "center" });
      y += 25;

      indiceItens.sort((a, b) => a.pagina - b.pagina);

      indiceItens.forEach(item => {
        if (y > CONFIG.pageHeight - CONFIG.margin) {
          doc.addPage();
          addWatermarkHelper();
          y = CONFIG.margin + 10;
        }
        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        doc.text(item.titulo, CONFIG.margin, y);
        const dots = ".".repeat(100);
        const titleWidth = doc.getTextWidth(item.titulo);
        const pageNumStr = String(item.pagina);
        doc.text(dots, CONFIG.margin + titleWidth + 2, y, { maxWidth: CONFIG.pageWidth - CONFIG.margin - 30 - titleWidth });
        doc.setFont("helvetica", "bold");
        doc.text(pageNumStr, CONFIG.pageWidth - CONFIG.margin - 10, y, { align: "right" });
        y += 10;
      });

      doc.save(`Mapa_Numerologico_${nomeCliente || 'Cliente'}.pdf`);

    } catch (error) {
      console.error("Erro PDF:", error);
      alert("Erro ao gerar PDF. Verifique o console.");
    }
  };

  if (asListItem) {
    return (
      <ListItem button onClick={generatePDF}>
        <ListItemIcon><PictureAsPdf sx={{ color: darkMode ? '#ffffff' : '#000000' }} /></ListItemIcon>
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