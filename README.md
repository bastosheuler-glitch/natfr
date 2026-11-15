# Voie Française 🇫🇷

PWA para auxiliar pessoas na naturalização francesa. Interface multilíngue (français, português, English, español).

## Funcionalidades (MVP)

- **Simulador de elegibilidade** — questionário que avalia a priori os critérios da naturalização por decreto (residência, casamento, língua B1, renda, antecedentes, valores).
- **Dossiê: checklist de documentos** — lista personalizada conforme sua situação (casado(a) com francês, filhos, nascido(a) no exterior), com progresso salvo no dispositivo.
- **Preparação para a entrevista** — quiz sobre valores, história e instituições da República francesa, com explicações.
- **Cronograma do processo** — etapas (depósito ANEF, entrevista, decreto no Journal officiel, cerimônia) com datas e prazos médios.

## Stack

- React 18 + TypeScript + Vite
- PWA: `manifest.webmanifest` + service worker (funciona offline)
- i18n próprio, sem dependências extras
- Dados salvos localmente (`localStorage`), nada é enviado a servidores

## Desenvolvimento

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # typecheck + build de produção em dist/
npm run preview  # serve o build (service worker ativo)
```

## Aviso

Aplicativo independente, sem valor oficial. As regras oficiais estão em [service-public.fr](https://www.service-public.fr/particuliers/vosdroits/F2213).
