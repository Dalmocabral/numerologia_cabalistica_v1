import { PictureAsPdf } from "@mui/icons-material";
import { Button, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useState } from "react";
import PdfSelectionDialog from "./PdfSelectionDialog";
import { generatePDF } from "../services/PdfService";

const PdfGeneratorButton = ({
  nomeCliente,
  dataNascimento,
  asListItem,
  darkMode,
  nomesSociais = [],
  mesInteresse,
  diaInteresse,
  assinatura,
  nomeCompanheiro,
  dataNascimentoCompanheiro
}) => {

  const [openSelection, setOpenSelection] = useState(false);

  const handleGenerate = async (selectedSections) => {
    // Collect all data to pass to service
    const data = {
        nomeCliente,
        dataNascimento,
        nomesSociais,
        mesInteresse,
        diaInteresse,
        assinatura,
        nomeCompanheiro,
        dataNascimentoCompanheiro
    };

    try {
        await generatePDF(data, selectedSections);
    } catch (error) {
        console.error("Erro ao gerar PDF:", error);
        alert("Ocorreu um erro ao gerar o PDF. Verifique o console.");
    }
  };

  if (asListItem) {
      return (
        <>
            <ListItem button onClick={() => setOpenSelection(true)}>
                <ListItemIcon><PictureAsPdf sx={{ color: darkMode ? '#ffffff' : '#000000' }} /></ListItemIcon>
                <ListItemText primary="Gerar PDF" />
            </ListItem>
            <PdfSelectionDialog
                open={openSelection}
                onClose={() => setOpenSelection(false)}
                onConfirm={handleGenerate}
            />
        </>
      );
  }

  return (
    <>
      <Button variant="contained" onClick={() => setOpenSelection(true)} fullWidth sx={{ mt: 2 }}>
        Gerar PDF
      </Button>
      <PdfSelectionDialog
        open={openSelection}
        onClose={() => setOpenSelection(false)}
        onConfirm={handleGenerate}
      />
    </>
  );
};

export default PdfGeneratorButton;