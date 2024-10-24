import { useState } from 'react'
import './App.css'
import { MobileBackgroundImage } from './components/background-images/Mobile-Background-Image'
import { CardsSection } from './components/Cards/Cards-Section'
import { FormsSection } from './components/form/Forms-Section'
import { ThankYouSection } from './components/thank-you-component/ThankYouSection'
import { RootState, store } from './redux/store/store'
import { useDispatch, useSelector } from 'react-redux'
import { setIsSubmited } from './redux/features/isSubmited/isSubmited'

function App() {

  // default value is false !!!
  const issubmited = useSelector((state:RootState) => state.isSubmited.isSubmited)
  const dispatch = useDispatch()
  console.log(issubmited);
  

  return (
    <>
      <MobileBackgroundImage />
      <div className='px-[16px]' onClick={() => dispatch(setIsSubmited())}>
        <CardsSection />
      </div>
      {!issubmited && (
        <FormsSection />
      )}
      {issubmited && (
        <ThankYouSection />
      )}
    </>
  )
}

export default App
