import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Typography,
  Box,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  InputAdornment,
  TableSortLabel
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';

const DialogCarregarDados = ({ open, onClose, onLoadProfile }) => {
  const [profiles, setProfiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [order, setOrder] = useState('desc');
  const [orderBy, setOrderBy] = useState('updatedAt');

  const fetchProfiles = async () => {
    const db = (window as any).electronDB;
    if (db) {
      const data = await db.getProfiles();
      setProfiles(data);
    }
  };

  useEffect(() => {
    if (open) {
      fetchProfiles();
      setSearchTerm('');
      setOrder('desc');
      setOrderBy('updatedAt');
    }
  }, [open]);

  const handleDelete = async (nomeCliente) => {
    const db = (window as any).electronDB;
    if (db && window.confirm(`Tem certeza que deseja apagar os dados de ${nomeCliente}?`)) {
      await db.deleteProfile(nomeCliente);
      fetchProfiles();
    }
  };

  const handleLoad = (profile) => {
    onLoadProfile(profile);
    onClose();
  };

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const filteredProfiles = profiles.filter(profile => {
    const term = searchTerm.toLowerCase();
    const matchName = profile.nomeCliente?.toLowerCase().includes(term);
    const formattedDate = profile.dataNascimento?.split('-').reverse().join('/') || '';
    const matchDate = formattedDate.includes(term);
    return matchName || matchDate;
  });

  const sortedProfiles = [...filteredProfiles].sort((a, b) => {
    let aValue = a[orderBy] || '';
    let bValue = b[orderBy] || '';

    if (orderBy === 'updatedAt') {
      aValue = new Date(a.updatedAt).getTime();
      bValue = new Date(b.updatedAt).getTime();
    }

    if (bValue < aValue) {
      return order === 'asc' ? -1 : 1;
    }
    if (bValue > aValue) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  });

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Meus Clientes Salvos</DialogTitle>
      <DialogContent dividers>
        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Pesquisar por nome ou data de nascimento..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {profiles.length === 0 ? (
          <Typography variant="body1" color="textSecondary" align="center" sx={{ mt: 4 }}>
            Nenhum cliente salvo ainda.
          </Typography>
        ) : filteredProfiles.length === 0 ? (
          <Typography variant="body1" color="textSecondary" align="center" sx={{ mt: 4 }}>
            Nenhum cliente encontrado para a pesquisa.
          </Typography>
        ) : (
          <TableContainer component={Paper} variant="outlined">
            <Table size="small" stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell sortDirection={orderBy === 'nomeCliente' ? (order as 'asc'|'desc') : false}>
                    <TableSortLabel
                      active={orderBy === 'nomeCliente'}
                      direction={orderBy === 'nomeCliente' ? (order as 'asc'|'desc') : 'asc'}
                      onClick={() => handleRequestSort('nomeCliente')}
                    >
                      <strong>Nome do Cliente</strong>
                    </TableSortLabel>
                  </TableCell>
                  <TableCell sortDirection={orderBy === 'dataNascimento' ? (order as 'asc'|'desc') : false}>
                    <TableSortLabel
                      active={orderBy === 'dataNascimento'}
                      direction={orderBy === 'dataNascimento' ? (order as 'asc'|'desc') : 'asc'}
                      onClick={() => handleRequestSort('dataNascimento')}
                    >
                      <strong>Data de Nascimento</strong>
                    </TableSortLabel>
                  </TableCell>
                  <TableCell sortDirection={orderBy === 'updatedAt' ? (order as 'asc'|'desc') : false}>
                    <TableSortLabel
                      active={orderBy === 'updatedAt'}
                      direction={orderBy === 'updatedAt' ? (order as 'asc'|'desc') : 'asc'}
                      onClick={() => handleRequestSort('updatedAt')}
                    >
                      <strong>Atualizado Em</strong>
                    </TableSortLabel>
                  </TableCell>
                  <TableCell align="center"><strong>Ações</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sortedProfiles.map((profile, index) => (
                  <TableRow key={index} hover>
                    <TableCell 
                      sx={{ cursor: 'pointer' }} 
                      onClick={() => handleLoad(profile)}
                    >
                      {profile.nomeCliente}
                    </TableCell>
                    <TableCell 
                      sx={{ cursor: 'pointer' }} 
                      onClick={() => handleLoad(profile)}
                    >
                      {profile.dataNascimento?.split('-').reverse().join('/') || ''}
                    </TableCell>
                    <TableCell 
                      sx={{ cursor: 'pointer' }} 
                      onClick={() => handleLoad(profile)}
                    >
                      {new Date(profile.updatedAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell align="center">
                      <IconButton 
                        size="small" 
                        color="error" 
                        onClick={() => handleDelete(profile.nomeCliente)}
                        title="Apagar"
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogCarregarDados;

