import './feedComponents.css';
import { personalInfoData, accesosDirectos } from '../../assets/feedData';
import { IoIosArrowDropup } from 'react-icons/io'
import Footer from '../footer/Footer';
import { useState } from 'react';

const IconsInfo = ({ numero, personalInfo }) => {
  // let iconsToShow = 6;
  // let icons = personalInfoData.slice(0, numero);
  return (
    <>
      {personalInfo
        ?
        personalInfoData.slice(0, numero).map((accesos, index) => (
          <li className='leftSideBarItem' key={index}>
            <img src={accesos.icon} alt={accesos.name} className='leftSideBarIcons' />
            {accesos.name}
          </li>
        ))
        :
        accesosDirectos.slice(0, numero).map((accesos, index) => (
          <li className='leftSideBarItem' key={index}>
            <img src={accesos.icon} alt={accesos.name} className='leftSideBarIcons' />
            {accesos.name}
          </li>
        ))
      }
    </>
  )
}

const LeftSideBar = () => {

  const [numero, setNumero] = useState(6)

  const moreIcons = () => {
    if (numero === 6) {
      setNumero(-1)
    } else {
      setNumero(6)
    }

  }
  return (
    <div className='leftSideBarContainer'>
      <ul className="sideBarLists">
        <IconsInfo numero={numero} personalInfo={true} />
        <li className='leftSideBarItem' onClick={moreIcons}>
          <IoIosArrowDropup className='postBottomItemSVG' />
          Ver más
        </li>
      </ul>
      <p className='SideBartitle' >
        Tus accesos directos
      </p>
      <ul className="sideBarLists">
        <IconsInfo numero={numero} personalInfo={false} />
        {/*
        <li className='leftSideBarItem' onClick={moreIcons}>
          <IoIosArrowDropup className='postBottomItemSVG' />
          Ver más
        </li>
*/}
      </ul>
      <Footer />
    </div>
  )
}

export default LeftSideBar
