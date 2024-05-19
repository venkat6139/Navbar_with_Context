import Navbar from '../Navbar'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bg = isDarkTheme ? 'dark-bg' : 'light-bg'
      return (
        <>
          <Navbar />
          <div className={`about-container ${bg}`}>
            {isDarkTheme ? (
              <>
                <img
                  className="about-img"
                  alt="about"
                  src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                />
                <h1 className="dark">About</h1>
              </>
            ) : (
              <>
                <img
                  className="about-img"
                  alt="about"
                  src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                />
                <h1 className="light">About</h1>
              </>
            )}
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About