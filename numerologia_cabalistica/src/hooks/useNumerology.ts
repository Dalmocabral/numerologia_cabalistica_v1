
import { useEffect, useMemo, useState } from 'react';
import { calcularMomentosDecisivos } from '../utils/CalcularMomentosDecisivos';
import { calcularAnoPessoal } from '../utils/CalculoAnoPessoal';
import { calcularArcanoCabalistico, calcularArcanoPessoal } from '../utils/CalculoArcano';
import { calcularCicloVida } from '../utils/CalculoCicloVida';
import { calcularCoresFavoraveis } from '../utils/CalculoCoresFavoraveis';
import { calcularDesafios } from '../utils/CalculoDesafios';
import { calcularDestino } from '../utils/CalculoDestino';
import { calcularDiasFavoraveis } from '../utils/CalculoDiasFavoraveis';
import { calcularDividasCarmicas } from '../utils/CalculoDividasCarmicas';
import { calcularExpressao } from '../utils/CalculoExpressao';
import { calcularHarmoniaConjugal } from '../utils/CalculoHarmoniaConjugal';
import { calcularNumeroHarmonico } from "../utils/CalculoHarmonico";
import { calcularImpressao } from '../utils/CalculoImpressao';
import { calcularLicoesCarmicas } from '../utils/CalculoLicoesCarmicas';
import { calcularDiaPessoal, calcularMesesPessoaisRestantes } from '../utils/CalculoMesDiaPessoal';
import { calcularMissao } from '../utils/CalculoMissao';
import { calcularMotivacao } from '../utils/CalculoMotivacao';
import { calcularSubconsciente } from '../utils/CalculoSubconsciente';
import { calcularTendenciasOcultas } from '../utils/CalculoTendenciasOcultas';
import { generateInvertedPyramid } from "../utils/generateInvertedPyramid";

export const useNumerology = () => {
    // Helper para carregar do localStorage
    const loadState = (key, initialValue) => {
        try {
            const savedItem = localStorage.getItem(key);
            if (savedItem) {
                return JSON.parse(savedItem);
            }
        } catch (error) {
            console.error(`Erro ao carregar ${key} do localStorage:`, error);
        }
        return initialValue;
    };

    // Helper para salvar no localStorage
    const saveState = (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(`Erro ao salvar ${key} no localStorage:`, error);
        }
    };

    // Basic User Data (persisted)
    const [nome, setNome] = useState(() => loadState('numerologia_nome', ''));
    const [dataNascimento, setDataNascimento] = useState(() => loadState('numerologia_dataNascimento', ''));
    const [mesInteresse, setMesInteresse] = useState(() => loadState('numerologia_mesInteresse', ''));
    const [diaInteresse, setDiaInteresse] = useState(() => loadState('numerologia_diaInteresse', ''));
    const [nomeCompanheiro, setNomeCompanheiro] = useState(() => loadState('numerologia_nomeCompanheiro', ''));
    const [dataNascCompanheiro, setDataNascCompanheiro] = useState(() => loadState('numerologia_dataNascCompanheiro', ''));

    // Additional State (persisted)
    const [nomesSociais, setNomesSociais] = useState(() => loadState('numerologia_nomesSociais', []));
    const [assinatura, setAssinatura] = useState(() => loadState('numerologia_assinatura', null));

    // Derived State (calculated on load/change)
    // These defaults should be re-calculated if data exists, avoiding stale state
    const [harmonicos, setHarmonicos] = useState(() => dataNascimento ? calcularNumeroHarmonico(dataNascimento) : []);
    const [piramide, setPiramide] = useState(() => nome ? generateInvertedPyramid(nome) : []);
    
    // Legacy/Transient state
    const [nomeSocial, setNomeSocial] = useState(''); // Estado temporário do dialog?
    const [numeroExpressao, setNumeroExpressao] = useState('');

    // --- EFFECTS FOR PERSISTENCE ---
    useEffect(() => saveState('numerologia_nome', nome), [nome]);
    useEffect(() => saveState('numerologia_dataNascimento', dataNascimento), [dataNascimento]);
    useEffect(() => saveState('numerologia_mesInteresse', mesInteresse), [mesInteresse]);
    useEffect(() => saveState('numerologia_diaInteresse', diaInteresse), [diaInteresse]);
    useEffect(() => saveState('numerologia_nomeCompanheiro', nomeCompanheiro), [nomeCompanheiro]);
    useEffect(() => saveState('numerologia_dataNascCompanheiro', dataNascCompanheiro), [dataNascCompanheiro]);
    useEffect(() => saveState('numerologia_nomesSociais', nomesSociais), [nomesSociais]);
    useEffect(() => saveState('numerologia_assinatura', assinatura), [assinatura]);


    // Memoized Calculations
    const profile = useMemo(() => {
        if (!nome || !dataNascimento) return null;

        const destino = calcularDestino(dataNascimento);
        const expressao = calcularExpressao(nome);
        const motivacao = calcularMotivacao(nome);
        const impressao = calcularImpressao(nome);
        const missao = calcularMissao(destino, expressao);

        return {
            destino,
            expressao,
            motivacao,
            impressao,
            missao,
            dividasCarmicas: calcularDividasCarmicas(dataNascimento, expressao, destino, motivacao),
            licoesCarmicas: calcularLicoesCarmicas(nome),
            tendenciasOcultas: calcularTendenciasOcultas(nome),
            anoPessoal: calcularAnoPessoal(dataNascimento),
            diaPessoal: calcularDiaPessoal(dataNascimento, mesInteresse, diaInteresse),
            subconsciente: calcularSubconsciente(calcularLicoesCarmicas(nome)),
            diasFavoraveis: calcularDiasFavoraveis(dataNascimento),
            coresFavoraveis: calcularCoresFavoraveis(expressao),
            arcanoPessoal: calcularArcanoPessoal(dataNascimento),
            arcanoCabalistico: calcularArcanoCabalistico(nome),
            ciclosVida: calcularCicloVida(dataNascimento, destino),
            momentosDecisivos: calcularMomentosDecisivos(dataNascimento, destino),
            desafios: calcularDesafios(dataNascimento, calcularCicloVida(dataNascimento, destino)),
            harmonia: calcularHarmoniaConjugal(missao),
            mesesPessoais: calcularMesesPessoaisRestantes(dataNascimento, mesInteresse)
        };
    }, [nome, dataNascimento, mesInteresse, diaInteresse]);

    const partnerProfile = useMemo(() => {
        if (!nomeCompanheiro || !dataNascCompanheiro) return null;
        
        const destino = calcularDestino(dataNascCompanheiro);
        const expressao = calcularExpressao(nomeCompanheiro);
        const missao = calcularMissao(destino, expressao);

        return {
            harmonia: calcularHarmoniaConjugal(missao)
        };
    }, [nomeCompanheiro, dataNascCompanheiro]);


    // Handlers
    const handleSalvarNome = (novoNome, novaDataNascimento, novoMesInteresse, novoDiaInteresse, novoNomeComp, novaDataComp) => {
        setNome(novoNome);
        setDataNascimento(novaDataNascimento);
        setMesInteresse(novoMesInteresse);
        setDiaInteresse(novoDiaInteresse);
        setNomeCompanheiro(novoNomeComp);
        setDataNascCompanheiro(novaDataComp);

        // Reset Auxiliary States
        // User might want to keep social names maybe? For now let's reset to keep "New Map" semantics
        setNomeSocial('');
        setNomesSociais([]);
        setAssinatura(null);

        // Trigger Dependent Calculations (Legacy behavior compatibility)
        setHarmonicos(calcularNumeroHarmonico(novaDataNascimento));
        setNumeroExpressao(calcularExpressao(novoNome));
        setPiramide(generateInvertedPyramid(novoNome));
    };

    const handleSaveNomeSocial = (novoNomeSocial, arcanoNumber) => {
        setNomesSociais(prev => [...prev, {
            nome: novoNomeSocial,
            arcano: arcanoNumber,
            dataCriacao: new Date().toLocaleDateString('pt-BR')
        }]);
        setNomeSocial(novoNomeSocial);
    };

    const handleRemoverNomeSocial = (index) => {
        setNomesSociais(prev => prev.filter((_, i) => i !== index));
    };

    const handleSalvarAssinatura = (dadosAssinatura) => {
        setAssinatura(dadosAssinatura);
    };

    return {
        // State
        nome,
        dataNascimento,
        nomeCompanheiro,
        dataNascCompanheiro,
        mesInteresse,
        diaInteresse,
        nomesSociais,
        nomeSocial,
        assinatura,
        harmonicos,
        piramide,
        
        // Calculated Data
        profile,
        partnerProfile,
        
        // Actions
        handleSalvarNome,
        handleSaveNomeSocial,
        handleRemoverNomeSocial,
        handleSalvarAssinatura
    };
};
