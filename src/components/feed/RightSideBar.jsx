import './feedComponents.css';

const RightSideBar = () => {
  return (
    <div>
      <p className='SideBartitle'>
        Tus páginas y perfiles
      </p>
      <p className='SideBartitle'>
        Solicitudes de amistad
      </p>
      <p className='SideBartitle'>
        Contactos
      </p>
      <ul className="sideBarLists">
        <li>
          Felixia
        </li>
        <li>
          Cecilia
        </li>
        <li>
          Mario
        </li>
        <li>
          Simone
        </li>
      </ul>
    </div>
  )
}

export default RightSideBar
