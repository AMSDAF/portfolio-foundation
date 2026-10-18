# Arquitetura

## Escopo

O Portfolio Foundation é uma única aplicação Next.js inicialmente. Seu objetivo
é fornecer uma base reutilizável para portfólios profissionais, começando pela
Emilly Araújo Fotografia e podendo receber uma segunda implementação para um
desenvolvedor de software. Não é um SaaS, CMS genérico ou construtor visual.

## Estrutura atual

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

O código da aplicação permanece em `frontend/`; essa fronteira não deve ser
reorganizada. A estrutura atual é suficiente para PF-001 e PF-002. Não existem
diretórios de componentes, features, config, lib ou types porque o scaffold
atual ainda não possui responsabilidades que justifiquem essas camadas.

## Responsabilidades dos diretórios

Quando forem necessários, os diretórios terão responsabilidades distintas:

- `src/app/`: rotas, layouts e arquivos reconhecidos pelo App Router.
- `src/components/`: componentes de interface compartilháveis e sem conteúdo
  específico de uma marca.
- `src/features/`: fluxos ou áreas de negócio que combinam apresentação,
  comportamento e dados da própria feature.
- `src/config/`: configuração estática da aplicação e integrações, sem lógica
  de apresentação.
- `src/lib/`: utilitários e serviços independentes de componentes React.
- `src/types/`: contratos TypeScript compartilhados quando não pertencerem a
  uma feature específica.

Esses diretórios não devem ser criados apenas como scaffolding vazio. Uma
feature pode manter seus tipos, dados e utilitários próximos dela quando isso
reduzir acoplamento; mover algo para uma camada compartilhada exige uso
concreto em mais de um ponto.

## Tecnologias atuais

- Next.js 16.4.1, App Router e Turbopack.
- React e React DOM 19.3.0.
- TypeScript 5.9.3, com `strict: true`.
- Tailwind CSS 4.3.3 e `@tailwindcss/turbopack`.
- npm.

As versões e configurações instaladas estão em
`frontend/package.json`, `frontend/package-lock.json`, `frontend/tsconfig.json`
e `frontend/next.config.ts`.

O alias `@/*` já está configurado em `frontend/tsconfig.json` para apontar para
`frontend/src/*`. Ele deve ser usado para imports entre áreas da aplicação
quando melhorar a clareza, sem substituir a separação de responsabilidades.

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

- `app` pode compor `features`, `components`, `config`, `lib` e `types`.
- `features` pode usar componentes compartilhados, configuração, lib e tipos,
  mas não deve ser importada por uma feature irmã.
- `components` não deve importar conteúdo específico de uma marca ou feature.
- `config`, `lib` e `types` não devem importar componentes de apresentação.
- Dados não devem importar componentes de apresentação.
- Integrações externas devem ficar atrás de limites claros e só serão
  introduzidas quando a tarefa correspondente for iniciada.
- Evitar dependências circulares e manter aliases relativos ao `@/*` existente.

O fluxo preferencial é direcionado para dentro: `app` compõe as camadas
inferiores, enquanto as camadas inferiores não importam rotas nem a identidade
de uma implementação. Dependências entre áreas devem ser introduzidas somente
quando houver uma relação funcional explícita.

## Convenções

Arquivos e diretórios usam kebab-case; componentes, tipos e interfaces usam
PascalCase; variáveis e funções usam camelCase. Commits usam inglês e
Conventional Commits. Tarefas usam o formato `PF-###`.
