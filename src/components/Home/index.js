import Navbar from '../Navbar'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bg = isDarkTheme ? 'dark-bg' : 'light-bg'
      return (
        <>
          <Navbar />
          <div className={`home-container ${bg} `}>
            {isDarkTheme ? (
              <>
                <img
                  className="home-img"
                  alt="home"
                  src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                />
                <h1 className="dark">Home</h1>
              </>
            ) : (
              <>
                <img
                  className="home-img"
                  alt="home"
                  src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                />
                <h1 className="light">Home</h1>
              </>
            )}
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home