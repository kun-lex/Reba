import chevron from './icons/chevron.svg';
import './App.css';
import { Link } from "react-router-dom";
import NewLogo from './images/Reba logo.png'

export default function NavbarOne(){
  function toggleMenu() {
    document.body.classList.toggle("open");
  };
    return(
      <div className='flex-col'>
        <nav className="navbar">
          <Link to='/'>
          <div className="nav-title ml-[10px] object-contain"><img  src={NewLogo} alt="logo" /></div>
          </Link>
            
          <div className="dropdowns">
            <div className="dropdown">
              <a className='flex items-center text-[#081E40] cursor-pointer mr-[10px] ' >
              Auto Services
              <img src={chevron}  alt="chevron"/>
              </a>
              <div className="dropdown-menu">
                <div>
                  <button>Auto Repair</button>
                  <button>Auto Detailing</button>
                  <button>Car Wash</button>
                  <button>Towing</button>
                </div>
                <div>
                  <button>Oil Change</button>
                  <button>Car Dealer</button>
                  <button>Parking</button>
                  <button>Body Shop</button>
                </div>
              </div>
            </div>
            <div className="dropdown">
              <a className='flex text-[#081E40] cursor-pointer mr-[10px] '>
                Home Services
                <img src={chevron}  alt="chevron" />
              </a>
              <div className="dropdown-menu">
                <div>
                  <button>Contractors</button>
                  <button>Electricians</button>
                  <button>Home Cleaners</button>
                  <button>Plumbers</button>
                </div>
                <div>
                  <button>Movers</button>
                  <button>Painters & <br/> Decorators</button>
                  <button>LockSmiths</button>
                  <button>HVAC</button>
                </div>
              </div>
            </div>
            <div className="dropdown">
              <a className='flex text-[#081E40] cursor-pointer mr-[10px] '>
                Reba For Business
                <img src={chevron}  alt="chevron" />
              </a>
              <div class="dropdown-menu">
                <div>
                  <button>Add a Business</button>
                  <button>Claim your business</button>
                  <button>Log in to Business Account</button>
                </div>
              </div>
            </div>
          </div>
          <Link to="/login">
            <a className='flex text-[#081E40] cursor-pointer '
              style={{
                width : '50px',
                height: '30px',
                color:'#081E40',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >Log In</a>
          </Link>
          <Link>
            <a className='flex items-center cursor-pointer mr-[10px] '
              style={{
                width : '70px',
                height: '30px',
                border:'1px solid #fff',
                background:'#1D5EBF',
                color:'white',
                borderRadius:'19.5px',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >Sign Up</a>
          </Link>
          <button onClick={toggleMenu} className="burger"> </button>
        </nav>
      </div>
    )
}
