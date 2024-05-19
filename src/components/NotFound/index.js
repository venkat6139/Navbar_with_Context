import Navbar from '../Navbar'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bg = isDarkTheme ? 'dark-bg' : 'light-bg'
      return (
        <>
          <Navbar />
          <div className={`not-found-container ${bg}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found"
            />
            {isDarkTheme ? (
              <>
                <p className="dark">Lost Your way?</p>
                <p className="dark">
                  We cannot seems to find the page you are looking for.
                </p>
              </>
            ) : (
              <>
                <h1 className="light">Lost Your Way</h1>
                <p className="light">We cannot seem to find the page</p>
              </>
            )}
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound