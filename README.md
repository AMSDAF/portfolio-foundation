# Portfolio Foundation

Fundação web reutilizável para portfólios profissionais. A primeira implementação
planejada é o portfólio comercial da Emilly Araújo Fotografia; posteriormente, a
mesma infraestrutura poderá apoiar um portfólio de desenvolvedor.

O projeto não pretende ser um SaaS, CMS genérico ou construtor visual. A
reutilização deve concentrar-se em infraestrutura e componentes comprovadamente
compartilhados, sem forçar a mesma experiência visual para todas as marcas.

## Estado atual

O repositório está na PF-001 — Inicialização do repositório. Há apenas o scaffold
mínimo do Next.js e a página padrão. Identidade visual, componentes de portfólio,
conteúdo comercial, painel administrativo, métricas e integrações ainda não foram
implementados. Consulte o [roadmap](./docs/ROADMAP.md) e o
[backlog](./docs/BACKLOG.md) para o estado detalhado.

## Stack instalada

- Next.js 16.4.1 com App Router e Turbopack.
- React e React DOM 19.3.0.
- TypeScript 5.9.3 com `strict` habilitado.
- Tailwind CSS 4.3.3, integrado pelo `@tailwindcss/turbopack`.
- npm.

As versões efetivamente instaladas têm como fonte de verdade o
[`frontend/package-lock.json`](./frontend/package-lock.json). Supabase, Vercel,
Google Analytics, Search Console e armazenamento de imagens são possibilidades
futuras, não integrações atuais.

## Requisitos

- Node.js 20.9.0 ou superior.
- npm disponível no ambiente.

Não são necessárias variáveis de ambiente ou serviços externos para o scaffold
atual.

## Instalação e desenvolvimento

Os comandos da aplicação devem ser executados dentro de `frontend/`:

```bash
cd frontend
npm ci
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000). Para encerrar o servidor,
pressione `Ctrl+C`.

## Comandos disponíveis atualmente

Dentro de `frontend/`:

| Comando | Situação |
| --- | --- |
| `npm run dev` | disponível |
| `npm run build` | disponível |
| `npm start` | disponível após um build |
| `npm run lint` | disponível |
| `npm run typecheck` | disponível |
| `npm run format` | disponível |
| `npm run format:check` | disponível |

## Estrutura

```text
portfolio-foundation/
├── docs/                 # visão, arquitetura, design system e planejamento
├── frontend/
│   ├── public/
│   ├── src/app/          # App Router e tela inicial atual
│   ├── next.config.ts
│   ├── package.json
│   └── tsconfig.json
├── .gitignore
├── AGENTS.md
└── README.md
```

O alias `@/*` aponta para `frontend/src/*`. O Tailwind CSS 4 usa
`@import "tailwindcss"` em `frontend/src/app/globals.css`; ainda não há tokens
customizados nem arquivo `tailwind.config`.

## Documentação

- [Arquitetura](./docs/ARCHITECTURE.md)
- [Design System](./docs/DESIGN_SYSTEM.md)
- [Roadmap](./docs/ROADMAP.md)
- [Backlog](./docs/BACKLOG.md)

As decisões e o planejamento devem permanecer consistentes com o código
implementado. Mudanças de escopo devem ser registradas na documentação
correspondente.
