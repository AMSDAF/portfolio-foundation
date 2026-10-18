# Backlog

## EPIC-01 — Fundação do Projeto

| ID | Tarefa | Status |
| --- | --- | --- |
| PF-001 | Inicialização do repositório | Concluída |
| PF-002 | Configuração das ferramentas | Concluída |
| PF-003 | Estrutura arquitetural | Concluída |
| PF-004 | Configuração e contratos tipados | Pendente |
| PF-005 | Base visual e estilos globais | Pendente |
| PF-006 | Fundação de SEO | Pendente |
| PF-007 | Testes e validações | Pendente |
| PF-008 | Documentação do projeto | Pendente — consolidação parcial nesta etapa |
| PF-009 | Auditoria de encerramento | Pendente |

### PF-001 — Inicialização do repositório

Critérios: Git inicializado; Next.js, TypeScript, Tailwind e App Router
configurados; aplicação e build funcionais; README inicial criado.

Evidência disponível: scaffold em `frontend/`, `package.json`,
`package-lock.json`, `next.config.ts`, `tsconfig.json`, `src/app/` e README.
A execução local dos comandos não faz parte desta consolidação documental;
PF-001 não deve ser considerada validada além das evidências registradas.

### PF-002 — Configuração das ferramentas

Auditar ESLint; configurar Prettier sem conflitos; verificar TypeScript strict;
validar scripts `dev`, `build`, `start`, `lint`, `typecheck`, `format` e
`format:check`; garantir funcionamento dentro de `frontend/`.

Status: concluída. ESLint 9 com configuração flat baseada em
`eslint-config-next/core-web-vitals` e `eslint-config-prettier` foi configurado
em `frontend/eslint.config.mjs`. Prettier foi configurado em
`frontend/.prettierrc.json`, com artefatos gerados excluídos em
`frontend/.prettierignore`.

Scripts validados dentro de `frontend/`: `dev`, `build`, `start`, `lint`,
`typecheck`, `format` e `format:check`. O build de produção foi concluído; os
servidores de produção e desenvolvimento responderam HTTP 200 em smoke tests
locais.

### PF-003 — Estrutura arquitetural

Definir responsabilidades de diretórios; organizar componentes, features,
config, lib e types conforme necessidade; configurar aliases; evitar
dependências circulares; não acoplar a identidade da Emilly ao núcleo.

Status: concluída. As responsabilidades de `app`, `components`, `features`,
`config`, `lib` e `types`, além das regras de dependência e reutilização, estão
registradas em [ARCHITECTURE.md](./ARCHITECTURE.md). A estrutura atual mantém
somente `src/app`, pois não há uso concreto para as demais camadas no scaffold
existente; diretórios vazios não foram criados para evitar complexidade
desnecessária.

O alias `@/*` foi verificado em `frontend/tsconfig.json` e aponta para
`frontend/src/*`. ESLint e TypeScript foram executados sem erros, fornecendo
validação de imports e tipos para a estrutura atual. Não foram identificadas
dependências circulares.

### PF-004 — Configuração e contratos tipados

Centralizar configuração do site; criar contratos tipados para conteúdo e
navegação; separar dados e apresentação; evitar plugins e temas excessivamente
complexos.

Status: pendente. Não há contratos ou configuração de conteúdo no código atual.

### PF-005 — Base visual e estilos globais

Preparar estilos globais; definir tokens neutros iniciais; não implementar
identidade de marca; preparar a base do EPIC-02.

Status: pendente. O CSS atual contém apenas a importação padrão do Tailwind.

### PF-006 — Fundação de SEO

Preparar Metadata API; implementar robots e sitemap adequadamente; evitar URLs
canônicas fictícias; documentar dependências de domínio.

Status: pendente. Há apenas metadata genérica no layout atual; robots, sitemap e
configuração de domínio ainda não existem.

### PF-007 — Testes e validações

Adicionar testes básicos, typecheck, lint, build e execução em produção local.

Status: pendente. Não há scripts de testes, lint ou typecheck dedicados.

### PF-008 — Documentação do projeto

Manter README, roadmap, backlog, arquitetura e design system atualizados, com
comandos, decisões e validações consistentes com o código.

Status: pendente. Esta tarefa cria a base documental solicitada, mas sua
conclusão depende de revisão posterior.

### PF-009 — Auditoria de encerramento

Revisar critérios anteriores, confirmar ausência de bloqueios estruturais,
verificar complexidade desnecessária, registrar validações e pendências e
confirmar prontidão para o EPIC-02.

Status: pendente.

## Demais EPICs

EPIC-02 a EPIC-06 estão registrados em nível de escopo no
[ROADMAP.md](./ROADMAP.md). Suas tarefas definitivas ainda não foram detalhadas
e não devem ser inventadas neste momento.
