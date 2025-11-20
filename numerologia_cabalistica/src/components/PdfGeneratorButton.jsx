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

    const indiceItens = []; // Armazena itens para o índice final

    // --- Helpers Internos do PDF (Closures para acessar doc e config facilmente) ---

    // Adiciona marca d'água
    const addWatermarkHelper = () => {
      doc.saveGraphicsState();
      doc.setGState(new doc.GState({ opacity: 0.1 }));
      const wmWidth = CONFIG.pageWidth * 0.7;
      const x = (CONFIG.pageWidth - wmWidth) / 2;
      const y = (CONFIG.pageHeight - wmWidth) / 2;
      doc.addImage(logo, "PNG", x, y, wmWidth, wmWidth);
      doc.restoreGraphicsState();
    };

    // Verifica se precisa de nova página
    const checkPageBreak = (currentY, addedMargin = 0) => {
      if (currentY > CONFIG.pageHeight - CONFIG.margin - addedMargin) {
        doc.addPage();
        addWatermarkHelper();
        return CONFIG.margin; // Retorna o novo Y
      }
      return currentY;
    };

    // Imprime texto com quebra de linha automática e paginação
    const printWrappedText = (text, y, fontSize = 12, fontType = "normal", color = CONFIG.colorBlack) => {
      if (!text) return y;
      
      doc.setFont("helvetica", fontType);
      doc.setFontSize(fontSize);
      doc.setTextColor(color);

      const lines = doc.splitTextToSize(String(text), 170); // Largura útil
      
      lines.forEach(line => {
        y = checkPageBreak(y);
        doc.text(line, CONFIG.margin, y);
        y += CONFIG.lineHeight;
      });
      
      return y; // Retorna a próxima posição Y disponível
    };

    // Adiciona item ao array do índice
    const addToIndex = (titulo) => {
      indiceItens.push({ titulo, pagina: doc.internal.getNumberOfPages() });
    };

    // Renderiza Título Centralizado
    const printSectionTitle = (title, y) => {
      y = checkPageBreak(y, 30); // Margem extra para títulos
      doc.setFont("helvetica", "bold");
      doc.setFontSize(22);
      doc.setTextColor(CONFIG.colorBlack);
      doc.text(title, CONFIG.centerX, y, { align: "center" });
      return y + 15;
    };

    // Renderiza Nome e Numerologia (Letras e Números)
    const renderNomeNumerologia = (nome, startY) => {
      if (!nome) return startY;
      const nomeFormatado = nome.toUpperCase().replace(/\s/g, '');
      const letras = nomeFormatado.split('');
      const espacamento = 7;
      const totalWidth = (letras.length * espacamento) - 5;
      const startX = (CONFIG.pageWidth - totalWidth) / 2;

      let x = startX;
      let y = startY;

      // Letras
      letras.forEach(letra => {
        doc.setFontSize(14);
        doc.setTextColor(isVogal(letra) ? CONFIG.colorBlue : CONFIG.colorGray);
        doc.text(letra, x, y);
        x += espacamento;
      });

      // Números
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

    // Renderiza Tabela Genérica
    const renderTableHelper = (headers, data, startY) => {
      const tableWidth = CONFIG.pageWidth - (CONFIG.margin * 2);
      const colWidth = tableWidth / headers.length;
      let y = startY;

      // Cabeçalho
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

      // Dados
      doc.setFont("helvetica", "normal");
      data.forEach(row => {
        y = checkPageBreak(y, 20);
        // Se houve quebra de página, reimprime o cabeçalho
        if (y === CONFIG.margin) y = printHeader(y);

        let x = CONFIG.margin;
        const cellValues = Object.values(row);
        
        // Calcula altura da linha baseada na célula com mais texto
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
      // INÍCIO DA GERAÇÃO DO CONTEÚDO
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
      const dataFmt = dataNascimento ? new Date(dataNascimento).toLocaleDateString('pt-BR') : "Não informada";
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
      const paginaIndiceRef = doc.internal.getNumberOfPages(); // Guarda o ID da página
      // O conteúdo será inserido no final

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
        y = printWrappedText("A Impressão representa como você é percebido socialmente (soma das consoantes).", y);
        
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
        y = printWrappedText("O Destino revela o caminho que você deve seguir e as oportunidades da vida.", y);
        
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
        y = printWrappedText("A Missão de Vida é o propósito maior da sua alma (Expressão + Destino).", y);
        
        y += 5;

        // --- CORREÇÃO AQUI ---
        // 1. Calcula os valores prévios necessários
        const valorDestino = calcularDestino(dataNascimento);
        const valorExpressao = calcularExpressao(nomeCliente);

        // 2. Passa os valores corretos para calcular a missão
        const missaoVal = calcularMissao(valorDestino, valorExpressao);
        // ---------------------

        doc.setFont("helvetica", "bold");
        doc.text(`Número da Missão: ${missaoVal}`, CONFIG.margin, y);
        y += 10;
        
        doc.text("Definição:", CONFIG.margin, y);
        y += 7;
        
        // Verifica se o texto existe antes de imprimir
        if (missaoTextos && missaoTextos[missaoVal]) {
            y = printWrappedText(missaoTextos[missaoVal], y);
        } else {
            y = printWrappedText("Descrição não disponível para este número.", y);
        }
      }

      // 10. DÍVIDAS CÁRMICAS
      if (nomeCliente && dataNascimento) {
        doc.addPage();
        addWatermarkHelper();
        addToIndex("Dívidas Cármicas");
        y = printSectionTitle("Dívidas Cármicas", 30);
        y = printWrappedText("Representam lições de vidas passadas que se manifestam como desafios hoje.", y);
        
        const dividas = calcularDividasCarmicas(dataNascimento, calcularExpressao(nomeCliente), calcularDestino(dataNascimento), calcularMotivacao(nomeCliente));
        
        y += 5;
        doc.setFont("helvetica", "bold");
        doc.text(`Dívidas Identificadas: ${dividas === 'Nenhuma' ? 'Nenhuma' : dividas}`, CONFIG.margin, y);
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
        y = printWrappedText("Números ausentes no nome que indicam habilidades a desenvolver.", y);
        
        const licoes = calcularLicoesCarmicas(nomeCliente);
        y += 5;
        doc.setFont("helvetica", "bold");
        doc.text(`Lições Identificadas: ${licoes === 'Nenhuma' ? 'Nenhuma' : licoes}`, CONFIG.margin, y);
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
        y = printWrappedText("O ciclo energético que influencia sua vida no ano corrente.", y);
        
        const anoPessoal = calcularAnoPessoal(dataNascimento);
        y += 5;
        doc.setFont("helvetica", "bold");
        doc.setFontSize(16);
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
        y = printWrappedText("Tendências e oportunidades específicas mês a mês.", y);
        y += 10;

        const meses = calcularMesesPessoaisRestantes(dataNascimento);
        meses.forEach(item => {
          y = checkPageBreak(y);
          doc.setFont("helvetica", "bold");
          doc.setFontSize(14);
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
        y = printWrappedText("Padrões repetitivos no nome que indicam impulsos internos.", y);
        
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

      // 16. CICLO DE VIDA (TABELA)
      if (dataNascimento && nomeCliente) {
        const ciclos = calcularCicloVida(dataNascimento, calcularDestino(dataNascimento));
        if (ciclos) {
          doc.addPage();
          addWatermarkHelper();
          addToIndex("Ciclo de Vida");
          y = printSectionTitle("Ciclo de Vida", 30);
          y = printWrappedText("Fases energéticas que influenciam diferentes períodos.", y);
          y += 10;

          // Tabela
          const headers = ["Ciclo", "Idade", "Período", "Energia"];
          const data = ciclos.map(c => ({ c: c.ciclo, i: c.idade, p: c.periodo, e: c.energia }));
          y = renderTableHelper(headers, data, y);

          // Descrições
          y += 15;
          doc.setFont("helvetica", "bold");
          doc.text("Interpretação:", CONFIG.margin, y);
          y += 10;

          ciclos.forEach(c => {
            y = checkPageBreak(y);
            doc.setFont("helvetica", "bold");
            doc.text(`${c.ciclo} - Energia ${c.energia}`, CONFIG.margin, y);
            y += 7;
            y = printWrappedText(CicloVida?.[c.energia] || "Descrição indisponível", y);
            y += 5;
          });
        }
      }

      // 17. DESAFIOS (TABELA)
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
             y = printWrappedText(desafiosTextos?.[d.valor] || "Descrição indisponível", y);
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
          
          // Preparar dados da tabela
          const data = momentos.map((m, i) => {
            const startAge = i === 0 ? 0 : momentos[i-1].fim - new Date(dataNascimento).getFullYear();
            const endAge = m.fim === '...' ? '...' : (startAge + (m.fim - m.inicio));
            return { e: m.momento, i: `${startAge} a ${endAge}`, p: `${m.inicio} - ${m.fim}` };
          });
          y = renderTableHelper(["Energia", "Idade", "Período"], data, y + 10);

          y += 15;
          momentos.forEach((m, i) => {
            y = checkPageBreak(y);
            doc.setFont("helvetica", "bold");
            doc.text(`Momento ${i+1} - Energia ${m.momento}`, CONFIG.margin, y);
            y += 7;
            y = printWrappedText(momentosDecisivosTextos?.[m.momento] || "Descrição indisponível", y);
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

      // 20. NOMES SOCIAIS (Se houver)
      if (nomesSociais && nomesSociais.length > 0) {
        doc.addPage();
        addWatermarkHelper();
        addToIndex("Nomes Sociais");
        y = printSectionTitle("Nomes Sociais", 30);
        y = printWrappedText("Alternativas energéticas para equilibrar sua jornada.", y);
        y += 10;

        nomesSociais.forEach((social, idx) => {
           y = checkPageBreak(y, 40); // Verifica espaço para o bloco
           doc.setFont("helvetica", "bold");
           doc.setFontSize(14);
           doc.text(`Opção ${idx + 1}: ${social.nome}`, CONFIG.margin, y);
           y += 7;
           doc.setFontSize(12);
           doc.text(`Arcano: ${social.arcano}`, CONFIG.margin, y);
           y += 7;
           
           // Pirâmide (Lógica simplificada para caber aqui, idealmente usar função externa se complexa)
           if (generateInvertedPyramid) {
             const pyData = generateInvertedPyramid(social.nome);
             // Renderizar pirâmide aqui se necessário, usando lógica similar à original
             // Para brevidade, apenas texto do arcano:
           }
           
           if (arcanos?.[social.arcano]) {
             y = printWrappedText(arcanos[social.arcano].descricao, y, 10);
           }
           y += 10;
           doc.line(CONFIG.margin, y, CONFIG.pageWidth - CONFIG.margin, y);
           y += 10;
        });
      }

      // -------------------------------------------------------------
      // FINALIZAÇÃO: GERAR ÍNDICE NA PÁGINA RESERVADA
      // -------------------------------------------------------------
      doc.setPage(paginaIndiceRef);
      y = printSectionTitle("ÍNDICE", 30);
      
      // Ordenar e Renderizar Índice
      indiceItens.sort((a, b) => a.pagina - b.pagina);
      
      indiceItens.forEach(item => {
        if (y > CONFIG.pageHeight - CONFIG.margin) {
           // Se o índice for muito grande, cria nova página e continua
           doc.addPage(); 
           addWatermarkHelper();
           y = CONFIG.margin + 10;
        }
        
        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        doc.text(item.titulo, CONFIG.margin, y);
        
        // Linha pontilhada
        const dots = ".".repeat(100); // Simplificação visual
        const titleWidth = doc.getTextWidth(item.titulo);
        const pageNumStr = String(item.pagina);
        doc.text(dots, CONFIG.margin + titleWidth + 2, y, { maxWidth: CONFIG.pageWidth - CONFIG.margin - 30 - titleWidth });
        
        doc.setFont("helvetica", "bold");
        doc.text(pageNumStr, CONFIG.pageWidth - CONFIG.margin - 10, y, { align: "right" });
        y += 10;
      });

      // Salvar Arquivo
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