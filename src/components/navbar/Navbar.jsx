import './navbar.css';
import profilePicture from '../../media/images/profilePicture.jpg';
import PopUpWindow from './PopUpWindow';
import { AiFillHome } from 'react-icons/ai';
import { BsFillCollectionPlayFill } from 'react-icons/bs';
import { FaBell, FaFacebookMessenger, FaStoreAlt } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';
import { SiFacebookgaming } from 'react-icons/si';
import { CgMenuGridR } from 'react-icons/cg'
import { useState } from 'react';

function NavSection({ linkName, iconLists, navLinks, tooltip, settings }) {
  return (
    <div className="navSection">
      {iconLists ?
        <ul className={settings ? 'navLinks' : 'navLinksCenter'}>
          {navLinks.map((link, index) => (
            <li key={index} className={settings ? 'accIcons' : 'feedIcons'}>
              {link}
              <span className='tooltip'>
                {tooltip[index]}
              </span>
            </li>
          ))}
        </ul>
        :
        <>
          <span className="logo">
            <h1 className="logoF">
              {linkName}
            </h1>
          </span>
          <input type='text' className='logoBuscar' placeholder='Buscar en facebook clone' />
        </>
      }
    </div>
  );
};

const Navbar = () => {

  const navLinksAccountIcons = [
    <CgMenuGridR />,
    <FaFacebookMessenger onClick={() => openMessenger(!messenger) || openNotification(false)} />,
    <FaBell onClick={() => openNotification(!notification) || openMessenger(false)} className='notificationBell' />,
    <img src={profilePicture} className='ppNavbar' alt='account' />
  ];

  const [notification, openNotification] = useState(false)
  const [messenger, openMessenger] = useState(false)


  return (
    <header>
      <nav>
        <NavSection linkName='f' iconLists={false} />
        <NavSection iconLists={true} navLinks={navLinksFeedIcons} tooltip={navLinksFeed} />
        <NavSection iconLists={true} navLinks={navLinksAccountIcons} tooltip={navLinksAccount} settings={true} />
        {notification &&
          <PopUpWindow widht='small' windowType='notification' />
        }
        {messenger &&
          <PopUpWindow widht='small' windowType='messenger' />
        }
      </nav>
    </header>
  );
};

const navLinksFeedIcons = [
  <AiFillHome />,
  <BsFillCollectionPlayFill />,
  <FaStoreAlt />,
  <MdGroups />,
  <SiFacebookgaming />
];
const navLinksFeed = [
  'Inicio',
  'Watch',
  'Marketplace',
  'Grupos',
  'Videojuegos'
];
const navLinksAccount = [
  'Menu',
  'Messenger',
  'Notificaciones',
  'Cuenta'
];
export default Navbar;
