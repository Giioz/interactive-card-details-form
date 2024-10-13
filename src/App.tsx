import './App.css'
import { MobileBackgroundImage } from './components/background-images/Mobile-Background-Image'
import { CardsSection } from './components/card-section/Cards-Section'

function App() {

  return (
    <>
      <MobileBackgroundImage />
      <div className='px-[16px]'>
        <CardsSection />
      </div>
    </>
  )
}

export default App
