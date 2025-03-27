import React from "react";
import { Button } from "@mui/material";
import { PictureAsPdf } from "@mui/icons-material";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import logo from "../assets/image/logo.png";
import { calcularMotivacao } from "./CalculoMotivacao";
import { motivacaoTextos } from "./TabelaNumerologia";

const PdfGeneratorButton = ({ nomeCliente, dataNascimento }) => {
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
      
      // TERCEIRA PÁGINA - SOBRE NUMEROLOGIA CABALÍSTICA
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
      
      // QUARTA PÁGINA - MOTIVAÇÃO
     // QUARTA PÁGINA - MOTIVAÇÃO
     if (nomeCliente) {
      doc.addPage();
      doc.setFontSize(22);
      doc.text("Motivação", 105, 30, { align: "center" });
      
      // Calcula o número da motivação
      const numeroMotivacao = calcularMotivacao(nomeCliente);
      
      // Texto introdutório sobre motivação
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      const introText = [
        "A Motivação na Numerologia Cabalística revela seus desejos mais profundos,",
        "aquilo que verdadeiramente impulsiona suas ações e decisões. Representa",
        "sua essência interior, mostrando o que você realmente busca na vida."
      ];
      
      let yPosition = 50;
      introText.forEach(linha => {
        doc.text(linha, 20, yPosition);
        yPosition += 7;
      });
      
      // Número da Motivação
      yPosition += 10;
      doc.setFont("helvetica", "bold");
      doc.text("Número da Motivação:", 20, yPosition);
      doc.setFont("helvetica", "normal");
      doc.text(numeroMotivacao.toString(), 70, yPosition);
      
      // Definição com paginação melhorada
      yPosition += 15;
      doc.setFont("helvetica", "bold");
      doc.text("Definição:", 20, yPosition);
      yPosition += 7;
      
      if (motivacaoTextos[numeroMotivacao]) {
        doc.setFont("helvetica", "normal");
        
        // Função para adicionar texto com paginação inteligente
        const addTextWithPagination = (text, doc, startX, startY) => {
          const pageHeight = doc.internal.pageSize.height - 20; // Margem inferior
          let currentY = startY;
          const lines = doc.splitTextToSize(text, 170);
          
          for (let i = 0; i < lines.length; i++) {
            if (currentY > pageHeight) {
              doc.addPage();
              currentY = 20; // Reset Y position for new page
            }
            doc.text(lines[i], startX, currentY);
            currentY += 7;
          }
          
          return currentY;
        };
        
        addTextWithPagination(motivacaoTextos[numeroMotivacao], doc, 20, yPosition);
      }
    }


      
      

      doc.save(`Mapa_Numerologico_${nomeCliente || ''}.pdf`);
    } catch (error) {
      console.error("Erro ao gerar PDF:", error);
      alert("Ocorreu um erro ao gerar o PDF. Por favor, tente novamente.");
    }
  };

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