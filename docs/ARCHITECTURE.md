# Arquitetura

## Escopo

O Portfolio Foundation é uma única aplicação Next.js inicialmente. Seu objetivo
é fornecer uma base reutilizável para portfólios profissionais, começando pela
Emilly Araújo Fotografia e podendo receber uma segunda implementação para um
desenvolvedor de software. Não é um SaaS, CMS genérico ou construtor visual.

## Estrutura atual e aprovada

```text
portfolio-foundation/
├── docs/
├── frontend/
│   ├── public/
│   ├── src/
│   │   └── app/
│   │       ├── globals.css
│   │       ├── layout.tsx
│   │       └── page.tsx
│   ├── next.config.ts
│   ├── package.json
│   ├── package-lock.json
│   └── tsconfig.json
├── .gitignore
├── AGENTS.md
└── README.md
```

O código da aplicação permanece em `frontend/`; não reorganizar essa fronteira.
No estado atual ainda não existem diretórios de componentes, features, config,
lib ou types. Eles devem ser criados apenas quando a necessidade da
implementação justificar sua responsabilidade.

## Tecnologias atuais

- Next.js 16.4.1, App Router e Turbopack.
- React e React DOM 19.3.0.
- TypeScript 5.9.3, com `strict: true`.
- Tailwind CSS 4.3.3 e `@tailwindcss/turbopack`.
- npm.

As versões e configurações instaladas estão em
`frontend/package.json`, `frontend/package-lock.json`, `frontend/tsconfig.json`
e `frontend/next.config.ts`.

## Decisões arquiteturais

1. Uma aplicação única inicialmente; não criar backend separado neste estágio.
2. Conteúdo estático primeiro; persistência e painel vêm depois.
3. Separar dados, contratos tipados e apresentação quando essas camadas forem
   introduzidas.
4. Extrair componentes compartilhados somente após existir necessidade concreta.
5. O núcleo não pode depender da identidade visual da Emilly.
6. Reutilizar infraestrutura e componentes quando fizer sentido, sem exigir que
   toda implementação tenha a mesma experiência visual.
7. Evitar sistemas de plugins, temas e abstrações genéricas sem caso de uso.
8. Não adicionar banco de dados à fundação antes do EPIC-04.

## Tecnologias futuras

Supabase (persistência e autenticação), Supabase Storage ou alternativa para
imagens, Vercel, Google Analytics 4, Search Console e ferramentas de conversão
são possibilidades planejadas. Nenhuma está implementada ou deve ser descrita
como dependência atual.

## Regras de dependência

- Rotas e layouts podem compor componentes e dados; dados não devem importar
  componentes de apresentação.
- Componentes compartilhados não devem importar conteúdo específico de uma marca.
- Integrações externas devem ficar atrás de limites claros e só serão
  introduzidas quando a tarefa correspondente for iniciada.
- Evitar dependências circulares e manter aliases relativos ao `@/*` existente.

## Convenções

Arquivos e diretórios usam kebab-case; componentes, tipos e interfaces usam
PascalCase; variáveis e funções usam camelCase. Commits usam inglês e
Conventional Commits. Tarefas usam o formato `PF-###`.
