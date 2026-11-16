# Voie Française 🇫🇷

PWA para treinar a **entrevista de naturalização francesa**: simulado com perguntas baseadas no **livret du citoyen**, nos 4 temas oficiais. Interface multilíngue (français, português, English, español).

## Temas do simulado

- **L'histoire de France** — da Gália à Ve República (10 perguntas)
- **Les valeurs et symboles de la République** — devise, drapeau, hymne, Marianne, laïcité (10 perguntas)
- **Les institutions et l'Europe** — Ve République, Parlement, président, UE (10 perguntas)
- **Les droits et devoirs du citoyen** — vote, JDC, jury d'assises, Sécurité sociale (10 perguntas)
- **Misto (aleatório)** — 40 perguntas embaralhadas de todos os temas

Cada resposta vem com uma explicação ("à retenir"). Pontuação ≥ 70 % = preparado(a).

## Stack

- React 18 + TypeScript + Vite
- PWA: `manifest.webmanifest` + service worker (funciona offline)
- i18n próprio, sem dependências extras
- Nenhum dado sai do dispositivo

## Desenvolvimento

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # typecheck + build de produção em dist/
npm run preview  # serve o build (service worker ativo)
```

## Aviso

Aplicativo independente, sem valor oficial. As regras oficiais estão em [service-public.fr](https://www.service-public.fr/particuliers/vosdroits/F2213) e no [livret du citoyen](https://www.service-public.fr/particuliers/vosdroits/F2437).
