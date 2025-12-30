import jsPDF from "jspdf";
import logo from "../assets/image/logo.png";
import { tabelaAcentos, tabelaNumeros } from "../utils/TabelaNumerologia"; // Re-import needed for helpers if not global

// --- Funções Utilitárias Moved from Component Scope ---
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
        ctx.globalAlpha = opacity;
        ctx.drawImage(img, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      };
      img.onerror = () => resolve(null);
    });
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

// =================================================================
// 1. IMPORTAÇÕES DE CÁLCULOS E DADOS
// =================================================================
import { calcularMomentosDecisivos } from "../utils/CalcularMomentosDecisivos";
import { calcularAnoPessoal } from "../utils/CalculoAnoPessoal";
import { calcularArcanosTransito } from "../utils/CalculoArcanosTransito";
import { calcularCicloVida } from "../utils/CalculoCicloVida";
import { calcularDesafios } from "../utils/CalculoDesafios";
import { calcularDestino } from "../utils/CalculoDestino";
import { calcularDiasFavoraveis } from "../utils/CalculoDiasFavoraveis";
import { calcularDividasCarmicas } from "../utils/CalculoDividasCarmicas";
import { calcularExpressao } from "../utils/CalculoExpressao";
import { calcularHarmoniaConjugal } from "../utils/CalculoHarmoniaConjugal";
import { calcularImpressao } from "../utils/CalculoImpressao";
import { calcularLicoesCarmicas } from "../utils/CalculoLicoesCarmicas";
import { calcularDiaPessoal, calcularMesesPessoaisRestantes } from "../utils/CalculoMesDiaPessoal";
import { calcularMissao } from "../utils/CalculoMissao";
import { calcularMotivacao } from "../utils/CalculoMotivacao";
import { calcularSubconsciente } from "../utils/CalculoSubconsciente";
import { calcularTendenciasOcultas } from "../utils/CalculoTendenciasOcultas";
import { findSequences, generateInvertedPyramid } from "../utils/generateInvertedPyramid";

import {
  anoPessoalDescritivo,
  arcanos,
  caracteristicasDiaNascimento,
  CicloVida,
  desafios as desafiosTextos,
  destinoTextos,
  diaPessoal as diaPessoalTextos,
  dividasCarmicasTextos,
  expressaoTextos,
  impressaoTextos,
  licoesCarmicasTexto,
  mesesPessoal,
  missaoTextos,
  momentosDecisivos as momentosDecisivosTextos,
  motivacaoTextos,
  perfilAmoroso,
  quartoMomentoDecisivo,
  respostaSubconsciente,
  segundoCicloVida,
  segundoMomentoDecisivo,
  sequenciaNegativa,
  tendenciaOculta,
  terceiroCicloVida,
  terceiroMomentoDecisivo,
  textoCompatibilidade,
  textoExplicativoHarmonia, // FIXED: removed duplicate
  vocacaoTextos
} from "../utils/TabelaNumerologia";

// =================================================================
// 2. COMPONENTE PRINCIPAL
// =================================================================
// =================================================================
// 3. SERVICE EXPORT
// =================================================================

export const generatePDF = async (data, selectedSections) => {
  const {
      nomeCliente,
      dataNascimento,
      nomesSociais = [],
      mesInteresse,
      diaInteresse,
      assinatura,
      nomeCompanheiro,
      dataNascimentoCompanheiro
  } = data;



    const doc = new jsPDF();

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

    // Carrega marca d'água
    const watermarkBase64 = await prepareWatermarkImage(logo, 0.08);

    const addWatermarkHelper = () => {
      if (watermarkBase64) {
        const wmWidth = CONFIG.pageWidth * 0.7;
        const x = (CONFIG.pageWidth - wmWidth) / 2;
        const wmY = (CONFIG.pageHeight - wmWidth) / 2;
        doc.addImage(watermarkBase64, "PNG", x, wmY, wmWidth, wmWidth);
      }
    };

    const ensurePage = () => {
      if (y > CONFIG.margin + 5) {
        doc.addPage();
        addWatermarkHelper();
        y = CONFIG.margin;
      }
      return y;
    };

    const checkPageBreak = (currentY, heightNeeded = 0) => {
      const limit = CONFIG.pageHeight - CONFIG.margin;
      if (currentY + heightNeeded > limit) {
        doc.addPage();
        addWatermarkHelper();
        return CONFIG.margin + 10;
      }
      return currentY;
    };

    const printSectionTitle = (title) => {
      // Se já houver conteúdo na página, força uma quebra de página para garantir que o título comece em uma nova página.
      // Isso evita que um título de seção fique no final de uma página e o conteúdo na próxima.
      if (y > CONFIG.margin + 10) {
        doc.addPage();
        addWatermarkHelper();
        y = CONFIG.margin;
      }
      y += 10;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(22);
      doc.setTextColor(CONFIG.colorBlack);
      doc.text(title, CONFIG.centerX, y, { align: "center" });
      return y + 15;
    };

    const printWrappedText = (text, currentY, fontSize = 12, fontType = "normal", color = CONFIG.colorBlack, x = CONFIG.margin, maxWidth = 170) => {
      if (!text) return currentY;
      doc.setFont("helvetica", fontType);
      doc.setFontSize(fontSize);
      doc.setTextColor(color);
      const lines = doc.splitTextToSize(String(text), maxWidth);
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

    // Helper de Pirâmide
    const drawPyramid = (nomeParaPiramide, startY) => {
      const pyramidData = generateInvertedPyramid(nomeParaPiramide);
      if (!pyramidData || pyramidData.length === 0) return { nextY: startY, data: [] };

      let currentY = startY;
      const cellWidth = 6;
      const cellHeight = 4;

      pyramidData.forEach((row) => {
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
      let currentY = checkPageBreak(startY, 20);

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
        currentY = checkPageBreak(currentY, rowHeight);
        if (currentY === CONFIG.margin) currentY = printHeader(currentY);

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

      // 1. CAPA (SEMPRE GERA)
      doc.addImage(logo, 'PNG', 75, 20, 60, 60);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(24);
      doc.text("MAPA NUMEROLOGICO CABALISTICO", CONFIG.centerX, 100, { align: "center" });
      doc.setFontSize(16);
      doc.text("Orientadora: Manouche Yasmin", CONFIG.centerX, 130, { align: "center" });
      doc.text(`Data: ${new Date().toLocaleDateString('pt-BR')}`, CONFIG.centerX, 140, { align: "center" });
      addToIndex("Capa");

      // 2. DADOS DO CLIENTE (SEMPRE GERA)
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

      // 3. INTRODUÇÃO (SEMPRE GERA)
      doc.addPage();
      addWatermarkHelper();
      y = CONFIG.margin;
      y = printSectionTitle("Numerologia Cabalística");
      const introText = [
        "A Numerologia Cabalística é um conhecimento antigo que estuda como cada número expressa uma vibração própria e como essas vibrações se manifestam na vida humana. Muito além de simples cálculos, ela funciona como um mapa energético que revela tendências naturais, potenciais latentes, aprendizados da alma e caminhos de evolução.",

        "Por meio da data de nascimento e do nome completo — que carrega a assinatura vibracional da pessoa — é possível compreender missão, propósito, talentos, pontos de crescimento e movimentos cíclicos da vida. Cada número descreve uma parte da personalidade, como se fosse uma peça do quebra-cabeça interno, permitindo enxergar com mais clareza aquilo que, muitas vezes, sentimos mas não sabemos nomear.",

        "Este mapa foi preparado com cuidado para oferecer orientação, clareza e autoconhecimento. Ele não tem a intenção de prever o futuro, mas de iluminar o presente, mostrando quais energias você traz consigo e como pode utilizá-las de forma mais consciente e harmoniosa.",

        "Que este material sirva como um instrumento de reflexão e fortalecimento pessoal, ajudando você a reconhecer suas forças, compreender seus desafios e caminhar com mais segurança e propósito."
      ];

      introText.forEach(t => y = printWrappedText(t, y));
      addToIndex("Introdução");

      // 4. RESERVA DA PÁGINA DE ÍNDICE (SEMPRE GERA)
      doc.addPage();
      addWatermarkHelper();
      const paginaIndiceRef = doc.internal.getNumberOfPages();

      doc.addPage();
      addWatermarkHelper();
      y = CONFIG.margin;

      // -------------------------------------------------
      // SEÇÕES CONDICIONAIS (CHECKBOX)
      // -------------------------------------------------

      // 5. MOTIVAÇÃO
      if (selectedSections.motivacao && nomeCliente) {
        y = printSectionTitle("Motivação");
        addToIndex("Motivação");
        y = renderNomeNumerologia(nomeCliente, y);
        y = printWrappedText(
          "A Motivação é o número que representa aquilo que move a sua alma. Ele revela seus desejos mais íntimos, aquilo que você busca mesmo sem perceber de forma consciente. Enquanto outros números mostram comportamento, personalidade e destino, a Motivação descreve o impulso interno — o motivo real por trás das suas ações. Ela aponta suas necessidades emocionais, o tipo de ambiente onde você se sente pleno(a) e aquilo que verdadeiramente alimenta o seu coração. Compreender esse número ajuda a alinhar escolhas com sua essência, trazendo mais clareza, autenticidade e propósito.",
          y
        );
        y += 10;
        const motivacaoVal = calcularMotivacao(nomeCliente);
        doc.setFont("helvetica", "bold");
        doc.text(`Número da Motivação: ${motivacaoVal}`, CONFIG.margin, y);
        y += 10;
        doc.text("Definição:", CONFIG.margin, y);
        y += 7;
        y = printWrappedText(motivacaoTextos[motivacaoVal], y);
      }

      // 6. IMPRESSÃO
      if (selectedSections.impressao && nomeCliente) {
        y = printSectionTitle("Impressão");
        addToIndex("Impressão");
        y = renderNomeNumerologia(nomeCliente, y);
        y = printWrappedText(
          "A Impressão mostra como você é visto(a) pelas outras pessoas. Ela representa o impacto inicial que sua presença causa, revelando seu modo natural de se expressar e a energia que transmite no primeiro contato. Entender esse número ajuda a perceber por que o mundo reage a você de certas maneiras e como alinhar sua imagem ao que deseja transmitir.",
          y
        );
        y += 10;

        const impressaoVal = calcularImpressao(nomeCliente);
        doc.setFont("helvetica", "bold");
        doc.text(`Número da Impressão: ${impressaoVal}`, CONFIG.margin, y);
        y += 10;
        doc.text("Definição:", CONFIG.margin, y);
        y += 7;
        y = printWrappedText(impressaoTextos[impressaoVal], y);
      }

      // 7. EXPRESSÃO
      if (selectedSections.expressao && nomeCliente) {
        y = printSectionTitle("Expressão");
        addToIndex("Expressão");
        y = renderNomeNumerologia(nomeCliente, y);
        y = printWrappedText(
          "A Expressão representa seus talentos naturais, habilidades e qualidades que você manifesta no mundo. Ela revela sua forma única de agir, pensar, se comunicar e transformar ideias em atitudes. Compreender esse número ajuda a reconhecer seus pontos fortes e a desenvolver seu propósito com mais clareza.",
          y
        );
        y += 10;

        const expressaoVal = calcularExpressao(nomeCliente);
        doc.setFont("helvetica", "bold");
        doc.text(`Número da Expressão: ${expressaoVal}`, CONFIG.margin, y);
        y += 10;
        doc.text("Definição:", CONFIG.margin, y);
        y += 7;
        y = printWrappedText(expressaoTextos[expressaoVal], y);
      }

      // 8. DESTINO
      if (selectedSections.destino && dataNascimento) {
        y = printSectionTitle("Destino");
        addToIndex("Destino");
        y = printWrappedText(
          "O Número do Destino revela o caminho principal da sua vida. Ele mostra as experiências que você veio viver, as oportunidades que surgem no seu percurso e os aprendizados que moldam sua jornada. Esse número funciona como um roteiro espiritual, indicando os talentos que você veio aperfeiçoar e a direção que tende a trazer mais realização.",
          y
        );
        y += 10;

        const destinoVal = calcularDestino(dataNascimento);
        doc.setFont("helvetica", "bold");
        doc.text(`Número do Destino: ${destinoVal}`, CONFIG.margin, y);
        y += 10;
        doc.text("Definição:", CONFIG.margin, y);
        y += 7;
        y = printWrappedText(destinoTextos[destinoVal], y);
      }

      // 8-B. DIA DO NASCIMENTO
      if (selectedSections.diaNascimento && dataNascimento) {
        const partesData = dataNascimento.split('-');
        if (partesData.length === 3) {
          const diaNasc = parseInt(partesData[2], 10);
          y = printSectionTitle("Dia do Nascimento");
          addToIndex("Dia do Nascimento");
          y = printWrappedText(
            "O Dia do Nascimento revela uma qualidade natural que você traz desde o primeiro instante. Ele mostra seus talentos espontâneos, a forma como você age de modo instintivo e aquilo que flui sem esforço na sua personalidade. Esse número destaca dons que acompanham você desde cedo e que, quando bem utilizados, tornam sua jornada mais leve e intuitiva.",
            y
          );
          y += 10;

          doc.setFont("helvetica", "bold");
          doc.text(`Nascido(a) no dia: ${diaNasc}`, CONFIG.margin, y);
          y += 10;
          if (caracteristicasDiaNascimento && caracteristicasDiaNascimento[diaNasc]) {
            y = printWrappedText(caracteristicasDiaNascimento[diaNasc], y);
          } else {
            y = printWrappedText("Descrição não disponível.", y);
          }
          y += 5;
        }
      }

      // 9. MISSÃO
      if (selectedSections.missao && nomeCliente && dataNascimento) {
        y = printSectionTitle("Missão");
        addToIndex("Missão");
        y = printWrappedText("A Missão representa o propósito central da sua existência — aquilo que sua alma veio aprender, desenvolver e entregar ao mundo. É o grande caminho da sua vida, mostrando quais talentos precisam ser despertados e quais desafios você deve transformar em sabedoria. Esse número não fala do que você já é, mas do que você está se tornando. Quando você vive alinhado(a) à sua Missão, a vida ganha fluidez, sentido e direção.", y);
        y += 10;
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
      if (selectedSections.dividas && nomeCliente && dataNascimento) {
        y = printSectionTitle("Dívidas Cármicas");
        addToIndex("Dívidas Cármicas");
        y = printWrappedText("As Dívidas Cármicas revelam padrões repetitivos que você trouxe de outras experiências e que precisam ser corrigidos nesta vida. Elas não são castigos, mas convites a amadurecer. Cada dívida mostra uma área onde houve abuso, negligência ou excesso no passado — e agora a vida oferece a chance de equilibrar, reconstruir e evoluir. Ao compreender essa energia, você deixa de repetir erros e passa a agir com mais consciência.", y);
        y += 10;
        const dividas = calcularDividasCarmicas(dataNascimento, calcularExpressao(nomeCliente), calcularDestino(dataNascimento), calcularMotivacao(nomeCliente));
        y += 5;
        doc.setFont("helvetica", "bold");
        doc.text(`Dívidas: ${dividas === 'Nenhuma' ? 'Nenhuma' : dividas}`, CONFIG.margin, y);
        y += 15;
        if (dividas !== 'Nenhuma') {
          doc.text("Significados:", CONFIG.margin, y);
          y += 10;
          dividas.split(', ').forEach(num => {
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
      if (selectedSections.licoes && nomeCliente) {
        y = printSectionTitle("Lições Cármicas");
        addToIndex("Lições Cármicas");
        y = printWrappedText("As Lições Cármicas indicam habilidades que ficaram incompletas ou não foram plenamente desenvolvidas em vidas anteriores. São “lacunas” que você veio preencher: atitudes a reforçar, comportamentos a aprimorar e virtudes a conquistar. Elas representam pontos importantes de crescimento. Quando você trabalha essas lições, sua vida se organiza, suas relações ficam mais leves e a sensação de propósito aumenta.", y);
        y += 10;
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
      if (selectedSections.anoPessoal && dataNascimento) {
        y = printSectionTitle("Ano Pessoal");
        addToIndex("Ano Pessoal");
        y = printWrappedText("O Ano Pessoal mostra o tema central da sua vida em um ciclo de doze meses. Ele funciona como um clima energético: alguns anos pedem ação, outros pedem recolhimento; alguns favorecem trabalho e expansão, outros favorecem cura e reconstrução. Seguir o fluxo do Ano Pessoal ajuda você a tomar decisões no momento ideal, reduz conflitos e abre portas no tempo certo.", y);
        y += 10;
        const anoPessoal = calcularAnoPessoal(dataNascimento);
        y += 5;
        doc.setFont("helvetica", "bold");
        doc.text(`Seu Ano Pessoal: ${anoPessoal}`, CONFIG.margin, y);
        y += 15;
        y = printWrappedText(anoPessoalDescritivo[anoPessoal], y);
      }

      // 13. MÊS PESSOAL
      if (selectedSections.mesPessoal && dataNascimento) {
        y = printSectionTitle("Mês Pessoal");
        addToIndex("Mês Pessoal");
        y += 10;
        y = printWrappedText("O Mês Pessoal revela a vibração específica que atua sobre você durante cada mês do ano. É como um detalhe fino do seu ciclo: ele mostra onde concentrar energia, que atitudes favorecem resultados e quais movimentos devem ser evitados. Comparado ao Ano Pessoal, o Mês Pessoal é o ajuste fino da jornada.", y);
        y += 10;
        const meses = calcularMesesPessoaisRestantes(dataNascimento);
        meses.forEach(item => {
          y = checkPageBreak(y, 40);
          doc.setFont("helvetica", "bold");
          doc.text(`${item.nomeMes}/${item.ano} – Energia ${item.valor}`, CONFIG.margin, y);
          y += 8;
          y = printWrappedText(mesesPessoal[item.valor], y);
          y += 10;
        });
      }

      // 13-B. DIA PESSOAL
      if (selectedSections.diaPessoal && dataNascimento) {
        let diaCalc, mesCalc;
        let isDataPadrao = false;
        if (diaInteresse && mesInteresse) {
          diaCalc = parseInt(diaInteresse, 10);
          mesCalc = parseInt(mesInteresse, 10);
        } else {
          const hoje = new Date();
          diaCalc = hoje.getDate();
          mesCalc = hoje.getMonth() + 1;
          isDataPadrao = true;
        }

        const diaPessoalValor = calcularDiaPessoal(dataNascimento, mesCalc, diaCalc);
        if (diaPessoalValor && !isNaN(diaPessoalValor) && diaPessoalValor !== '—') {
          y = checkPageBreak(y, 80);
          y = printSectionTitle("Dia Pessoal");
          addToIndex("Dia Pessoal");
          y = printWrappedText("O Dia Pessoal apresenta a energia de cada dia — um mapa rápido para guiar pequenas escolhas, decisões importantes e momentos ideais para agir ou descansar. Quando você segue essa vibração, a rotina fica mais leve e as situações se encaixam com maior naturalidade.", y);
          y += 10;

          const introText = isDataPadrao
            ? "Calculado para a data de hoje."
            : "Calculado para a data escolhida.";

          y = printWrappedText(introText, y);
          y += 10;
          doc.setFont("helvetica", "bold");
          doc.setTextColor(CONFIG.colorBlack);
          const dataFormatada = `${diaCalc.toString().padStart(2, '0')}/${mesCalc.toString().padStart(2, '0')}`;
          doc.text(`Dia Pessoal ${diaPessoalValor} (Data: ${dataFormatada})`, CONFIG.margin, y);
          y += 10;

          if (diaPessoalTextos && diaPessoalTextos[diaPessoalValor]) {
            y = printWrappedText(diaPessoalTextos[diaPessoalValor], y);
          } else {
            y = printWrappedText("Descrição não disponível.", y);
          }
          y += 5;
        }
      }

      // 17-B. DIAS FAVORÁVEIS
      if (selectedSections.diasFavoraveis && dataNascimento) {
        const diasFav = calcularDiasFavoraveis(dataNascimento);
        if (diasFav) {
          y = printSectionTitle("Dias Favoráveis");
          addToIndex("Dias Favoráveis");
          y = printWrappedText(
            "Os Dias Favoráveis mostram datas específicas em que sua energia está mais alinhada com oportunidades, conquistas e boa sorte. São períodos em que as portas se abrem com mais facilidade, ideias fluem e encontros especiais podem acontecer. Não garantem resultados, mas ampliam as chances de sucesso.",
            y
          );
          y += 5;
          y = printWrappedText(diasFav, y, 14, "bold", CONFIG.colorBlack);
          y += 10;
        }
      }

      // 14. TENDÊNCIAS OCULTAS
      if (selectedSections.tendencias && nomeCliente) {
        y = printSectionTitle("Tendências Ocultas");
        addToIndex("Tendências Ocultas");
        y = printWrappedText("As Tendências Ocultas revelam talentos escondidos, capacidades adormecidas e forças internas que nem sempre são percebidas à primeira vista. Quando ativadas, essas habilidades revelam um lado profundo da sua personalidade — muitas vezes responsável por viradas importantes na vida. Esse número mostra aquilo que você descobre sobre si mesmo(a) ao longo da jornada.", y);
        y += 10;
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
      if (selectedSections.subconsciente && nomeCliente) {
        y = printSectionTitle("Subconsciente");
        addToIndex("Subconsciente");
        y = printWrappedText("O Subconsciente representa o seu mundo interno: memórias profundas, medos invisíveis, potenciais naturais e padrões automáticos. Ele mostra como você reage antes mesmo de pensar. Quanto maior o equilíbrio dessa vibração, maior sua sensação de segurança interior. Compreender o Subconsciente ajuda a transformar bloqueios e fortalecer sua identidade.", y);
        y += 10;
        const valSub = calcularSubconsciente(calcularLicoesCarmicas(nomeCliente));
        doc.setFont("helvetica", "bold");
        doc.text(`Número: ${valSub}`, CONFIG.margin, y);
        y += 10;
        y = printWrappedText(respostaSubconsciente[valSub], y);
      }

      // 16. CICLO DE VIDA
      if (selectedSections.cicloVida && dataNascimento && nomeCliente) {
        const ciclos = calcularCicloVida(dataNascimento, calcularDestino(dataNascimento));
        if (ciclos) {
          y = printSectionTitle("Ciclo de Vida");
          addToIndex("Ciclo de Vida");
          y = printWrappedText("Os Ciclos de Vida dividem sua existência em três grandes capítulos: início, maturidade e sabedoria. Cada ciclo tem uma vibração própria, indicando temas predominantes, desafios naturais e oportunidades mais fortes em cada fase. Entender esses ciclos permite caminhar em sintonia com o tempo — sem antecipar lutas nem atrasar conquistas.", y);
          y += 10;
          const headers = ["Ciclo", "Idade", "Período", "Energia"];
          const data = ciclos.map(c => ({ c: c.ciclo, i: c.idade, p: c.periodo, e: c.energia }));
          y = renderTableHelper(headers, data, y);
          y += 15;
          ciclos.forEach((c, index) => {
            y = checkPageBreak(y, 30);
            doc.setFont("helvetica", "bold");
            doc.text(`${c.ciclo} - Energia ${c.energia}`, CONFIG.margin, y);
            y += 7;
            let textoDescricao = "";
            switch (index) {
              case 0: textoDescricao = CicloVida?.[c.energia]; break;
              case 1: textoDescricao = segundoCicloVida?.[c.energia]; break;
              case 2: textoDescricao = terceiroCicloVida?.[c.energia]; break;
              default: textoDescricao = "Descrição não disponível.";
            }
            y = printWrappedText(textoDescricao || "Descrição indisponível.", y);
            y += 5;
          });
        }
      }

      // 17. DESAFIOS
      if (selectedSections.desafios && dataNascimento && nomeCliente) {
        const ciclos = calcularCicloVida(dataNascimento, calcularDestino(dataNascimento));
        const desafiosList = calcularDesafios(dataNascimento, ciclos);
        if (desafiosList?.length) {
          y = printSectionTitle("Desafios");
          addToIndex("Desafios");
          y = printWrappedText("Os Desafios representam forças que você precisa dominar ao longo da vida. São como montanhas internas: algumas pequenas, outras maiores. Eles não aparecem para travar sua jornada, mas para torná-lo(a) mais forte, mais consciente e mais preparado(a). Cada desafio superado libera um novo potencial.", y);
          y += 10;
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

      // 18. MOMENTOS DECISIVOS
      if (selectedSections.momentos && dataNascimento && nomeCliente) {
        const momentos = calcularMomentosDecisivos(dataNascimento, calcularDestino(dataNascimento));
        if (momentos) {
          y = printSectionTitle("Momentos Decisivos");
          addToIndex("Momentos Decisivos");
          y = printWrappedText("Momentos Decisivos são períodos-chave, marcados por viradas, decisões importantes ou acontecimentos que moldam sua trajetória. São momentos em que a vida dá um empurrão, coloca você diante de escolhas significativas ou abre portas que só aparecem uma vez. Quando você entende o significado vibracional desses períodos, suas escolhas ficam mais seguras e alinhadas.", y);
          y += 10;
          const data = momentos.map((m, i) => {
            const startAge = i === 0 ? 0 : momentos[i - 1].fim - new Date(dataNascimento).getFullYear();
            const endAge = m.fim === '...' ? '...' : (startAge + (m.fim - m.inicio));
            return { e: m.momento, i: `${startAge} a ${endAge} anos`, p: `${m.inicio} - ${m.fim}` };
          });
          y = renderTableHelper(["Energia", "Idade", "Período"], data, y);
          y += 15;
          momentos.forEach((m, i) => {
            y = checkPageBreak(y, 30);
            doc.setFont("helvetica", "bold");
            doc.text(`${i + 1}º Momento Decisivo - Energia ${m.momento}`, CONFIG.margin, y);
            y += 7;
            let textoDescricao = "";
            switch (i) {
              case 0: textoDescricao = momentosDecisivosTextos?.[m.momento]; break;
              case 1: textoDescricao = segundoMomentoDecisivo?.[m.momento]; break;
              case 2: textoDescricao = terceiroMomentoDecisivo?.[m.momento]; break;
              case 3: textoDescricao = quartoMomentoDecisivo?.[m.momento]; break;
              default: textoDescricao = "Descrição não disponível.";
            }
            y = printWrappedText(textoDescricao || "Descrição indisponível.", y);
            y += 5;
          });
        }
      }

      // 19. HARMONIA CONJUGAL
      // 19. HARMONIA CONJUGAL
      if (selectedSections.harmonia && nomeCliente && dataNascimento) {
        const destino = calcularDestino(dataNascimento);
        const expressao = calcularExpressao(nomeCliente);
        const missao = calcularMissao(destino, expressao);
        const harmonia = calcularHarmoniaConjugal(missao);

        let harmoniaComp = null;
        if (nomeCompanheiro && dataNascimentoCompanheiro) {
          const destinoComp = calcularDestino(dataNascimentoCompanheiro);
          const expressaoComp = calcularExpressao(nomeCompanheiro);
          const missaoComp = calcularMissao(destinoComp, expressaoComp);
          harmoniaComp = calcularHarmoniaConjugal(missaoComp);
        }

        if (harmonia) {
          y = printSectionTitle("Harmonia Conjugal");
          addToIndex("Harmonia Conjugal");
          addWatermarkHelper();
          y = printWrappedText("A Harmonia Conjugal analisa a combinação vibracional entre duas pessoas. Ela mostra como as energias se unem, onde existe fluidez, onde podem surgir conflitos e como fortalecer o relacionamento. Não é um mapa de destino, mas um manual de compreensão mútua: ajuda a enxergar o outro com mais clareza, respeito e afeto.", y);
          y += 10;

          // ===================================
          // NOVO: Entendendo os Termos
          // ===================================
          doc.setFont("helvetica", "bold");
          doc.setFontSize(14);
          doc.text("Entendendo os Termos:", CONFIG.margin, y);
          y += 8;
          
          const termos = [
            { t: "Vibra com", d: textoExplicativoHarmonia.vibra },
            { t: "Atrai", d: textoExplicativoHarmonia.atrai },
            { t: "É Oposto", d: textoExplicativoHarmonia.oposto },
            { t: "Passivo", d: textoExplicativoHarmonia.passivo }
          ];

          termos.forEach(termo => {
            y = checkPageBreak(y, 30);
            doc.setFont("helvetica", "bold");
            doc.setFontSize(11);
            doc.text(`• ${termo.t}:`, CONFIG.margin, y);
            // Pequeno recuo para a descrição
            y += 6;
            y = printWrappedText(termo.d, y, 10, "normal", CONFIG.colorBlack, CONFIG.margin + 5, 160);
            y += 5;
          });
          y += 5;


          if (harmoniaComp) {
            y = checkPageBreak(y, 100);
            // Tabela Lado a Lado (Original)
            const colWidth = 80;
            const gap = 10;
            const x1 = CONFIG.margin;
            const x2 = CONFIG.margin + colWidth + gap;

            doc.setFontSize(11);
            doc.setFont("helvetica", "bold");

            // Títulos das colunas
            doc.setTextColor(0, 0, 139); // Azul escuro
            doc.text(nomeCliente, x1 + (colWidth / 2), y, { align: "center" });
            doc.text(`Base: ${harmonia.numero}`, x1 + (colWidth / 2), y + 5, { align: "center" });

            doc.setTextColor(139, 0, 0); // Vermelho escuro
            doc.text(nomeCompanheiro, x2 + (colWidth / 2), y, { align: "center" });
            doc.text(`Base: ${harmoniaComp.numero}`, x2 + (colWidth / 2), y + 5, { align: "center" });
            y += 10;

            // ... (Rest of table logic remains, but simplified here for inserting profiles after)
            
            // FUNÇÃO CORRIGIDA: Verifica se há números em comum entre as mesmas categorias
            const temCorrespondencia = (campo, harmoniaLocal, harmoniaComparacao) => {
              if (!harmoniaComparacao) return false;

              // Se não tiver o campo em ambos objetos, retorna false
              if (!harmoniaLocal || !harmoniaLocal[campo] ||
                !harmoniaComparacao || !harmoniaComparacao[campo]) {
                return false;
              }

              // Pega os números dos dois campos (ex: "3, 9" e "3, 7, 9")
              const numerosAtuais = harmoniaLocal[campo].toString()
                .split(',')
                .map(num => num.trim());

              const numerosOutros = harmoniaComparacao[campo].toString()
                .split(',')
                .map(num => num.trim());

              // Verifica se há interseção (números em comum)
              const temInterseccao = numerosAtuais.some(num =>
                numerosOutros.includes(num)
              );

              return temInterseccao;
            };

            // Função modificada para desenhar tabela com destaque
            const drawSideTable = (data, startX, startY, isCliente) => {
               let curY = startY;
               const cellH = 7;
               const colW = colWidth / 2;
 
               // Cabeçalho da tabela
               doc.setFillColor(230, 230, 230);
               doc.setTextColor(0, 0, 0);
               doc.setFontSize(9);
               doc.setFont("helvetica", "bold");
               doc.rect(startX, curY, colW, cellH, 'F');
               doc.text("Tipo", startX + 2, curY + 5);
               doc.rect(startX + colW, curY, colW, cellH, 'F');
               doc.text("Números", startX + colW + 2, curY + 5);
               curY += cellH;
 
               doc.setFont("helvetica", "normal");
 
               // Para cada linha de dados
               data.forEach(row => {
                 // Verificar se há correspondência usando a nova lógica
                 const campo = row.campo;
                 const temCorresp = isCliente
                   ? temCorrespondencia(campo, harmonia, harmoniaComp)
                   : temCorrespondencia(campo, harmoniaComp, harmonia);
 
                 // Desenhar célula do tipo
                 doc.setDrawColor(200);
                 doc.rect(startX, curY, colW, cellH);
 
                 // Desenhar célula dos números - com destaque se houver correspondência
                 if (temCorresp) {
                   // Fundo verde para destaque
                   doc.setFillColor(232, 245, 233); // Verde claro #e8f5e9
                   doc.rect(startX + colW, curY, colW, cellH, 'F');
                   doc.setTextColor(27, 94, 32); // Verde escuro #1b5e20
                   doc.setFont("helvetica", "bold");
                 } else {
                   doc.rect(startX + colW, curY, colW, cellH);
                   doc.setTextColor(0, 0, 0);
                   doc.setFont("helvetica", "normal");
                 }
 
                 // Texto do tipo
                 doc.setTextColor(0, 0, 0);
                 doc.setFont("helvetica", "normal");
                 doc.text(String(row.label), startX + 2, curY + 5);
 
                 // Texto dos números
                 const valText = String(row.value || "");
                 const valLines = doc.splitTextToSize(valText, colW - 4);
                 doc.text(valLines, startX + colW + 2, curY + 5);
 
                 curY += cellH;
               });
 
               return curY;
             };

             // Preparar dados para as tabelas
             const dados1 = [
               { label: "Vibra com", value: harmonia.vibraCom, campo: "vibraCom" },
               { label: "Atrai", value: harmonia.atrai, campo: "atrai" },
               { label: "Oposto", value: harmonia.oposto, campo: "oposto" },
               { label: "Passivo", value: harmonia.passivo, campo: "passivo" }
             ];
 
             const dados2 = [
               { label: "Vibra com", value: harmoniaComp.vibraCom, campo: "vibraCom" },
               { label: "Atrai", value: harmoniaComp.atrai, campo: "atrai" },
               { label: "Oposto", value: harmoniaComp.oposto, campo: "oposto" },
               { label: "Passivo", value: harmoniaComp.passivo, campo: "passivo" }
             ];
 
             // Desenhar as duas tabelas
             const endY1 = drawSideTable(dados1, x1, y, true);
             const endY2 = drawSideTable(dados2, x2, y, false);
             y = Math.max(endY1, endY2) + 20;

             // ===================================
             // NOVO: Análise de Compatibilidade (Texto do Casal)
             // ===================================
             y = checkPageBreak(y, 60);

             // Define Helper to get Relationship Type based on one's list containing the other's base
             const getRelationshipType = (baseProcurada, tabelaDoOutro) => {
                if(tabelaDoOutro.vibraCom == baseProcurada) return 'vibra';
                if(String(tabelaDoOutro.atrai).split(',').map(s=>s.trim()).includes(String(baseProcurada))) return 'atrai';
                if(String(tabelaDoOutro.oposto).split(',').map(s=>s.trim()).includes(String(baseProcurada))) return 'oposto';
                if(String(tabelaDoOutro.passivo).split(',').map(s=>s.trim()).includes(String(baseProcurada))) return 'passivo';
                return null;
             };

             const tipoRelacao = getRelationshipType(harmonia.numero, harmoniaComp); // Check if Client Base (harmonia.numero) is in Partner's Table (harmoniaComp)
             
             doc.setFont("helvetica", "bold");
             doc.setFontSize(14);
             doc.setTextColor(CONFIG.colorBlack);
             doc.text("Análise da Compatibilidade:", CONFIG.margin, y);
             y += 10;

             if (tipoRelacao && textoCompatibilidade.casal[tipoRelacao]) {
                // Print Intro
                y = printWrappedText(textoCompatibilidade.casal.intro, y);
                y += 5;
                
                // Print Specific Result with Highlight
                doc.setFillColor(232, 245, 233); // Light Green box
                doc.rect(CONFIG.margin - 2, y - 2, CONFIG.pageWidth - (CONFIG.margin*2) + 4, 30, 'F'); // Approximate height, text will overlay
                
                doc.setTextColor(27, 94, 32); // Dark Green Text
                doc.setFont("helvetica", "bold");
                y = printWrappedText(textoCompatibilidade.casal[tipoRelacao], y);
                doc.setTextColor(CONFIG.colorBlack); // Reset
             } else {
                 y = printWrappedText("Não foi possível determinar uma compatibilidade padrão direta com base nos números principais. Isso indica uma relação complexa e única.", y);
             }
             y += 15;

            // ===================================
            // NOVO: Perfil Amoroso
            // ===================================
            // Perfil 1 (Cliente)
             y = checkPageBreak(y, 60);
             doc.setFont("helvetica", "bold");
             doc.setFontSize(14);
             doc.setTextColor(CONFIG.colorBlue);
             doc.text(`Perfil Amoroso: ${nomeCliente}`, CONFIG.margin, y);
             y += 10;
             
             if(perfilAmoroso[harmonia.numero]) {
                y = printWrappedText(perfilAmoroso[harmonia.numero], y);
             } else {
                y = printWrappedText("Descrição não disponível.", y);
             }
             y += 15;

             // Perfil 2 (Companheiro)
             y = checkPageBreak(y, 60);
             doc.setFont("helvetica", "bold");
             doc.setFontSize(14);
             doc.setTextColor(139, 0, 0);
             doc.text(`Perfil Amoroso: ${nomeCompanheiro}`, CONFIG.margin, y);
             y += 10;
             
             if(perfilAmoroso[harmoniaComp.numero]) {
                y = printWrappedText(perfilAmoroso[harmoniaComp.numero], y);
             } else {
                 y = printWrappedText("Descrição não disponível.", y);
             }
             y += 10;



           

          } else {
             // ===================================
             // CASO SOLTEIRO
             // ===================================
             y = checkPageBreak(y, 60);
             doc.setFont("helvetica", "bold");
             doc.setFontSize(14);
             doc.setTextColor(CONFIG.colorBlack);
             doc.text("Análise de Compatibilidade (Individual):", CONFIG.margin, y);
             y += 10;
             y = printWrappedText(textoCompatibilidade.solteiro, y);
             y += 15;

            // Código para quando não há companheiro
            doc.setFont("helvetica", "bold");
            doc.setTextColor(CONFIG.colorBlack);
            doc.text(`Número Base: ${harmonia.numero}`, CONFIG.margin, y);
            y += 10;

            const data = [
              { t: "Vibra com", v: String(harmonia.vibraCom) },
              { t: "Atrai", v: String(harmonia.atrai) },
              { t: "Oposto", v: String(harmonia.oposto) },
              { t: "Passivo", v: String(harmonia.passivo) }
            ];

            y = renderTableHelper(["Tipo", "Números"], data, y);

            // Adicionar nota informativa
            y += 5;
            doc.setFontSize(8);
            doc.setTextColor(100, 100, 100);
            doc.setFont("helvetica", "italic");
            doc.text("Nota: Para análise completa de Harmonia Conjugal, é necessário informar os dados do companheiro.", CONFIG.margin, y);
            y += 5;
          }
        }
      }
      // 20. PIRÂMIDE INVERTIDA
      if (selectedSections.piramide && nomeCliente) {
        y = printSectionTitle("Pirâmide Invertida");
        addToIndex("Pirâmide Invertida");
        y = printWrappedText("A Pirâmide Invertida representa a construção energética do nome. Cada linha mostra camadas da sua personalidade e como sua vibração se organiza de dentro para fora. O último número da pirâmide simboliza o Arcano que você manifesta quando usa essa assinatura — ele funciona como a força dominante do seu nome, revelando seu comportamento natural, seu impulso interior e o impacto que você causa no mundo. Dentro dessa pirâmide também aparecem as chamadas Sequências Negativas. Elas surgem quando a soma das letras do nome forma um padrão repetitivo que indica excesso de uma energia específica. Quando isso acontece, alguns comportamentos podem ficar distorcidos, como se uma qualidade sua fosse usada em exagero ou de forma desequilibrada. As Sequências Negativas não aparecem para 'punir', mas para alertar sobre altos e baixos emocionais, impulsos automáticos e atitudes que podem atrapalhar seus resultados. Identificá-las dentro da pirâmide ajuda a entender pontos de atenção e a ajustar sua energia para evitar desgaste, atrasos ou bloqueios. Quando você entende a sequência que está ativa, consegue transformar aquela tendência e recuperar o lado positivo do seu Arcano.", y);
        y += 10;
        doc.setFont("helvetica", "bold"); doc.setFontSize(12); doc.setTextColor(CONFIG.colorBlack);
        doc.text(`Nome: ${nomeCliente}`, CONFIG.margin, y); y += 10;
        const nomeTratado = nomeCliente.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toUpperCase();
        const pyResult = drawPyramid(nomeTratado, y);
        y = pyResult.nextY + 10;
        let pontaPiramide = null;
        if (pyResult.data.length > 0) {
          const ultimaLinha = pyResult.data[pyResult.data.length - 1];
          if (ultimaLinha.data.length === 1) pontaPiramide = ultimaLinha.data[0];
        }
        if (pontaPiramide !== null && arcanos?.[pontaPiramide]) {
          y = checkPageBreak(y, 60);
          const arcanoInfo = arcanos[pontaPiramide];
          const imgWidth = 35; const imgHeight = 55; const gap = 5;
          const textX = CONFIG.margin + imgWidth + gap;
          const textMaxWidth = CONFIG.pageWidth - CONFIG.margin - textX;
          doc.setFont("helvetica", "bold"); doc.setFontSize(14); doc.setTextColor(CONFIG.colorBlack);
          doc.text(`Arcano Cabalístico: ${pontaPiramide} - ${arcanoInfo.titulo}`, CONFIG.margin, y); y += 10;
          let imageAdded = false;
          if (arcanoInfo.image) {
            try {
              const imgBase64 = await loadImage(arcanoInfo.image);
              if (imgBase64) { doc.addImage(imgBase64, 'PNG', CONFIG.margin, y, imgWidth, imgHeight); imageAdded = true; }
            } catch (err) { console.error(err); }
          }
          let currentTextY = y; const currentX = imageAdded ? textX : CONFIG.margin; const currentMaxW = imageAdded ? textMaxWidth : 170;
          currentTextY = printWrappedText(arcanoInfo.descricao, currentTextY, 10, "normal", CONFIG.colorBlack, currentX, currentMaxW);
          const imageEndY = y + imgHeight;
          y = Math.max(currentTextY, imageAdded ? imageEndY : currentTextY);
          y += 10;
        }
        const sequencesFound = {};
        pyResult.data.forEach(row => {
          if (row.type === 'numbers') {
            const seqs = findSequences(row.data);
            seqs.forEach(index => {
              if (index % 3 === 0) {
                const num = row.data[index]; const key = `${num}${num}${num}`;
                if (sequenciaNegativa && sequenciaNegativa[key]) sequencesFound[key] = sequenciaNegativa[key];
              }
            });
          }
        });
        if (Object.keys(sequencesFound).length > 0) {
          y = checkPageBreak(y, 40); doc.setDrawColor(200, 200, 200); doc.line(CONFIG.margin, y, CONFIG.pageWidth - CONFIG.margin, y); y += 10;
          doc.setFont("helvetica", "bold"); doc.setFontSize(14); doc.setTextColor(255, 0, 0);
          doc.text("Interpretação das Sequências:", CONFIG.margin, y); y += 10;
          Object.entries(sequencesFound).forEach(([seq, desc]) => {
            y = checkPageBreak(y); doc.setFont("helvetica", "bold"); doc.setTextColor(255, 0, 0);
            doc.text(`${seq.charAt(0)} ${seq.charAt(1)} ${seq.charAt(2)} -`, CONFIG.margin, y); y += 6;
            y = printWrappedText(desc, y); y += 5;
          });
        }
      }

      // 21. NOMES SOCIAIS
      if (selectedSections.nomesSociais && nomesSociais && nomesSociais.length > 0) {
        y = printSectionTitle("Nomes Sociais");
        addToIndex("Nomes Sociais");
        y = printWrappedText(
          "O Nome Social expressa a identidade que você escolhe assumir. Ele representa o 'eu atual', " +
          "a forma como você deseja ser visto(a) e reconhecido(a). Assim como na pirâmide principal, " +
          "o último número da pirâmide do Nome Social revela o Arcano que você ativa ao usar essa " +
          "identidade — uma energia escolhida conscientemente para guiar sua vida no presente. Ao " +
          "contrário do nome de nascimento, o Nome Social não deve apresentar Sequências Negativas. " +
          "Isso acontece porque a função dele é ajustar, harmonizar e melhorar a vibração pessoal, " +
          "oferecendo clareza, força e equilíbrio para o momento atual. As Sequências Negativas " +
          "indicam excesso, distorção ou bloqueio energético, e sua presença quebraria o propósito " +
          "do Nome Social, que é trazer leveza, fluidez e proteção vibracional. Um Nome Social bem " +
          "construído sempre busca uma vibração limpa, coerente e positiva, funcionando como uma " +
          "assinatura energética que fortalece autoestima, direcionamento e posicionamento no mundo. " +
          "Quando ele é calculado corretamente — sem repetições negativas — serve como um verdadeiro " +
          "alinhamento vibracional para a nova fase da vida.",
          y
        );
        y += 10;
        const uniqueNomes = nomesSociais.filter((item, index, self) => index === self.findIndex((t) => (t.nome.toLowerCase().trim() === item.nome.toLowerCase().trim())));
        for (const [idx, social] of uniqueNomes.entries()) {
          const imgWidth = 35; const imgHeight = 55; const gap = 5;
          const textX = CONFIG.margin + imgWidth + gap; const textMaxWidth = CONFIG.pageWidth - CONFIG.margin - textX;
          y = checkPageBreak(y, 80);
          doc.setFont("helvetica", "bold"); doc.setFontSize(14); doc.setTextColor(CONFIG.colorBlack);
          doc.text(`Opção ${idx + 1}: ${social.nome}`, CONFIG.margin, y); y += 10;
          const pyResult = drawPyramid(social.nome, y); y = pyResult.nextY + 5;
          const startBlockY = y; y = checkPageBreak(y, imgHeight); const effectiveBlockY = (y === CONFIG.margin) ? y : startBlockY;
          let imageAdded = false;
          if (arcanos?.[social.arcano]?.image) {
            try {
              const imgBase64 = await loadImage(arcanos[social.arcano].image);
              if (imgBase64) { doc.addImage(imgBase64, 'PNG', CONFIG.margin, effectiveBlockY, imgWidth, imgHeight); imageAdded = true; }
            } catch (err) { console.error(err); }
          }
          let currentTextY = effectiveBlockY; const currentX = imageAdded ? textX : CONFIG.margin; const currentMaxW = imageAdded ? textMaxWidth : 170;
          doc.setFont("helvetica", "bold"); doc.setFontSize(12); doc.setTextColor(CONFIG.colorBlack);
          doc.text(`Arcano: ${social.arcano} - ${arcanos?.[social.arcano]?.titulo || ''}`, currentX, currentTextY + 5); currentTextY += 10;
          if (arcanos?.[social.arcano]) { currentTextY = printWrappedText(arcanos[social.arcano].descricao, currentTextY, 10, "normal", CONFIG.colorBlack, currentX, currentMaxW); }
          const imageEndY = effectiveBlockY + imgHeight; y = Math.max(currentTextY, imageAdded ? imageEndY : currentTextY);
          y += 10; doc.setDrawColor(200, 200, 200); doc.line(CONFIG.margin, y, CONFIG.pageWidth - CONFIG.margin, y); y += 10;
        }
      }

      // 24. ARCANOS DE TRÂNSITO
      if (selectedSections.previsoes && nomeCliente && dataNascimento) {
        const transitos = calcularArcanosTransito(nomeCliente, dataNascimento);
        if (transitos && transitos.length > 0) {
          doc.addPage(); addWatermarkHelper(); y = CONFIG.margin;
          y = printSectionTitle("Arcanos"); addToIndex("Previsões");
          y = printWrappedText("Os Arcanos de Trânsito mostram as influências que atuam sobre você em determinado período do ano. São como “climas espirituais” que afetam humor, escolhas, oportunidades e desafios. Eles não determinam o que vai acontecer, mas revelam a tendência do momento e como aproveitá-la da melhor forma.", y); y += 10;
          const col1 = CONFIG.margin; const col2 = CONFIG.margin + 30; const col3 = CONFIG.margin + 110; const rowH = 7; const tableWidth = 170;
          doc.setFontSize(9); doc.setFont("helvetica", "bold"); doc.setFillColor(240, 240, 240);
          doc.rect(col1, y, 30, rowH, 'F'); doc.text("Arcano", col1 + 2, y + 5);
          doc.rect(col2, y, 80, rowH, 'F'); doc.text("Período", col2 + 2, y + 5);
          doc.rect(col3, y, 60, rowH, 'F'); doc.text("Idade", col3 + 2, y + 5);
          y += rowH;
          let arcanoAtualEncontrado = null;
          transitos.forEach((t) => {
            if (y > CONFIG.pageHeight - CONFIG.margin) { doc.addPage(); addWatermarkHelper(); y = CONFIG.margin + 10; doc.setFont("helvetica", "bold"); doc.text("Previsões (Continuação)", CONFIG.margin, y - 5); }
            const isAtual = t.isAtual; if (isAtual) arcanoAtualEncontrado = t;
            if (isAtual) { doc.setFillColor(232, 245, 233); doc.rect(col1, y, tableWidth, rowH, 'F'); }
            doc.setFont("helvetica", isAtual ? "bold" : "normal"); doc.setTextColor(isAtual ? 0 : 0, isAtual ? 100 : 0, 0);
            doc.setDrawColor(isAtual ? 76 : 200, isAtual ? 175 : 0, isAtual ? 80 : 0);
            doc.rect(col1 + 5, y + 1, 12, 5); doc.text(t.arcano.toString(), col1 + 7, y + 4.5);
            doc.setTextColor(CONFIG.colorBlack); doc.text(`${t.inicio} - ${t.fim}`, col2 + 2, y + 5); doc.text(`${t.idadeInicio} - ${t.idadeFim} anos`, col3 + 2, y + 5);
            doc.setDrawColor(220); doc.line(col1, y + rowH, col1 + tableWidth, y + rowH); y += rowH;
          });
          y += 10;
          if (arcanoAtualEncontrado && arcanos?.[arcanoAtualEncontrado.arcano]) {
            y = checkPageBreak(y, 120); const info = arcanos[arcanoAtualEncontrado.arcano]; const startCardY = y;
            const imgWidth = 40; const imgHeight = 60; const textX = CONFIG.margin + imgWidth + 10; const textWidth = CONFIG.pageWidth - CONFIG.margin - textX;
            doc.setFillColor(76, 175, 80); doc.rect(CONFIG.margin, y, 170, 8, 'F');
            doc.setTextColor(255, 255, 255); doc.setFont("helvetica", "bold"); doc.setFontSize(11);
            doc.text(`VIBRAÇÃO DO PERÍODO ATUAL`, CONFIG.centerX, y + 5.5, { align: "center" }); y += 15;
            if (info.image) { try { const imgBase64 = await loadImage(info.image); if (imgBase64) doc.addImage(imgBase64, 'PNG', CONFIG.margin, y, imgWidth, imgHeight); } catch (e) { } }
            doc.setTextColor(CONFIG.colorBlack); doc.setFont("helvetica", "normal"); doc.setFontSize(10);
            const lines = doc.splitTextToSize(info.descricao, textWidth); doc.text(lines, textX, y + 4);
            const textHeight = lines.length * 5; const blockHeight = Math.max(imgHeight, textHeight + 10);
            doc.setDrawColor(76, 175, 80); doc.setLineWidth(0.5); doc.rect(CONFIG.margin, startCardY + 8, 170, blockHeight + 10); y += blockHeight + 20;
          }
        }
      }



      // ===============================================
      // NOVA SEÇÃO: ORIENTAÇÃO PROFISSIONAL (VOCACÃO)
      // ===============================================
      if (selectedSections.vocacao && dataNascimento) {
          const destinoVal = calcularDestino(dataNascimento);
          
          y = checkPageBreak(y, 100);
          y = printSectionTitle("Orientação Profissional");
          addToIndex("Orientação Profissional");
          
          y = printWrappedText("A Numerologia Cabalística não apenas revela traços de personalidade, mas também aponta caminhos profissionais onde seus talentos naturais podem fluir com maior facilidade e sucesso. Esta análise baseia-se na vibração do seu Número de Destino, que indica o seu propósito de realização no mundo.", y);
          y += 10;
          
          doc.setFont("helvetica", "bold");
          doc.setFontSize(14);
          doc.setTextColor(CONFIG.colorBlue);
          doc.text(`Caminho Profissional (Baseado no Destino ${destinoVal}):`, CONFIG.margin, y);
          y += 10;
          
          const vocacao = vocacaoTextos[destinoVal];
          if (vocacao) {
              doc.setFont("helvetica", "bold");
              doc.setFontSize(12);
              doc.setTextColor(CONFIG.colorBlack);
              doc.text("Aptidões Naturais:", CONFIG.margin, y);
              y += 7;
              
              y = printWrappedText(vocacao.aptidoes, y);
              y += 5;
              
              doc.setFont("helvetica", "bold");
              doc.text("Áreas de Atuação Sugeridas:", CONFIG.margin, y);
              y += 7;
              
              y = printWrappedText(vocacao.areas, y);
          } else {
              y = printWrappedText(`Descrição específica não disponível para o número ${destinoVal}. Recomenda-se analisar o Número de Expressão e Motivação para mais detalhes.`, y);
          }
          y += 15;
      }
      // 25. ASSINATURA DO PODER
      if (selectedSections.assinatura && assinatura) {
        doc.addPage(); addWatermarkHelper(); y = CONFIG.margin;
        y = printSectionTitle("Assinatura do Poder"); addToIndex("Assinatura do Poder");
        y = printWrappedText("A Assinatura do Poder é uma ferramenta vibracional que fortalece sua prosperidade, segurança pessoal e identidade. Ela precisa seguir regras específicas: deve ser legível, ascendente, incluir todos os acentos e nunca conter traços que cortem seu nome. O Arcano representado pela assinatura deve sempre ser um número positivo e alinhado ao seu propósito. Quando usada corretamente, abre caminhos, aumenta magnetismo e organiza sua energia interna.", y); y += 15;
        doc.setFont("helvetica", "bold"); doc.setFontSize(24); doc.setTextColor(CONFIG.colorBlue);
        doc.text(assinatura.assinatura, CONFIG.centerX, y, { align: "center" }); y += 15;
        const pyResult = drawPyramid(assinatura.assinatura, y); y = pyResult.nextY + 15;
        const arcanoRegente = assinatura.arcanoRegente;
        if (arcanoRegente && arcanos[arcanoRegente]) {
          const info = arcanos[arcanoRegente]; y = checkPageBreak(y, 100);
          const cardHeight = 80; const imgWidth = 45; const imgHeight = 70; const textX = CONFIG.margin + imgWidth + 10; const textWidth = CONFIG.pageWidth - CONFIG.margin - textX;
          doc.setDrawColor(218, 165, 32); doc.setLineWidth(0.5); doc.setFillColor(255, 250, 220); doc.rect(CONFIG.margin, y, 170, cardHeight, 'F'); doc.rect(CONFIG.margin, y, 170, cardHeight);
          if (info.image) { try { const imgData = await loadImage(info.image); if (imgData) doc.addImage(imgData, 'PNG', CONFIG.margin + 5, y + 5, imgWidth, imgHeight); } catch (e) { } }
          let textY = y + 10; doc.setTextColor(CONFIG.colorBlack); doc.setFont("helvetica", "bold"); doc.setFontSize(14); doc.text(`Arcano Regente ${arcanoRegente}`, textX, textY);
          textY += 7; doc.setFontSize(12); doc.setTextColor(184, 134, 11); doc.text(info.titulo.toUpperCase(), textX, textY);
          textY += 10; doc.setTextColor(CONFIG.colorBlack); doc.setFont("helvetica", "normal"); doc.setFontSize(10);
          const descLines = doc.splitTextToSize(info.descricao, textWidth - 5); doc.text(descLines, textX, textY); y += cardHeight + 10;
        }
      }

      // =================================================================
      // 26. MENSAGEM FINAL (SEMPRE GERA)
      // =================================================================
      doc.addPage();
      addWatermarkHelper();
      let yFinal = CONFIG.pageHeight / 4;

      // Título
      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);
      doc.setTextColor(CONFIG.colorBlack);
      doc.text("Uma Nota Pessoal", CONFIG.centerX, yFinal, { align: "center" });
      yFinal += 20;

      // Configuração da fonte do texto
      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);

      // O texto completo com as quebras de parágrafo (\n\n)
      const mensagem =
        `Este Mapa Numerológico foi preparado especialmente para você, ${nomeCliente || ''}, com atenção às suas vibrações, aos caminhos que se abrem diante da sua jornada.\n\n` +
        "Cada número aqui não fala de destino fechado, mas de potenciais, talentos e desafios que fazem parte da sua história única.\n\n" +
        "Que este material sirva como um espelho gentil, revelando aspectos profundos do seu ser. Agradeço de coração por confiar seu mapa às minhas mãos.\n\n" +
        "Que a leitura traga clareza, força e direção — e que você se reconheça, com verdade e acolhimento, em cada página.";

      // Imprime o texto com margens maiores (40) para ficar centralizado na folha como uma carta
      yFinal = printWrappedText(mensagem, yFinal, 12, "normal", CONFIG.colorBlack, 40, 130);

      yFinal += 10;
      doc.text("Com carinho,", 40, yFinal);

      // Assinatura Manuscrita (Simulada)
      yFinal += 25;
      doc.setFont("times", "italic");
      doc.setFontSize(30);
      doc.setTextColor(CONFIG.colorBlack);
      doc.text("Manouche Yasmin", CONFIG.centerX, yFinal, { align: "center" });

      // Cargo
      yFinal += 15;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(CONFIG.colorGray);
      doc.text("Numeróloga Cabalística", CONFIG.centerX, yFinal, { align: "center" });

      // =============================================================
      // FINALIZAÇÃO - ÍNDICE (CORREÇÃO DEFINITIVA)
      // =============================================================

      // 1. Volta para a página 4 (onde reservamos o espaço)
      doc.setPage(paginaIndiceRef);
      y = CONFIG.margin; // Reseta Y para o topo da página 4

      // 2. Título do Índice
      doc.setFont("helvetica", "bold");
      doc.setFontSize(20);
      doc.setTextColor(CONFIG.colorBlack);
      doc.text("ÍNDICE", CONFIG.centerX, y + 10, { align: "center" });

      // 3. Lógica de Espaço e Colunas
      const startYIndex = y + 25;
      const endYPage = CONFIG.pageHeight - CONFIG.margin;
      const availableHeight = endYPage - startYIndex;
      const totalItems = indiceItens.length;

      // Força 2 colunas se tiver mais de 20 itens para garantir que caiba
      const useTwoColumns = totalItems > 20;

      // Calcula quantos itens cabem por coluna
      const itemsPerCol = useTwoColumns ? Math.ceil(totalItems / 2) : totalItems;

      // Calcula espaçamento dinâmico (Altura disponível / Itens por coluna)
      let itemSpacing = availableHeight / itemsPerCol;

      // Limites de segurança para o espaçamento (nem muito grudado, nem muito espalhado)
      itemSpacing = Math.min(12, Math.max(7, itemSpacing)); // Mínimo 7mm, Máximo 12mm

      // Calcula tamanho da fonte baseado no espaçamento
      let fontSizeIndex = Math.min(12, Math.max(9, itemSpacing * 1.2));

      doc.setFontSize(fontSizeIndex);
      doc.setFont("helvetica", "normal");

      y = startYIndex;
      const midPage = CONFIG.pageWidth / 2;

      // Ordena os itens pela página
      indiceItens.sort((a, b) => a.pagina - b.pagina);

      // Desenha os itens
      indiceItens.forEach((item, index) => {
        let xStart = CONFIG.margin;
        let xEnd = useTwoColumns ? midPage - 10 : CONFIG.pageWidth - CONFIG.margin;

        // Calcula a posição Y baseada no índice dentro da coluna
        // index % itemsPerCol -> Posição relativa na coluna (0, 1, 2...)
        let currentY = startYIndex + (index % itemsPerCol) * itemSpacing;

        // Se for 2 colunas e passarmos da metade dos itens, muda o X para a direita
        if (useTwoColumns && index >= itemsPerCol) {
          xStart = midPage + 10;
          xEnd = CONFIG.pageWidth - CONFIG.margin;
          // O Y já foi calculado corretamente pelo módulo (%), não precisa ajustar
        }

        // Desenha Título
        doc.text(item.titulo, xStart, currentY);

        // Desenha Número da Página
        const pageNumStr = String(item.pagina);
        doc.setFont("helvetica", "bold");
        doc.text(pageNumStr, xEnd, currentY, { align: "right" });
        doc.setFont("helvetica", "normal");

        // Linha Pontilhada
        const titleWidth = doc.getTextWidth(item.titulo);
        const pageW = doc.getTextWidth(pageNumStr);

        // Só desenha pontinhos se tiver espaço suficiente no meio
        if (xEnd - xStart > titleWidth + pageW + 5) {
          doc.setLineWidth(0.1);
          doc.setLineDash([0.5, 1], 0); // Pontilhado
          // Ajuste fino nas posições para não colar no texto
          doc.line(xStart + titleWidth + 2, currentY, xEnd - pageW - 2, currentY);
          doc.setLineDash([]); // Volta para sólido
        }
      });

      doc.save(`Mapa_Numerologico_${nomeCliente || 'Cliente'}.pdf`);
    } catch (error) {
      console.error("Erro PDF:", error);
      alert("Erro ao gerar PDF.");
    }
  };

