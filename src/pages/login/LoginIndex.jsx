import { useState } from 'react';
import pp from '../../media/images/profilePicture.jpg';
import { AiFillCloseCircle, AiFillPlusCircle, AiFillQuestionCircle } from 'react-icons/ai';
import Footer from '../../components/footer/Footer';
import './loginIndex.css';
import { Link } from 'wouter';

const NewAccount = ({ windowRegistration }) => {
  return (
    <div className='newAccContainer'>
      <div className='newAccWrapper'>
        <div className='newAccHeaders'>
          <span
            onClick={() => windowRegistration(false)}
            className='newAccXMark'
          >
            X
          </span>
          <h3>
            Registrarte
          </h3>
          <p>
            Es rápido y fácil.
          </p>
        </div>
        <form className='newAccForm'>
          <div className='newAccNames'>
            <input type="text" className='newAccInputsNames' id="name" name="name" placeholder='Nombre' />
            <input type="text" className='newAccInputsNames' id="lastname" name="lastname" placeholder='Apellido' />
          </div>
          <input type="email" className='newAccInputs' id="emailRegistration" name="email" placeholder='Número de celular o correo electrónico' />
          <input type="password" className='newAccInputs' id="passwordRegistration" name="password" placeholder='Contraseña nueva' />
          <span className='newAccOptions' >
            Fecha de nacimiento
            <AiFillQuestionCircle />
          </span>
          <div className='newAccBirthday'>
            <select className='newAccFormSelection' id="day" name='birthdayDay' title='Día'>
              <option value='1'>1</option>
            </select>
            <select className='newAccFormSelection' id="month" name='birthdayMonth' title='Mes'>
              <option value='1'>ago</option>
            </select>
            <select className='newAccFormSelection' id="year" name='birthdayYear' title='Año'>
              <option value='1'>2022</option>
            </select>
          </div>
          <span className='newAccOptions' >
            Sexo
          </span>
          <div className='newAccSexo'>
            <span className='newAccSexoOptions' >
              <label>
                Mujer
              </label>
              <input type='radio' name='sexo' value='1' />
            </span>
            <span className='newAccSexoOptions' >
              <label>
                Hombre
              </label>
              <input type='radio' name='sexo' value='2' />
            </span>
            <span className='newAccSexoOptions' >
              <label>
                Personalizado
              </label>
              <input type='radio' name='sexo' value='3' />
            </span>
          </div>
          <p className='newAccLittleLetter'>
            Es posible que las personas que usan nuestro servicio hayan subido tu información de contacto a Facebook. <span className='falseLinkAzul'>Obtén más información.</span>
            <br /><br />
            Al hacer clic en "Registrarte", aceptas nuestras <span className='falseLinkAzul'>Condiciones</span>, la <span className='falseLinkAzul'>Política de privacidad</span> y la <span className='falseLinkAzul'>Política de cookies</span>. Es posible que te enviemos notificaciones por SMS, que puedes desactivar cuando quieras.
          </p>
          <button className='loginFormBtnSession2'>
            Registrarte
          </button>
        </form>
      </div>
    </div>
  )
};

const RecentLogins = ({ manageLogins }) => {
  return (
    <div className='loginRecientes'>
      <h1>
        facebook clone
      </h1>
      <h2>
        Inicios de sesión recientes
      </h2>
      <p>
        Haz clic en tu foto o agrega una cuenta.
      </p>
      <div className='loginRecientesCardsContainers'>
        <div className='loginRecientesCard'>
          <span className='loginNotif'>
            72
          </span>
          <AiFillCloseCircle
            onClick={() => manageLogins(false)}
            className='loginX' />
          <img src={pp} className='loginPicture' alt='Profile' />
          <p className='loginUsername'>
            Kevin
          </p>
        </div>

        <div className='loginRecientesCard'>
          {/* <img src={pp} className='loginPicture' alt='Profile' /> */}
          <AiFillPlusCircle className='loginPlus' />
          <p className='loginUsername azul'>
            Agregar cuenta
          </p>
        </div>
      </div>
    </div>
  )
};

const LoginIndex = () => {

  const [recientes, setRecientes] = useState(true);
  const [registration, setRegistration] = useState(false);

  return (
    <>
      <div className="loginContenedor">
        {
          recientes
            ?
            <RecentLogins manageLogins={setRecientes} />
            :
            <div className="loginText">
              <h1>
                facebook clone
              </h1>
              <p>
                Facebook te ayuda a comunicarte y compartir con las personas que forman parte de tu vida.
              </p>
            </div>
        }
        <div className='loginRight'>
          {
            registration &&
            <NewAccount windowRegistration={setRegistration} />
          }
          <div className="loginFormContainer">
            <form className='loginForm'>
              <input type="text" id="username" name="username" placeholder='Correo electrónico o número de teléfono' />
              <input type="password" id="password" name="password" placeholder='Contraseña' />
              <Link to='feed'>
                <button className='loginFormBtnSession'>
                  Iniciar sesión
                </button>
              </Link>
              <a href='#' >
                ¿Olvidaste tu contraseña?
              </a >
            </form>
            <button
              onClick={() => setRegistration(true)}
              className='loginFormBtnSession2'>
              Crear cuenta nueva
            </button>

          </div>
          <p>
            <a href='#'>
              Crea una página
            </a>
            para una celebridad, una marca o un negocio.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
};

export default LoginIndex;
