# Gustavo Cristofolini | Software Developer

Portfólio profissional desenvolvido com Vue 3 e Vite, com foco em projetos, ferramentas e experiência em desenvolvimento de software. O site é estático, responsivo e não depende de backend ou banco de dados.

## Tecnologias

- Vue 3 e JavaScript
- Vite
- CSS3
- Lucide Vue Next
- GitHub Pages com `gh-pages`

## Instalação

Requisitos: Node.js LTS e npm.

```sh
npm install
npm run dev
```

O Vite informa no terminal o endereço local para abrir no navegador.

## Desenvolvimento

```sh
npm run dev
```

## Build de produção

```sh
npm run build
npm run preview
```

Os arquivos estáticos de produção são gerados em `dist/`.

## Deploy no GitHub Pages

1. Crie um repositório no GitHub e configure o remote `origin` neste projeto.
2. Execute `npm run deploy`. O comando gera o build e publica o conteúdo de `dist/` na branch `gh-pages`.
3. No GitHub, abra **Settings > Pages** e selecione a branch `gh-pages` e a pasta `/(root)` como origem.
4. Aguarde a publicação indicada pelo GitHub Pages.

O Vite usa caminhos relativos (`base: './'`), então o build funciona tanto na raiz do domínio quanto em um caminho de projeto, sem precisar editar o nome do repositório.

## Alterar dados pessoais

Edite [`src/data/profile.js`](src/data/profile.js) para atualizar nome, cargo, localização, username do GitHub, URL do LinkedIn e email. Os links de LinkedIn e email começam vazios; preencha somente com seus endereços reais. O GitHub é montado automaticamente a partir de `githubUsername` quando o placeholder é substituído.

As categorias e tecnologias ficam em [`src/data/skills.js`](src/data/skills.js). Os itens de experiência ficam em [`src/data/experience.js`](src/data/experience.js), sem empresas ou datas presumidas.

## Adicionar ou atualizar projetos

Edite [`src/data/projects.js`](src/data/projects.js) e adicione um objeto ao array `projects`, seguindo os campos existentes:

- `id`: identificador estável
- `name`, `category` e `description`: conteúdo do card
- `featured`: `true` para dar destaque ao projeto
- `technologies` e `features`: tecnologias e funcionalidades conhecidas
- `github` e `demo`: URLs reais; mantenha vazias enquanto não existirem
- `visual`: variação visual (`elrond`, `resume`, `workshop` ou `pokedex`)

O card mostra um estado explícito enquanto os links ou detalhes não forem preenchidos.

## Estrutura

```text
src/
  assets/       estilos globais
  components/   navbar, terminal, cards e ações compartilhadas
  composables/  observers de seção e animações de entrada
  data/         perfil, skills, projetos, experiência e fluxo
  sections/     seções do portfólio
public/         favicon
```
