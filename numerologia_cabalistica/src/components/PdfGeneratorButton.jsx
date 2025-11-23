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
import { generateInvertedPyramid, findSequences } from "./generateInvertedPyramid";

import {
  tabelaNumeros, tabelaAcentos, motivacaoTextos, impressaoTextos, expressaoTextos, destinoTextos, missaoTextos,
  dividasCarmicasTextos, licoesCarmicasTexto, anoPessoalDescritivo, tendenciaOculta, respostaSubconsciente,
  mesesPessoal, sequenciaNegativa, arcanos, CicloVida, desafios as desafiosTextos, momentosDecisivos as momentosDecisivosTextos
} from "./TabelaNumerologia";

// =================================================================
// 2. COMPONENTE PRINCIPAL
// =================================================================
const PdfGeneratorButton = ({ nomeCliente, dataNascimento, asListItem, darkMode, nomesSociais = [] }) => {

  // --- Funções Utilitárias de String ---
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

  // Função para converter URL de imagem em Base64
  const loadImage = (url) => {
    return new Promise((resolve, reject) => {
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
      img.onerror = (e) => {
        console.warn("Erro ao carregar imagem:", url);
        resolve(null);
      };
    });
  };

  // =================================================================
  // 3. FUNÇÃO GERADORA DO PDF (CORE)
  // =================================================================
  const generatePDF = async () => {
    const doc = new jsPDF();

    // Configurações Globais do Documento
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

    const indiceItens = [];

    // --- Helpers Internos ---

    const addWatermarkHelper = () => {
      doc.saveGraphicsState();
      doc.setGState(new doc.GState({ opacity: 0.1 }));
      const wmWidth = CONFIG.pageWidth * 0.7;
      const x = (CONFIG.pageWidth - wmWidth) / 2;
      const y = (CONFIG.pageHeight - wmWidth) / 2;
      doc.addImage(logo, "PNG", x, y, wmWidth, wmWidth);
      doc.restoreGraphicsState();
    };

    const checkPageBreak = (currentY, addedMargin = 0) => {
      if (currentY > CONFIG.pageHeight - CONFIG.margin - addedMargin) {
        doc.addPage();
        addWatermarkHelper();
        return CONFIG.margin;
      }
      return currentY;
    };

    const printWrappedText = (text, y, fontSize = 12, fontType = "normal", color = CONFIG.colorBlack, x = CONFIG.margin, maxWidth = 170) => {
      if (!text) return y;
      doc.setFont("helvetica", fontType);
      doc.setFontSize(fontSize);
      doc.setTextColor(color);
      const lines = doc.splitTextToSize(String(text), maxWidth);
      lines.forEach(line => {
        y = checkPageBreak(y);
        doc.text(line, x, y);
        y += CONFIG.lineHeight;
      });
      return y;
    };

    const addToIndex = (titulo) => {
      indiceItens.push({ titulo, pagina: doc.internal.getNumberOfPages() });
    };

    const printSectionTitle = (title, y) => {
      y = checkPageBreak(y, 30);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(22);
      doc.setTextColor(CONFIG.colorBlack);
      doc.text(title, CONFIG.centerX, y, { align: "center" });
      return y + 15;
    };

    // --- HELPER DA PIRÂMIDE (NOVO) ---
    // --- HELPER DA PIRÂMIDE (COM AUTO-AJUSTE DE TAMANHO) ---
    const drawPyramid = (nomeParaPiramide, startY) => {
        const pyramidData = generateInvertedPyramid(nomeParaPiramide);
        if (!pyramidData || pyramidData.length === 0) return startY;

        let y = startY;

        // =====================================================
        // LÓGICA DE AUTO-DIMENSIONAMENTO
        // =====================================================
        
        // 1. Largura disponível na página (descontando margens)
        const availableWidth = CONFIG.pageWidth - (CONFIG.margin * 2);

        // 2. Quantos blocos tem a linha mais longa (a primeira)?
        const maxCells = pyramidData[0].data.length;

        // 3. Definir tamanho MÁXIMO desejado (para nomes curtos não ficarem gigantes)
        const maxPreferredSize = 12; 

        // 4. Calcular o tamanho ideal
        // Divide o espaço disponível pelo número de células.
        // Se o resultado for maior que 12, usa 12. Se for menor, usa o calculado.
        let cellWidth = Math.min(maxPreferredSize, availableWidth / maxCells);

        // 5. A altura será proporcional à largura (ex: 70% da largura)
        let cellHeight = cellWidth * 0.7;

        // 6. O tamanho da fonte também deve ser proporcional (ex: 50% da largura)
        let fontSizeBase = cellWidth * 0.5;

        // =====================================================

        pyramidData.forEach((row) => {
            // Verificar quebra de página dentro da pirâmide
            if (y > CONFIG.pageHeight - CONFIG.margin) {
                doc.addPage();
                addWatermarkHelper();
                y = CONFIG.margin + 10;
            }

            const rowLength = row.data.length;
            const totalRowWidth = rowLength * cellWidth;
            // Centraliza baseada na largura total desta linha específica
            const startX = (CONFIG.pageWidth - totalRowWidth) / 2;
            
            const sequences = row.type === 'numbers' ? findSequences(row.data) : [];

            row.data.forEach((item, itemIndex) => {
                const x = startX + (itemIndex * cellWidth);
                const isSequence = sequences.includes(itemIndex);

                // Desenha o retângulo
                doc.setDrawColor(0);
                doc.rect(x, y, cellWidth, cellHeight);

                // Configura a fonte baseada no tamanho calculado
                if (row.type === 'letters') {
                    // Letras podem ser um pouco maiores que números
                    doc.setFontSize(fontSizeBase * 1.2); 
                    doc.setFont("helvetica", "bold");
                    doc.setTextColor(0, 0, 0);
                } else {
                    doc.setFontSize(fontSizeBase);
                    doc.setFont("helvetica", isSequence ? "bold" : "normal");
                    // Sequências em vermelho
                    doc.setTextColor(isSequence ? 255 : 0, isSequence ? 0 : 0, 0);
                }

                // Centralização fina do texto dentro do retângulo
                // O ajuste '+ 1' ou '+ 0.5' ajuda a alinhar verticalmente visualmente
                doc.text(item.toString(), x + (cellWidth / 2), y + (cellHeight / 2) + (cellHeight * 0.25), { align: "center" });
            });

            y += cellHeight; // Removemos o +1 extra para ficar mais compacto se o nome for longo
        });

        return { nextY: y + 10, data: pyramidData };
    };

    const renderNomeNumerologia = (nome, startY) => {
      if (!nome) return startY;
      const nomeFormatado = nome.toUpperCase().replace(/\s/g, '');
      const letras = nomeFormatado.split('');
      const espacamento = 7;
      const totalWidth = (letras.length * espacamento) - 5;
      const startX = (CONFIG.pageWidth - totalWidth) / 2;
      let x = startX;
      let y = startY;
      letras.forEach(letra => {
        doc.setFontSize(14);
        doc.setTextColor(isVogal(letra) ? CONFIG.colorBlue : CONFIG.colorGray);
        doc.text(letra, x, y);
        x += espacamento;
      });
      x = startX;
      y += 7;
      letras.forEach(letra => {
        doc.setFontSize(12);
        doc.setTextColor(isVogal(letra) ? CONFIG.colorBlue : CONFIG.colorGray);
        doc.text(calcularValorComAcento(letra).toString(), x + 2, y);
        x += espacamento;
      });
      return y + 15;
    };

    const renderTableHelper = (headers, data, startY) => {
      const tableWidth = CONFIG.pageWidth - (CONFIG.margin * 2);
      const colWidth = tableWidth / headers.length;
      let y = startY;
      doc.setFontSize(10);
      doc.setFont("helvetica", "bold");
      doc.setFillColor(240, 240, 240);
      const printHeader = (currY) => {
        let x = CONFIG.margin;
        headers.forEach(header => {
          doc.rect(x, currY, colWidth, 10, 'F');
          doc.text(header, x + 2, currY + 6);
          x += colWidth;
        });
        return currY + 10;
      };
      y = printHeader(y);
      doc.setFont("helvetica", "normal");
      data.forEach(row => {
        y = checkPageBreak(y, 20);
        if (y === CONFIG.margin) y = printHeader(y);
        let x = CONFIG.margin;
        const cellValues = Object.values(row);
        const maxLines = Math.max(...cellValues.map(cell =>
          doc.splitTextToSize(String(cell), colWidth - 4).length
        ));
        const rowHeight = Math.max(10, maxLines * 5);
        cellValues.forEach(cell => {
          const lines = doc.splitTextToSize(String(cell), colWidth - 4);
          doc.text(lines, x + 2, y + 6);
          doc.rect(x, y, colWidth, rowHeight);
          x += colWidth;
        });
        y += rowHeight;
      });
      return y + 10;
    };

    try {
      // -------------------------------------------------------------
      // INÍCIO DA GERAÇÃO
      // -------------------------------------------------------------

      // 1. CAPA
      doc.addImage(logo, 'PNG', 75, 20, 60, 60);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(24);
      doc.text("MAPA NUMEROLOGICO CABALISTICO", CONFIG.centerX, 100, { align: "center" });
      doc.setFontSize(16);
      doc.text("Orientadora: Manouche Yasmin", CONFIG.centerX, 130, { align: "center" });
      doc.text(`Data: ${new Date().toLocaleDateString('pt-BR')}`, CONFIG.centerX, 140, { align: "center" });
      addToIndex("Capa");

      // 2. DADOS DO CLIENTE
      doc.addPage();
      let y = CONFIG.pageHeight / 2 - 30;
      doc.setFontSize(20);
      doc.text("DADOS DO CLIENTE", CONFIG.centerX, y, { align: "center" });
      doc.setFontSize(16);
      doc.text(`Cliente: ${nomeCliente || "Não informado"}`, CONFIG.centerX, y + 20, { align: "center" });
      
      // --- CORREÇÃO AQUI ---
      let dataFmt = "Não informada";
      if (dataNascimento) {
        // dataNascimento vem como "1983-12-08"
        const partes = dataNascimento.split('-'); 
        // partes[0] = ano, partes[1] = mes, partes[2] = dia
        if (partes.length === 3) {
           dataFmt = `${partes[2]}/${partes[1]}/${partes[0]}`;
        }
      }
      // ---------------------

      doc.text(`Data de Nascimento: ${dataFmt}`, CONFIG.centerX, y + 30, { align: "center" });
      addToIndex("Dados do Cliente");
      // 3. INTRODUÇÃO
      doc.addPage();
      addWatermarkHelper();
      y = printSectionTitle("Numerologia Cabalística", 30);
      const introText = [
        "A Numerologia Cabalística é uma ciência sagrada que estuda a influência dos números na vida humana...",
        "Através da data de nascimento e do nome completo, podemos descobrir missão, talentos e desafios.",
        "Este mapa foi cuidadosamente elaborado para guiá-lo(a) na jornada de autoconhecimento."
      ];
      introText.forEach(t => y = printWrappedText(t, y));
      addToIndex("Introdução");

      // 4. RESERVA DA PÁGINA DE ÍNDICE
      doc.addPage();
      addWatermarkHelper();
      const paginaIndiceRef = doc.internal.getNumberOfPages();

      // 5. MOTIVAÇÃO
      if (nomeCliente) {
        doc.addPage();
        addWatermarkHelper();
        addToIndex("Motivação");
        y = renderNomeNumerologia(nomeCliente, 30);
        y = printSectionTitle("Motivação", y);
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
        doc.addPage();
        addWatermarkHelper();
        addToIndex("Impressão");
        y = renderNomeNumerologia(nomeCliente, 30);
        y = printSectionTitle("Impressão", y);
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
        doc.addPage();
        addWatermarkHelper();
        addToIndex("Expressão");
        y = renderNomeNumerologia(nomeCliente, 30);
        y = printSectionTitle("Expressão", y);
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
        doc.addPage();
        addWatermarkHelper();
        addToIndex("Destino");
        y = printSectionTitle("Destino", 30);
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

      // 9. MISSÃO
      if (nomeCliente && dataNascimento) {
        doc.addPage();
        addWatermarkHelper();
        addToIndex("Missão");
        y = printSectionTitle("Missão", 30);
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
        doc.addPage();
        addWatermarkHelper();
        addToIndex("Dívidas Cármicas");
        y = printSectionTitle("Dívidas Cármicas", 30);
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
        doc.addPage();
        addWatermarkHelper();
        addToIndex("Lições Cármicas");
        y = printSectionTitle("Lições Cármicas", 30);
        const licoes = calcularLicoesCarmicas(nomeCliente);
        y += 5;
        doc.setFont("helvetica", "bold");
        doc.text(`Lições: ${licoes === 'Nenhuma' ? 'Nenhuma' : licoes}`, CONFIG.margin, y);
        y += 15;
        if (licoes !== 'Nenhuma') {
          doc.text("Significados:", CONFIG.margin, y);
          y += 10;
          licoes.split(', ').forEach(num => {
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
        doc.addPage();
        addWatermarkHelper();
        addToIndex("Ano Pessoal");
        y = printSectionTitle("Ano Pessoal", 30);
        const anoPessoal = calcularAnoPessoal(dataNascimento);
        y += 5;
        doc.setFont("helvetica", "bold");
        doc.text(`Seu Ano Pessoal: ${anoPessoal}`, CONFIG.margin, y);
        y += 15;
        y = printWrappedText(anoPessoalDescritivo[anoPessoal], y);
      }

      // 13. MÊS PESSOAL
      if (dataNascimento) {
        doc.addPage();
        addWatermarkHelper();
        addToIndex("Mês Pessoal");
        y = printSectionTitle("Mês Pessoal", 30);
        y += 10;
        const meses = calcularMesesPessoaisRestantes(dataNascimento);
        meses.forEach(item => {
          y = checkPageBreak(y);
          doc.setFont("helvetica", "bold");
          doc.text(`${item.nomeMes}/${item.ano} – Energia ${item.valor}`, CONFIG.margin, y);
          y += 8;
          y = printWrappedText(mesesPessoal[item.valor], y);
          y += 10;
        });
      }

      // 14. TENDÊNCIAS OCULTAS
      if (nomeCliente) {
        doc.addPage();
        addWatermarkHelper();
        addToIndex("Tendências Ocultas");
        y = printSectionTitle("Tendências Ocultas", 30);
        const ocultas = calcularTendenciasOcultas(nomeCliente);
        y += 5;
        doc.setFont("helvetica", "bold");
        doc.text(`Tendências: ${ocultas}`, CONFIG.margin, y);
        y += 15;
        if (ocultas !== 'Nenhuma') {
          ocultas.split(',').map(n => n.trim()).forEach(num => {
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
        doc.addPage();
        addWatermarkHelper();
        addToIndex("Subconsciente");
        y = printSectionTitle("Subconsciente", 30);
        const valSub = calcularSubconsciente(calcularLicoesCarmicas(nomeCliente));
        doc.setFont("helvetica", "bold");
        doc.text(`Número: ${valSub}`, CONFIG.margin, y);
        y += 10;
        y = printWrappedText(respostaSubconsciente[valSub], y);
      }

      // 16. CICLO DE VIDA
      if (dataNascimento && nomeCliente) {
        const ciclos = calcularCicloVida(dataNascimento, calcularDestino(dataNascimento));
        if (ciclos) {
          doc.addPage();
          addWatermarkHelper();
          addToIndex("Ciclo de Vida");
          y = printSectionTitle("Ciclo de Vida", 30);
          y = printWrappedText("Fases energéticas que influenciam diferentes períodos.", y);
          y += 10;
          const headers = ["Ciclo", "Idade", "Período", "Energia"];
          const data = ciclos.map(c => ({ c: c.ciclo, i: c.idade, p: c.periodo, e: c.energia }));
          y = renderTableHelper(headers, data, y);
          y += 15;
          ciclos.forEach(c => {
            y = checkPageBreak(y);
            doc.setFont("helvetica", "bold");
            doc.text(`${c.ciclo} - Energia ${c.energia}`, CONFIG.margin, y);
            y += 7;
            y = printWrappedText(CicloVida?.[c.energia], y);
            y += 5;
          });
        }
      }

      // 17. DESAFIOS
      if (dataNascimento && nomeCliente) {
        const ciclos = calcularCicloVida(dataNascimento, calcularDestino(dataNascimento));
        const desafiosList = calcularDesafios(dataNascimento, ciclos);
        if (desafiosList?.length) {
          doc.addPage();
          addWatermarkHelper();
          addToIndex("Desafios");
          y = printSectionTitle("Desafios", 30);
          const headers = ["Desafio", "Valor", "Período"];
          const data = desafiosList.map(d => ({ n: d.nome, v: d.valor, p: d.periodo }));
          y = renderTableHelper(headers, data, y + 10);
          y += 15;
          desafiosList.forEach(d => {
            y = checkPageBreak(y);
            doc.setFont("helvetica", "bold");
            doc.text(`${d.nome} - Valor ${d.valor}`, CONFIG.margin, y);
            y += 7;
            y = printWrappedText(desafiosTextos?.[d.valor], y);
            y += 5;
          });
        }
      }

      // 18. MOMENTOS DECISIVOS
      if (dataNascimento && nomeCliente) {
        const momentos = calcularMomentosDecisivos(dataNascimento, calcularDestino(dataNascimento));
        if (momentos) {
          doc.addPage();
          addWatermarkHelper();
          addToIndex("Momentos Decisivos");
          y = printSectionTitle("Momentos Decisivos", 30);
          const data = momentos.map((m, i) => {
            const startAge = i === 0 ? 0 : momentos[i - 1].fim - new Date(dataNascimento).getFullYear();
            const endAge = m.fim === '...' ? '...' : (startAge + (m.fim - m.inicio));
            return { e: m.momento, i: `${startAge} a ${endAge}`, p: `${m.inicio} - ${m.fim}` };
          });
          y = renderTableHelper(["Energia", "Idade", "Período"], data, y + 10);
          y += 15;
          momentos.forEach((m, i) => {
            y = checkPageBreak(y);
            doc.setFont("helvetica", "bold");
            doc.text(`Momento ${i + 1} - Energia ${m.momento}`, CONFIG.margin, y);
            y += 7;
            y = printWrappedText(momentosDecisivosTextos?.[m.momento], y);
            y += 5;
          });
        }
      }

      // 19. HARMONIA CONJUGAL
      if (nomeCliente && dataNascimento) {
        const harmonia = calcularHarmoniaConjugal(calcularMissao(nomeCliente, dataNascimento));
        if (harmonia) {
          doc.addPage();
          addWatermarkHelper();
          addToIndex("Harmonia Conjugal");
          y = printSectionTitle("Harmonia Conjugal", 30);
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

  // --- HELPER DA PIRÂMIDE (RESTAURADO PARA O FORMATO COMPACTO) ---
    const drawPyramid = (nomeParaPiramide, startY) => {
        const pyramidData = generateInvertedPyramid(nomeParaPiramide);
        if (!pyramidData || pyramidData.length === 0) return { nextY: startY, data: [] };

        let y = startY;
        
        // Configurações compactas (como era antes)
        const cellWidth = 6;  
        const cellHeight = 4; 

        pyramidData.forEach((row) => {
            if (y > CONFIG.pageHeight - CONFIG.margin) {
                doc.addPage();
                addWatermarkHelper();
                y = CONFIG.margin + 10;
            }

            const rowLength = row.data.length;
            const totalRowWidth = rowLength * cellWidth;
            const startX = (CONFIG.pageWidth - totalRowWidth) / 2;
            
            const sequences = row.type === 'numbers' ? findSequences(row.data) : [];

            row.data.forEach((item, itemIndex) => {
                const x = startX + (itemIndex * cellWidth);
                const isSequence = sequences.includes(itemIndex);

                doc.setDrawColor(0);
                doc.rect(x, y, cellWidth, cellHeight);

                if (row.type === 'letters') {
                    doc.setFontSize(6);
                    doc.setFont("helvetica", "bold");
                    doc.setTextColor(0, 0, 0);
                } else {
                    doc.setFontSize(5);
                    doc.setFont("helvetica", isSequence ? "bold" : "normal");
                    doc.setTextColor(isSequence ? 255 : 0, isSequence ? 0 : 0, 0);
                }

                doc.text(item.toString(), x + (cellWidth / 2), y + (cellHeight / 2) + 1, { align: "center" });
            });

            y += cellHeight + 1;
        });

        return { nextY: y + 5, data: pyramidData };
    };

      // =================================================================
      // 20. PIRÂMIDE INVERTIDA (PRINCIPAL)
      // =================================================================
      if (nomeCliente) {
        doc.addPage();
        addWatermarkHelper();
        addToIndex("Pirâmide Invertida");
        y = printSectionTitle("Pirâmide Invertida", 30);
        
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.setTextColor(CONFIG.colorBlack);
        doc.text(`Nome: ${nomeCliente}`, CONFIG.margin, y);
        y += 10;

        // 1. Desenha a pirâmide
        // Precisamos passar o nome tratado (sem acentos) para a pirâmide ficar correta matematicamente
        const nomeTratado = nomeCliente.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toUpperCase();
        const pyResult = drawPyramid(nomeTratado, y);
        y = pyResult.nextY + 10;

        // 2. Identificar o Arcano da Ponta (Último número)
        let pontaPiramide = null;
        if (pyResult.data.length > 0) {
            const ultimaLinha = pyResult.data[pyResult.data.length - 1];
            if (ultimaLinha.data.length === 1) {
                pontaPiramide = ultimaLinha.data[0];
            }
        }

        // 3. Exibir o Arcano Cabalístico (Imagem + Texto)
        if (pontaPiramide !== null && arcanos?.[pontaPiramide]) {
            
            y = checkPageBreak(y, 60); // Verifica espaço
            
            const arcanoInfo = arcanos[pontaPiramide];
            
            // Config Layout
            const imgWidth = 35;
            const imgHeight = 55;
            const gap = 5;
            const textX = CONFIG.margin + imgWidth + gap;
            const textMaxWidth = CONFIG.pageWidth - CONFIG.margin - textX;
            
            const startBlockY = y; // Marca onde começa o bloco

            // Título do Arcano
            doc.setFont("helvetica", "bold");
            doc.setFontSize(14);
            doc.setTextColor(CONFIG.colorBlack); // Preto
            doc.text(`Arcano Cabalístico: ${pontaPiramide} - ${arcanoInfo.titulo}`, CONFIG.margin, y);
            y += 10;

            // Tenta carregar imagem
            let imageAdded = false;
            if (arcanoInfo.image) {
                try {
                    const imgBase64 = await loadImage(arcanoInfo.image);
                    if (imgBase64) {
                        // Desenha imagem abaixo do título
                        doc.addImage(imgBase64, 'PNG', CONFIG.margin, y, imgWidth, imgHeight);
                        imageAdded = true;
                    }
                } catch (err) {
                    console.error("Erro img piramide:", err);
                }
            }

            // Renderiza Texto
            let currentTextY = y;
            const currentX = imageAdded ? textX : CONFIG.margin;
            const currentMaxW = imageAdded ? textMaxWidth : 170;

            // Descrição
            currentTextY = printWrappedText(
                arcanoInfo.descricao,
                currentTextY,
                10,
                "normal",
                CONFIG.colorBlack,
                currentX,
                currentMaxW
            );

            // Calcula novo Y final
            const imageEndY = y + imgHeight;
            y = Math.max(currentTextY, imageAdded ? imageEndY : currentTextY);
            y += 10;
        }

        // 4. Análise de Sequências (Ex: 333, 555)
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
      // =================================================================
      // 21. NOMES SOCIAIS (Com Pirâmide + Imagem + Texto)
      // =================================================================
      if (nomesSociais && nomesSociais.length > 0) {
        doc.addPage();
        addWatermarkHelper();
        addToIndex("Nomes Sociais");
        y = printSectionTitle("Nomes Sociais", 30);
        y = printWrappedText(
    "O Nome Social representa a vibração que a pessoa escolhe expressar no presente. Ele simboliza a identidade assumida por vontade própria, refletindo como ela deseja ser vista, reconhecida e tratada pelo mundo. \n\n" +
    "Ao contrário do nome de nascimento, que revela tendências profundas, missão e aspectos estruturais da alma, o nome social traduz o eu construído conscientemente, funcionando como uma assinatura energética que pode reforçar, suavizar ou redirecionar padrões da personalidade. \n\n" +
    "Sua análise mostra a energia vibracional ativada quando alguém usa o nome social no dia a dia — seja socialmente, profissionalmente ou emocionalmente — e revela a forma como a pessoa quer se posicionar, ser percebida e influenciar o ambiente. " +
    "Quando harmônico com o nome de origem, o nome social amplia a fluidez e fortalece a expressão pessoal. Quando há contraste entre eles, o nome social pode atuar como ajuste, proteção, afirmação ou correção vibracional.",
    y
);
y += 10;


        const uniqueNomes = nomesSociais.filter((item, index, self) =>
          index === self.findIndex((t) => (
            t.nome.toLowerCase().trim() === item.nome.toLowerCase().trim()
          ))
        );

        for (const [idx, social] of uniqueNomes.entries()) {
          // 1. Configurações de Layout
          const imgWidth = 35;
          const imgHeight = 55;
          const gap = 5;
          const textX = CONFIG.margin + imgWidth + gap;
          const textMaxWidth = CONFIG.pageWidth - CONFIG.margin - textX;

          // Verificar espaço para o Título + Pirâmide mínima
          y = checkPageBreak(y, 60);

          // 2. Título
          doc.setFont("helvetica", "bold");
          doc.setFontSize(14);
          doc.setTextColor(CONFIG.colorBlack);
          doc.text(`Opção ${idx + 1}: ${social.nome}`, CONFIG.margin, y);
          y += 10;

          // 3. DESENHAR A PIRÂMIDE DO NOME SOCIAL
          const pyResult = drawPyramid(social.nome, y);
          y = pyResult.nextY + 5; // Atualiza Y para abaixo da pirâmide

          // 4. Preparar bloco Imagem/Texto
          const startBlockY = y; // Ponto onde começa a imagem e o texto

          // Verificar se cabe a imagem, senão quebra página
          y = checkPageBreak(y, imgHeight);
          // Se houve quebra, reseta o startBlockY para o novo topo
          const effectiveBlockY = (y === CONFIG.margin) ? y : startBlockY;

          // 5. Tenta carregar e desenhar a imagem
          let imageAdded = false;
          if (arcanos?.[social.arcano]?.image) {
            try {
              const imgBase64 = await loadImage(arcanos[social.arcano].image);
              if (imgBase64) {
                doc.addImage(imgBase64, 'PNG', CONFIG.margin, effectiveBlockY, imgWidth, imgHeight);
                imageAdded = true;
              }
            } catch (err) {
              console.error("Erro imagem:", err);
            }
          }

          // 6. Renderiza o Texto (Lado direito ou normal)
          let currentTextY = effectiveBlockY;
          const currentX = imageAdded ? textX : CONFIG.margin;
          const currentMaxW = imageAdded ? textMaxWidth : 170;

          // Título do Arcano
          doc.setFont("helvetica", "bold");
          doc.setFontSize(12);
          doc.setTextColor(CONFIG.colorBlack);
          doc.text(`Arcano: ${social.arcano} - ${arcanos?.[social.arcano]?.titulo || ''}`, currentX, currentTextY + 5);
          currentTextY += 10;

          // Descrição
          if (arcanos?.[social.arcano]) {
            currentTextY = printWrappedText(
              arcanos[social.arcano].descricao,
              currentTextY,
              10,
              "normal",
              CONFIG.colorBlack,
              currentX,
              currentMaxW
            );
          }

          // 7. Calcular novo Y final (maior entre texto e imagem)
          const imageEndY = effectiveBlockY + imgHeight;
          y = Math.max(currentTextY, imageAdded ? imageEndY : currentTextY);

          y += 10;
          doc.setDrawColor(200, 200, 200);
          doc.line(CONFIG.margin, y, CONFIG.pageWidth - CONFIG.margin, y);
          y += 10;
        }
      }

      // =================================================================
      // 25. MENSAGEM FINAL / DEDICATÓRIA
      // =================================================================
      doc.addPage();
      addWatermarkHelper();
      
      // Centraliza verticalmente
      let yFinal = CONFIG.pageHeight / 4; // Começa um pouco mais pra cima

      // --- Título da Mensagem ---
      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);
      doc.setTextColor(CONFIG.colorBlack);
      doc.text("Uma Nota Pessoal", CONFIG.centerX, yFinal, { align: "center" });
      yFinal += 20;

      // --- Texto Humanizado ---
      doc.setFont("helvetica", "normal"); // Fonte de leitura agradável
      doc.setFontSize(12);
      
      // Texto concatenado com o nome do cliente para dar o toque pessoal
      const mensagem = 
        `Este Mapa Numerológico foi preparado especialmente para você, ${nomeCliente || ''}, com atenção às suas vibrações, aos caminhos que se abrem diante da sua jornada e às forças que dançam na sua data de nascimento e no seu nome.\n\n` +
        "Cada número aqui não fala de destino fechado, mas de potenciais, talentos e desafios que fazem parte da sua história única.\n\n" +
        "Que este material sirva como um espelho gentil, revelando aspectos profundos do seu ser e iluminando passos que talvez estivessem adormecidos. Agradeço de coração por confiar seu mapa às minhas mãos.\n\n" +
        "Que a leitura traga clareza, força e direção — e que você se reconheça, com verdade e acolhimento, em cada página.";

      // Imprime o texto com margens laterais maiores (40) para parecer uma carta centralizada
      yFinal = printWrappedText(mensagem, yFinal, 12, "normal", CONFIG.colorBlack, 40, 130);

      yFinal += 10;
      doc.text("Com carinho,", 40, yFinal); // Alinhado com a margem do texto

      // --- ASSINATURA "MANUSCRITA" ---
      yFinal += 25; // Espaço para a assinatura

      // Truque para parecer assinatura: Usar fonte Times, Itálico e tamanho maior
      doc.setFont("times", "italic"); 
      doc.setFontSize(30); 
      doc.setTextColor(CONFIG.colorBlack); 
      
      // Desenha a assinatura levemente inclinada para a direita (simulando escrita manual)
      doc.text("Manouche Yasmin", CONFIG.centerX, yFinal, { align: "center" });
      
      // Linha fina abaixo (opcional, estilo documento oficial)
      // doc.setLineWidth(0.2);
      // doc.line(CONFIG.centerX - 40, yFinal + 2, CONFIG.centerX + 40, yFinal + 2);

      // Cargo abaixo da assinatura
      yFinal += 10;
      doc.setFont("helvetica", "normal"); // Volta para fonte normal
      doc.setFontSize(10);
      doc.setTextColor(CONFIG.colorGray);
      doc.text("Numeróloga Cabalística", CONFIG.centerX, yFinal, { align: "center" });

      // -------------------------------------------------------------
      // FINALIZAÇÃO
      // -------------------------------------------------------------
      doc.setPage(paginaIndiceRef);
      y = printSectionTitle("ÍNDICE", 30);
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

  // =================================================================
  // 4. RENDERIZAÇÃO DO BOTÃO
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