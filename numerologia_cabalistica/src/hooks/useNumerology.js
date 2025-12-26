
import { useMemo, useState } from 'react';
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
    // Basic User Data
    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [mesInteresse, setMesInteresse] = useState('');
    const [diaInteresse, setDiaInteresse] = useState('');
    const [nomeCompanheiro, setNomeCompanheiro] = useState('');
    const [dataNascCompanheiro, setDataNascCompanheiro] = useState('');

    // Additional State
    const [harmonicos, setHarmonicos] = useState([]);
    const [piramide, setPiramide] = useState([]);
    const [nomeSocial, setNomeSocial] = useState('');
    const [nomesSociais, setNomesSociais] = useState([]);
    const [assinatura, setAssinatura] = useState(null);
    
    // Legacy state that might be redundant if we memoize everything, but keeping for compatibility with existing setters
    const [numeroExpressao, setNumeroExpressao] = useState('');
    const [arcano, setArcano] = useState('');

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
        setNomeSocial('');
        setArcano('');
        setNomesSociais([]);
        setAssinatura(null);

        // Trigger Dependent Calculations (Legacy behavior compatibility)
        // Ideally these should be derived state, but keeping logic consistent
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
        setArcano(arcanoNumber);
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
