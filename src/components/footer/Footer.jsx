import './footer.css';
import { languages, footerLinks, footerLinksShort } from '../../assets/footerData';

const Footer = ({ type }) => {
  return (
    <>
      {type === 'long'
        ?
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
        :
        <ul className="leftSideBarInfoFooter">
          {footerLinksShort.map(accesos => (
            <li className='leftSideBarItemFooter' key={accesos}>
              {accesos} ·
            </li>
          ))}
        </ul>
      }
    </>
  );
};

export default Footer
