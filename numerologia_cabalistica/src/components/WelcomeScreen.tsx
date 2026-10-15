import { Box, Typography, useTheme } from '@mui/material';
import type { FC } from 'react';

const WelcomeScreen: FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const headColor = isDark ? '#60a5fa' : (theme.palette.primary.main || '#1976d2');
  const ringColor = isDark ? '#38bdf8' : '#0284c7';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '85vh',
        textAlign: 'center',
        px: 2,
        userSelect: 'none',
      }}
    >
      <style>
        {`
          @keyframes headLevitate {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          
          @keyframes headShadowBreath {
            0%, 100% {
              transform: scale(1);
              opacity: ${isDark ? '0.45' : '0.3'};
            }
            50% {
              transform: scale(0.82);
              opacity: ${isDark ? '0.2' : '0.12'};
            }
          }

          @keyframes ringWobble1 {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(8deg); }
          }
          @keyframes ringWobble2 {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(-7deg); }
          }
          @keyframes ringWobble3 {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(10deg); }
          }

          .cosmic-head-group {
            animation: headLevitate 4.2s ease-in-out infinite;
          }

          .head-ground-shadow {
            transform-origin: 184px 255px;
            animation: headShadowBreath 4.2s ease-in-out infinite;
          }

          .orbit-wobble-1 {
            transform-origin: 184px 127px;
            animation: ringWobble1 9s ease-in-out infinite;
          }
          .orbit-wobble-2 {
            transform-origin: 184px 127px;
            animation: ringWobble2 11s ease-in-out infinite;
          }
          .orbit-wobble-3 {
            transform-origin: 184px 127px;
            animation: ringWobble3 10s ease-in-out infinite;
          }
        `}
      </style>

      {/* SVG Animado: Desenho da Cabeça com Engrenagem + Anéis Orbitais e Planetas em Movimento */}
      <Box sx={{ position: 'relative', width: { xs: 360, sm: 490 }, height: { xs: 275, sm: 370 }, mb: 1 }}>
        <svg
          viewBox="0 0 368 280"
          width="100%"
          height="100%"
          style={{ overflow: 'visible' }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Sombra no solo */}
            <radialGradient id="headShadowGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={isDark ? 'rgba(0, 0, 0, 0.7)' : 'rgba(15, 23, 42, 0.35)'} />
              <stop offset="65%" stopColor={isDark ? 'rgba(0, 0, 0, 0.2)' : 'rgba(15, 23, 42, 0.08)'} />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>

            {/* Gradientes dos Planetas */}
            <radialGradient id="planetGradBlue" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </radialGradient>

            <radialGradient id="planetGradCyan" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#67e8f9" />
              <stop offset="60%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#083344" />
            </radialGradient>

            <radialGradient id="planetGradDeep" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor={isDark ? '#38bdf8' : '#0284c7'} />
              <stop offset="60%" stopColor={isDark ? '#0284c7' : '#0369a1'} />
              <stop offset="100%" stopColor={isDark ? '#082f49' : '#082f49'} />
            </radialGradient>

            {/* Órbitas Elípticas centradas exatamente no centro do cérebro/engrenagem (184, 127) */}
            {/* Órbita 1: Inclinada a -30 graus */}
            <path
              id="orbitHead1"
              d="
                M 184, 127
                m -125, -45
                a 130, 52 -30 1,0 250, 90
                a 130, 52 -30 1,0 -250, -90
              "
            />

            {/* Órbita 2: Inclinada a +38 graus (sentido anti-horário) */}
            <path
              id="orbitHead2"
              d="
                M 184, 127
                m 125, -50
                a 135, 56 38 1,0 -250, 100
                a 135, 56 38 1,0 250, -100
              "
            />

            {/* Órbita 3: Inclinada a -72 graus (mais vertical) */}
            <path
              id="orbitHead3"
              d="
                M 184, 127
                m -40, -105
                a 110, 46 -72 1,0 80, 210
                a 110, 46 -72 1,0 -80, -210
              "
            />
          </defs>

          {/* Sombra no solo logo abaixo da cabeça */}
          <ellipse
            className="head-ground-shadow"
            cx="184"
            cy="255"
            rx="65"
            ry="9"
            fill="url(#headShadowGrad)"
          />

          {/* Grupo Flutuante (Cabeça com Engrenagem + Anéis Orbitais + Planetas) */}
          <g className="cosmic-head-group">

            {/* --- ANEL 1 + PLANETAS --- */}
            <g className="orbit-wobble-1">
              <use
                href="#orbitHead1"
                fill="none"
                stroke={ringColor}
                strokeWidth="1.8"
                opacity={isDark ? 0.4 : 0.45}
              />

              {/* Planeta 1A (Grande) */}
              <circle r="7.5" fill="url(#planetGradDeep)" stroke={isDark ? '#67e8f9' : '#38bdf8'} strokeWidth="0.8">
                <animateMotion dur="11s" repeatCount="indefinite">
                  <mpath href="#orbitHead1" />
                </animateMotion>
              </circle>

              {/* Planeta 1B (Médio) */}
              <circle r="4.5" fill="url(#planetGradCyan)">
                <animateMotion dur="11s" begin="-4s" repeatCount="indefinite">
                  <mpath href="#orbitHead1" />
                </animateMotion>
              </circle>

              {/* Planeta 1C (Pequeno) */}
              <circle r="2.5" fill={isDark ? '#bae6fd' : '#0369a1'}>
                <animateMotion dur="11s" begin="-8s" repeatCount="indefinite">
                  <mpath href="#orbitHead1" />
                </animateMotion>
              </circle>
            </g>

            {/* --- ANEL 2 + PLANETAS (Sentido Anti-horário) --- */}
            <g className="orbit-wobble-2">
              <use
                href="#orbitHead2"
                fill="none"
                stroke={ringColor}
                strokeWidth="1.8"
                opacity={isDark ? 0.4 : 0.45}
              />

              {/* Planeta 2A (Grande) */}
              <circle r="8" fill="url(#planetGradBlue)" stroke={isDark ? '#ffffff' : '#93c5fd'} strokeWidth="0.8">
                <animateMotion dur="15s" repeatCount="indefinite">
                  <mpath href="#orbitHead2" />
                </animateMotion>
              </circle>

              {/* Planeta 2B (Médio) */}
              <circle r="4.2" fill="url(#planetGradDeep)">
                <animateMotion dur="15s" begin="-5.5s" repeatCount="indefinite">
                  <mpath href="#orbitHead2" />
                </animateMotion>
              </circle>

              {/* Planeta 2C (Pequeno) */}
              <circle r="2" fill={isDark ? '#7dd3fc' : '#0284c7'}>
                <animateMotion dur="15s" begin="-10.5s" repeatCount="indefinite">
                  <mpath href="#orbitHead2" />
                </animateMotion>
              </circle>
            </g>

            {/* --- ANEL 3 + PLANETAS --- */}
            <g className="orbit-wobble-3">
              <use
                href="#orbitHead3"
                fill="none"
                stroke={ringColor}
                strokeWidth="1.8"
                opacity={isDark ? 0.35 : 0.4}
              />

              {/* Planeta 3A (Médio) */}
              <circle r="5" fill="url(#planetGradCyan)" stroke="#38bdf8" strokeWidth="0.6">
                <animateMotion dur="19s" repeatCount="indefinite">
                  <mpath href="#orbitHead3" />
                </animateMotion>
              </circle>

              {/* Planeta 3B (Pequeno) */}
              <circle r="2.8" fill={isDark ? '#38bdf8' : '#0c4a6e'}>
                <animateMotion dur="19s" begin="-9s" repeatCount="indefinite">
                  <mpath href="#orbitHead3" />
                </animateMotion>
              </circle>
            </g>

            {/* --- DESENHO ORIGINAL: CABEÇA COM ENGRENAGEM (PSYCHOLOGY ICON) --- */}
            {/* O ícone original (viewBox 0 0 24 24) posicionado centralmente em tamanho ampliado */}
            <g
              transform="translate(121.6, 79) scale(4.8)"
              fill={headColor}
              style={{
                filter: isDark
                  ? 'drop-shadow(0 0 16px rgba(96, 165, 250, 0.5))'
                  : 'drop-shadow(0 4px 12px rgba(25, 118, 210, 0.28))',
              }}
            >
              {/* Centro da engrenagem */}
              <path d="M13 8.57c-.79 0-1.43.64-1.43 1.43s.64 1.43 1.43 1.43 1.43-.64 1.43-1.43-.64-1.43-1.43-1.43" />
              {/* Silhueta da cabeça + dentes da engrenagem */}
              <path d="M13 3C9.25 3 6.2 5.94 6.02 9.64L4.1 12.2c-.25.33-.01.8.4.8H6v3c0 1.1.9 2 2 2h1v3h7v-4.68c2.36-1.12 4-3.53 4-6.32 0-3.87-3.13-7-7-7m3 7c0 .13-.01.26-.02.39l.83.66c.08.06.1.16.05.25l-.8 1.39c-.05.09-.16.12-.24.09l-.99-.4c-.21.16-.43.29-.67.39L14 13.83c-.01.1-.1.17-.2.17h-1.6c-.1 0-.18-.07-.2-.17l-.15-1.06c-.25-.1-.47-.23-.68-.39l-.99.4c-.09.03-.2 0-.25-.09l-.8-1.39c-.05-.08-.03-.19.05-.25l.84-.66c-.01-.13-.02-.26-.02-.39s.02-.27.04-.39l-.85-.66c-.08-.06-.1-.16-.05-.26l.8-1.38c.05-.09.15-.12.24-.09l1 .4c.2-.15.43-.29.67-.39L12 6.17c.02-.1.1-.17.2-.17h1.6c.1 0 .18.07.2.17l.15 1.06c.24.1.46.23.67.39l1-.4c.09-.03.2 0 .24.09l.8 1.38c.05.09.03.2-.05.26l-.85.66c.03.12.04.25.04.39" />
            </g>

            {/* Pequenos pontos e partículas orbitais ao redor da cabeça */}
            <circle cx="180" cy="48" r="3.2" fill={isDark ? '#38bdf8' : '#0284c7'} opacity="0.8">
              <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="196" cy="38" r="4.2" fill={isDark ? '#67e8f9' : '#0369a1'} opacity="0.85">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="250" cy="54" r="2.5" fill={isDark ? '#38bdf8' : '#0284c7'} opacity="0.7" />
            <circle cx="278" cy="98" r="3" fill={isDark ? '#93c5fd' : '#075985'} opacity="0.8" />
            <circle cx="112" cy="165" r="2.8" fill={isDark ? '#67e8f9' : '#0369a1'} opacity="0.75" />
            <circle cx="126" cy="85" r="2" fill={isDark ? '#38bdf8' : '#0284c7'} opacity="0.6" />
          </g>
        </svg>
      </Box>

      {/* Título: Posicionado exatamente abaixo da logo com anéis */}
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          color: 'primary.main',
          mt: 2,
          mb: 1.5,
          letterSpacing: '-0.5px',
          fontSize: { xs: '2.4rem', sm: '3.2rem' },
        }}
      >
        Numeris
      </Typography>

      {/* Subtítulo de Boas-Vindas */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 500,
          color: isDark ? 'text.primary' : 'primary.dark',
          mb: 1.5,
          maxWidth: 620,
          fontSize: { xs: '1.1rem', sm: '1.35rem' },
          lineHeight: 1.4,
        }}
      >
        Seja bem-vindo ao Sistema de Numerologia Cabalística!
      </Typography>

      {/* Instrução Inicial */}
      <Typography
        variant="body1"
        sx={{
          color: 'text.secondary',
          fontSize: { xs: '0.95rem', sm: '1.05rem' },
          maxWidth: 480,
        }}
      >
        Insira seus dados no menu ao lado para começar.
      </Typography>
    </Box>
  );
};

export default WelcomeScreen;
