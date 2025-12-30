import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, Chip, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { addDoc, collection, deleteDoc, doc, getDocs, query } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../services/firebase';

interface License {
  id: string;
  email: string;
  chave: string;
  status: string;
}

const AdminPanel = () => {
  const [email, setEmail] = useState('');
  const [chave, setChave] = useState('');
  const [licenses, setLicenses] = useState<License[]>([]);
  const [loading, setLoading] = useState(false);
  const [masterKey, setMasterKey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Hardcoded simple protection
  const MASTER_PASSWORD = "admin"; 

  const handleLogin = () => {
    if (masterKey === MASTER_PASSWORD) {
      setIsAuthenticated(true);
      fetchLicenses();
    } else {
      alert("Senha incorreta");
    }
  };

  const fetchLicenses = async () => {
    try {
      setLoading(true);
      const q = query(collection(db, "licencas"));
      const querySnapshot = await getDocs(q);
      const list: License[] = [];
      querySnapshot.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() } as License);
      });
      setLicenses(list);
    } catch (error) {
      console.error("Erro ao buscar licenças:", error);
      alert("Erro ao buscar dados. Verifique se o Banco de Dados foi criado no Console do Firebase.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddLicense = async () => {
    if (!email || !chave) return;
    try {
      setLoading(true);
      await addDoc(collection(db, "licencas"), {
        email,
        chave,
        status: 'ativo',
        createdAt: new Date()
      });
      setEmail('');
      setChave('');
      fetchLicenses();
      alert("Licença criada com sucesso!");
    } catch (error: any) {
      console.error("Erro:", error);
      alert("Erro ao criar licença: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja apagar esta licença?")) return;
    try {
      await deleteDoc(doc(db, "licencas", id));
      fetchLicenses();
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  // Generate a random key
  const generateKey = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 4; i++) result += chars.charAt(Math.floor(Math.random() * chars.length));
    result += '-';
    for (let i = 0; i < 4; i++) result += chars.charAt(Math.floor(Math.random() * chars.length));
    setChave(result);
  };

  if (!isAuthenticated) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 10, gap: 2 }}>
        <Typography variant="h4">Admin Login</Typography>
        <TextField 
          type="password" 
          label="Senha Mestra" 
          value={masterKey} 
          onChange={(e) => setMasterKey(e.target.value)} 
        />
        <Button variant="contained" onClick={handleLogin}>Entrar</Button>
        <Typography variant="caption" color="textSecondary">Senha: admin</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4, maxWidth: 800, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom>Gerenciador de Licenças</Typography>
      
      <Paper sx={{ p: 2, mb: 4 }}>
        <Typography variant="h6" gutterBottom>Nova Licença</Typography>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <TextField 
            label="Email do Cliente" 
            fullWidth 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <TextField 
            label="Chave" 
            value={chave} 
            onChange={(e) => setChave(e.target.value)} 
          />
          <Button variant="outlined" onClick={generateKey}>Gerar</Button>
        </Box>
        <Button 
          variant="contained" 
          fullWidth 
          onClick={handleAddLicense} 
          disabled={loading}
        >
          {loading ? "Processando..." : "Criar Licença"}
        </Button>
      </Paper>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>Chave</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {licenses.map((lic) => (
              <TableRow key={lic.id}>
                <TableCell>{lic.email}</TableCell>
                <TableCell>{lic.chave}</TableCell>
                <TableCell>
                  <Chip label={lic.status} color="success" size="small" />
                </TableCell>
                <TableCell>
                  <IconButton color="error" onClick={() => handleDelete(lic.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AdminPanel;
