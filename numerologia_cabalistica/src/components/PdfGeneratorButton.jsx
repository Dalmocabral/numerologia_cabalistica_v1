import React from "react";
import { Button, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { PictureAsPdf } from "@mui/icons-material";
import jsPDF from "jspdf";
import logo from "../assets/image/logo.png";
import { calcularMotivacao } from "./CalculoMotivacao";
import { motivacaoTextos } from "./TabelaNumerologia";
import { calcularImpressao } from "./CalculoImpressao";
import { calcularExpressao } from "./CalculoExpressao";
import { calcularDestino } from "./CalculoDestino";
import { calcularMissao } from "./CalculoMissao";
import { calcularDividasCarmicas } from "./CalculoDividasCarmicas";
import { calcularLicoesCarmicas } from "./CalculoLicoesCarmicas";
import { tabelaNumeros, tabelaAcentos, impressaoTextos, expressaoTextos, destinoTextos, missaoTextos, dividasCarmicasTextos, licoesCarmicasTexto } from "./TabelaNumerologia";

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

  // Função para renderizar o nome no PDF
  const renderNomeNumerologia = (doc, nome, startY) => {
    if (!nome) return startY;

    const nomeFormatado = nome.toUpperCase().replace(/\s/g, '');
    const letras = nomeFormatado.split('');
    const espacamento = 7; // Espaço entre letras

    // Centralizar o nome
    const totalWidth = (letras.length * espacamento) - 5;
    const startX = (doc.internal.pageSize.width - totalWidth) / 2;

    // Renderizar letras
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

  const generatePDF = async () => {
    const doc = new jsPDF();

    // Configurações iniciais
    doc.setFont("helvetica", "bold");

    try {
      // PRIMEIRA PÁGINA - CAPA
      doc.addImage(logo, 'PNG', 75, 20, 60, 60);
      doc.setFontSize(24);
      doc.text("MAPA NUMEROLOGICO CABALISTICO", 105, 100, { align: "center" });
      doc.setFontSize(16);
      doc.text("Orientadora: Manouche Yasmin", 105, 130, { align: "center" });
      const dataAtual = new Date().toLocaleDateString('pt-BR');
      doc.text(`Data: ${dataAtual}`, 105, 140, { align: "center" });

      // SEGUNDA PÁGINA - DADOS DO CLIENTE
      doc.addPage();
      const pageHeight = doc.internal.pageSize.height;
      const startY = pageHeight / 2 - 30;
      doc.setFontSize(20);
      doc.text("DADOS DO CLIENTE", 105, startY, { align: "center" });
      doc.setFontSize(16);
      doc.text(`Cliente: ${nomeCliente || "Nome não informado"}`, 105, startY + 20, { align: "center" });
      const dataFormatada = dataNascimento
        ? new Date(dataNascimento).toLocaleDateString('pt-BR')
        : "Data não informada";
      doc.text(`Data de Nascimento: ${dataFormatada}`, 105, startY + 30, { align: "center" });

      // TERCEIRA PÁGINA - NUMEROLOGIA CABALÍSTICA
      doc.addPage();
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
        doc.text(linha, 20, yPosition);
        yPosition += 7;
      });

      // QUARTA PÁGINA - NOME E MOTIVAÇÃO
      if (nomeCliente) {
        doc.addPage();

        // Renderiza o nome numerológico
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
          doc.text(linha, 20, yPosition);
          yPosition += 7;
        });

        // Número da Motivação
        yPosition += 10;
        doc.setFont("helvetica", "bold");
        doc.text("Número da Motivação:", 20, yPosition);
        doc.setFont("helvetica", "normal");
        const numeroMotivacao = calcularMotivacao(nomeCliente);
        doc.text(numeroMotivacao.toString(), 70, yPosition);
        yPosition += 15;

        // Definição com paginação inteligente
        doc.setFont("helvetica", "bold");
        doc.text("Definição:", 20, yPosition);
        yPosition += 7;

        if (motivacaoTextos[numeroMotivacao]) {
          doc.setFont("helvetica", "normal");
          const pageHeight = doc.internal.pageSize.height - 20;
          const lines = doc.splitTextToSize(motivacaoTextos[numeroMotivacao], 170);

          for (let i = 0; i < lines.length; i++) {
            if (yPosition > pageHeight) {
              doc.addPage();
              yPosition = 20;
            }
            doc.text(lines[i], 20, yPosition);
            yPosition += 7;
          }
        }
      }

      // QUINTA PÁGINA - IMPRESSÃO
      if (nomeCliente) {
        doc.addPage();

        // Renderiza o nome numerológico (opcional)
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
          doc.text(linha, 20, yPosition);
          yPosition += 7;
        });

        // Número da Impressão
        yPosition += 10;
        doc.setFont("helvetica", "bold");
        doc.text("Número da Impressão:", 20, yPosition);
        doc.setFont("helvetica", "normal");
        const numeroImpressao = calcularImpressao(nomeCliente);
        doc.text(numeroImpressao.toString(), 70, yPosition);
        yPosition += 15;

        // Definição com paginação inteligente
        doc.setFont("helvetica", "bold");
        doc.text("Definição:", 20, yPosition);
        yPosition += 7;

        if (impressaoTextos && impressaoTextos[numeroImpressao]) {
          doc.setFont("helvetica", "normal");
          const pageHeight = doc.internal.pageSize.height - 20;
          const lines = doc.splitTextToSize(impressaoTextos[numeroImpressao], 170);

          for (let i = 0; i < lines.length; i++) {
            if (yPosition > pageHeight) {
              doc.addPage();
              yPosition = 20;
            }
            doc.text(lines[i], 20, yPosition);
            yPosition += 7;
          }
        }
      }

      // SEXTA PÁGINA - EXPRESSÃO
      if (nomeCliente) {
        doc.addPage();

        // Renderiza o nome numerológico (opcional)
        yPosition = renderNomeNumerologia(doc, nomeCliente, 30);

        // Título Expressão
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.setTextColor('#000000');
        doc.text("Expressão", 105, yPosition, { align: "center" });
        yPosition += 15;

        // Texto introdutório sobre expressão
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        const introTextExpressao = [
          "A Expressão na Numerologia Cabalística revela seu potencial e talentos naturais,",
          "o que você veio realizar nesta vida. Representa a soma de todas as letras",
          "do seu nome completo, mostrando suas habilidades e desafios cármicos."
        ];

        introTextExpressao.forEach(linha => {
          doc.text(linha, 20, yPosition);
          yPosition += 7;
        });

        // Número da Expressão
        yPosition += 10;
        doc.setFont("helvetica", "bold");
        doc.text("Número da Expressão:", 20, yPosition);
        doc.setFont("helvetica", "normal");
        const numeroExpressao = calcularExpressao(nomeCliente);
        doc.text(numeroExpressao.toString(), 75, yPosition);
        yPosition += 15;

        // Definição com paginação inteligente
        doc.setFont("helvetica", "bold");
        doc.text("Definição:", 20, yPosition);
        yPosition += 7;

        if (expressaoTextos && expressaoTextos[numeroExpressao]) {
          doc.setFont("helvetica", "normal");
          const pageHeight = doc.internal.pageSize.height - 20;
          const lines = doc.splitTextToSize(expressaoTextos[numeroExpressao], 170);

          for (let i = 0; i < lines.length; i++) {
            if (yPosition > pageHeight) {
              doc.addPage();
              yPosition = 20;
            }
            doc.text(lines[i], 20, yPosition);
            yPosition += 7;
          }
        }
      }

      // SÉTIMA PÁGINA - DESTINO
      if (dataNascimento) {
        doc.addPage();

        // Título Destino
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.setTextColor('#000000');
        doc.text("Destino", 105, 30, { align: "center" });
        let yPosition = 50;

        // Texto introdutório sobre destino
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        const introTextDestino = [
          "O Destino na Numerologia Cabalística representa seu caminho de vida,",
          "a lição cármica principal que você veio aprender nesta existência.",
          "É calculado através da soma de todos os dígitos da sua data de nascimento,",
          "revelando seu propósito espiritual e desafios evolutivos."
        ];

        introTextDestino.forEach(linha => {
          doc.text(linha, 20, yPosition);
          yPosition += 7;
        });

        // Data de Nascimento formatada
        yPosition += 10;
        doc.setFont("helvetica", "bold");
        doc.text("Data de Nascimento:", 20, yPosition);
        doc.setFont("helvetica", "normal");
        const dataFormatada = new Date(dataNascimento).toLocaleDateString('pt-BR');
        doc.text(dataFormatada, 70, yPosition);

        // Número do Destino
        yPosition += 15;
        doc.setFont("helvetica", "bold");
        doc.text("Número do Destino:", 20, yPosition);
        doc.setFont("helvetica", "normal");
        const numeroDestino = calcularDestino(dataNascimento);
        doc.text(numeroDestino.toString(), 70, yPosition);
        yPosition += 15;

        // Definição com paginação inteligente
        doc.setFont("helvetica", "bold");
        doc.text("Definição:", 20, yPosition);
        yPosition += 7;

        if (destinoTextos && destinoTextos[numeroDestino]) {
          doc.setFont("helvetica", "normal");
          const pageHeight = doc.internal.pageSize.height - 20;
          const lines = doc.splitTextToSize(destinoTextos[numeroDestino], 170);

          for (let i = 0; i < lines.length; i++) {
            if (yPosition > pageHeight) {
              doc.addPage();
              yPosition = 20;
            }
            doc.text(lines[i], 20, yPosition);
            yPosition += 7;
          }
        }
      }

      // OITAVA PÁGINA - MISSÃO
      if (nomeCliente && dataNascimento) {
        doc.addPage();

        // Título Missão
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.setTextColor('#000000');
        doc.text("Missão", 105, 30, { align: "center" });
        let yPosition = 50;

        // Texto introdutório sobre missão
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        const introTextMissao = [
          "A Missão na Numerologia Cabalística representa o propósito mais elevado",
          "da sua existência, combinando seus talentos (Expressão) com seu caminho",
          "de vida (Destino). Revela como você pode contribuir com o mundo de forma",
          "única, alinhando seus dons naturais com suas lições cármicas."
        ];

        introTextMissao.forEach(linha => {
          doc.text(linha, 20, yPosition);
          yPosition += 7;
        });

        // Componentes da Missão
        yPosition += 10;
        doc.setFont("helvetica", "bold");
        doc.text("Componentes da Missão:", 20, yPosition);
        yPosition += 10;

        // Expressão
        doc.setFont("helvetica", "normal");
        const numeroExpressao = calcularExpressao(nomeCliente);
        doc.text(`Expressão =: ${numeroExpressao}`, 30, yPosition);
        yPosition += 7;

        // Destino
        const numeroDestino = calcularDestino(dataNascimento);
        doc.text(`Destino =: ${numeroDestino}`, 30, yPosition);
        yPosition += 10;

        // Número da Missão
        doc.setFont("helvetica", "bold");
        doc.text("Número da Missão:", 20, yPosition);
        doc.setFont("helvetica", "normal");
        const numeroMissao = calcularMissao(nomeCliente, dataNascimento);
        doc.text(numeroMissao.toString(), 70, yPosition);
        yPosition += 15;

        // Definição com paginação inteligente
        doc.setFont("helvetica", "bold");
        doc.text("Definição:", 20, yPosition);
        yPosition += 7;

        if (missaoTextos && missaoTextos[numeroMissao]) {
          doc.setFont("helvetica", "normal");
          const pageHeight = doc.internal.pageSize.height - 20;
          const lines = doc.splitTextToSize(missaoTextos[numeroMissao], 170);

          for (let i = 0; i < lines.length; i++) {
            if (yPosition > pageHeight) {
              doc.addPage();
              yPosition = 20;
            }
            doc.text(lines[i], 20, yPosition);
            yPosition += 7;
          }
        }
      }
      // NONA PÁGINA - DÍVIDAS CÁRMICAS
      if (nomeCliente && dataNascimento) {
        doc.addPage();

        // Título Dívidas Cármicas
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.setTextColor('#000000');
        doc.text("Dívidas Cármicas", 105, 30, { align: "center" });
        let yPosition = 50;

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
          doc.text(linha, 20, yPosition);
          yPosition += 7;
        });

        // Cálculo das dívidas cármicas
        doc.setFont("helvetica", "bold");
        doc.text("Dívidas Identificadas:", 20, yPosition);
        yPosition += 10;

        doc.setFont("helvetica", "normal");
        const dividas = calcularDividasCarmicas(
          dataNascimento,
          calcularExpressao(nomeCliente),
          calcularDestino(dataNascimento),
          calcularMotivacao(nomeCliente) // Adicione esta função se necessário
        );

        doc.text(dividas === 'Nenhuma' ? "Nenhuma dívida cármica identificada." : `Números: ${dividas}`, 30, yPosition);
        yPosition += 15;

        // Definição das dívidas (se houver)
        if (dividas !== 'Nenhuma') {
          doc.setFont("helvetica", "bold");
          doc.text("Significados:", 20, yPosition);
          yPosition += 10;

          const pageHeight = doc.internal.pageSize.height - 20;
          const dividasArray = dividas.split(', ');

          dividasArray.forEach(numero => {
            if (dividasCarmicasTextos && dividasCarmicasTextos[numero]) {
              // Número da dívida cármica
              doc.setFont("helvetica", "bold");
              doc.setFontSize(14);
              doc.text(`Número ${numero}:`, 20, yPosition);

              // Texto da dívida cármica
              doc.setFont("helvetica", "normal");
              doc.setFontSize(12);
              const lines = doc.splitTextToSize(dividasCarmicasTextos[numero], 170);

              yPosition += 7;
              for (let i = 0; i < lines.length; i++) {
                if (yPosition > pageHeight) {
                  doc.addPage();
                  yPosition = 20;
                }
                doc.text(lines[i], 25, yPosition);
                yPosition += 7;
              }
              yPosition += 10; // Espaço entre dívidas
            }
          });
        }
      }
      // DÉCIMA PÁGINA - LIÇÕES CÁRMICAS (LAYOUT ATUALIZADO)
      if (nomeCliente) {
        doc.addPage();

        // Título Lições Cármicas
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.setTextColor('#000000');
        doc.text("Lições Cármicas", 105, 30, { align: "center" });
        let yPosition = 50;

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
          doc.text(linha, 20, yPosition);
          yPosition += 7;
        });

        // Cálculo das lições
        doc.setFont("helvetica", "bold");
        doc.text("Lições Identificadas:", 20, yPosition);
        yPosition += 10;

        doc.setFont("helvetica", "normal");
        const licoes = calcularLicoesCarmicas(nomeCliente);

        // Formatação dos números identificados
        if (licoes === 'Nenhuma') {
          doc.text("Nenhuma lição cármica identificada.", 30, yPosition);
          yPosition += 10;
        } else {
          doc.text(`Números: ${licoes}`, 30, yPosition);
          yPosition += 15;

          // Definição das lições com novo layout
          doc.setFont("helvetica", "bold");
          doc.text("Significados:", 20, yPosition);
          yPosition += 10;

          const pageHeight = doc.internal.pageSize.height - 20;
          const licoesArray = licoes.split(', ');

          licoesArray.forEach(numero => {
            if (licoesCarmicasTexto && licoesCarmicasTexto[numero]) {
              // Título da lição (ex: "Lições 6 - Responsabilidade")
              doc.setFont("helvetica", "bold");
              doc.text(`Lições ${numero}:`, 20, yPosition);
              yPosition += 7;

              // Texto explicativo
              doc.setFont("helvetica", "normal");
              const lines = doc.splitTextToSize(licoesCarmicasTexto[numero], 170);

              for (let i = 0; i < lines.length; i++) {
                if (yPosition > pageHeight) {
                  doc.addPage();
                  yPosition = 20;
                }
                doc.text(lines[i], 25, yPosition, { maxWidth: 165 });
                yPosition += 7;
              }
              yPosition += 10; // Espaço maior entre lições
            }
          });
        }
      }








      doc.save(`Mapa_Numerologico_${nomeCliente || ''}.pdf`);
    } catch (error) {
      console.error("Erro ao gerar PDF:", error);
      alert("Ocorreu um erro ao gerar o PDF. Por favor, tente novamente.");
    }
  };

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