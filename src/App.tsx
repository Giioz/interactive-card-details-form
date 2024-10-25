import { useEffect, useState } from 'react'
import './App.css'
import { MobileBackgroundImage } from './components/background-images/Mobile-Background-Image'
import { CardsSection } from './components/Cards/Cards-Section'
import { FormsSection } from './components/form/Forms-Section'
import { ThankYouSection } from './components/thank-you-component/ThankYouSection'
import { RootState } from './redux/store/store'
import { useSelector } from 'react-redux'
import { DesktopBackgroundImage } from './components/background-images/DesktopBackgroundImage'

function App() {

  // default value is false !!!
  const issubmited = useSelector((state:RootState) => state.isSubmited.isSubmited)
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    
    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const desktopWidth = windowSize.width >= 1024
  const mobileWidth = windowSize.width <= 1024

  return (
    <>
      {desktopWidth && (
        <DesktopBackgroundImage />
      )}
      {mobileWidth && (
        <MobileBackgroundImage />
      )}
      <div className='lg:flex lg:items-center lg:h-[100vh] lg:justify-evenly lg:ml-[43px]'>
          <div className='px-[16px]'>
            <CardsSection />
          </div>
          {!issubmited && (
            <FormsSection />
          )}
          {issubmited && (
            <ThankYouSection />
          )}
      </div>
    </>
  )
}

export default App
