export interface ReportSettings {
  nomeOrientadora: string;
  cargoOrientadora: string;
  logotipoBase64: string; // Data URL em formato base64
  mensagemFinal: string; // Mensagem personalizada para "Uma Nota Pessoal"
}

export const DEFAULT_MENSAGEM_FINAL =
`Este Mapa Numerológico foi preparado especialmente para você, {nomeCliente}, com atenção às suas vibrações, aos caminhos que se abrem diante da sua jornada.

Cada número aqui não fala de destino fechado, mas de potenciais, talentos e desafios que fazem parte da sua história única.

Que este material sirva como um espelho gentil, revelando aspectos profundos do seu ser. Agradeço de coração por confiar seu mapa às minhas mãos.

Que a leitura traga clareza, força e direção — e que você se reconheça, com verdade e acolhimento, em cada página.`;

const STORAGE_KEY = 'numeris_report_settings';

export const getReportSettings = (): ReportSettings => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        nomeOrientadora: parsed.nomeOrientadora || '',
        cargoOrientadora: parsed.cargoOrientadora || '',
        logotipoBase64: parsed.logotipoBase64 || '',
        mensagemFinal: parsed.mensagemFinal || '',
      };
    }
  } catch (e) {
    console.error('Erro ao ler configurações do relatório:', e);
  }
  return {
    nomeOrientadora: '',
    cargoOrientadora: '',
    logotipoBase64: '',
    mensagemFinal: '',
  };
};

export const saveReportSettings = (settings: ReportSettings): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch (e) {
    console.error('Erro ao salvar configurações do relatório:', e);
  }
};

export const resetReportSettings = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error('Erro ao resetar configurações:', e);
  }
};

// Redimensiona imagem para otimizar tamanho do armazenamento e PDF
export const otimizarImagemLogo = (file: File, maxDimensao = 800): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > maxDimensao || height > maxDimensao) {
          if (width > height) {
            height = Math.round((height * maxDimensao) / width);
            width = maxDimensao;
          } else {
            width = Math.round((width * maxDimensao) / height);
            height = maxDimensao;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL('image/png', 0.9));
        } else {
          resolve(e.target?.result as string);
        }
      };
      img.onerror = reject;
      img.src = e.target?.result as string;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};
