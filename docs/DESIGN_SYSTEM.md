# Design System

## Estratégia

O design system será construído em duas etapas:

1. Um template neutro, inicialmente em tons de cinza, para validar composição,
   navegação, responsividade e componentes.
2. A identidade visual específica de cada implementação, sem acoplar a
   fundação a uma marca.

A identidade da Emilly Araújo Fotografia deve preservar sua marca original e
ser definida a partir dos materiais originais antes de transformar referências
em tokens definitivos.

## Direção visual aprovada

Para a implementação da Emilly, as referências incluem creme e marfim, rosé e
terracota, marrom, verde suave e tipografia serifada editorial. Essas referências
descrevem uma direção delicada e acolhedora; não são tokens finais e não devem
ser codificadas no template neutro.

## Tokens

Ainda não existem tokens de cor, tipografia, espaçamento, borda ou sombra
customizados no código. O CSS atual importa apenas o Tailwind CSS 4. A definição
de tokens deve acontecer antes da personalização de telas e ser validada contra
os materiais originais da marca.

Os tokens futuros devem:

- ter nomes sem referência indevida a uma marca quando forem compartilhados;
- possuir semântica clara para uso em componentes;
- manter contraste e estados interativos acessíveis;
- evitar duplicação de valores e decisões espalhadas pelas telas.

## Componentes planejados

O EPIC-02 poderá incluir Header, Footer, Hero, seções, galerias, cards, CTAs,
navegação e padrões responsivos. No estado atual nenhum desses componentes foi
criado. A extração deve ser orientada por uso real, não por antecipação.

## Conteúdo e composição

Conteúdo deve permanecer separado da apresentação quando a estrutura de páginas
for criada. A fundação pode compartilhar layout e comportamento, mas cada
implementação pode compor suas páginas e sua hierarquia de conteúdo de maneira
própria.

## Limites

- Não implementar identidade visual da Emilly no template neutro.
- Não criar um tema genérico complexo para resolver necessidades ainda
  hipotéticas.
- Não tratar tokens de referência como decisões finais.
- Não introduzir editor visual ou sistema de plugins.
- Validar comportamento responsivo e acessibilidade junto com cada componente.
