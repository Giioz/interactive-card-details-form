import { useDispatch } from "react-redux"
import { Button } from "../Button/Button"
import { Succsess } from "./succsess-logo/Succsess"
import { SuccsessTexts } from "./succsess-texts/SuccsessTexts"
import { setIsSubmited } from "../../redux/features/isSubmited/isSubmited"

export const ThankYouSection = () => {
  const dispatch = useDispatch()
  const onclick = () => {
    dispatch(setIsSubmited())
    
  }
  
  return (
    <div className="w-[327px] flex flex-col items-center m-auto mt-[91px] lg:w-[381px] lg:m-0" >
        <Succsess/>
        <SuccsessTexts />
        <Button content="Continue" onclick={onclick}/>
    </div>
  )
}
