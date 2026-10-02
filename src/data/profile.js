export const profile = {
  name: 'Gustavo Vinicius Cristofolini',
  shortName: 'Gustavo Cristofolini',
  title: 'Software Developer',
  location: 'Curitiba - PR, Brasil',
  githubUsername: 'gustavovin1',
  links: {
    linkedin: 'https://www.linkedin.com/in/gustavo-vinicius-cristofolini-34772221a',
    email: 'gustavinicristo@gmail.com',
  },
  nav: [
    { label: 'Sobre', id: 'sobre' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projetos', id: 'projetos' },
    { label: 'Experiência', id: 'experiencia' },
    { label: 'Contato', id: 'contato' },
  ],
}

export const isConfiguredLink = (value) => Boolean(value && value.trim())
export const githubUrl = () => {
  const username = profile.githubUsername.trim()
  if (!/^[a-z\d](?:[a-z\d-]{0,37}[a-z\d])?$/i.test(username) || username === 'SEU_USUARIO_GITHUB') return ''
  return `https://github.com/${username}`
}
