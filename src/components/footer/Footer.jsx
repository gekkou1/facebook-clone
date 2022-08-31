import './footer.css';

const Footer = () => {

  const languages = [
    'Español',
    'English(US)',
    'Português(Brasil)',
    'Français(France)',
    'Deutsch',
    'Italiano',
    'العربية',
    '한국어',
    'हिन्दी',
    '中文(简体)',
    '日本語'
  ]

  const footerLinks = [
    'Registrarte',
    'Iniciar sesión',
    'Messenger',
    'Facebook',
    'LiteWatch',
    'Lugares',
    'Juegos',
    'Marketplace',
    'Facebook Pay',
    'Oculus',
    'Portal',
    'Instagram',
    'Bulletin',
    'Local',
    'Recaudaciones de fondos',
    'Servicios',
    'Centro de información de votación',
    'Grupos',
    'Información',
    'Crear anuncio',
    'Crear página',
    'Desarrolladores',
    'Empleo',
    'Privacidad',
    'Cookies',
    'Opciones de anuncios',
    'Condiciones',
    'Ayuda',
    'Subir contactos y no usuarios'
  ]

  return (
    <div className="footerContainer">
      <div className="footerLinks">
        <ul>
          {languages.map((language) => (
            <li key={language}>
              {language}
            </li>
          ))}
          <button>
            +
          </button>
        </ul>
      </div>
      <div className="footerLinks">
        <ul>
          {footerLinks.map((link) => (
            <li key={link}>
              {link}
            </li>
          ))}
        </ul>
      </div>
      <a href='https://kevinrizo.com/' rel='noreferrer' target='_blank'>
        <span>
          Kevin Rizo © 2022
        </span>
      </a>
    </div>
  )
}

export default Footer
