import { useState, useEffect } from 'react'
import './App.css'
import MainContainer from './components/organisms/MainContainer'
import BottomImage from './components/atoms/BottomImage'
import Footer from './components/molecules/Footer'
import MainHeader from './components/molecules/MainHeader'
import { getRandomImage } from './utils/imageLoader'
import * as localModuleImports from './utils/moduleImports'

function App() {

  console.log(localModuleImports.protectionPrayerIcons[0].url)

  // "/src/assets/images/colorUnderlayImages/protectionIcons/ProtectFromMagicIcon.webp"

  // "/src/assets/images/colorUnderlayImages/protectionIcons/ProtectFromMagicIcon.webp"

  // styling object set to default of whip and yellow blue gradient
  const [underlayStyles, setUnderlayStyles] = useState({
    backgroundImage: `url(${localModuleImports.underlayImages[0].url}), linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5))`,
    backgroundSize: '50px 50px, auto',
    backgroundRepeat: 'space, no-repeat',
  });

  // state to track unerlay prayer icon
  const [prayer, swapPrayer] = useState(0);

  // setState function for prayer
  const changePrayer = () => {
    swapPrayer(prevPrayer => prevPrayer === 0 ? 1 : 0)
  };

  const changeUnderlayBackground = (colorScheme) => {
    setUnderlayStyles((prevUnderlayStyles) => {
      const newStyles = {
        ...prevUnderlayStyles,
        backgroundImage: `${colorScheme.url != undefined
          ? `url(${colorScheme.url}), linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5))`
          : `${colorScheme.underlayingImage}, ${colorScheme.linearGradient}`
          }`,
        backgroundWallpaper: `${colorScheme.backgroundWallpaper != undefined
          ? `${colorScheme.backgroundWallpaper}`
          : 'empty'
          }`
      }
      return newStyles
    });
  };

  // useEffect to change backgroundWallpaper on first render
  useEffect(() => {
    const landingWallpaper = '../' + `${getRandomImage(localModuleImports.backgroundImages).url.slice(1)}`

    document.body.style.backgroundImage = `url('${landingWallpaper}')`
  }, []);

  // useEffect to change body backgroundImage whenever underlayStyles state changes
  useEffect(() => {
    if (underlayStyles.backgroundWallpaper != undefined) {
      document.body.style.backgroundImage = `url(${underlayStyles.backgroundWallpaper})`
    }
  }, [underlayStyles])

  return (
    <div className='app-div'>
      <div className='app-top-container'>
        <MainHeader />
        <MainContainer
          underlayStyles={underlayStyles}
        />
        <BottomImage />
      </div>
      <Footer
        prayer={prayer}
        changePrayer={changePrayer}
        changeUnderlayBackground={changeUnderlayBackground}
      />
    </div>
  )
};

export default App
