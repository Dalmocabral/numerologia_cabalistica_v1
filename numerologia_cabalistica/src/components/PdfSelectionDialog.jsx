import React, { useState, useEffect } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, FormControlLabel, Checkbox, FormGroup, Grid
} from '@mui/material';

const SECTIONS = [
  { id: 'motivacao', label: 'Motivação' },
  { id: 'impressao', label: 'Impressão' },
  { id: 'expressao', label: 'Expressão' },
  { id: 'destino', label: 'Destino' },
  { id: 'diaNascimento', label: 'Dia do Nascimento' },
  { id: 'missao', label: 'Missão' },
  { id: 'dividas', label: 'Dívidas Cármicas' },
  { id: 'licoes', label: 'Lições Cármicas' },
  { id: 'anoPessoal', label: 'Ano Pessoal' },
  { id: 'mesPessoal', label: 'Mês Pessoal' },
  { id: 'diaPessoal', label: 'Dia Pessoal' },
  { id: 'diasFavoraveis', label: 'Dias Favoráveis' },
  { id: 'tendencias', label: 'Tendências Ocultas' },
  { id: 'subconsciente', label: 'Subconsciente' },
  { id: 'cicloVida', label: 'Ciclo de Vida' },
  { id: 'desafios', label: 'Desafios' },
  { id: 'momentos', label: 'Momentos Decisivos' },
  { id: 'harmonia', label: 'Harmonia Conjugal' },
  { id: 'piramide', label: 'Pirâmide Invertida' },
  { id: 'nomesSociais', label: 'Nomes Sociais' },
  { id: 'previsoes', label: 'Arcanos de Trânsito' },
  { id: 'assinatura', label: 'Assinatura do Poder' },
];

const PdfSelectionDialog = ({ open, onClose, onConfirm }) => {
  const [selected, setSelected] = useState({});
  const [allSelected, setAllSelected] = useState(true);

  useEffect(() => {
    if (open) {
      // Inicializa tudo como selecionado
      const initial = {};
      SECTIONS.forEach(s => initial[s.id] = true);
      setSelected(initial);
      setAllSelected(true);
    }
  }, [open]);

  const handleToggleAll = (event) => {
    const isChecked = event.target.checked;
    setAllSelected(isChecked);
    const newSelected = {};
    SECTIONS.forEach(s => newSelected[s.id] = isChecked);
    setSelected(newSelected);
  };

  const handleToggle = (id) => {
    const newSelected = { ...selected, [id]: !selected[id] };
    setSelected(newSelected);
    
    // Verifica se todos estão marcados
    const all = SECTIONS.every(s => newSelected[s.id]);
    setAllSelected(all);
  };

  const handleGenerate = () => {
    onConfirm(selected);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Selecione o Conteúdo do PDF</DialogTitle>
      <DialogContent>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox 
                checked={allSelected} 
                onChange={handleToggleAll} 
                color="primary"
              />
            }
            label="Selecionar Todos"
            sx={{ borderBottom: '1px solid #eee', mb: 1, pb: 1 }}
          />
          
          <Grid container>
            {SECTIONS.map((section) => (
              <Grid item xs={6} key={section.id}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={!!selected[section.id]}
                      onChange={() => handleToggle(section.id)}
                      size="small"
                    />
                  }
                  label={section.label}
                />
              </Grid>
            ))}
          </Grid>
        </FormGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={handleGenerate} variant="contained" color="primary">
          Gerar PDF
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PdfSelectionDialog;