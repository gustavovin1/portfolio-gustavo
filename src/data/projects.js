import pokedexPreview from '../assets/pokedex-preview.png'

export const projects = [
  {
    id: 'conselho-de-elrond-api',
    name: 'Conselho de Elrond API',
    category: 'API REST · Projeto em destaque',
    featured: true,
    description: 'API REST em Laravel para gerenciar expedições entre reinos, com autenticação e decisões controladas por perfil.',
    technologies: ['PHP', 'Laravel', 'Sanctum', 'MySQL', 'REST API', 'PHPUnit'],
    features: [
      'Autenticação com Laravel Sanctum e perfis REINO e CONSELHO',
      'Permissões, middleware personalizado e validação de requisições',
      'Protocolos UUID e histórico de decisões',
      'Tratamento de erros, testes automatizados e processamento preparado para filas',
    ],
    github: '',
    demo: '',
    visual: 'elrond',
  },
  {
    id: 'pokedex-laravel-vue',
    name: 'Pokédex Laravel + Vue',
    category: 'Full stack',
    featured: false,
    description: 'Pokédex full stack com API Laravel e interface Vue para explorar Pokémon usando os dados da PokéAPI.',
    technologies: ['PHP', 'Laravel', 'Vue.js', 'Vite', 'PokéAPI'],
    features: [
      'Busca por nome, filtro por tipo e catálogo paginado',
      'Detalhes com sprites, habilidades, medidas e atributos base',
      'API REST Laravel com integração à PokéAPI',
    ],
    github: 'https://github.com/gustavovin1/pokedex',
    demo: 'https://gustavovin1.github.io/pokedex/',
    image: pokedexPreview,
    visual: 'pokedex',
  },
]
