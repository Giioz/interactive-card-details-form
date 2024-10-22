import './App.css'
import { MobileBackgroundImage } from './components/background-images/Mobile-Background-Image'
import { CardsSection } from './components/Cards/Cards-Section'
import { FormsSection } from './components/form/Forms-Section'
import { store } from './redux/store/store'
import { Provider } from 'react-redux'

function App() {

  return (
    <>
      <MobileBackgroundImage />
      <Provider store={store}>
          <div className='px-[16px]'>
            <CardsSection />
          </div>
          <FormsSection />
      </Provider>
    </>
  )
}

export default App
