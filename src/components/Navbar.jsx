import './Navbar.css'
import porsheLogoWords from  './porscheLogoWords.png'

export default function Navbar() {
  return (
    /* <nav className='navbar navbar-expand-sm navbar-dark'>
      <div className='container'>
        <a className='navbar-brand' href='#'>Porsche</a>
        <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarCollapse'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Home</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>About</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Apps</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Portfolio</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav> */
    <nav>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
        <span>Menu</span>
      </div>
      <img className='logo' src={porsheLogoWords} alt='Logo' />
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
      </svg>
    </nav>
  )
}
