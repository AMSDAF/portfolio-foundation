# Portfolio Foundation

Base web reutilizável para portfólios profissionais. A primeira implementação será
o portfólio da Emilly Araújo Fotografia; posteriormente, a fundação poderá ser
adaptada para um portfólio de desenvolvedor.

Esta etapa (PF-001) contém somente a infraestrutura inicial e a página padrão
mínima do Next.js. Identidade visual, Design System, componentes de portfólio,
funcionalidades comerciais e integrações ficam para etapas futuras.

## Stack

- Next.js 16 com App Router e Turbopack.
- React 19.
- TypeScript 5 com verificação estrita.
- Tailwind CSS 4 com configuração padrão do `create-next-app`.
- npm como gerenciador de pacotes e código em `src/`.

As versões instaladas são registradas no `package-lock.json`.

## Requisitos

- Node.js 20.9.0 ou superior (preferencialmente uma versão LTS suportada).
- npm disponível no ambiente.

Não são necessárias variáveis de ambiente ou serviços externos nesta etapa.

## Instalação e desenvolvimento

No diretório raiz do projeto, instale as dependências:

```bash
npm ci
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000). As alterações em
`src/app/page.tsx` são refletidas automaticamente durante o desenvolvimento.
Para encerrar o servidor, pressione `Ctrl+C`.

## Produção

Gere o build de produção:

```bash
npm run build
```

Após o build, inicie o servidor de produção:

```bash
npm start
```

## Estrutura inicial

```text
src/app/
  globals.css  # Importação padrão do Tailwind CSS
  layout.tsx   # Layout raiz e metadados genéricos
  page.tsx     # Página inicial mínima
next.config.ts # Configuração do Next.js e integração Tailwind/Turbopack
tsconfig.json  # Configuração do TypeScript e alias @/* para src/*
```

O Tailwind CSS 4 utiliza `@import "tailwindcss"` no CSS global e o carregador
`@tailwindcss/turbopack` configurado pelo gerador oficial. Não há tema personalizado
ou necessidade de um arquivo `tailwind.config` nesta configuração padrão.

Referências: [instalação do Next.js](https://nextjs.org/docs/app/getting-started/installation)
e [Tailwind CSS](https://tailwindcss.com/docs).
