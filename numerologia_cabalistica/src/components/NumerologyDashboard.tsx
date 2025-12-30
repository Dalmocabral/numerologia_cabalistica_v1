
import { Box, Button, Divider, Paper, Tab, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Tabs, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import NomeNumerologia from '../components/NomeNumerologia';
import PiramideInvertida from "../components/PiramideInvertida";
import TabelaArcanosTransito from '../components/TabelaArcanosTransito';
import { arcanos, vocacaoTextos } from '../utils/TabelaNumerologia';

// Estilos personalizados para as células da tabela (Duplicated for now, will be moved to shared styles later)
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.grey[500],
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

// Estilos personalizados para as linhas da tabela
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const NumerologyDashboard = ({ 
    nome, 
    dataNascimento, 
    profile, 
    partnerProfile,
    harmonicos, 
    piramide, 
    nomeSocial, 
    nomesSociais, 
    assinatura, 
    nomeCompanheiro,
    onSaveNomeSocial, 
    onRemoverNomeSocial, 
    onSalvarAssinatura,
    setAssinatura // passed to remove signature
}) => {
    
    // Local state for tabs
    const [tabIndex, setTabIndex] = useState(0);
    const handleTabChange = (event, newIndex) => {
        setTabIndex(newIndex);
    };

    const formatarData = (data) => {
        if (!data) return '';
        const [ano, mes, dia] = data.split('-');
        return `${dia}/${mes}/${ano}`;
    };

    // Helper for harmony comparison (re-implemented local helper)
    const isComparacaoHarmonia = (campo, harmoniaAtual, harmoniaOutra) => {
        if (!harmoniaOutra) return false;
        if (!harmoniaAtual || !harmoniaAtual[campo] || !harmoniaOutra || !harmoniaOutra[campo]) return false;

        const numerosAtuais = harmoniaAtual[campo].toString().split(',').map(num => num.trim());
        const numerosOutros = harmoniaOutra[campo].toString().split(',').map(num => num.trim());

        return numerosAtuais.some(num => numerosOutros.includes(num));
    };

    if (!profile) return null;

    return (
        <Box id="pdf-nome-numerologia" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 4 }}>
            <NomeNumerologia nome={nome} />
            <Divider sx={{ width: '100%', my: 2 }} />
            
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}>
                {/* Core Numbers */}
                <Box sx={{ display: "flex", gap: 2 }}>
                    <TextField label="Motivação" value={profile.motivacao} disabled fullWidth sx={{ mt: 2 }} />
                    <TextField label="Impressão" value={profile.impressao} disabled fullWidth sx={{ mt: 2 }} />
                    <TextField label="Expressão" value={profile.expressao} disabled fullWidth sx={{ mt: 2 }} />
                    <TextField label="Data Nascimento" value={formatarData(dataNascimento)} disabled fullWidth sx={{ mt: 2 }} />
                </Box>
                
                <Box sx={{ display: "flex", gap: 2 }}>
                    <TextField label="Número de Destino" value={profile.destino} disabled fullWidth sx={{ mt: 2 }} />
                    <TextField label="Missão" value={profile.missao} disabled fullWidth sx={{ mt: 2 }} />
                    <TextField label="Dívidas Cármicas" value={profile.dividasCarmicas} disabled fullWidth sx={{ mt: 2 }} />
                </Box>

                <Box sx={{ display: "flex", gap: 2 }}>
                    <TextField label="Lições Cármicas" value={profile.licoesCarmicas} disabled fullWidth sx={{ mt: 2 }} />
                    <TextField label="Tendências Ocultas" value={profile.tendenciasOcultas} disabled fullWidth sx={{ mt: 2 }} />
                    <TextField label="Ano Pessoal" value={profile.anoPessoal} disabled fullWidth sx={{ mt: 2 }} />
                    <TextField label="Dia Pessoal" value={profile.diaPessoal} disabled fullWidth sx={{ mt: 2 }} />
                    <TextField label="Subconsciente" value={profile.subconsciente} disabled fullWidth sx={{ mt: 2 }} />
                    <TextField label="Número Harmônico" value={harmonicos.length ? harmonicos.join(", ") : "Nenhum"} disabled fullWidth sx={{ mt: 2 }} />
                </Box>

                 <Box sx={{ mt: 2 }}>
                    <TextField
                        label="Dias do Mês Favoráveis"
                        value={profile.diasFavoraveis}
                        disabled
                        fullWidth
                    />
                </Box>
                
                <Box sx={{ mt: 2, p: 2, border: "1px solid #ccc", borderRadius: 2 }}>
                    <TextField
                        label="Meses Pessoais"
                        value={profile.mesesPessoais
                            .map(item => `${item.nomeMes}/${item.ano} – ${item.valor}`)
                            .join('\n')
                        }
                        multiline
                        disabled
                        fullWidth
                        sx={{ mt: 2 }}
                    />
                </Box>
                
                 <Box sx={{ display: "flex", gap: 2 }}>
                    <TextField label="Cores Favoráveis" value={profile.coresFavoraveis} disabled fullWidth sx={{ mt: 2 }} />
                    <TextField label="Nome social" value={nomeSocial} disabled fullWidth sx={{ mt: 2 }} />
                    <TextField label="Arcano Taro" value={profile.arcanoPessoal} disabled fullWidth sx={{ mt: 2 }} />
                    <TextField label="Arcano Cabalística" value={profile.arcanoCabalistico} disabled fullWidth sx={{ mt: 2 }} />
                </Box>

                {/* Vocation Section */}
                 <Box sx={{ mt: 2 }}>
                    <TextField
                        label="Profissão / Aptidões (Baseado no Destino)"
                        value={
                             vocacaoTextos[profile.destino] 
                             ? `Aptidões: ${vocacaoTextos[profile.destino].aptidoes}\n\nÁreas Sugeridas: ${vocacaoTextos[profile.destino].areas}`
                             : "Descrição não disponível para este número de destino."
                        }
                        multiline
                        disabled
                        fullWidth
                    />
                </Box>
                
                {/* Social Names Table */}
                 {nomesSociais.length > 0 && (
                    <Box sx={{ mt: 4, width: '100%' }}>
                        <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
                            Nomes Sociais Salvos
                        </Typography>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Nome Social</StyledTableCell>
                                        <StyledTableCell align="center">Arcano</StyledTableCell>
                                        <StyledTableCell align="center">Data de Criação</StyledTableCell>
                                        <StyledTableCell align="center">Significado do Arcano</StyledTableCell>
                                        <StyledTableCell align="center">Ações</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {nomesSociais.map((ns, index) => (
                                        <StyledTableRow key={index}>
                                            <StyledTableCell component="th" scope="row">
                                                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                                    {ns.nome}
                                                </Typography>
                                            </StyledTableCell>
                                            <StyledTableCell align="center">
                                                <Typography variant="h6" sx={{ color: 'success.main', fontWeight: 'bold' }}>
                                                    {ns.arcano}
                                                </Typography>
                                            </StyledTableCell>
                                            <StyledTableCell align="center">
                                                {ns.dataCriacao}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">
                                                {arcanos[ns.arcano] ? (
                                                <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                                                    {arcanos[ns.arcano].titulo}
                                                </Typography>
                                                ) : (
                                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                    Descrição não disponível
                                                </Typography>
                                                )}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">
                                                <Button size="small" color="error" onClick={() => onRemoverNomeSocial(index)}>
                                                    Remover
                                                </Button>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                 )}

                 {/* Signature Table */}
                 {assinatura && (
                  <Box sx={{ mt: 4, width: '100%' }}>
                    <Typography variant="h5" gutterBottom sx={{ color: 'success.main', display: 'flex', alignItems: 'center', gap: 1 }}>
                      Assinatura do Poder Escolhida
                    </Typography>

                    <TableContainer component={Paper} sx={{ border: '2px solid #4caf50' }}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>Assinatura</StyledTableCell>
                            <StyledTableCell align="center">Arcano Regente</StyledTableCell>
                            <StyledTableCell align="center">Significado</StyledTableCell>
                            <StyledTableCell align="center">Ações</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <StyledTableRow>
                            {/* Coluna da Assinatura */}
                            <StyledTableCell component="th" scope="row">
                              <Typography variant="h5" sx={{ fontWeight: 'bold', letterSpacing: 2, color: 'primary.main' }}>
                                {assinatura.assinatura}
                              </Typography>
                            </StyledTableCell>

                            {/* Coluna do Número do Arcano */}
                            <StyledTableCell align="center">
                              <Box sx={{
                                display: 'inline-flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                bgcolor: 'success.light',
                                color: 'success.dark',
                                fontWeight: 'bold',
                                fontSize: '1.2rem'
                              }}>
                                {assinatura.arcanoRegente}
                              </Box>
                            </StyledTableCell>

                            {/* Coluna do Título do Arcano */}
                            <StyledTableCell align="center">
                              {arcanos[assinatura.arcanoRegente] ? (
                                <Box>
                                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                    {arcanos[assinatura.arcanoRegente].titulo}
                                  </Typography>
                                  <Typography variant="caption" color="textSecondary">
                                    {arcanos[assinatura.arcanoRegente].descricao.substring(0, 60)}...
                                  </Typography>
                                </Box>
                              ) : (
                                <Typography variant="body2" color="textSecondary">Indisponível</Typography>
                              )}
                            </StyledTableCell>

                            {/* Botão de Remover */}
                            <StyledTableCell align="center">
                              <Button
                                size="small"
                                color="error"
                                variant="outlined"
                                onClick={() => setAssinatura(null)}
                              >
                                Remover
                              </Button>
                            </StyledTableCell>
                          </StyledTableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>
                )}
                
                {/* Life Cycle and Challenges */}
                 <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                  {/* Tabela do Ciclo de Vida */}
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" align="center">Ciclo de Vida</Typography>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>Ciclo</StyledTableCell>
                            <StyledTableCell align="right">Idade</StyledTableCell>
                            <StyledTableCell align="right">Período</StyledTableCell>
                            <StyledTableCell align="right">Energia</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {profile.ciclosVida.map((ciclo, index) => (
                            <StyledTableRow key={index}>
                              <StyledTableCell component="th" scope="row">
                                {ciclo.ciclo}
                              </StyledTableCell>
                              <StyledTableCell align="right">{ciclo.idade}</StyledTableCell>
                              <StyledTableCell align="right">{ciclo.periodo}</StyledTableCell>
                              <StyledTableCell align="right">{ciclo.energia}</StyledTableCell>
                            </StyledTableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>

                  {/* Tabela dos Desafios */}
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" align="center">Desafios</Typography>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>Desafio</StyledTableCell>
                            <StyledTableCell align="right">Valor</StyledTableCell>
                            <StyledTableCell align="right">Período</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {profile.desafios.map((desafio, index) => (
                            <StyledTableRow key={index}>
                              <StyledTableCell component="th" scope="row">
                                {desafio.nome}
                              </StyledTableCell>
                              <StyledTableCell align="right">{desafio.valor}</StyledTableCell>
                              <StyledTableCell align="right">{desafio.periodo}</StyledTableCell>
                            </StyledTableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>
                </Box>
                
                {/* Moments and Harmony */}
                <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 4 }}>

                  {/* 1. MOMENTOS DECISIVOS (Largura Total para melhor leitura) */}
                  <Box>
                    <Typography variant="h6" align="center" gutterBottom sx={{ color: 'primary.main' }}>
                      Momentos Decisivos
                    </Typography>
                    <TableContainer component={Paper}>
                      <Table size="small">
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>Energia</StyledTableCell>
                            <StyledTableCell align="center">Idade</StyledTableCell>
                            <StyledTableCell align="center">Período</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {profile.momentosDecisivos.map((momento, index) => {
                            const startAge = index === 0 ? 0 : profile.momentosDecisivos[index - 1].fim - new Date(dataNascimento).getFullYear();
                            const endAge = momento.fim === '...' ? '...' : (startAge + (momento.fim - momento.inicio));
                            const labelIdade = momento.fim === '...'
                              ? `${startAge} anos em diante`
                              : `${startAge} até ${endAge} anos`;
                            const labelPeriodo = momento.fim === '...'
                              ? `${momento.inicio} em diante`
                              : `${momento.inicio} a ${momento.fim}`;

                            return (
                              <StyledTableRow key={index}>
                                <StyledTableCell component="th" scope="row">
                                  <Typography fontWeight="bold">{momento.momento}</Typography>
                                </StyledTableCell>
                                <StyledTableCell align="center">{labelIdade}</StyledTableCell>
                                <StyledTableCell align="center">{labelPeriodo}</StyledTableCell>
                              </StyledTableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>
                  
                  {/* Harmony Analysis */}
                  <Box>
                    <Typography variant="h6" align="center" gutterBottom sx={{ color: 'primary.main' }}>
                      Análise de Harmonia Conjugal
                    </Typography>

                    <Box sx={{
                      display: 'flex',
                      gap: 2,
                      flexDirection: { xs: 'column', md: 'row' },
                      justifyContent: 'center'
                    }}>

                      {/* Tabela Cliente */}
                      {profile.harmonia && (
                        <Box sx={{ flex: 1, maxWidth: partnerProfile ? '50%' : '100%' }}>
                          <Typography variant="subtitle2" align="center" sx={{ color: 'primary.dark', fontWeight: 'bold', mb: 1 }}>
                            {nome} (Base: {profile.harmonia.numero})
                          </Typography>
                          <TableContainer component={Paper} elevation={2}>
                            <Table size="small">
                              <TableHead>
                                <TableRow>
                                  <StyledTableCell>Tipo</StyledTableCell>
                                  <StyledTableCell align="center">Números</StyledTableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {['vibraCom', 'atrai', 'oposto', 'passivo'].map(tipo => (
                                    <StyledTableRow key={tipo}>
                                        <StyledTableCell>{tipo.charAt(0).toUpperCase() + tipo.slice(1).replace(/([A-Z])/g, ' $1')}</StyledTableCell>
                                        <StyledTableCell
                                            align="center"
                                            sx={{
                                                bgcolor: isComparacaoHarmonia(tipo, profile.harmonia, partnerProfile?.harmonia) ? '#e8f5e9' : 'inherit',
                                                color: isComparacaoHarmonia(tipo, profile.harmonia, partnerProfile?.harmonia) ? '#1b5e20' : 'inherit',
                                                fontWeight: isComparacaoHarmonia(tipo, profile.harmonia, partnerProfile?.harmonia) ? 'bold' : 'normal',
                                                borderLeft: isComparacaoHarmonia(tipo, profile.harmonia, partnerProfile?.harmonia) ? '3px solid #4caf50' : 'none'
                                            }}
                                        >
                                           {profile.harmonia[tipo]} 
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </Box>
                      )}
                      
                      {/* Tabela Companheiro */}
                      {partnerProfile && partnerProfile.harmonia && (
                        <Box sx={{ flex: 1, maxWidth: '50%' }}>
                          <Typography variant="subtitle2" align="center" sx={{ color: 'secondary.dark', fontWeight: 'bold', mb: 1 }}>
                            {nomeCompanheiro} (Base: {partnerProfile.harmonia.numero})
                          </Typography>
                          <TableContainer component={Paper} elevation={2}>
                             <Table size="small">
                              <TableHead>
                                <TableRow>
                                  <StyledTableCell sx={{ bgcolor: 'secondary.main' }}>Tipo</StyledTableCell>
                                  <StyledTableCell align="center" sx={{ bgcolor: 'secondary.main' }}>Números</StyledTableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {['vibraCom', 'atrai', 'oposto', 'passivo'].map(tipo => (
                                    <StyledTableRow key={tipo}>
                                        <StyledTableCell>{tipo.charAt(0).toUpperCase() + tipo.slice(1).replace(/([A-Z])/g, ' $1')}</StyledTableCell>
                                        <StyledTableCell
                                            align="center"
                                            sx={{
                                                bgcolor: isComparacaoHarmonia(tipo, partnerProfile.harmonia, profile.harmonia) ? '#e8f5e9' : 'inherit',
                                                color: isComparacaoHarmonia(tipo, partnerProfile.harmonia, profile.harmonia) ? '#1b5e20' : 'inherit',
                                                fontWeight: isComparacaoHarmonia(tipo, partnerProfile.harmonia, profile.harmonia) ? 'bold' : 'normal',
                                                borderLeft: isComparacaoHarmonia(tipo, partnerProfile.harmonia, profile.harmonia) ? '3px solid #4caf50' : 'none'
                                            }}
                                        >
                                           {partnerProfile.harmonia[tipo]} 
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </Box>
                      )}
                      </Box>
                    </Box>
                </Box>
                
                 {/* Tabs for Pyramid and Arcana */}
                <Box sx={{ width: '100%', mt: 4 }}>
                    <Tabs value={tabIndex} onChange={handleTabChange} centered>
                        <Tab label="Pirâmide Invertida" />
                        <Tab label="Arcanos" />
                    </Tabs>

                    {tabIndex === 0 && (
                        <Box sx={{ mt: 2 }}>
                            <PiramideInvertida
                                dados={piramide}
                                onNomeSocialChange={onSaveNomeSocial}
                            />
                        </Box>
                    )}
                    
                    {tabIndex === 1 && (
                        <Box sx={{ mt: 2 }}>
                            <Typography variant="h6" gutterBottom>Arcanos Maiores</Typography>
                            <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                <TableRow>
                                    <StyledTableCell>Número</StyledTableCell>
                                    <StyledTableCell>Título</StyledTableCell>
                                    <StyledTableCell>Descrição</StyledTableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {Object.entries(arcanos).map(([numero, arcano]) => (
                                    <StyledTableRow key={numero}>
                                    <StyledTableCell>
                                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                                        {numero}
                                        </Typography>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                        {arcano.titulo}
                                        </Typography>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <Typography variant="body2">
                                        {arcano.descricao}
                                        </Typography>
                                    </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                                </TableBody>
                            </Table>
                            </TableContainer>
                        </Box>
                    )}
                </Box>
                
                <Box sx={{ width: '100%', mt: 4 }}>
                    <TabelaArcanosTransito nome={nome} dataNascimento={dataNascimento} />
                </Box>
            </Box>
        </Box>
    );

};

export default NumerologyDashboard;
