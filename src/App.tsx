import './App.css'
import { MobileBackgroundImage } from './components/background-images/Mobile-Background-Image'
import { CardsSection } from './components/Cards/Cards-Section'
import { FormsSection } from './components/form/Forms-Section'

function App() {

  return (
    <>
      <MobileBackgroundImage />
      <div className='px-[16px]'>
        <CardsSection />
      </div>
      <FormsSection />
    </>
  )
}

export default App
