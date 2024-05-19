import {Link} from 'react-router-dom'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const NavBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const bgNav = isDarkTheme ? 'nav-dark-bg' : 'nav-light-bg'
      const onClickTheme = () => {
        toggleTheme()
      }

      return (
        <div className={`navbar-container ${bgNav}`}>
          {isDarkTheme ? (
            <>
              <div className="logo-container">
                <img
                  className="website-logo"
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                  alt="website logo"
                />
              </div>
              <nav className="navbar">
                <ul className="nav-list-items">
                  <li>
                    <Link className="dark" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="dark" to="/about">
                      About
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="button-container">
                <button
                  onClick={onClickTheme}
                  type="button"
                  data-testid="theme"
                  className="button"
                >
                  <img
                    className="toggle-img"
                    alt="theme"
                    src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  />
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="logo-container">
                <img
                  className="website-logo"
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                  alt="website logo"
                />
              </div>
              <nav className="navbar">
                <ul className="nav-list-items">
                  <li>
                    <Link className="light" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="light" to="/about">
                      About
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="button-container">
                <button
                  onClick={onClickTheme}
                  type="button"
                  data-testid="theme"
                  className="button"
                >
                  <img
                    className="toggle-img"
                    alt="theme"
                    src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  />
                </button>
              </div>
            </>
          )}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default NavBar